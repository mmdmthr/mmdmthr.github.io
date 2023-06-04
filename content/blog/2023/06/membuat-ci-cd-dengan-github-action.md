---
title: Panduan Membuat CI/CD dengan GitHub Action
date: 2023-06-23
category: 'notes'
---

*Continuous Integration* (CI) dan *Continuous Deployment* (CD) adalah praktik penting dalam pengembangan perangkat lunak modern. CI/CD memungkinkan tim pengembang untuk secara otomatis menguji (*test*), membangun (*build*), dan mendeploy perangkat lunak mereka dengan cepat dan efisien. 

Salah satu alat yang populer untuk mengimplementasikan CI/CD adalah GitHub Action. Dalam artikel ini, kita akan membahas langkah-langkah untuk membuat CI/CD dengan GitHub Action, sehingga Anda dapat meningkatkan kecepatan dan kualitas pengembangan perangkat lunak Anda.

### Persiapan Repositori GitHub

Langkah pertama adalah mempersiapkan repositori GitHub yang akan digunakan untuk proyek Anda. Pastikan repositori sudah dibuat dan perangkat lunak yang ingin Anda bangun dan deploy sudah diunggah ke repositori tersebut.

### Membuat File Konfigurasi CI/CD

Selanjutnya, buat file konfigurasi CI/CD di repositori Anda. File ini akan memberi tahu GitHub Action tentang langkah-langkah yang harus dijalankan saat CI/CD berlangsung. File konfigurasi umumnya dikenal sebagai `.github/workflows/main.yml`. Anda dapat menggunakan teks editor favorit Anda untuk membuat file ini.

### Menentukan Event Trigger

Di dalam file konfigurasi, tentukan trigger event yang akan memicu CI/CD. Misalnya, Anda dapat mengatur CI/CD untuk dijalankan setiap kali ada commit baru ke branch tertentu, tag baru dibuat, atau pull request dibuka. Gunakan sintaks `on` untuk menentukan event trigger yang sesuai dengan kebutuhan Anda.

### Menentukan Jobs

Setiap workflow CI/CD terdiri dari satu atau beberapa job. Job adalah unit kerja yang terdiri dari beberapa langkah. Anda dapat menentukan satu atau lebih job di dalam file konfigurasi. Misalnya, Anda dapat memiliki job untuk menguji kode, membangun aplikasi, dan mendeploy ke lingkungan produksi.

### Menentukan Steps

Di dalam setiap job, Anda perlu menentukan langkah-langkah (steps) yang harus dijalankan. Steps adalah langkah-langkah yang harus dilakukan oleh GitHub Action. Misalnya, Anda dapat menggunakan steps untuk menginstal dependensi, menjalankan skrip pengujian, atau membuat paket yang siap untuk dideploy.

### Menentukan Actions

Dalam langkah-langkah Anda, Anda dapat menggunakan aksi (actions) yang telah tersedia di [Marketplace GitHub](https://github.com/marketplace?type=actions) atau Anda dapat membuat aksi kustom Anda sendiri. Aksi adalah unit yang dapat digunakan untuk melakukan tugas tertentu dalam CI/CD Anda. 

Misalnya, ada aksi untuk menguji kode menggunakan framework tertentu, membangun aplikasi menggunakan alat tertentu, atau mendeploy ke layanan cloud tertentu.

### Mengaktifkan CI/CD

Setelah Anda menentukan semua langkah-langkah yang diperlukan, simpan file konfigurasi dan unggah ke repositori GitHub Anda. GitHub Action secara otomatis akan mendeteksi dan mulai menjalankan CI/CD sesuai dengan konfigurasi yang telah Anda tentukan. Anda dapat melihat status CI/CD di tab "Actions" di repositori GitHub Anda.

### Memantau dan Mengelola CI/CD

Setelah CI/CD diaktifkan, Anda dapat memantau dan mengelola proses CI/CD. GitHub Action akan memberikan laporan tentang langkah-langkah yang berhasil atau gagal. Jika ada kegagalan, Anda dapat melihat log untuk menemukan penyebabnya dan memperbaikinya.

### Mengoptimalkan CI/CD

CI/CD adalah proses yang dapat terus ditingkatkan. Anda dapat mengoptimalkan CI/CD Anda dengan mengubah langkah-langkah, menambahkan skrip tambahan, atau menggunakan aksi yang lebih efisien. Selain itu, Anda dapat mengkonfigurasi notifikasi untuk menerima pemberitahuan tentang keberhasilan atau kegagalan CI/CD.

## Kesimpulan

Membangun CI/CD dengan GitHub Action adalah langkah penting dalam mempercepat dan mengotomatisasi pengembangan perangkat lunak Anda. Dengan mengikuti langkah-langkah di atas, Anda dapat membuat konfigurasi CI/CD yang sesuai dengan kebutuhan proyek Anda. Jika Anda terus mengoptimalkan dan mengelola CI/CD Anda, Anda akan dapat menghasilkan perangkat lunak berkualitas tinggi dengan kecepatan yang lebih tinggi.