---
title: Aturan FIRST dalam Clean Test
date: 2022-08-01
category: 'notes'
---

Dalam buku Clean Code, Uncle Bob menjelaskan tentang lima aturan Clean Tests 
yang membentuk akronim FIRST:

### Fast (Cepat) 

Tes harus cepat. Mereka harus dapat dijalankan dengan cepat. Saat pengujian berjalan lambat, 
Kita tidak ingin sering menjalankannya. Jika kita tidak sering menjalankannya, 
kita tidak akan menemukan masalah cukup awal untuk memperbaikinya dengan mudah. 
Kita tidak akan merasa bebas untuk membersihkan kode. Akhirnya kode
akan mulai membusuk.

### Independent (Mandiri)

Tes tidak boleh bergantung satu sama lain. Satu tes tidak boleh mengatur kondisi untuk tes berikutnya. 
Kita harus dapat menjalankan setiap pengujian secara independen dan menjalankan pengujian 
dalam urutan apa pun yang kita suka. Ketika tes bergantung satu sama lain, 
maka tes pertama yang gagal menyebabkan serangkaian kegagalan ke hilir, 
membuat diagnosis menjadi sulit dan menyembunyikan cacat hilir.

### Repeatable (Dapat diulang)

Tes harus dapat diulang di lingkungan apa pun. Kita harus dapat menjalankan pengujian di lingkungan produksi, 
di lingkungan QA, dan di laptop kita tanpa jaringan. Jika pengujian kita tidak dapat diulang di lingkungan apa pun, 
maka kita akan selalu memiliki alasan mengapa mereka gagal. Kita juga tidak dapat menjalankan pengujian 
saat lingkungan yang dibutuhkan tidak tersedia.

### Self-Validating (Memvalidasi Diri)

Tes harus memiliki output boolean. Entah mereka lulus atau gagal. Kita tidak perlu membaca file log 
untuk mengetahui apakah tes lulus. Kita tidak perlu membandingkan dua file teks yang berbeda 
secara manual untuk melihat apakah tes lulus. Jika tes tidak memvalidasi sendiri, 
maka kegagalan dapat menjadi subjektif dan menjalankan tes dapat memerlukan evaluasi manual yang panjang.

### Timely (Tepat pada Waktunya) 

Tes harus ditulis tepat pada waktunya. Unit test harus ditulis tepat sebelum menulis kode yang membuatnya lulus. 
Jika kita menulis tes setelah menulis kode, maka kita mungkin merasa kode produksi sulit untuk diuji. 
Lalu kita mungkin memutuskan bahwa beberapa kode produksi terlalu sulit untuk diuji. 
Kita mungkin tidak mendesain kode produksi untuk dapat diuji.