---
title: 'Mengenal Regression Issue'
date: 2024-11-30
category: 'testing'
---

Saya akan memulai dengan menceritakan sebuah kisah nyata dari istri saya:

> TV di rumahnya rusak, suara sama sekali tidak keluar dari speaker. Papa dan adiknya berusaha memperbaiki, TV dibongkar lalu dirakit kembali. Ketika TV dinyalakan, suaranya keluar, tapi gambarnya tidak tampil.

Itu adalah salah satu contoh regression issue, kita mencoba memperbaiki sesuatu tapi menyebabkan masalah di bagian lain.

Dalam pengembangan perangkat lunak, regression terjadi ketika kita membuat perubahan—baik itu untuk memperbaiki bug atau menambahkan fitur baru—tetapi perubahan tersebut malah menyebabkan masalah di bagian lain dari sistem.

## Mengapa Regression Bisa Terjadi?

Regression biasanya muncul karena alasan berikut:

- Kurangnya Pengujian yang Komprehensif

  Fokus pengujian hanya pada masalah yang sedang diperbaiki, tanpa memeriksa dampaknya pada bagian lain.

- Sistem yang Kompleks

  Dalam sistem yang besar, satu modul sering kali saling terhubung dengan modul lainnya. Perubahan kecil dapat memiliki efek domino.

- Pola Kerja Manual

  Seperti dalam kasus TV, membongkar dan memasang komponen secara manual membuka peluang kesalahan baru. Dalam software development, ini setara dengan tidak menggunakan automated testing.

## Pentingnya Regression Testing

Untuk menghindari regression dalam software development, kita menggunakan regression testing—serangkaian pengujian untuk memastikan bahwa perubahan baru tidak merusak fitur yang sudah ada. Beberapa strategi regression testing yang efektif:

- Test Coverage yang Luas

  Memastikan setiap modul diuji, terutama bagian yang berpotensi terkena dampak perubahan.

- Automated Testing

  Dengan skrip otomatis, kita dapat dengan mudah menguji ulang bagian-bagian penting dari aplikasi setiap kali ada perubahan kode. Ini bisa dicover oleh unit test, synthetic test, dsb.

- Continuous Integration (CI)

  Dengan sistem CI, setiap perubahan yang di-push ke repository akan langsung diuji secara otomatis.

## Praktik Regression Testing

Salah satu pengalaman di tempat saya bekerja, regression testing dilakukan saat kandidat rilis (bug fix/fitur) berada di staging. Tim QA akan menjalankan automated testing dengan berbagai skenario pengujian yang sudah dibuat sebelumnya (mencakup mayoritas fungsional di dalam sebuah app). Skenario tersebut diperbarui jika ada fitur baru yang ditambahkan. Beberapa bagian yang belum ter-cover automated testing akan ditinjau secara manual. Dengan menjalankan serangkaian pengujian di seluruh fungsional perangkat lunak, QA dapat menangkap issue di bagian lain dari sistem yang mungkin terdampak oleh perubahan sebelum rilis. 

## Pelajaran dari TV Rusak

Cerita TV ini memberi kita beberapa pelajaran penting yang relevan, baik dalam kehidupan sehari-hari maupun pengembangan perangkat lunak:

- Jangan hanya fokus menyelesaikan satu masalah tanpa mempertimbangkan dampaknya pada keseluruhan sistem.
- Lakukan pengujian menyeluruh, bukan hanya pada fungsi yang diubah, tetapi juga pada fungsi-fungsi terkait.
- Jika memungkinkan, gunakan alat dan metode otomatis untuk meminimalkan kesalahan manual.