---
title: 'Apa Itu .env File?'
date: 2024-02-08
category: 'notes'
---

Dalam dunia pengembangan perangkat lunak, pengelolaan konfigurasi menjadi aspek penting dalam memastikan aplikasi berjalan dengan lancar di berbagai lingkungan. Salah satu alat yang telah merevolusi cara pengembang mengelola konfigurasi adalah file .env.

### Asal Usul

Konsep penggunaan variabel lingkungan (environment - env) untuk mengelola konfigurasi sudah ada sejak lama, terutama dalam sistem operasi seperti Unix dan Linux. Namun, penggunaan variabel env secara langsung dalam kode tidak efisien dan kurang fleksibel, terutama ketika aplikasi harus di-deploy ke berbagai lingkungan (development, staging, production).

### Munculnya file .env

Kemunculan file .env menjadi solusi bagi masalah tersebut. .env memungkinkan pengembang menyimpan variabel env di luar kode sumber, dalam bentuk file teks yang mudah dibaca. Pengembang dapat menentukan konfigurasi yang spesifik untuk setiap env tanpa harus memodifikasi kode sumber.

### Penggunaan yang Populer

Penggunaan .env mulai populer bersamaan dengan munculnya framework pengembangan web seperti Ruby on Rails dan Laravel. Pengembang menggunakan .env untuk menyimpan informasi sensitif seperti API key atau kredensial database, yang tidak seharusnya disimpan dalam kode sumber. Penggunaan .env juga memungkinkan pengembang untuk dengan mudah berbagi konfigurasi dengan anggota tim lainnya.

### Keuntungan

Penggunaan file .env membawa beberapa keuntungan, antara lain:
- **Pemisahan Konfigurasi**: .env memungkinkan pemisahan konfigurasi dari kode sumber, memudahkan pengelolaan konfigurasi di berbagai lingkungan.
- **Keamanan**: Informasi sensitif dapat disimpan secara aman di dalam .env, mengurangi risiko kebocoran informasi.
- **Fleksibilitas**: Penggunaan .env memungkinkan pengembang untuk dengan mudah menyesuaikan konfigurasi untuk berbagai lingkungan tanpa harus mengubah kode sumber.

### Kekurangan

Selain itu, ada beberapa kekurangan:
- **Penyimpanan Rumit**: Ini adalah keterbatasan dari file. Kita tidak bisa menyimpan file di repo karena semua orang bisa melihatnya. Menyimpannya di root VM juga memiliki keterbatasan akses. Bagaimana dengan Docker container? Apakah kita memasukkan informasi rahasia langsung ke dalam image? Jika image tersebut bocor, semua orang akan punya akses ke informasi rahasia kita
- **Keterbatasan Akses**: Apa yang terjadi jika kita perlu memperbarui password database? Ketika seseorang membuka file .env dia dapat melihat semua informasi rahasia di dalam file tersebut. Setiap kali suatu konfigurasi harus diperbarui, siapa pun yang memperbaruinya dapat melihat SEMUA informasi rahasia.
- **Pembuatan Versi**: Katakanlah kita sedang menerapkan fitur baru yang memerlukan pembaruan konfigurasi/variabel rahasia, terjadi kesalahan dan pembaruan dibatalkan. Apakah ada yang ingat informasi terakhir yang kita miliki di .env? Kita tidak memiliki riwayat perubahan sebuah file .env yang tidak disimpan di dalam repo.

### Penggunaan Modern

Dalam dunia pengembangan perangkat lunak modern, .env telah menjadi standar de facto dalam pengelolaan konfigurasi. Pengembang dari berbagai bahasa dan framework menggunakan .env untuk mengelola konfigurasi dengan efisien dan aman. 

Salah satu solusi yang muncul untuk mengatasi kekurangan file env adalah menggunakan server konfigurasi. Server konfigurasi adalah aplikasi eksternal untuk menyimpan konfigurasi dan rahasia. Ini dianggap sebagai pusat untuk mengelola rahasia di seluruh lingkungan.

Beberapa layanan cloud dapat berfungsi sebagai server konfigurasi seperti AWS Parameter Store, Google Secrets Manager, atau HashiCorp Vault untuk para penggemar open source. Di tempat saya bekerja sendiri sudah memindahkan konfigurasi dari env file ke layanan [Infisical](https://infisical.com/). Setelah kita menyimpan informasi rahasia atau konfigurasi, kita akan diberikan URL seperti `https://app.com/config/DB_PASSWORD/v1`.