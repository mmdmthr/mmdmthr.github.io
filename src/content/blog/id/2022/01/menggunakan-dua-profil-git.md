---
title: Menggunakan Dua Profil Git 
pubDate: 2022-01-18
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'git'
---

Bayangkan situasi ini, kita memiliki dua akun git. Satu akun untuk repo perusahaan tempat kita bekerja 
dan satunya lagi akun git pribadi. Kita akan memerlukan dua profil yang berbeda untuk mengakses masing-masing repo.

Tentu kita bisa mengeset konfigurasi pada masing-masing repo setiap kali kita git init/clone. 
Tapi itu akan membuat kita melakukannya berkali-kali jika kita memiliki banyak repo. 
Tujuan tulisan ini adalah untuk mengeset config secara global dan membuat profilnya menyesuaikan kebutuhan akses kita.

### File Konfigurasi Git (`.gitconfig`)

Konfigurasi Git disimpan pada file `.gitconfig` yang biasanya tersimpan di folder home. 
File ini adalah titik awal bagi Git untuk mengidentifikasi konfigurasi apa yang akan digunakan.

Jika kita pernah melakukan konfigurasi Git user secara global (`git config –global user.name`) 
maka kemungkinan isi dari file `.gitconfig` akan terlihat seperti ini. 
```bash
[user]
  name = username
  email = email@example.com

```
Artinya ketika melakukan commit di repo apapun maka profil tersebut yang akan digunakan.

Tujuan kita adalah memiliki dua profil berbeda yang akan di-load sesuai dengan repo kita, apakah itu repo kantor atau pribadi.
Caranya adalah dengan memisahkan repo kita menjadi beberapa direktori sesuai dengan profil yang kita inginkan, kemudian mendefinisikan file `.gitconfig` untuk setiap profil.

### 1 - Buat Direktori Terpisah untuk Masing-masing Repo

Atur repo proyek yang sedang kita kerjakan ke dalam folder terpisah.
Sebagai contoh, katakanlah ada dua profil Git yang kita miliki. 
Ini adalah kasus penggunaan umum bagi kebanyakan dari kita:

WORK → untuk proyek terkait pekerjaan  
PERSONAL → untuk proyek pribadi (open source atau proyek sampingan)

### 2 - Edit Konfigurasi Global Git

Edit file `.gitconfig` global atau buat di direktori home jika belum ada. Jangan lupa buat backup file `.gitconfig` jika ingin tetap menyimpan konfigurasi lama. Setelah itu tambahkan semua direktori profil sebagai entri seperti pada contoh di bawah ini.

```bash
# ~/.gitconfig

[includeIf "gitdir:~/personal/"]
   path = ~/.gitconfig-personal
[includeIf "gitdir:~/work/"]
   path = ~/.gitconfig-work

```

Script tersebut akan membuat sebuah kondisi, jika *path* direktori git tempat menyimpan proyek cocok dengan salah satu path di `includeIF`, maka Git menggunakan file konfigurasi profil tersebut. Jika tidak, ia akan menggunakan konfigurasi default.

### 3 - Buat Konfigurasi Git untuk Masing-Masing Profil
Buat file `.gitconfig-personal` dan `.gitconfig-work` yang sudah kita definisikan di file `.gitconfig` global. Masing-masing file ini dapat berisi semua konfigurasi yang kita butuhkan, mulai dari username dan email hingga commit hook.

```bash
# ~/.gitconfig-work

[user]
  nama = work_user
  email = email_kerja

# ~/.gitconfig-personal

[user]
  name = personal_user
  email = personal_email
```

### Cek Perubahannya

Seharusnya sekarang kita sudah memiliki 3 file git config.

```bash
➜  ~ l | grep 'git*'  
-rw-rw-r--  1 user   staff    116 Apr  3 12:31 .gitconfig
-rw-rw-r--  1 user   staff     50 Mar 26 18:22 .gitconfig-personal
-rw-rw-r--  1 user   staff     52 Mar 26 18:21 .gitconfig-work
```

Sekarang kita buat direktori `work` dan `personal`, buat repo baru atau clone repo di dalam folder tersebut. 
Sebagai contoh kita akan melihat konfigurasi yang digunakan pada direktori personal. 

```bash
$ cd ~/personal
$ mkdir personal-test-repo
$ cd personal-test-repo
$ git init
$ git config -l

# script menggunakan (include) file .gitconfig personal
# dan mengabaikan konfigurasi work
# karena proyek berada di direktori personal

includeif.gitdir:~/project/.path=~/.gitconfig-personal
user.name=mmdmthr
user.email=muhhari@gmail.com
includeif.gitdir:~/dev/.path=~/.gitconfig-work
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true

```


Seperti yang terlihat, email dan username berbeda di kedua direktori sesuai dengan path di mana git berada.


Sumber [https://www.freecodecamp.org/news/how-to-handle-multiple-git-configurations-in-one-machine/](https://www.freecodecamp.org/news/how-to-handle-multiple-git-configurations-in-one-machine/)