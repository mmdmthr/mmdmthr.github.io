---
title: Menjalankan Perintah PHP Artisan Storage Link di Shared Hosting
pubDate: 2023-01-21
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'laravel'
---

Perintah `php artisan storage:link` dijalankan untuk membuat 
symbolic link antara folder storage dengan folder public di web server. 
Kita dapat menjalankan perintah tersebut 
di shared hosting tanpa mengakses terminal. Caranya adalah dengan 
membuat perintah tersebut dijalankan lewat route:

```php
Route::get('/linkstorage', function () {
    $targetFolder = base_path().'/storage/app/public';
    $linkFolder = $_SERVER['DOCUMENT_ROOT'].'/storage';
    symlink($targetFolder, $linkFolder); 
});
```

Variabel `$linkFolder` disesuaikan dengan letak folder di web hosting. 
Dalam kasus ini folder storage berada di dalam folder public. 
Saya menemukan kasus error yang berhubungan dengan `proc_open` 
ketika mengisi path link folder tidak sesuai.

```
the Process class relies on proc_open, which is not available on your PHP installation
```

Atau bisa juga mengupdate config filesystem di file `config/filesystems.php` 
dengan menambahkan baris berikut pada key `'disks'`

```php
'links' => [
    $_SERVER['DOCUMENT_ROOT'].'/storage' => storage_path('app/public'),
],
```