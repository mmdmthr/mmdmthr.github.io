---
title: Cara Install Laravel
date: 2021-07-10
category: 'laravel'
---

## Via Composer

Jika di komputer sudah terinstall PHP dan Composer, kita dapat membuat proyek Laravel baru 
dengan menggunakan Composer secara langsung. 

```tsx
// membuat folder projek laravel dengan nama example-app
composer create-project laravel/laravel example-app

// masuk ke folder aplikasi yang baru saja dibuat
cd example-app

```

Setelah aplikasi dibuat, kita bisa menjalankan server pengembangan lokal Laravel (local development server)
menggunakan perintah servis Artisan CLI:

```tsx
// jalankan server
php artisan serve
```

## Via Laravel Installer

Pertama instal Laravel Installer sebagai dependensi global Composer:

```tsx
// install laravel installer sebagai dependensi global
composer global require laravel/installer

// jalankan command laravel new untuk membuat projek baru
laravel new example-app

// masuk ke folder aplikasi yang baru saja dibuat
cd example-app

// jalankan server
php artisan serve
```

Pastikan untuk mengarahkan direktori bin vendor Composer di $PATH 
sehingga perintah laravel dapat dieksekusi dapat ditemukan oleh sistem. 
Jika belum, kemungkinan perintah laravel akan mengalami error `laravel: command not found`.
Pada sistem operasi Windows direktori umumnya ada di: 

    %USERPROFILE%\AppData\Roaming\Composer\vendor\bin

