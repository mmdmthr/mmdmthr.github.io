---
title: 'Duplikasi vs Abstraksi yang Keliru'
pubDate: 2025-09-29
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Ada satu _tech talk_ terkenal dari Sandi Metz berjudul [*All The Little Things*](https://www.youtube.com/watch?v=8bZh5LMaSmE). Salah satu kutipan yang paling sering diingat adalah:

> “Duplication is far cheaper than the wrong abstraction.”

*Duplikasi jauh lebih murah dibanding abstraksi yang salah.* Artinya, jangan buru-buru membuat abstraksi hanya karena takut ada kode yang mirip/duplikat. Abstraksi yang salah justru bisa menyulitkan di masa depan. Itu bisa bikin kode sulit dipahami dan akhirnya lebih mahal untuk dipelihara.

### Abstraksi Bukan Sesuatu yang Ditebak di Awal

Dulu saya juga berpikir harus membuat abstraksi kode sejak awal. Setelah mendengar penjelasannya, abstraksi itu bukan hal yang harus kita prediksi sejak awal menulis kode. Abstraksi adalah sesuatu yang *ditemukan* seiring waktu, setelah kita benar-benar memahami pola berulang dalam kode.

Menurut Sandi Metz, cara yang lebih sehat adalah: **Duplicate first, abstract later.**

### Biarkan Duplikasi Kecil Terjadi

* Jangan langsung panik melihat baris kode yang mirip di dua tempat.
* Biarkan ada 2–3 contoh nyata dulu sebelum berpikir abstraksi.

Abstraksi prematur biasanya menghasilkan generalisasi yang kaku, sulit dipahami, dan malah membuat tim frustasi.

### Saatnya Refactor

Kalau sudah ada 2–3 kasus serupa, barulah mulai refactor.

* Perhatikan apa yang sama, apa yang berbeda.
* Pilih strategi sesuai kebutuhan: *Template Method*, *Strategy Pattern*, atau sekadar closure/parameter injection sederhana.

Dengan cara ini, abstraksi muncul dari kebutuhan nyata, bukan dari spekulasi.

### Ingat: Abstraksi Bukan Tujuan

Abstraksi hanyalah alat bantu untuk memahami kompleksitas. Tujuan utamanya adalah memisahkan tanggung jawab, menjaga kode tetap jelas, dan memudahkan perubahan.

Kode yang baik bukan hasil desain sempurna sejak awal, tapi hasil iterasi sadar dan konsisten dari waktu ke waktu.

---

Jangan buru-buru mengejar “keindahan” kode atau mempraktikkan best practice (misalnya DRY). Terkadang, membiarkan duplikasi kecil justru lebih bijak daripada terjebak dalam abstraksi yang salah. Pada akhirnya, kualitas kode adalah hasil dari proses belajar, pengulangan, dan keberanian untuk merevisi.