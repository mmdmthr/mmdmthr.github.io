---
title: 'Hal-hal yang Aku Harap Ketahui Sejak di Bangku Kuliah'
pubDate: 2026-03-08
description: ''
tags: 'notes'
---

Jika aku bisa kembali ke masa kuliah dan berbicara dengan versi diriku yang baru belajar programming, aku mungkin tidak akan menyarankan belajar framework tertentu, bahasa baru, atau algoritma yang rumit.

Aku hanya akan mengatakan satu hal:

**menjadi software engineer bukan hanya tentang membuat kode bisa dijalankan.**

Sebagian besar pendidikan formal — termasuk pengalaman belajar mandiri di awal — menanamkan mindset bahwa tugas programmer selesai ketika aplikasi berhasil dijalankan.

Di dunia nyata, itu justru baru titik awal.

Ada beberapa hal yang aku harap sudah aku pahami sejak dulu.

---

## 1. Software Engineering Bukan Sekadar “Code That Works”

Kode yang berjalan belum tentu:

* aman,
* mudah dipahami,
* mudah diubah,
* atau mampu bertahan lama.

Di industri, software akan dipakai bertahun-tahun. Orang lain akan membaca kode kita. Bahkan sering kali **kita sendiri yang harus kembali membaca kode lama** beberapa bulan kemudian.

Tujuan sebenarnya adalah:

> menulis kode yang bisa terus berkembang tanpa menjadi beban di masa depan.

---

## 2. Secure Coding Itu Bukan Topik Opsional

Di bangku kuliah, security hampir tidak pernah menjadi fokus utama. Padahal di industri, ini fundamental.

Banyak kerentanan klasik muncul karena hal sederhana:

* input tidak divalidasi,
* autentikasi lemah,
* authorization salah,
* data sensitif bocor tanpa sadar.

Memahami prinsip **OWASP Top 10** seharusnya menjadi dasar sejak awal:

* SQL Injection
* XSS
* Broken authentication
* Security misconfiguration

Security bukan tugas tim khusus. Setiap developer menulis keputusan keamanan melalui kode mereka.

---

## 3. Menulis Kode yang Maintainable

Masalah terbesar software bukan bug — tetapi kompleksitas.

Kode yang buruk jarang langsung gagal. Namun ia perlahan menjadi sulit diubah sampai akhirnya semua orang takut menyentuhnya dan membuat kesalahan saat berusaha mengubahnya.

Beberapa prinsip yang baru benar-benar terasa penting setelah bekerja:

* Clean code lebih membantu daripada clever code
* SOLID principles membantu mengontrol kompleksitas
* Konsistensi lebih berharga daripada kepintaran individual

Software yang baik adalah software yang **mudah diubah**.

---

## 4. Refactoring Adalah Pekerjaan Utama Developer

Dulu aku berpikir refactoring berarti memperbaiki kode jelek.

Sekarang aku melihatnya berbeda.

Kode pertama yang kita tulis hampir selalu belum optimal. Kita juga akan sering bertemu legacy code yang ditulis orang lain dengan konteks berbeda.

Refactoring memberi kita kesempatan untuk:

* memperjelas struktur,
* mengurangi kompleksitas,
* meningkatkan kecepatan development berikutnya.

Tidak ada sistem besar yang langsung sempurna. Semua sistem sehat karena terus dirapikan.

---

## 5. Testing: Cara Memastikan Kode Benar

Di kampus, “kode benar” biasanya berarti program menghasilkan output yang diharapkan ketika dijalankan secara manual.

Masalahnya: testing manual memperlambat feedback loop.

Jika setiap perubahan membutuhkan waktu lama untuk diverifikasi, developer akan takut melakukan perubahan.

Automated testing mengubah permainan:

* unit test memberi feedback cepat,
* feature test memastikan behaviour tetap benar,
* regression bisa dicegah sebelum masuk production.

Tujuan testing bukan mencapai 100% coverage.

Tujuannya adalah **memberi keberanian untuk membuat perubahan**.

---

## 6. Scalability dan Reliability

Software jarang gagal karena syntax error. Ia gagal ketika:

* user bertambah,
* traffic naik,
* integrasi makin banyak,
* dependency berubah.

Sejak awal, developer perlu memahami:

* separation of concern,
* asynchronous processing,
* monitoring dan observability,
* desain sistem yang tahan perubahan.

Menulis kode untuk satu user itu mudah. Menulis sistem yang stabil untuk ribuan user adalah skill berbeda.

---

## 7. Problem Solving Lebih Penting daripada Coding

Sebagian besar waktu engineer senior tidak dihabiskan untuk mengetik kode.

Mereka:

* memecah masalah besar menjadi tugas kecil,
* menentukan prioritas,
* memilih trade-off terbaik.

Di industri, **waktu adalah mata uang utama**.

Tidak semua masalah harus diselesaikan. Yang penting adalah menyelesaikan masalah yang paling berdampak.

Kemampuan berpikir sistematis jauh lebih menentukan dibanding kecepatan mengetik.

---

## 8. Komunikasi dan Kerja Tim

Developer jarang bekerja sendirian.

Seiring bertambahnya pengalaman, peran developer berubah:

* berdiskusi dengan Product Owner,
* ikut planning,
* menjelaskan keputusan teknis,
* berkomunikasi dengan stakeholder non-teknis.

Skill komunikasi menjadi sama pentingnya dengan skill coding.

Engineer yang hebat bukan hanya memahami sistem, tetapi mampu membuat orang lain memahami sistem tersebut.

---

## 9. Menjadi Engineer Adalah Proses Jangka Panjang

Hal yang paling mengejutkan setelah masuk industri adalah ini:

Tidak ada titik di mana seseorang “sudah selesai belajar”.

Teknologi berubah. Organisasi berubah. Masalah berubah.

Yang benar-benar berkembang bukan orang yang paling pintar, tetapi orang yang terus memperbaiki cara bekerjanya sedikit demi sedikit.

---

## Buku yang Sangat Membantu Cara Berpikirku

Beberapa buku yang aku harap aku baca lebih awal:

**The Effective Engineer — Edmond Lau**
Buku praktis tentang bagaimana memberikan dampak nyata sebagai engineer, bukan sekadar sibuk bekerja.

**Apprenticeship Patterns — Dave Hoover & Adewale Oshineye**
Membahas bagaimana membangun karier software engineer secara sadar melalui pola belajar jangka panjang.

(Banyak buku teknis mengajarkan *how to code*. Dua buku ini lebih banyak mengajarkan *how to grow*.)

---

## Penutup

Jika ada satu pelajaran utama yang aku pelajari setelah beberapa tahun bekerja, mungkin ini:

Software engineering bukan tentang kecerdasan individu, tetapi tentang kebiasaan profesional.

Belajar menulis kode itu penting.
Belajar membangun software yang bisa bertahan lama jauh lebih penting.

Dan banyak dari hal-hal itu aku harap kuketahui sejak di bangku kuliah.
