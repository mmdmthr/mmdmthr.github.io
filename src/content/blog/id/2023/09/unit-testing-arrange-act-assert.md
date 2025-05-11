---
title: 'Unit Testing dengan Pendekatan Arrange, Act, dan Assert'
pubDate: 2023-09-20
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'testing'
---

Unit testing adalah salah satu praktik yang penting dalam pengembangan perangkat lunak yang membantu memastikan bahwa kode kita berfungsi dengan benar. Kita dapat menggunakan pendekatan _Arrange_, _Act_, dan _Assert_ (AAA) untuk membuat unit test yang efektif. 

### 1. _Arrange_

Mengeset input dan target. Langkah-langkah pengaturan ini dilakukan untuk menyiapkan sebuah kasus pengujian. Pikirkan apakah tes ini memerlukan objek atau pengaturan khusus? Apakah perlu menyiapkan database? Apakah perlu masuk ke aplikasi web atau membuat sebuah request http? Tangani semua operasi ini di bagian awal pengujian.

### 2. _Act_

Jalankan perilaku (_behavior_) yang ditargetkan. Langkah-langkah _act_ ini mencakup hal utama yang akan diuji. Ini bisa berupa pemanggilan fungsi atau metode, pemanggilan REST API, atau interaksi dengan halaman web. Jaga agar tindakan yang dijalankan tetap fokus pada perilaku sasaran.

### 3. _Assert_

Periksa hasil yang diharapkan. Hasil dari menjalankan langkah act harus menimbulkan semacam respons. Nah, langkah assert ini adalah saat kita memverifikasi benar atau salahnya respons tersebut. Contohnya memeriksa nilai numerik atau string, mengecek response berupa json. Atau, kita mungkin memerlukan pemeriksaan beberapa aspek dari suatu sistem. Assertion pada akhirnya akan menentukan apakah pengujian berhasil atau gagal.

## Contoh

Kita akan melihat contoh penggunaan AAA dalam unit testing dengan Laravel.

Bayangkan kita memiliki sebuah model Laravel yang sederhana untuk mengelola buku. Kita ingin menguji method `hitungJumlahBuku` yang bertanggung jawab menghitung jumlah total buku dalam database.

### Langkah 1: Atur (Arrange)

Pertama, kita akan menyiapkan kondisi awal untuk tes kita. Ini mungkin melibatkan pengaturan database tes, membuat objek model, atau mempersiapkan kondisi lain yang diperlukan.

```php
public function testHitungJumlahBuku()
{
    // Membuat beberapa buku dalam basis data tes
    Buku::create(['judul' => 'Buku 1', 'penulis' => 'Penulis 1']);
    Buku::create(['judul' => 'Buku 2', 'penulis' => 'Penulis 2']);
    
    // Membuat objek model
    $buku = new Buku();
    
    // Act
    $jumlahBuku = $buku->hitungJumlahBuku();
    
    // Verifikasi (Assert)
    $this->assertEquals(2, $jumlahBuku);
}
```

Pada langkah ini, kita membuat beberapa buku dalam database tes dan kemudian membuat objek model Buku.

### Langkah 2: Lakukan (Act)

Kemudian, kita menjalankan metode atau fungsi yang ingin kita uji. Dalam hal ini, kita memanggil metode `hitungJumlahBuku` dari objek model `Buku`.

```php
$jumlahBuku = $buku->hitungJumlahBuku();
```

### Langkah 3: Verifikasi (Assert)

Langkah terakhir adalah memverifikasi hasil tes dengan menggunakan pernyataan "assert" untuk memeriksa apakah hasilnya sesuai dengan harapan kita.

```php
$this->assertEquals(2, $jumlahBuku);
```

Dalam contoh ini, kita memeriksa apakah `$jumlahBuku` sama dengan 2, karena kita telah menambahkan dua buku ke dalam basis data tes pada langkah pertama.

Jika semua tes berjalan dengan sukses, kita akan melihat pesan bahwa tes tersebut berhasil. Namun, jika ada kesalahan dalam kode atau hasilnya tidak sesuai dengan harapan, kita akan melihat pesan kesalahan yang membantu kita melacak masalahnya.

Dengan menggunakan pendekatan _Arrange_, _Act_, dan _Assert_ dalam unit testing, kita dapat memastikan bahwa kode kita berfungsi dengan benar dan dapat mengidentifikasi masalah lebih awal dalam siklus pengembangan. Unit testing adalah salah satu praktik terbaik dalam pengembangan perangkat lunak yang dapat meningkatkan keandalan dan kualitas perangkat lunak kita secara keseluruhan.