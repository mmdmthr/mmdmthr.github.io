---
title: 'Lesson Learned di Awal Karir'
pubDate: 2024-07-20
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Di awal perjalanan karir saya sebagai seorang developer, ada beberapa pelajaran berharga yang saya peroleh. Pelajaran-pelajaran ini tidak hanya meningkatkan kualitas kerja saya secara teknis, tetapi juga membantu saya bekerja lebih efektif dalam tim. Berikut adalah beberapa pelajaran penting yang ingin saya bagikan:

#### 1. Sanitasi Input

Pengalaman pahit saya adalah ketika menerima email yang menginformasikan tentang celah XSS attack di salah satu form aplikasi yang saya buat. Celah tersebut terjadi karena input yang tidak disanitasi dengan baik. Dari kejadian ini, saya belajar bahwa sangat penting untuk selalu melakukan sanitasi input. 

Sebagai langkah pencegahan, pastikan framework yang kita gunakan sudah menerapkan sanitasi HTML secara otomatis. Jika tidak, kita harus menerapkannya sendiri. Sanitasi input mencegah serangan seperti XSS dan menjaga keamanan aplikasi kita.

#### 2. Pelajari Kode Sebelum Menambahkan atau Memperbaiki Sesuatu

Saat kita hendak menambahkan fitur baru atau memperbaiki bug, sangat penting untuk mempelajari kode yang ada terlebih dahulu. Jika tidak ada dokumentasi yang lengkap, kita perlu meluangkan waktu untuk memahami kode, konvensi yang digunakan, desain pattern, atau alur kerja yang ada. 

Memahami kode yang ada membantu kita tetap konsisten dengan desain awal dan mempermudah proses maintenance di masa mendatang. Jika kita langsung melakukan perubahan tanpa memahami konteksnya, kita berisiko merusak struktur kode dan membuatnya sulit dikelola.

#### 3. Testing dengan Edge Case

Tidak cukup hanya mengetes skenario positif saat melakukan pengujian. Kita harus melakukan testing dengan berbagai edge case untuk memastikan aplikasi kita tangguh dan bebas dari bug. Menguji dengan edge case membantu kita menemukan dan memperbaiki potensi masalah yang mungkin tidak terlihat dalam skenario pengujian biasa. 

Saya sarankan untuk melihat klasifikasi unit test di artikel ini: [Unit Test Klasifikasi](/2023/03/unit-test-klasifikasi/). Artikel ini menjelaskan pentingnya menguji berbagai jenis kasus untuk memastikan aplikasi kita berkinerja optimal.

#### 4. Komunikasi dengan Tim Produk

Sebagai developer, kita bekerja sebagai bagian dari sebuah entitas bisnis yang lebih besar. Untuk membangun produk yang baik, kita harus selaras dengan tujuan perusahaan. Jangan membuat perubahan atau penambahan fitur tanpa dasar yang jelas. Kita perlu mendapatkan insight dari tim bisnis dan produk. 

Tugas kita sebagai developer adalah memberikan masukan teknis untuk meningkatkan value produk atau mengurangi biaya. Komunikasi yang baik dengan tim produk membantu kita memahami kebutuhan bisnis dan memastikan bahwa pekerjaan kita memberikan kontribusi positif.

#### 5. Transparansi dan Komunikasi Itu Penting

Kita tidak hanya menulis kode; kita sedang membangun sesuatu bersama-sama dengan tim. Transparansi dan komunikasi yang baik adalah kunci untuk mencapai tujuan bersama. Bagikan kemajuan, tantangan, dan kendala yang kita hadapi dengan tim. Ini membantu menciptakan lingkungan kerja yang kolaboratif dan suportif.

Transparansi membuat anggota tim bisa saling memberikan dukungan yang diperlukan. Jika ada yang sedang bertemu kesulitan, kita akan mendapatkan bantuan dengan segera.