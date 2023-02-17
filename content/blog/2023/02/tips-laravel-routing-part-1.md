---
title: Tips Routing Laravel - Bagian 1
date: 2023-02-18
category: 'laravel'
---

Pada file routing seringkali digunakan sintaks `Route::get()` 
dan `Route::post()` yang sederhana. Namun, dalam proyek yang lebih besar, 
routing biasanya akan menjadi lebih rumit. Ada beberapa cara yang dapat diterapkan 
untuk menangani masalah routing dalam situasi tertentu.

### Tip 1. Route::get() SEBELUM Route::resource()

Ini adalah salah satu kesalahan paling umum ketika menggunakan 
*Resource Controller*

```php
Route::resource('photos', 'PhotoController');
Route::get('photos/popular', 'PhotoController@method');
```

Rute kedua tidak akan akurat, karena itu akan dicocokkan dengan 
method `show()` dari `Route::resource()` yaitu `/photos/{id}`. 
Dalam kasus ini, "popular" akan ditetapkan sebagai parameter `$id`.

Jika ingin menambahkan rute get/post, selain `Route::resource()`, 
letakkan **SEBELUM** resource. Seperti ini:

```php
Route::get('photos/popular', 'PhotoController@method');
Route::resource('photos', 'PhotoController');
```

### Tip 2. Route Group di dalam Grup Lain

Kita mungkin semua tahu bahwa kita dapat mengelompokkan rute dengan `Route::group()` 
dan menetapkan *middlewares/prefix* yang berbeda dan parameter lainnya, 
seperti rute yang bersifat publik dan rute yang mengharuskan *log in*.

Tetapi bagaimana jika kita memerlukan seperangkat aturan tertentu 
untuk subgrup dari grup tersebut?

**Contoh**: kita memerlukan rute publik dan rute yang diautentikasi, 
tetapi di dalam grup yang diautentikasi, kita perlu memisahkan administrator 
dari pengguna biasa.

Ini bisa kita lakukan:

```php
// rute publik
Rute::get('/', 'HomeController@index');

// Pengguna harus log in - dengan middleware "auth".
Rute::grup(['middleware' => ['auth']], function () {

     // /user/XXX: Selain "auth", grup ini akan memiliki middleware "simple_users"
     Rute::grup(['middleware' => ['simple_users'], 'prefix' => 'user'], function () {
         Rute::resource('tugas', 'TaskController');
     });

     // /admin/XXX: Grup ini tidak akan memiliki "simple_users", tetapi akan memiliki "auth" dan "admins"
     Route::group(['middleware' => ['admins'], 'prefix' => 'admin'], function () {
         Route::resource('users', 'UserController');
     });
});
```

### Tip 3. Validasi Parameter Rute – Contoh Multi-Bahasa

Kasus yang cukup umum adalah mengawali rute dengan bahasa lokal, 
seperti `fr/blog` atau `en/article/333`. Bagaimana kita memastikan 
bahwa dua huruf pertama itu tidak digunakan untuk hal lain selain bahasa?

Kita dapat memvalidasinya langsung di rute, dengan parameter `where`:

```php
Route::group(['prefix' => '{locale}', 'where' => ['locale' => '[a-zA-Z]{2}']], function () {
     Rute::get('/', 'HomeController@index');
     Route::get('article/{id}', 'ArticleController@show');
});
```

Bagian utama di sini adalah `where => ['locale' => '[a-zA-Z]{2}']` 
di mana kita menggunakan *regular expression* untuk mencocokkan parameter yang
hanya sesuai dengan kombinasi dua huruf.

### Tip 4. Dynamic Subdomain Routing

Kita bisa lihat yang satu ini langsung dari 
[dokumentasi resmi Laravel](https://laravel.com/docs/master/routing#route-group-subdomain-routing).
Jika kita memiliki subdomain dinamis, misalnya subdomain yang berbeda 
untuk setiap pengguna, paramater tersebut diperlukan sebagai variabel. 
Laravel telah melakukannya secara otomatis. Lihat contoh:

```php
Rute::domain('{account}.myapp.com')->grup(function () {
     Rute::get('user/{id}', function ($account, $id) {
         //
     });
});
```

Perhatikan bahwa `{account}` secara otomatis diteruskan sebagai 
parameter `$account` di dalam semua method controller.

### Tip 5. Route List dan Route Caching

Cara memeriksa rute yang ada dalam sebuah proyek. 
Kita mungkin tidak tahu persis ada rute apa saja dalam sebuah aplikasi.
Bisa saja tersembunyi di dalam `Route::resource()`, 
atau di dalam `Route::group` yang lebih kompleks.

Kita dapat memeriksa semua rute yang sebenarnya dengan perintah Artisan:

```bash
php artisan route:list
```

Perlu diingat, bahwa di Laravel ada [*route caching*](https://laravel.com/docs/master/routing#route-caching), 
setelah ada perubahan rute, kita perlu menjalankan perintah:

```bash
php artisan route:clear
```

**Sumber**: [https://blog.quickadminpanel.com/laravel-routing-8-advanced-tips-languages-apis-groups-validation/](https://blog.quickadminpanel.com/laravel-routing-8-advanced-tips-languages-apis-groups-validation/)