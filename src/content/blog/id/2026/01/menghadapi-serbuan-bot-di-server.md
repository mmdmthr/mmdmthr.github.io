---
title: 'Menghadapi Serbuan Bot di Server — Peristiwa Tak Terduga Saat Mendaki'
pubDate: 2026-01-31
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Beberapa pelajaran teknis justru datang bukan dari ruang kerja, tapi dari kondisi paling tidak ideal.

Hari itu aku sedang hiking. Jauh dari laptop, sinyal terbatas, kepala lagi fokus ke jalur dan napas. Tiba-tiba masuk pesan dari klien:
ada transaksi kartu kredit sekitar $0.2 (Rp3.000) per jam. Angkanya kecil, tapi jelas tidak normal.

Bukan soal nominalnya, tapi polanya.
Kalau ada biaya yang muncul **konsisten per jam**, itu hampir pasti ada sesuatu yang salah.

### Alarm datang bukan dari monitoring

Yang menarik, aku tahu kejadian ini bukan dari sistem monitoring, tapi dari klien.
Instance Tencent Cloud ini dibuat menggunakan akun milik klien, jadi:
* semua notifikasi (peringatan kuota, traffic, penarikan dana)
* dikirim ke email klien

Masalahnya:
* klien menerima email-email itu
* tapi tidak memahami artinya
* dianggap email teknis biasa

Sementara itu:
* aku hanya pakai akun CAM (sub-user)
* email belum ditautkan
* aku tidak menerima notifikasi apa pun

Kebetulan pula:
* web ini **baru sekitar 2 minggu online**
* selama ini aku belum pernah mengalami web baru langsung dihajar bot sebesar ini
* dashboard monitoring pun belum rutin kupantau

Ironisnya, justru pesan dari klien itulah yang jadi alarm pertama.

### Tengah malam, baru mulai investigasi

Sampai rumah tengah malam, aku langsung cek server.

Hal pertama yang terlihat jelas:
**traffic keluar (traffic out) melonjak tajam.**

Begitu buka log Apache, polanya langsung kelihatan.
Di **dev site** — yang seharusnya sepi — ada **ratusan ribu request** ke satu path:

`/bid`

Masalahnya sederhana tapi krusial:
**aplikasi kami tidak punya endpoint `/bid`.**

Di titik ini sudah jelas:
ini bukan bug aplikasi.

### Ini bot, bukan manusia

Setelah dicek lebih dalam:
* Request datang terus-menerus
* Targetnya konsisten: `/bid/openbid`
* IP berasal dari **Akamai** dan **Linode**
* Tidak peduli response server (404, 403, tetap dihajar)

Ini pola khas:
bot iklan, OpenRTB scanner, atau crawler bidding system.

Mereka menembak endpoint umum secara acak.Selama server masih merespons, mereka tidak berhenti. Dan kesalahan awalku cukup klasik: **dev site dibiarkan publik.**

### Langkah pertama: hentikan pendarahan

Prioritas awal bukan “rapi”, tapi **cepat dan hemat resource**.
Langkah pertama:
* blok semua request ke `/bid` langsung di Apache
Dengan `Require all denied`, Apache:
* langsung balas **403**
* request **tidak masuk ke aplikasi**
* PHP dan framework tidak ikut bekerja

Hasilnya langsung terasa:
* traffic turun sekitar **70%**
* biaya turun dari ±3.000 → **±1.000 rupiah per jam**
Belum ideal, tapi cukup untuk menghentikan kebocoran besar.

### Langkah lanjutan: sudah positif bot

Karena sudah jelas ini bot:
* IP berulang
* provider infra (bukan user)
* pola agresif dan tidak wajar

Aku lanjutkan dengan langkah yang lebih tegas:
* blok IP langsung di firewall
* tambahkan rate limit
* IP diblok sementara (±1 minggu)

Efeknya instan.
Traffic anjlok drastis.
Tidak ada lagi lonjakan aneh, tidak ada lagi kuota terkuras diam-diam.

### Pelajaran yang paling berharga

Dari kejadian ini, ada beberapa prinsip yang sekarang jadi pegangan:

* **Dev site tidak boleh publik**, titik.
* Web baru **bukan berarti aman** — justru sering jadi target random scan.
* Bot tidak peduli aplikasimu apa atau endpoint itu ada atau tidak.
* Server yang “baik hati” (404 terus) malah jadi korban.
* Blocking di level web server atau firewall **jauh lebih efisien** daripada di aplikasi.
* Monitoring dan notifikasi **tidak boleh bergantung ke satu email non-teknis**.
* Akun sub-user tanpa notifikasi = blind spot.

Dan satu pelajaran non-teknis:
kadang alarm paling awal bukan datang dari sistem canggih,
tapi dari **tagihan kecil yang terasa tidak masuk akal**.

---

### Penutup

Ini pengalaman pertamaku menghadapi serangan bot dengan pola seperti ini.
Bukan yang paling dramatis, tapi sangat membuka mata. 
Bukan soal seberapa canggih sistemnya,
tapi soal **eksposur yang tidak disadari**.
Dan ironisnya, semua ini dimulai…
saat aku sedang di gunung.
