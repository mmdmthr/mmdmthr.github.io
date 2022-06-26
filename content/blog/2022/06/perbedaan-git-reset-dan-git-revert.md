---
title: Perbedaan Git Reset dan Git Revert
date: 2022-06-26
category: 'git'
---

**TL;DR**

> `git reset` membatalkan commit sebelumnya dengan cara menulis ulang riwayat commit (commit history). Sementara `git revert` bekerja dengan cara membuat commit baru untuk membatalkan perubahan yang dibuat oleh commit sebelumnya, tanpa mengubah riwayat commit.


Untuk memahami alur kerja git, ada baiknya membaca [artikel ini](/2022/03/alur-kerja-menggunakan-git/)

## Git Reset

Perintah `git reset` memungkinkan kita untuk MENGATUR ULANG posisi HEAD saat ini ke keadaan tertentu. Kita dapat mengatur ulang status file tertentu atau seluruh branch. Perintah ini berguna jika perubahan yang kita buat masih berada di repo lokal dan belum melakukan push commit ke GitHub atau repositori remote lainnya.

### Reset sebuah file atau beberapa file

Perintah berikut memungkinkan kita memilih potongan konten dan mengembalikan atau menghapusnya.

```bash
git reset (--patch | -p) [tree-ish] [--] [paths]
```

### Menghapus file dari staging area (unstage)

Jika kita menambahkan file ke area staging dengan `git add`, tetapi ternyata kita tidak lagi menginginkannya menjadi bagian dari commit, kita dapat menggunakan `git reset` untuk menghapus file tersebut dari area staging:

```bash
git reset HEAD FILE-YANG-INGIN-DI-UNSTAGE
```

Perintah ini hanya menghapus file itu dari staging area, perubahan yang kita buat akan tetap ada di file.

### Reset branch ke commit sebelumnya

Perintah berikut mengatur ulang HEAD branch kita saat ini ke COMMIT yang ditentukan dan memperbarui index. Ini pada dasarnya memundurkan status branch kita, lalu semua commit yang kita buat setelah itu akan menimpa commit-commit yang dibuat setelah titik reset. Jika kita menghilangkan MODE, defaultnya adalah `--mixed`:

```bash
git reset MODE COMMIT-HASH
```

Pilihan untuk `MODE` adalah:

+ `--soft`: tidak mengatur ulang file indeks atau working tree, tetapi mengatur ulang HEAD ke commit yang diinginkan. Mengubah semua status file menjadi "Perubahan yang akan di-commit"
+ `--mixed`: mengatur ulang indeks tetapi bukan working tree dan memberikan laporan perubahan apa saja yang belum diperbarui
+ `--hard`: mengatur ulang indeks dan working tree. Setiap perubahan pada file yang direkam di working tree sejak melakukan commit akan dibatalkan.
+ `--merge`: mengatur ulang indeks dan memperbarui file di working tree yang berbeda antara commit dan HEAD, tetapi menyimpan yang berbeda antara indeks dan working tree
+ `--keep`: mengatur ulang entri indeks dan memperbarui file di working tree yang berbeda antara commit dan HEAD. Jika file yang berbeda antara commit dan HEAD memiliki perubahan lokal, reset dibatalkan

### Catatan Penting Tentang Hard Reset

Berhati-hatilah saat menggunakan `git reset` dengan opsi `--hard` karena perintah ini mengatur ulang riwayat commit, area staging, dan direktori kerja kita. Jika opsi ini tidak digunakan dengan benar, dapat berisiko kehilangan file atau perubahan yang sudah kita buat.

## Git Revert

Perintah `git revert` dan `git reset` sama-sama membatalkan commit sebelumnya. Tetapi jika kita telah melakukan push commit ke repositori remote, kita disarankan untuk tidak menggunakan `git reset` karena ia menulis ulang riwayat commit. Efek dari perubahan riwayat commit ini   dapat membuat rekan kita yang masih bekerja dengan riwayat commit yang lama tidak dapat melakukan push ke repositori remote karena git mendeteksi dua riwayat commit yang berbeda.

Alih-alih, lebih baik menggunakan `git revert`, yang membatalkan perubahan yang dibuat oleh commit sebelumnya dengan membuat commit yang baru, semua tanpa mengubah riwayat commit.

### Revert sebuah commit atau beberapa commit sekaligus

Perintah berikut memungkinkan kita mengembalikan perubahan dari commit atau commit sebelumnya dan membuat commit baru.

```bash
git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]] <commit>…
git revert --continue
git revert --quit
git revert --abort
```

### Opsi umum:

```bash
  -e
  --edit
```

- Ini adalah opsi default dan tidak perlu diatur secara eksplisit. Ini membuka editor teks default sistem kita dan memungkinkan kita mengedit pesan commit baru sebelum melakukan revert.
- Opsi ini melakukan kebalikan dari -e, dan `git revert` tidak akan membuka editor teks.
- Opsi ini mencegah `git revert` membatalkan commit sebelumnya dan membuat commit baru. Daripada membuat commit baru, `-n` akan membatalkan perubahan dari commit sebelumnya dan menambahkannya ke Indeks Staging dan Direktori Kerja.

```bash
--no-edit
-n
-no-commit
```

Sumber: [The Ultimate Guide to Git Reset and Git Revert](https://www.freecodecamp.org/news/the-ultimate-guide-to-git-reset-and-git-revert/)
