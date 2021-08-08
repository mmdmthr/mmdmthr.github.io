---
title: Normalisasi Database
date: 2021-07-25
category: 'database'
---

Normalisasi database adalah proses menata tabel, kolom dan relasi antar tabel 
untuk menghindari redundansi data dan mencapai integritas data. 
Secara sederhana prinsip yang harus dipegang adalah

1. Hindari redundansi (pengulangan) data
2. Mencapai integritas data
3. Meletakkan data di tabel yang tepat
4. Menghindari anomali create, update, delete

Dalam melakukan normalisasi database akan melewati beberapa bentuk 
tergantung kebutuhan. Biasanya dengan melewati 3 bentuk normal 
(normal form) sudah cukup bagus.

## Normal Pertama

Pada bentuk normal pertama aturannya adalah setiap kolom harus atomic. 
Kita hanya boleh menyimpan satu data dalam satu kolom. Kita juga tidak 
boleh membuat beberapa kolom yang merepresentasikan informasi yang sama. 
Aturan yang kedua adalah harus ada satu data kunci yang mengidentifikasi 
setiap baris pada tabel.

## Normal Kedua

Pada bentuk normal kedua aturannya adalah semua kolom yang bukan merupakan 
data kunci harus tergantung pada primary key.

## Normal Ketiga

Pada bentuk normal ketiga aturannya adalah semua kolom yang bukan merupakan 
kunci harus tergantung pada primary key secara transitif (tidak langsung).

Konten ini bersumber dari [tulisan Ben Brumm dari databasestar.com]("https://www.databasestar.com/database-normalization/")