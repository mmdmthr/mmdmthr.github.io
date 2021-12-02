---
title: Menggunakan Git Stash
date: 2021-11-18
category: 'git'
---

Selain working area, staging dan repository, 
Git memiliki area yang disebut stash di mana kita dapat menyimpan 
sementara perubahan yang kita buat tanpa melakukan commit ke repository. 

Ini berguna dalam situasi kita sedang melakukan perubahan pada kode, 
dan belum siap untuk melakukan commit, namun kita perlu berpindah ke branch lain.

### Stash Perubahan

Untuk menyimpan perubahan kita ke stash, gunakan perintah
```bash
git stash save "pesan stash"
```
Perintah tersebut akan menyimpan perubahan dan mengembalikan (*revert*) *working directory*
ke posisi commit terakhir. Perubahan yang tersimpan di stash dapat diakses dari branch manapun 
dalam satu repository.

### Melihat Perubahan dalam Stash

Untuk melihat perubahan yang tersimpan dalam stash, gunakan perintah
```bash
git stash list
```

Perintah di atas akan mengembalikan daftar stash yang tersimpan dalam format 
```bash
stash@{0}: NAMA-BRANCH: PESAN
```

`stash@{0}` adalah nama dari stash, nomor dalam kurung `{0}` adalah index dari stash. 
Nama dan index tersebut digunakan untuk memilih stash yang akan kita terapkan.

### Mengambil Perubahan dalam Stash

Untuk mengambil perubahan yang tersimpan di dalam stash ke branch yang sedang aktif, 
gunakan perintah berikut

```bash
# terapkan perubahan dari stash ke branch aktif
git stash apply NAMA-STASH

# terapkan perubahan dan hapus file dari stash
git stash pop NAMA-STASH
```

Ketika menerapkan perubahan dari stash ada kemungkinan terjadi konflik, 
untuk menyelesaikannya sama seperti dalam kasus konflik merge.

### Menghapus Perubahan dalam Stash

Untuk menghapus perubahan dari daftar stash, jika kita sudah tidak lagi membutuhkannya, 
gunakan perintah berikut:

```bash
# menghapus stash yang dipilih
git stash drop NAMA-STASH

# menghapus semua stash
git stash clear
```

Sumber [https://www.freecodecamp.org/news/git-stash-explained/](https://www.freecodecamp.org/news/git-stash-explained/)