---
title: Laravel Auth Routes
date: 2023-01-03
category: 'laravel'
---

Laravel menyediakan helper untuk membuat route otentikasi

```php
Auth::routes()

// akan membuat routes

// Authentication Routes...
Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('login', 'Auth\LoginController@login');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');

// Registration Routes...
Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
Route::post('register', 'Auth\RegisterController@register');

// Password Reset Routes...
Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset');
```

Jika tidak ingin menggunakan semua auth routes, kita bisa memasukkan konfigurasinya sebagai parameter

```php
Auth::routes([
  'register' => false, // disable registration routes...
  'reset' => false, // disable password reset routes...
]);
```

Referensi:  
[https://sekolahkoding.com/forum/bagaimana-cara-kerja-authroutes-1534167893](https://sekolahkoding.com/forum/bagaimana-cara-kerja-authroutes-1534167893)

[https://stackoverflow.com/questions/29183348/how-to-disable-registration-new-users-in-laravel](https://stackoverflow.com/questions/29183348/how-to-disable-registration-new-users-in-laravel)