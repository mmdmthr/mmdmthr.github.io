---
title: Melihat Raw Query Database Eloquent Laravel
pubDate: 2022-02-25
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'laravel'
---

Ada kalanya kita perlu melakukan debuging pada query eloquent, 
mungkin saat menemukan query model yang kita buat tidak menampilkan data sesuai ekspektasi. 
Kita bisa melihat query apa yang dibuat saat menjalankan model eloquent.

### Menggunakan Laravel Eloquent Method

Eloquent menyediakan method yang mengembalikan string query tanpa menjalankannya yaitu method `toSql()`. 
Ini sesuai jika kita hanya ingin melihat query saja tanpa ingin mengubah data – 
tetapi cara ini tidak menampilkan seluruh kueri jika kuerinya lebih kompleks atau jika memiliki subkueri.

Contoh Kode

```php
App\User::query()
    ->where('created_at', '<', now()->subYear())
    ->with('assignedApps', 'courses')
    ->orderBy('email', 'asc')
    ->limit(5)
    ->toSql();
```

Output

```php
select * from `users` where `created_at` < ? order by `email` asc limit 5
```

### Menggunakan Laravel Query Log

Aktifkan log query untuk menangkap query yang dijalankan, perlu diperhatikan bahwa 
query log akan menangkap query yang dijalankan oleh model. Ini berarti query sudah 
selesai dijalankan di database. Cara untuk mengaktifkan log dilakukan menggunakan.

`DB::connection()->enableQueryLog();`

Setelah itu kita dapat melihat query yang dijalankan menggunakan 
kode di bawah ini 

`$queries = DB::getQueryLog();`

jika ingin melihat query yang terakhir dieksekusi

`$last_query = end($queries);`

### Contoh

```php
public function show(Order $order){
    // aktifkan query log
    \DB::connection()->enableQueryLog();

    // jalankan model
    $data = $order->all();

    // tangkap query
    $queries = \DB::getQueryLog();
    return dd($queries);
}
```


Sumber:  
[https://beyondco.de/blog/how-to-get-the-raw-sql-query-from-the-laravel-query-builder](https://beyondco.de/blog/how-to-get-the-raw-sql-query-from-the-laravel-query-builder)  
[https://stackoverflow.com/questions/41140975/laravel-eloquent-display-query-log](https://stackoverflow.com/questions/41140975/laravel-eloquent-display-query-log)