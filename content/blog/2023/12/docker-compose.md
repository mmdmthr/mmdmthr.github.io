---
title: 'Apa itu Docker Compose?'
date: 2023-12-10
category: 'notes'
---

Docker Compose adalah alat untuk mendefinisikan dan menjalankan aplikasi Docker multi-kontainer (beberapa container yang saling terkait). Dengan Compose, kita menggunakan file YAML untuk mengonfigurasi service-service yang dibutuhkan aplikasi kita. Kemudian, dengan satu perintah, kita membuat dan memulai semua service yang dibutuhkan tersebut dari konfigurasi kita.

Satu contoh ketika kita memiliki aplikasi dashboard yang dibangun dengan framework Laravel, maka kita membutuhkan service php, mysql, npm, nginx untuk bisa menjalankannya. Docker compose dapat mengonfigurasikan semua container yang berisi service tersebut dan menjalankannya dengan satu perintah.

Compose dapat berjalan di semua lingkungan; production, staging, development, testing, serta work flow CI. Compose juga dilengkapi dengan perintah untuk mengelola seluruh siklus hidup aplikasi kita:

- Memulai, menghentikan, dan membangun kembali service-service (_up, down, build_)
- Lihat status service yang berjalan
- Streaming output log dari service yang berjalan
- Jalankan perintah satu kali pada suatu service

Fitur utama Compose yang menjadikannya efektif adalah:

- Memiliki beberapa lingkungan terisolasi pada satu host
- Menyimpan volume data saat kontainer dibuat (database tidak terhapus saat layanan dimatikan)
- Hanya membuat ulang container yang telah berubah
- Mendukung variabel dan memindahkan komposisi antar lingkungan