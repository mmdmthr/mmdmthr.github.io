---
title: 'Install Rubygems Error: This file is owned by your OS, not by rubygems upstream'
pubDate: 2023-07-01
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Saya mencoba menginstall Jekyll untuk membuat blog static di GitHub pages. Karena itu saya membutuhkan Rubygems, package manager untuk bahasa pemrograman Ruby yang digunakan untuk pengembangan aplikasi web. Ketika memulai langkah instalasi, saya menghadapi beberapa masalah. Berikut kronologinya dan langkah-langkah untuk memperbaiki masalah ini.

1. Pertama-tama, saya mencoba menginstall Jekyll menggunakan perintah `gem install jekyll`. Namun, saya mendapatkan pesan error yang mengindikasikan bahwa Ruby saya perlu diperbarui (*update*).

2. Untuk mengatasi masalah ini, saya mencoba menginstall atau memperbarui Rubygems dengan menjalankan perintah `gem update --system`. Sayangnya, saya mendapatkan pesan error ini: "*This file is owned by your OS, not by rubygems upstream*". Pesan ini mengindikasikan bahwa file tersebut dimiliki oleh sistem operasi (OS) saya, bukan oleh Rubygems.

3. Setelah melakukan beberapa penelitian, saya mengetahui bahwa masalah ini terjadi karena beberapa komponen Ruby telah terinstall dengan menggunakan package manager seperti Synaptic Package Manager atau `apt-get`.

    
    Dalam kasus tersebut maka hal pertama yang harus saya lakukan adalah menghapus instalasi Ruby terlebih dahulu. Perintah `apt-get` tampaknya tidak berhasil menghapus sesuai ekspektasi, lalu saya menghapus semua instalasi Ruby menggunakan Synaptic Package Manager. 
    - Cari dengan kata kunci "ruby"
    - Centang item dan pilih "*completely remove installation*"

4. Setelah menghapus semua instalasi Ruby yang ada, langkah selanjutnya adalah menginstall Ruby secara langsung menggunakan metode kompilasi dan pembangunan (*compile & build*) dari *source code*-nya. Kita dapat mengunduh source code Ruby dari situs resmi Ruby di https://www.ruby-lang.org. Pilih sesuai dengan sistem operasi yang kita gunakan. Saya menggunakan Ubuntu jadi saya memilih tar.gz

5. Setelah kita mengunduh source code Ruby, ekstrak file arsip tersebut ke direktori yang diinginkan. Kemudian, buka terminal dan arahkan ke direktori yang berisi file kode sumber Ruby yang diekstrak. 

6. Di terminal, jalankan perintah berikut untuk mengonfigurasi proses kompilasi dan instalasi Ruby:
```
./configure
make
sudo make install
```
Perintah `./configure` akan melakukan konfigurasi sesuai dengan sistem operasi kita. Setelah proses konfigurasi selesai, jalankan perintah `make` untuk mengompilasi kode sumber Ruby. Terakhir, jalankan perintah `sudo make install` untuk menginstal Ruby ke sistem kita.

7. Setelah instalasi selesai, coba jalankan perintah `ruby -v` di terminal untuk memastikan bahwa Ruby telah terinstal dengan sukses dan versi yang tepat.

8. Sekarang, kita dapat mencoba menginstall atau memperbarui Rubygems dengan menjalankan perintah `gem update --system`. Kali ini, kita seharusnya tidak lagi mendapatkan pesan kesalahan "*This file is owned by your OS, not by rubygems upstream*".

Setelah mengikuti langkah-langkah di atas, saya berhasil mengatasi masalah yang muncul saat menginstall Rubygems. Sekarang saya dapat melanjutkan proses instalasi Jekyll dan menggunakan Rubygems untuk membuat static web dengan lancar.