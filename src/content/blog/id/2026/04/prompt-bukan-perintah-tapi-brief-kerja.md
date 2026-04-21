---
title: 'Prompt Bukan Perintah, Tapi Brief Kerja'
pubDate: 2026-04-03
description: ''
tags: 'notes'
---

Aku dulu berpikir gagal pakai AI karena modelnya jelek, tapi ternyata lebih sering karena prompt-nya ngasal. Kasih perintah terlalu umum, hasilnya ya umum. Minta terlalu luas, jawabannya melebar.

Setelah cukup lama trial-error dan bolak-balik revisi (kadang lebih lama nulis prompt daripada nulis kodenya sendiri), aku mulai melihat pola. Ada 5 komponen yang hampir selalu muncul di prompt yang “kerja dengan benar”.

## Cara Aku Melihat Prompt Sekarang

Dulu aku mikir prompt itu cuma “perintah”. Sekarang aku melihatnya lebih seperti *brief kerjaan*. Perintah itu fokus ke aksi, sementara brief menjelaskan tujuan, konteks, dan batasan.

Kalau aku kasih brief yang setengah matang ke manusia, hasilnya juga setengah matang. AI juga sama—bahkan lebih literal.

Masalahnya: AI tidak punya konteks implisit. Jadi semua yang menurut kita “sudah jelas”, sebenarnya belum tentu jelas.

Di situlah 5 blok ini jadi berguna.

---

## The 5 Blocks of Prompt

### 1. Goal — Apa yang sebenarnya kita mau?

Ini kelihatannya sepele, tapi sering jadi sumber masalah.

Kebanyakan orang nulis:

> Bikin fungsi untuk handle user login

Ini terlalu luas.

Lebih baik:

* Apa output akhirnya?
* Seberapa lengkap?
* Bagaimana level detail yang diharapkan?

Contoh yang lebih jelas:

> Buat function Node.js untuk login user menggunakan email & password, return JWT jika sukses

Goal itu bukan cuma “apa”, tapi juga *seberapa dalam*.

Kalau kita tidak menentukan levelnya, AI akan menebak. Dan tebakan itu sering meleset.

### 2. Context — Apa yang perlu diketahui oleh AI?

Ini bagian yang paling sering di-skip.

Padahal ini yang bikin output jadi relevan atau tidak.

Context bisa berupa:

* potongan kode
* struktur database
* error message
* framework yang dipakai
* environment (Laravel? React? plain JS?)

Contoh:

> Ini schema tabel user…  
> Ini error yang muncul…  
> Ini fungsi yang sudah ada…

Tanpa context, AI akan mengarang.

Dengan context, AI bisa *menyesuaikan*.

### 3. Constraints — Batasannya apa?

Kalau tidak ada batasan, AI akan ambil jalan paling generik.

Kadang itu tidak sesuai kebutuhan kita.

Constraints bisa berupa:

* jangan pakai library tertentu
* harus kompatibel dengan versi tertentu
* style coding tertentu
* performance requirement
* security rule

Contoh:

> Gunakan Laravel 10, jangan pakai package tambahan  
> Harus mengikuti existing service pattern  
> Validasi harus di layer controller, bukan di model  

Tanpa constraints, hasilnya “benar”, tapi bisa jadi tidak “cocok”.

### 4. Examples — Tunjukkan polanya

Ini yang paling powerful tapi jarang dipakai.

Kalau kita kasih contoh, kualitas output biasanya naik drastis.

Contoh bisa berupa:

* before / after
* sample input-output
* existing code style
* test case

AI itu jago mengenali pola. Jadi daripada menjelaskan panjang lebar, lebih efektif *menunjukkan*.

Contoh:

> Ikuti pola seperti function ini…  
> Input: X → Output: Y  
> Gunakan format response seperti ini…  

Tanpa contoh, AI menebak.
Dengan contoh, AI meniru.

### 5. Output Format — Mau dikembalikan dalam bentuk apa?

Ini sering disepelekan, tapi efeknya besar.

Kalau tidak ditentukan, AI bisa:

* terlalu verbose
* terlalu singkat
* formatnya tidak langsung bisa dipakai

Contoh format:

* “berikan hanya function body”
* “return dalam bentuk diff”
* “buat checklist step-by-step”
* “jangan jelaskan, hanya kode”

Contoh:

> Berikan jawaban dalam bentuk patch diff  
> Output hanya JSON, tanpa penjelasan  

Ini penting kalau kita mau hasilnya langsung usable.

---

## Contoh Prompt yang Lebih “Matang”

Daripada ini:

> Bantu aku bikin pagination di React

Lebih baik:

> Goal: Tambahkan pagination ke list produk di React  
> Context: Saat ini data di-fetch dari endpoint `/api/products`, response berupa array  
> Constraints: Gunakan functional component + hooks, tanpa library tambahan  
> Examples: Saat ini list dirender pakai `.map()` sederhana  
> Output: Berikan kode lengkap komponen, tanpa penjelasan  

Perbedaannya hasilnya bakal kelihatan.

Yang pertama berharap.
Yang kedua mengarahkan.

---

## Insight yang Baru Kerasa Belakangan

Ada beberapa hal yang baru terasa setelah cukup lama pakai:

**1. Prompt itu iteratif, bukan sekali jadi**  
Jarang banget langsung benar. Hampir selalu:

* generate
* lihat hasil
* refine prompt
* ulang

**2. Semakin spesifik, semakin cepat**  
Ironisnya, prompt yang lebih panjang (_well written_, bukan sekedar panjang) sering justru menghemat waktu.

**3. AI itu bukan “pintar”, tapi “patuh”**  
Kalau hasilnya aneh, biasanya karena instruksinya ambigu.

**4. Menulis prompt = berpikir lebih jelas**  
Kadang sebelum AI menjawab, aku sudah dapat jawabannya sendiri.

---

## Penutup

Kalau harus diringkas:

* Goal → arah
* Context → relevansi
* Constraints → kesesuaian
* Examples → kualitas
* Output format → usability

Tanpa ini, kita hanya berharap AI “mengerti”.  
Dengan ini, kita memastikan AI “tidak salah mengerti”.

Dan itu perbedaannya besar.
