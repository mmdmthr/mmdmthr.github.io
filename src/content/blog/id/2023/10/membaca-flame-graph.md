---
title: 'Membaca Flame Graph'
pubDate: 2023-10-02
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

## Apa itu Flame Graph?

Sebelum kita masuk ke dalam cara membaca _flame graph_, mari kita pahami terlebih dahulu apa itu _flame graph_. _Flame graph_ adalah representasi visual dari tumpukan pemanggilan (call stack) dalam kode aplikasi. Ini adalah alat yang sangat efektif untuk mengidentifikasi fungsi atau bagian dari kode yang memakan banyak waktu atau sumber daya komputasi.

Dalam _flame graph_, setiap bar mewakili fungsi atau metode dalam kode. Panjang bar menunjukkan seberapa banyak waktu yang dihabiskan dalam fungsi tersebut. Bar-bar ini disusun dalam tumpukan yang menunjukkan hubungan antar pemanggilan fungsi.

## Langkah 1: Memahami Struktur Flame Graph

Sebelum kita mulai membaca _flame graph_, mari kita pahami strukturnya. _Flame graph_ memiliki dua sumbu utama:

- Sumbu Y (Vertikal): Ini adalah tumpukan pemanggilan. Tumpukan teratas adalah fungsi yang pertama kali dipanggil, sedangkan tumpukan terbawah adalah fungsi yang paling dalam dalam tumpukan pemanggilan.
- Sumbu X (Horizontal): Ini adalah skala waktu atau penggunaan sumber daya. Semakin panjang bar, semakin banyak waktu atau sumber daya yang dihabiskan dalam fungsi tersebut.

## Langkah 2: Identifikasi Hotspot

Hotspot adalah fungsi atau bagian dari kode yang memakan banyak waktu atau sumber daya komputasi. Untuk mengidentifikasi hotspot dalam _flame graph_, carilah bar yang paling panjang atau paling lebar. Inilah yang perlu diperiksa lebih lanjut.

## Langkah 3: Pelajari Pemanggilan Fungsi

Setelah kita mengidentifikasi hotspot, langkah selanjutnya adalah memahami pemanggilan fungsi di sekitarnya. Ini bisa membantu kita mengidentifikasi apakah ada pemanggilan yang tidak perlu atau redundan yang mempengaruhi kinerja.

## Langkah 4: Analisis Kedalaman Tumpukan

_Flame graph_ juga memungkinkan kita untuk menganalisis kedalaman tumpukan pemanggilan. Jika kita melihat tumpukan pemanggilan yang sangat dalam, ini bisa menjadi indikasi bahwa ada masalah dalam rekursi tak terbatas atau pemanggilan berulang yang tidak perlu.

## Langkah 5: Gunakan Alat Pendukung

Untuk membaca _flame graph_ dengan lebih efektif, kita dapat menggunakan alat pendukung seperti FlameGraph atau alat profilasi kinerja lainnya yang menghasilkan grafik api. Alat ini sering dilengkapi dengan fitur pencarian dan pemfilteran yang memudahkan dalam analisis.

Ada satu video yang menurut saya cukup bagus dalam menjelaskan tentang flame graph [Miha Rekar - What Are Flame Graphs and How to Read Them, RubyConfBY 2017](https://www.youtube.com/watch?v=6uKZXIwd6M0&pp=ygULZmxhbWUgZ3JhcGg%3D)