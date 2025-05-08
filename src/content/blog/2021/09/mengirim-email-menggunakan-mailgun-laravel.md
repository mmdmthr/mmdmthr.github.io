---
title: Mengirim Email Menggunakan Mailgun pada Laravel
pubDate: 2021-09-18
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'laravel'
---

Laravel menyediakan API email yang sederhana menggunakan library SwiftMailer. 
Layanan email pada Laravel dapat dikonfigurasi melalui file `config/mail.php`. 
Salah satu penyedia layanan mailer yang tersedia adalah Mailgun. 
Mailgun menyediakan driver email berbasis API yang lebih sederhana dan singkat 
dibanding mengirim email menggunakan SMTP server. 

Untuk menggunakan driver Mailgun yang berbasis API, Laravel membutuhkan 
library Guzzle HTTP, install dulu dari composer package manager

```php
composer require guzzlehttp/guzzle
```

Secara default, file konfigurasi `config/mail.php` akan mengambil nilai 
dari variabel pada file `.env`. Maka kita akan menyimpan semua konfigurasi pada file `.env`. 

```php
// setting mail driver yang digunakan
MAIL_DRIVER=mailgun
// email from (email pengirim)
MAIL_FROM=admin@apps.com
// nama pengirim
MAIL_FROM_NAME=Admin
// domain mailgun kita
MAILGUN_DOMAIN={domain-mailgun}
// API key mailgun kita
MAILGUN_SECRET={api-key-mailgun}
```

Domain dan API key mailgun bisa kita dapatkan setelah melakukan registrasi Mailgun.
Kita dapat melihatnya pada dashboard.

Petunjuk ketika mengalami error saat mengirimkan email dapat melihat referensi status code [https://documentation.mailgun.com/en/latest/api-intro.html#status-codes](https://documentation.mailgun.com/en/latest/api-intro.html#status-codes)