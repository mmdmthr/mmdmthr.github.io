---
title: Tips Routing Laravel - Bagian 2
date: 2023-03-25
category: 'laravel'
---

### Tip 6. Hati-hati dengan Binding Model Route Bahasa Non-Inggris

Terkadang, URL harus berisi kata-kata non-Inggris. Misalnya, 
kita memiliki portal berbahasa Indonesia untuk perpustakaan 
dan ingin memiliki URL `/daftar-buku` untuk melihat daftar buku, 
dan `/buku/1` untuk melihat sebuah buku, seperti *Resource Controller* biasa.

Tapi di database, semua nama harus dalam bahasa Inggris. 
Dengan asumsi *"magic"* Laravel bisa bekerja dengan kata benda tunggal dan jamak,
kita membuat model `Book` lengkap dengan migrasi dan controller, dengan perintah ini:

```bash
php artisan make:model Book -mcr
```

Tambahan `-mcr` akan membuat model dan resource controller,
ini hasilnya:

```php
/**
 * Display the specified resource.
 *
 * @param  \App\Book  $book
 * @return \Illuminate\Http\Response
 */
public function show(Book $book)
{
    // ...
}
```

Tetapi dengan perintah tersebut, di `route/web.php` kita akan memiliki ini:

```php
Route::resource('buku', 'BookController');
```

Masalahnya adalah itu tidak akan bekerja dan itu tidak akan 
menimbulkan error, hanya variabel `$book` yang akan kosong, 
dan ini seringkali membuat kita tidak mengerti mengapa itu terjadi.

Menurut deskripsi Resource Controller, nama variabel 
harus sama dengan parameter dalam bentuk tunggal:

```php
// Tidak bekerja
public function show(Book $book)
{
    // ...
}

// Seharusnya
public function show(Book $buku)
{
    // ...
}
```

Dalam proyek dengan Bahasa non Inggris, tidak disarankan menggunakan 
`Route::resource` dan Route Model Binding sama sekali. 
Terlalu banyak *"magic"* tidak dapat diprediksi. Dalam struktur bahasa Inggris, 
Laravel akan dengan mudah mengetahui bahwa `book` adalah bentuk tunggal dari `books`.
Namun, bagaimana Laravel akan "menebak" bahwa "buku" dianggap sebagai 
bentuk tunggal dari "daftar buku"?

### Tip 7. Route API – dari V1 ke V2

Bayangkan kita bekerja dengan proyek berbasis API 
dan perlu merilis versi baru dari API ini. 
Jadi `endpoint` versi yang lama harus tetap di `api/[sesuatu]`, 
dan untuk versi baru kita akan menggunakan `api/V2/[sesuatu]`.

Seluruh logika ada di file `app/Providers/RouteServiceProvider.php`:

```php
public function map()
{
    $this->mapApiRoutes();

    $this->mapWebRoutes();

    // ...
}

protected function mapWebRoutes()
{
    Route::middleware('web')
        ->namespace($this->namespace)
        ->group(base_path('routes/web.php'));
}

protected function mapApiRoutes()
{
    Route::prefix('api')
        ->middleware('api')
        ->namespace($this->namespace)
        ->group(base_path('routes/api.php'));
}
```

Kita bisa melihat, route API didaftarkan dalam fungsi terpisah dengan *prefix* api.
Jadi, jika kita ingin membuat grup route V2, kita dapat membuat `route/api_v2.php` 
secara terpisah dan lakukan ini:

```php
public function map()
{
    // ... tambahkan map api v2

    $this->mapApiV2Routes();
}

// Tambahkan method baru
protected function mapApiV2Routes()
{
    Route::prefix('api/V2')
        ->middleware('api')
        ->namespace($this->namespace)
        ->group(base_path('routes/api_v2.php'));
}
```

Dengan cara ini, route lama tidak akan rusak, 
dan kita cukup membuat serangkaian route baru.

### Kiat 7. Rate Limiter (Pembatasan) – Secara Global dan untuk Pengguna

Kita dapat membatasi beberapa URL untuk dipanggil 
maksimal 60 kali per menit, dengan `throttle:60,1`.

```php
Route::middleware('auth:api', 'throttle:60,1')->group(function () {
    Route::get('/user', function () {
        //
    });
});
```

Kita juga dapat melakukannya secara terpisah 
untuk pengguna umum dan untuk pengguna yang log in.

```php
// maksimal 10 request per menit untuk pengguna umum dan 60 untuk user yang terotentikasi
Route::middleware('throttle:10|60,1')->group(function () {
    //
});
```

Selain itu kita bisa membatasi jumlah untuk pengguna tertentu 
berdasarkan kolom `users.rate_limit` di database:

```php
Route::middleware('auth:api', 'throttle:rate_limit,1')->group(function () {
    Route::get('/user', function () {
        //
    });
});
```

**Sumber**: [https://blog.quickadminpanel.com/laravel-routing-8-advanced-tips-languages-apis-groups-validation/](https://blog.quickadminpanel.com/laravel-routing-8-advanced-tips-languages-apis-groups-validation/)