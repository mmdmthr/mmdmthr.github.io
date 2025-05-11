---
title: Mengoptimalkan Query Database di Laravel
pubDate: 2023-01-28
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'laravel'
---

### 1. Mengambil Data dalam Jumlah Besar

**Opsi 1: Menggunakan chunk**

Jika aplikasi perlu memproses jumlah data yang besar, 
kita bisa melakukannya dengan `chunk` (potongan). 
Fungsi `chunk` menjalankan query dalam potongan-potongan 
berdasarkan nilai *offset* dan *limit*, ini lebih optimal 
dibanding query mengambil semua data di database. 
Contoh di bawah mengambil 100 record dari tabel posts, 
memprosesnya, mengambil 100 record lagi, dan memprosesnya.

```php
// eloquent
$posts = Post::chunk(100, function($posts){
    foreach ($posts as $post){
     // Proses posts
    }
});

// query builder
$posts = DB::table('posts')->chunk(100, function ($posts){
    foreach ($posts as $post){
     // Proses posts
    }
});
```

**Opsi 2: Menggunakan chunkById**

Kita juga dapat menggunakan `chunkById`. `chunkById` menggunakan field id 
yang merupakan integer (bilangan bulat), dan kueri menggunakan klausa where, 
kueri akan jauh lebih cepat.

```php
// eloquent
$posts = Post::chunkById(100, function($posts){
    foreach ($posts as $post){
     // Proses posts
    }
});

// query builder
$posts = DB::table('posts')->chunkById(100, function ($posts){
    foreach ($posts as $post){
     // Proses posts
    }
});
```

### 2. *Select* hanya kolom yang dibutuhkan

Gunakan fungsi `select` dalam kueri untuk memilih hanya kolom tertentu 
alih-alih mengambil semua kolom dalam sebuah tabel.

```php
// eloquent
$posts = Post::select(['id','title'])->find(1);

// query builder
$posts = DB::table('posts')
            ->where('id','=',1)
            ->select(['id','title'])
            ->first(); 
```

### 3. Gunakan `pluck` saat membutuhkan hanya satu atau dua kolom dari database

```php
// eloquent
$posts = Post::pluck('title', 'slug');

// query builder
$posts = DB::table('posts')->pluck('title','slug');
```

Ketika kode di atas dijalankan, ia melakukan hal berikut di belakang layar.

Jalankan `select title, slug` dari kueri posts di database.
Membuat array dengan title sebagai nilai array dan slug sebagai key array.
Mengembalikan array(format array: [ slug => title, slug => title ])

Untuk mengakses hasilnya

```php
foreach ($posts as $slug => $title){
    // $title post
    // $slug post
}
```

Jika ingin mengambil hanya satu kolom

```php
// eloquent
$posts = Post::pluck('title');

// query builder
$posts = DB::table('posts')->pluck('title');
foreach ($posts as  $title){
    // $title post
}
```

### 4. Hitung jumlah baris menggunakan kueri, bukan dari collection

Dengan menggunakan pendekatan ini, kita dapat langsung menghitung 
jumlah total baris pada database itu sendiri.

```php
// eloquent
$posts = Post::count();

// query builder
$posts = DB::table('posts')->count();
```

### 5. Menggunakan `with` dalam relasi

Jika kita menggunakan relasi dalam model eloquent 
maka kita harus menggunakan method `with`.

```php
$posts = Post::with(['author'])->get();
```

Demikian pula, jika kita menggunakan hubungan bersarang maka kita dapat menggunakan ini

```php
$posts = Post::with(['author.team'])->get();
```

### 6. Jangan memanggil relasi yang tidak perlu

Jangan panggil relasi jika kita yakin id relasi ada di tabel.

Contoh:
Untuk mendapatkan id penulis dari sebuah posting, biasanya kita lakukan

```php
$post = Post::findOrFail(<post id>);
$post->author->id;
```

Sebagai gantinya, kita bisa langsung mendapatkan id penulis dengan melakukan hal berikut.

```php
$post = Post::findOrFail(<post id>);
$post->author_id; 
// table posts memiliki kolom author_id yang menyimpan id penulis
```

