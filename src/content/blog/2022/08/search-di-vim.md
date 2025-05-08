---
title: Search di Vim
pubDate: 2022-08-02
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Kita dapat melakukan pencarian teks di Vim menggunakan `/` (garis miring) 
dan `?` (tanda tanya) di mode normal. Tanda garis miring `/` untuk pencarian maju dan 
untuk mencari mundur tekan `?`, ketik pola pencarian lalu tekan Enter.

Perintah pencarian di Vim mencari pola sebagai string, 
bukan keseluruhan kata. Jika, misalnya, kita mencari teks "gnu", 
pencarian akan menemukan kecocokan di mana "gnu" disematkan 
dalam kata-kata yang lebih besar, seperti "cygnus" atau "magnum".

Tekan `n` untuk mencari hasil cocok berikutnya atau 
huruf besar `N` (shift + n) untuk mencari ke arah yang berlawanan.

### Cari Seluruh Kata

Untuk mencari seluruh kata, 
ketik `\<` untuk menandai awal kata, masukkan pola pencarian, 
ketik `\>` untuk menandai akhir kata, dan tekan Enter untuk melakukan pencarian .

Misalnya, untuk mencari “gnu” kita menggunakan `/\<gnu\>`

### Cari Kata dengan Cursor

Kita juga dapat mencari seluruh kata dengan menggerakkan kursor 
ke kata dan menekan `*` (tanda bintang) untuk mencari maju atau `#` (hash) 
untuk mencari mundur. Untuk menemukan kecocokan berikutnya tekan `*` atau `#` lagi.

### Histori pencarian

Vim melacak semua operasi pencarian yang kita buat di sesi saat ini. 
Untuk menelusuri riwayat pencarian, tekan `/` atau `?` dan gunakan 
tombol panah atas/bawah untuk menemukan operasi pencarian sebelumnya. 
Untuk menjalankan pencarian, cukup tekan Enter. 
Kita juga dapat mengedit pola pencarian sebelum melakukan operasi.

### Huruf besar dan kecil

Secara default, hasil pencarian Vim sensitif terhadap huruf besar/kecil; 
mencari "GNU" tidak akan cocok dengan "Gnu".

Untuk mengabaikan jenis huruf `:set ignorecase` atau `:set ic` di baris perintah Vim. 
Kita juga dapat mengatur set ignore menjadi opsi default dengan menambahkan perintah 
di file `~/.vimrc` kita.

Untuk mengubah kembali ke mode pencocokan huruf besar-kecil, ketik `:set noignorecase` atau `:set noic`.

Cara lain untuk memaksa mengabaikan kasus adalah dengan menambahkan `\c` setelah pola pencarian. 
Misalnya `/Linux\c` melakukan pencarian set ignore. Huruf besar `\C` setelah pola memaksa pencarian kecocokan huruf.

Sumber: [https://linuxize.com/post/vim-search/](https://linuxize.com/post/vim-search/)