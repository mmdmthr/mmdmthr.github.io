---
title: Laravel Routing
date: 2021-07-26
category: 'laravel'
---

Class Route pada Laravel menyediakan method yang sederhana 
untuk mendefinisikan route dan fungsi-fungsinya tanpa file konfigurasi
yang rumit. Route yang paling dasar menerima parameter URI dan sebuah closure.

```tsx
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'Hello World';
});
```

## Mengarahkan pada Controller

Pada kebanyakan aplikasi, kita mengarahkan URL menuju controller dan method
yang akan menangani permintaan.

```tsx
use App\Http\Controllers\UserController;

Route::get('/user', [UserController::class, 'index']);
// Mengarahkan ke method index pada UserController
```

## Merespon Request Sesuai dengan HTTP Verb

Router pada Laravel dapat merespon semua HTTP verb

```tsx
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);
```

Jika ingin membuat route yang merespon beberapa HTTP verb sekaligus bisa menggunakan 
method `match`, atau jika menginginkan route yang merespon semua HTTP verbs
bisa menggunakan method `any`:

```tsx
Route::match(['get', 'post'], '/', function () {
    //
});

Route::any('/', function () {
    //
});

```

## Route untuk Resource Controller

Kadang kita memperlakukan setiap model data sebagai "*resource*",
dimana kita melakukan serangkaian operasi yang sama pada resource
tersebut. Misalnya kita memiliki aplikasi yang mengelola data buku dan film.
Kita akan membuat fitur create, read, update atau delete pada *resource* tersebut.

Fitur tersebut umum sekali dibuat pada aplikasi, sehingga Laravel menyediakan 
resource controller, sebuah controller dengan method yang lengkap beserta 
route create, read, update, and delete ("CRUD") dalam satu baris kode saja. 

Untuk membuat controllernya gunakan perintah php artisan dengan tambahan 
`--resource`

```tsx
php artisan make:controller PhotoController --resource
```

Perintah tersebut akan membuat controller baru yang di dalamnya sudah terdapat
method-method untuk masing-masing operasi CRUD. Selanjutnya cukup buat satu baris kode
yang sudah mencakup semua method pada controller resource.

```tsx
use App\Http\Controllers\PhotoController;

Route::resource('photos', PhotoController::class);
```

Satu baris route di atas akan membuat beberapa route yang akan menangani
variasi fungsi pada resource sesuai dengan HTTP verbs-nya. Jika kita memiliki
beberapa resource bisa juga digabungkan menggunakan array

```tsx
Route::resources([
    'photos' => PhotoController::class,
    'posts' => PostController::class,
]);
```

Jika sudah memiliki route di luar resource, letakkan kodenya di atas route resource.
Fungsi yang ditangani resource controller dan route yang dibuat:

<table>
<thead>
<tr>
<th>Verb</th>
<th>URI</th>
<th>Action</th>
<th>Route Name</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td><code>/photos</code></td>
<td>index</td>
<td>photos.index</td>
</tr>
<tr>
<td>GET</td>
<td><code>/photos/create</code></td>
<td>create</td>
<td>photos.create</td>
</tr>
<tr>
<td>POST</td>
<td><code>/photos</code></td>
<td>store</td>
<td>photos.store</td>
</tr>
<tr>
<td>GET</td>
<td><code>/photos/{photo}</code></td>
<td>show</td>
<td>photos.show</td>
</tr>
<tr>
<td>GET</td>
<td><code>/photos/{photo}/edit</code></td>
<td>edit</td>
<td>photos.edit</td>
</tr>
<tr>
<td>PUT/PATCH</td>
<td><code>/photos/{photo}</code></td>
<td>update</td>
<td>photos.update</td>
</tr>
<tr>
<td>DELETE</td>
<td><code>/photos/{photo}</code></td>
<td>destroy</td>
<td>photos.destroy</td>
</tr>
</tbody>
</table>


## Menampilkan View

Jika hanya ingin menampilkan halaman tertentu (view) maka tidak perlu
membuat controller method, langsung saja gunakan `Route::view()`

```tsx
// Daripada memebuat controller dan method dulu
class TextsController extends Controller
{
  public function about()
  {
    return view('texts.about');
  }
}
// Kemeudian membuat route seperti ini
Route::get('about', [PageController::class, 'action']);
//
//
// Lebih singkat langsung saja
Route::view('about', 'texts.about');
```

Method `view` menerima tiga argument, pertama URI, kedua nama view-nya 
lalu yang ketiga data berupa array (opsional).

```tsx
Route::view('about', 'texts.about', ['name' => 'Hari']);
```
## Menambahkan Parameter dengan Fungsi `route()`

Jika ingin menambahkan parameter pada route, buat array 
dengan pasangan key/value. Parameter tersebut akan 
ditambahkan pada string query URL.

```tsx
Route::get('user/{id}/profile', function ($id) {
//
})->name('profile');
$url = route('profile', ['id' => 1, 'photos' => 'yes']);
// Hasilnya: /user/1/profile?photos=yes
```

## Melihat Route yang Sudah Dibuat

Gunakan perintah php artisan `route:list` untuk melihat route yang
ada pada aplikasi kita.

```tsx
php artisan route:list
```