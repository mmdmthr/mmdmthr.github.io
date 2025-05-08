---
title: Alur Kerja Menggunakan Git
pubDate: 2022-05-16
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'git'
---

## Memahami Tiga Bagian dari Proyek Git

### Proyek Git memiliki tiga bagian utama berikut:

1. Direktori git
1. Direktori kerja (working directory/working tree/repositori)
1. Area staging

### Direktori Git

Direktori Git (terletak di `YOUR-PROJECT-PATH/.git/`) adalah tempat Git menyimpan semua yang dibutuhkan untuk melacak proyek secara akurat. Ini termasuk metadata dan database objek yang mencakup versi terkompresi dari file proyek.

### Direktori kerja 

Direktori kerja adalah tempat pengguna membuat perubahan lokal pada sebuah proyek. Direktori kerja menarik file proyek dari database objek direktori Git dan menempatkannya di mesin lokal pengguna.

**Catatan**: Direktori juga dikenal sebagai Repositori atau disingkat repo. Repo di mesin lokal pengguna disebut "Repo lokal" sedangkan repo di server git (misalnya GitHub/GitLab) disebut "Remote Repo" (Repo jarak jauh).

### Area Staging

Area staging adalah file (juga disebut "indeks", "stage", atau "cache") yang menyimpan informasi tentang apa yang akan masuk ke commit kita berikutnya. Commit adalah saat kita memberi tahu Git untuk menyimpan perubahan tahap ini (perubahan yang sudah dimasukkan dalam staging area). Git mengambil snapshot dari file sebagaimana adanya dan secara permanen menyimpan snapshot tersebut di direktori Git.

Dengan tiga bagian di atas, file yang sedang kita kerjakan akan memiliki tiga jenis status yang berbeda tergantung di mana file tersebut berada pada waktu tertentu: created/modified/deleted, staged atau committed. Saat kita mulai bekerja di dalam working directory seperti membuat file baru, menghapusnya atau hanya membuat perubahan pada sebuah file di working direktori, itu semua akan dicatat oleh git (status akan berubah dengan created/modified/deleted). Selanjutnya, kita bisa memindahkan file yang kita inginkan untuk commit ke area staging (status staged). Akhirnya setelah kita merasa yakin dengan perubahan yang dibuat, kita bisa melakukan commit.

Sumber: [The Ultimate Guide to Git Reset and Git Revert](https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/)