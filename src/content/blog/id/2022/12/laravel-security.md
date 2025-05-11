---
title: Laravel Security
pubDate: 2022-12-26
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'laravel'
---

Beberapa hal yang bisa kita lakukan untuk meningkatkan
keamanan website dengan Laravel

### Fitur Login/Otentikasi
- Terapkan role user dan akses dengan benar
- Terapkan penggunaan password yang kuat
- Tampilkan pesan error secara umum, tidak perlu detil
- Terapkan rate limiter

### Response Header
- Set `X-Frame-Options` dengan nilai `DENY`

  `X-Frame-Options` dapat digunakan untuk menunjukkan apakah browser boleh atau tidak merender halaman dalam `<frame>`, `<iframe>`, `<embed>` atau `<object>`. 
  Ini dapat digunakan untuk menghindari serangan pembajakan klik, dengan memastikan bahwa sebuah konten tidak disematkan ke situs lain. Dengan mengeset nilainya dengan `DENY`, halaman dalam frame yang dimuat dari situs lain akan gagal.
- Set CORS allow origins dengan benar sesuai kebutuhan

### Error Handling & Logging
- Hindari memberikan rincian terlalu detil pada pesan error. Informasi yang terlalu banyak dapat dimanfaatkan oleh penyerang.
- Batasi informasi yang di-log, penyerang dapat mengincar file log
- Data yang bisa di-log: id, nama fungsi, nama class
- Data yang jangan di-log: informasi seperti email, nomor telepon, token

### Front End
- Jangan ada log di console production
- Batasi input dari user, karena ini dapat jadi celah penyerang memasukkan data
- Hindari menggunakan *hidden field* untuk data yang sifatnya sensitif, ini dapat dilihat dari *page source*
- Berhati-hati dalam menggunakan `localStorage` atau `sessionStorage` karena data tersimpan di sisi client
- Jaga dependensi paket tetap update, pastikan juga library/paket yang dipakai tidak disusupi script penyerang
- Set `Referrer-Policy` dengan nilai `no-referrer`