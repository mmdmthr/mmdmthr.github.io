---
title: Panduan Membuat CI/CD dengan GitHub Action
pubDate: 2023-06-23
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

*Continuous Integration* (CI) dan *Continuous Deployment* (CD) adalah praktik penting dalam pengembangan perangkat lunak modern. CI/CD memungkinkan tim pengembang untuk secara otomatis menguji (*test*), membangun (*build*), dan mendeploy perangkat lunak mereka dengan cepat dan efisien. 

Salah satu alat yang populer untuk mengimplementasikan CI/CD adalah GitHub Action. Dalam artikel ini, kita akan membahas langkah-langkah untuk membuat CI/CD dengan GitHub Action, sehingga dapat meningkatkan kecepatan dan kualitas pengembangan perangkat lunak Kita.

### Persiapan Repositori GitHub

Langkah pertama adalah mempersiapkan repositori GitHub yang akan digunakan untuk proyek Kita. Pastikan repositori sudah dibuat dan perangkat lunak yang ingin Kita bangun dan deploy sudah diunggah ke repositori tersebut.

### Membuat File Konfigurasi CI/CD

Selanjutnya, buat file konfigurasi CI/CD di repositori Kita. File ini akan memberi tahu GitHub Action tentang alur kerja atau langkah-langkah yang harus dijalankan saat CI/CD berlangsung. File konfigurasi umumnya dikenal sebagai `.github/workflows/main.yml`. Kita dapat menggunakan teks editor favorit Kita untuk membuat file ini.

### Menentukan Event Trigger

Di dalam file konfigurasi, tentukan *trigger event* yang akan memicu CI/CD. Misalnya, Kita dapat mengatur CI/CD untuk dijalankan setiap kali ada commit baru ke branch tertentu, ada tag baru yang dibuat, atau ada pull request dibuka. Gunakan sintaks `on` untuk menentukan event trigger yang sesuai dengan kebutuhan Kita.

### Menentukan Jobs

Setiap workflow CI/CD terdiri dari satu atau beberapa job. Job adalah unit kerja yang terdiri dari beberapa langkah. Kita dapat menentukan satu atau lebih job di dalam file konfigurasi. Misalnya, Kita dapat memiliki job untuk menguji kode, membangun aplikasi, dan mendeploy ke lingkungan produksi.

### Menentukan Steps

Di dalam setiap job, Kita perlu menentukan langkah-langkah (steps) yang harus dijalankan. Steps adalah langkah-langkah yang harus dilakukan oleh GitHub Action. Misalnya, Kita dapat menggunakan steps untuk menginstal dependensi, menjalankan skrip pengujian, atau membuat paket yang siap untuk dideploy.

### Menentukan Actions

Dalam langkah-langkah Kita, Kita dapat menggunakan aksi (actions) yang telah tersedia di [Marketplace GitHub](https://github.com/marketplace?type=actions) atau Kita dapat membuat aksi kustom Kita sendiri. Aksi adalah unit yang dapat digunakan untuk melakukan tugas tertentu dalam CI/CD Kita. 

Misalnya, ada aksi untuk menguji kode menggunakan framework tertentu, membangun aplikasi menggunakan alat tertentu, atau mendeploy ke layanan cloud tertentu.

### Mengaktifkan CI/CD

Setelah Kita menentukan semua langkah-langkah yang diperlukan, simpan file konfigurasi dan unggah ke repositori GitHub Kita. GitHub Action secara otomatis akan mendeteksi dan mulai menjalankan CI/CD sesuai dengan konfigurasi yang telah Kita tentukan. Kita dapat melihat status CI/CD di tab "Actions" di repositori GitHub Kita.

### Memantau dan Mengelola CI/CD

Setelah CI/CD diaktifkan, Kita dapat memantau dan mengelola proses CI/CD. GitHub Action akan memberikan laporan tentang langkah-langkah yang berhasil atau gagal. Jika ada kegagalan, Kita dapat melihat log untuk menemukan penyebabnya dan memperbaikinya.

### Mengoptimalkan CI/CD

CI/CD adalah proses yang dapat terus ditingkatkan. Kita dapat mengoptimalkan CI/CD Kita dengan mengubah langkah-langkah, menambahkan skrip tambahan, atau menggunakan aksi yang lebih efisien. Selain itu, Kita dapat mengkonfigurasi notifikasi untuk menerima pemberitahuan tentang keberhasilan atau kegagalan CI/CD.

### Contoh

Salah satu contoh CI/CD untuk melakukan auto build dan deploy website dengan Gatsby bisa dibaca pada artikel berikut [Auto Build dan Deploy Gatsby Site ke GitHub Page dengan GitHub Action](/2023/06/auto-build-deploy-gatsby-site-ke-github-page-dengan-github-action/)