Tapi selalu lakukan pengecekan bahwa baris yang dituju ada di tabel penulis 
jika direferensikan di tabel posts.

### 7. Tambahkan indeks ke kolom yang sering dikueri

Jika kita melakukan query dengan `where` di sebuah kolom. 
Kita bisa menambahkan indeks ke kolom tersebut. 
Kueri jauh lebih cepat saat melakukan kueri pada baris dengan kolom indeks.

### 8. Gunakan simplePaginate, bukan Paginate

Paginate Menghasilkan link pagination untuk semua halaman. 
Sementara simplePaginate Menghasilkan hanya tautan paginasi berikutnya dan sebelumnya.

```php
// Menghasilkan link pagination untuk semua halaman
$posts = Post::paginate(20);

// Menghasilkan hanya link pagination next dan previous
$posts = Post::simplePaginate(20);
```

### 9. Hindari penggunaan wildcard di awal (dengan keyword LIKE)

Jika kita mengetahui kata kunci muncul di awal nilai kolom, 
kita dapat menjalankan kueri seperti di bawah ini.

```bash
select * from table_name where column like keyword%
# bukan %keyword%
```

### 10. Hindari penggunaan fungsi SQL pada klausa where

Cukup gunakan `where` pada kolom tanggal seperti ini

```php
// Yes
$posts = Post::where('created_at', '>=', now() )->get();

// No
$posts = Post::whereDate('created_at', '>=', now() )->get();
```

### 11. Hindari menambahkan terlalu banyak kolom ke sebuah tabel

Menambahkan terlalu banyak kolom ke tabel akan menambah sebuah record 
dan akan memperlambat pemindaian tabel. Saat melakukan kueri `select *`, 
kita akhirnya akan mengambil banyak kolom yang sebenarnya tidak diperlukan. 
Dalam situasi itu pemecahan tabel akan membantu.

### 12. Pisahkan kolom dengan tipe data teks ke dalam tabelnya sendiri

Pertimbangkan kasus di mana kita memiliki tabel yang disebut posting 
dengan kolom konten yang menyimpan konten posting blog.
Konten untuk posting blog akan sangat besar dan seringkali, 
kita memerlukan data ini hanya jika seseorang melihat
posting blog tertentu.

Jadi, memisahkan kolom ini dari tabel posts akan secara drastis 
meningkatkan performa kueri saat ada terlalu banyak postingan.

### 13. Cara yang lebih baik untuk mengambil baris terbaru dari sebuah tabel

Jika menggunakan id dalam bentuk integer atau nilai yang berurutan, 
cara yang lebih baik untuk mengambil baris terbaru adalah seperti di bawah ini. 
Dibandingkan dengan mengurutkan string (pada field date).

```php
$posts = Post::latest('id')->get();
```

### 14. Periksa dan optimalkan kueri

Tidak ada satu solusi universal saat mengoptimalkan kueri di laravel. 
Hanya kita yang tahu apa yang dilakukan aplikasi kita, 
berapa banyak kueri yang dibuatnya, berapa banyak yang benar-benar digunakan.

Untuk melakukan ini, kita dapat menggunakan

```php
DB::enableQueryLog();
dd(DB::getQueryLog());
```

1. **Laravel Debugbar** - Laravel debugbar memiliki tab bernama database 
yang akan menampilkan semua kueri yang dijalankan saat kita mengunjungi sebuah halaman. 
Kunjungi semua halaman di aplikasi dan lihat kueri yang dijalankan di setiap halaman.
1. **Clockwork** - Clockwork sama dengan laravel debugbar. 
Tapi alih-alih memberikan toolbar ke situs web, 
itu akan menampilkan informasi debug di *developer tools window* 
atau sebagai UI mandiri dengan mengunjungi `appurl/clockwork`.
1. **Laravel Telescope** - Setelah Telescope diinstal, 
kita dapat mengakses dasbor dengan mengunjungi 
`appurl/telescope`. Di dasbor telescope, buka tab kueri, dan itu akan 
menampilkan semua kueri yang dijalankan oleh aplikasi.

***Referensi:***
[How to Optimize Database Queries in Laravel?](https://dev.to/readymadecode/how-to-optimize-database-queries-in-laravel-3726)