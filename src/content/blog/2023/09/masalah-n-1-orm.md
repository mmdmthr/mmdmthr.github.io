---
title: 'Memahami Masalah N + 1 dalam ORM'
pubDate: 2023-09-27
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'optimization'
---

Dalam pengembangan perangkat lunak, masalah N + 1 adalah salah satu masalah klasik yang sering dihadapi oleh pengembang aplikasi yang menggunakan database. Masalah ini muncul saat kita menggunakan _Object-Relational Mapping_ (ORM) untuk mengakses data dari database, dan dapat menyebabkan kinerja aplikasi yang buruk jika tidak ditangani dengan benar. 

## Apa Itu Masalah N + 1?

Masalah N + 1 terjadi ketika kita mengambil kumpulan data utama, misalnya mengambil data buku dari database, dan kemudian mengambil data terkait, misalnya penulis, secara terpisah untuk setiap entitas utama. N + 1 artinya kita melakukan satu query utama untuk mengambil daftar entitas utama, dan kemudian tambahan sejumlah N query untuk mengambil data terkaitnya.

Contoh sederhana adalah ketika kita memiliki daftar buku dan kita ingin mengambil penulis masing-masing buku. 

```php
use App\Models\Book;
 
$books = Book::all();
```

Jika kita mengambil daftar buku terlebih dahulu, itu akan menjalankan 1 query. 

```sql
select * from books
```

Misalnya query di atas hasilnya adalah 25 buku. Kemudian kita mengambil penulis dari setiap buku secara terpisah.

```php

foreach ($books as $book) {
    echo $book->author->name;
}
```
maka akan ada tambahan 25 query

```sql
select name from authors where id = 123

```
Itulah yang disebut masalah N + 1. 

## Mengapa Masalah N + 1 Terjadi?

Masalah N + 1 terjadi karena ORM, biasanya menggunakan _lazy loading_ sebagai perilaku default. Artinya, data terkait tidak dimuat segera ketika data utama diambil, tetapi dimuat hanya saat kita mengaksesnya. Ini mengarah pada banyak query tambahan yang tidak perlu.

## Cara Mengatasi Masalah N + 1

Untuk mengatasi masalah N + 1, kita dapat menggunakan beberapa teknik berikut:

### 1. Eager Loading

_Eager loading_ adalah teknik di mana kita mengambil data terkait sekaligus dengan data utama, bukan secara terpisah. Dalam Laravel, kita dapat menggunakan metode `with()` untuk melakukan _eager loading_:

```php
$users = Book::with('author')->get();
```

Dengan menggunakan _eager loading_, kita mengurangi jumlah query yang harus dilakukan ke database menjadi hanya 2 query, menghindari masalah N + 1.

```sql
select * from books
 
select * from authors where id in (1, 2, 3, 4, 5, ...)
```

### 2. Join

Jika kita ingin menggabungkan data dari beberapa tabel, kita dapat menggunakan operasi join dalam SQL. Dalam Eloquent, kita dapat menggunakan metode `join()` untuk melakukan join data:

```php
$users = DB::table('books')
            ->join('authors', 'books.author_id', '=', 'authors.id')
            ->select('books.*', 'authors.name')
            ->get();
```

### 3. Batch Loading

Jika kita memiliki kasus di mana kita perlu mengambil banyak data terkait untuk setiap entitas utama, kita dapat menggunakan teknik _batch loading_. Di Laravel ini disebut _lazy eager loading_. Ini melibatkan pengambilan data utama, dan kemudian mengambil data terkait dalam beberapa _batch query_.

```php
$users = Book::all();

foreach ($books as $book) {
    $user->load('authors');
}
```

### 4. Gunakan Cache

Untuk menghindari pengambilan data terkait yang berulang-ulang, kita dapat menggunakan teknik caching. Caching akan menyimpan data terkait dalam cache sehingga kita tidak perlu mengambilnya lagi dalam permintaan berikutnya.