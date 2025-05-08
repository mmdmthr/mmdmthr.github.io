---
title: 'Tips dan Trik Laravel Eloquent'
pubDate: 2023-09-09
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'laravel'
---

Saat kita menggunakan framework Laravel, ORM Eloquent terlihat seperti mekanisme sederhana, semuanya begitu mudah dilakukan. Tetapi sebenarnya di balik layar, ada banyak fungsi semi-tersembunyi dan cara-cara yang tidak banyak diketahui untuk mencapai lebih banyak dengan itu.

### 1. *Increment* dan *Decrement*

Daripada melakukan ini:

```php
$article = Article::find($article_id);
$article->read_count++;
$article->save();
```

Kita bisa melakukan ini:

```php
$article = Article::find($article_id);
$article->increment('read_count');
```

Ini juga akan berfungsi:

```php
Article::find($article_id)->increment('read_count');
Article::find($article_id)->increment('read_count', 10); // +10
Product::find($produce_id)->decrement('stock'); // -1
```

### 2. Method X or Y

Eloquent memiliki beberapa fungsi yang menggabungkan dua method, seperti "tolong lakukan X, jika tidak lakukan Y".

Contoh 1 - `findOrFail()`

Daripada:

```php
$user = User::find($id);
if (!$user) { abort (404); }
```

Lakukan ini:

```php
$user = User::findOrFail($id);
```

Contoh 2 - `firstOrCreate()`

Daripada:

```php
$user = User::where('email', $email)->first();
if (!$user) {
  User::create([
    'email' => $email
  ]);
}
```

Lakukan ini saja:

```php
$user = User::firstOrCreate(['email' => $email]);
```

### 3. Method boot() pada Model

Ada tempat ajaib bernama `boot()` dalam model Eloquent di mana Kita dapat mengganti perilaku default:

```php
class User extends Model
{
    public static function boot()
    {
        parent::boot();
        static::updating(function($model)
        {
            // lakukan beberapa logging
            // ganti beberapa properti seperti $model->something = transform($something);
        });
    }
}
```

Mungkin salah satu contoh yang paling populer adalah mengatur nilai atribut tertentu pada saat membuat objek model. Katakanlah Kita ingin membuat atribut UUID pada saat itu.

```php
public static function boot()
{
  parent::boot();
  self::creating(function ($model) {
    $model->uuid = (string)Uuid::generate();
  });
}
```

### 4. Relasi dengan kondisi dan pengurutan

Ini adalah cara khas untuk mendefinisikan hubungan:

```php
public function users() {
    return $this->hasMany('App\User');
}
```

Tetapi tahukah Kita bahwa pada titik ini kita sudah dapat menambahkan `where` atau `orderBy`? Misalnya, jika Kita ingin relasi tertentu untuk beberapa jenis pengguna, juga diurutkan berdasarkan email, Kita dapat melakukan ini:

```php
public function approvedUsers() {
    return $this->hasMany('App\User')->where('approved', 1)->orderBy('email');
}
```

### 5. Properti Model: timestamps, appends, dll.

Ada beberapa "parameter" dari model Eloquent, dalam bentuk properti dari kelas itu. Yang paling populer mungkin adalah ini:

```php
class User extends Model {
    protected $table = 'users';
    protected $fillable = ['email', 'password']; // field mana yang booleh diisi pada saat membuat record dengan User::create()
    protected $dates = ['created_at', 'deleted_at']; // field mana yang akan dikonversi menjadi Carbon
    protected $appends = ['field1', 'field2']; // nilai tambahan yang dikembalikan dalam JSON
}
```

Dan masih ada yang lain:

```php
protected $primaryKey = 'uuid'; // tidak harus "id"
public $incrementing = false; // bahkan tidak harus otomatis bertambah!
protected $perPage = 25; // Kita dapat mengganti jumlah halaman PER MODEL (default 15)
const CREATED_AT = 'created_at';
const UPDATED_AT = 'updated_at'; // bahkan nama-nama kolom itu dapat diganti
public $timestamps = false; // atau bahkan tidak digunakan sama sekali
```

Dan masih ada lagi, di sini hanya dicantumkan yang paling menarik, untuk lebih banyak silakan cek kode class Model abstrak default dan cek semua trait yang digunakan.

### 6. Temukan beberapa entri

Semua orang tahu method `find()`, bukan?

```php
$user = User::find(1);
```

Namun tidak banyajk orang yang tahu bahwa itu bisa menerima beberapa ID sebagai array:

```php
$users = User::find([1,2,3]);
```

### 7. Where X

Ada cara elegan untuk mengubah ini:

```php
$users = User::where('approved', 1)->get();
```

Menjadi ini:

```php
$users = User::whereApproved(1)->get();
```

Kita dapat mengganti nama field apa pun dan menambahkannya sebagai sufiks ke "where" dan itu akan berfungsi secara otomatis.

Selain itu, ada beberapa method yang telah ditentukan sebelumnya dalam Eloquent, yang terkait dengan tanggal/waktu:

```php
User::whereDate('created_at', date('Y-m-d'));
User::whereDay('created_at', date('d'));
User::whereMonth('created_at', date('m'));
User::whereYear('created_at', date('Y'));
```

### 8. Urutkan berdasarkan hubungan

Sebuah "trik" yang sedikit lebih rumit. Bagaimana jika Kita memiliki topik forum tetapi ingin mengurutkannya berdasarkan posting terbaru? Permintaan yang cukup umum di forum dengan topik yang diperbarui terbaru di bagian atas, bukan?

Pertama, deskripsikan hubungan terpisah untuk posting terbaru pada topik:

```php
public function latestPost()
{
    return $this->hasOne(\App\Post::class)->latest();
}
```

Dan kemudian, di controller kita, kita bisa melakukan "sulap" ini:

```php
$users = Topic::with('latestPost')->get()->sortByDesc('latestPost.created_at');
```

### 9. Eloquent::when() - tidak ada lagi if-else
Banyak dari kita menulis kueri kondisional dengan "if-else", seperti ini:

```php
if (request('filter_by') == 'likes') {
    $query->where('likes', '>', request('likes_amount', 0));
}
if (request('filter_by') == 'date') {
    $query->orderBy('created_at', request('ordering_rule', 'desc'));
}
```

Tetapi ada cara yang lebih baik - menggunakan `when()`:

```php
$query = Author::query();
$query->when(request('filter_by') == 'likes', function ($q) {
    return $q->where('likes', '>', request('likes_amount

', 0));
});
$query->when(request('filter_by') == 'date', function ($q) {
    return $q->orderBy('created_at', request('ordering_rule', 'desc'));
});
```

Mungkin terasa tidak lebih pendek atau lebih elegan, tetapi yang paling kuat adalah pengiriman parameter:

```php
$query = User::query();
$query->when(request('role', false), function ($q, $role) {
    return $q->where('role_id', $role);
});
$authors = $query->get();
```

### 10. BelongsTo Default Models

Misalkan Kita memiliki model Post yang terkait dengan Author dan kemudian kode Blade template ini:

```php
{{ $post->author->name }}
```

Tetapi bagaimana jika penulisnya dihapus, atau kosong karena beberapa alasan? Kita akan mendapatkan error, seperti "properti dari objek non-objek".

Tentu saja, Kita dapat mencegahnya seperti ini:

```php
{{ $post->author->name ?? '' }}
```

Tetapi Kita dapat melakukannya pada method relasi di Eloquent:

```php
public function author()
{
    return $this->belongsTo('App\Author')->withDefault();
}
```

Dalam contoh ini, hubungan ``author()` akan mengembalikan model `App\Author` kosong jika tidak ada penulis yang terpasang pada posting.

Selain itu, kita dapat menetapkan nilai properti default untuk model default tersebut.

```php
public function author()
{
    return $this->belongsTo('App\Author')->withDefault([
        'name' => 'Guest Author'
    ]);
}
```

### 11. Urutkan berdasarkan Mutator

Bayangkan Kita memiliki ini:

```php
function getFullNameAttribute()
{
  return $this->attributes['first_name'] . ' ' . $this->attributes['last_name'];
}
```

Sekarang, Kita ingin mengurutkannya berdasarkan `full_name` itu? Ini tidak akan berfungsi:

```php
$clients = Client::orderBy('full_name')->get(); // tidak berfungsi
```

Solusinya cukup sederhana. Kita perlu mengurutkan hasil setelah kita mendapatkannya.

```php
$clients = Client::get()->sortBy('full_name'); // berfungsi!
```
Perhatikan bahwa nama fungsi berbeda - bukan `orderBy`, tetapi `sortBy`.

### 12. Urutan default dalam lingkup global

Bagaimana jika Kita ingin `User::all()` selalu diurutkan berdasarkan field nama? Kita dapat menetapkan lingkup global. Mari kembali ke method `boot()`, yang sudah kita sebutkan di atas.

```php
protected static function boot()
{
    parent::boot();
 
    // Urutkan berdasarkan nama ASC
    static::addGlobalScope('order', function (Builder $builder) {
        $builder->orderBy('name', 'asc');
    });
}
```

Baca lebih lanjut tentang Query Scopes [di sini](https://laravel.com/docs/10.x/eloquent#query-scopes).

### 13. Method raw query

Terkadang kita perlu menambahkan raw query ke Eloquent kita. Untungnya, ada fungsi untuk itu.

```php

// whereRaw
$orders = DB::table('orders')
    ->whereRaw('price > IF(state = "TX", ?, 100)', [200])
    ->get();
 
// havingRaw
Product::groupBy('category_id')->havingRaw('COUNT(*) > 1')->get();
 
// orderByRaw
User::where('created_at', '>', '2016-01-01')
  ->orderByRaw('(updated_at - created_at) desc')
  ->get();
```

### 14. Replicate: buat salinan dari baris

Singkat. Tanpa penjelasan mendalam, berikut adalah cara terbaik untuk membuat salinan entri basis data:

```php
$task = Tasks::find(1);
$newTask = $task->replicate();
$newTask->save();
```

### 15. Method Chunk() untuk tabel besar

Tidak benar-benar terkait dengan Eloquent, lebih tentang Collection, tetapi ini bagus - untuk memproses dataset yang lebih besar, Kita dapat memecahnya menjadi beberapa bagian.

Daripada:

```php
$users = User::all();
foreach ($users as $user) {
    // ...
}
```

Kita bisa melakukan:

```php
User::chunk(100, function ($users) {
    foreach ($users as $user) {
        // ...
    }
});
```

### 16. Buat controller dan migration saat membuat model

Kita semua tahu perintah Artisan ini:

```bash
php artisan make:model Company
```

Tetapi tahukah Kita ada tiga flag yang berguna untuk menghasilkan file terkait dengan model tersebut?

```bash
php artisan make:model Company -mcr
```
- -m akan membuat file migration
- -c akan membuat controller
- -r akan menunjukkan bahwa controller harus bersifat resource

### 17. Timpa updated_at saat menyimpan

Tahukah Kita bahwa method `save()` dapat menerima parameter? Karena itu, kita dapat memberitahunya untuk "mengabaikan" fungsi default `updated_at` untuk diisi dengan tanda waktu saat ini. Lihat ini:

```php
$product = Product::find($id);
$product->updated_at = '2019-01-01 10:00:00';
$product->save(['timestamps' => false]);
```

Di sini kita mengganti `updated_at` default dengan yang telah kita tentukan sebelumnya.

### 18. Apa hasil dari update()?

Pernahkah Kita bertanya-tanya apa yang sebenarnya dikembalikan oleh kode ini?

```php
$result = $products->whereNull('category_id')->update(['category_id' => 2]);
```

Pembaruan dilakukan di database, tetapi apa isi variabel `$result` itu?

Jawabannya adalah baris yang terupdate. Jadi jika Kita perlu memeriksa berapa banyak baris yang terpengaruh, Kita tidak perlu memanggil method yang lain - metode `update()` akan mengembalikan jumlah ini untuk Kita.

### 19. Ubah kurung menjadi kueri Eloquent

Bagaimana jika Kita memiliki campuran and-or dalam kueri SQL Kita, seperti ini:

```sql
... WHERE (gender = 'Male' and age >= 18) or (gender = 'Female' and age >= 65)
```

Bagaimana menerjemahkannya menjadi Eloquent? Ini adalah cara yang salah:

```php
$q->where('gender', 'Male');
$q->orWhere('age', '>=', 18);
$q->where('gender', 'Female');
$q->orWhere('age', '>=', 65);
```

Urutannya akan salah. Cara yang benar sedikit lebih rumit, menggunakan fungsi closure sebagai sub-kueri:

```php
$q->where(function ($query) {
    $query->where('gender', 'Male')
        ->where('age', '>=', 18);
}

)->orWhere(function($query) {
    $query->where('gender', 'Female')
        ->where('age', '>=', 65);
})
```

### 20. orWhere dengan parameter ganda

Terakhir, Kita dapat memasukkan parameter berupa array ke `orWhere()`.

Cara "biasa":

```php
$q->where('a', 1);
$q->orWhere('b', 2);
$q->orWhere('c', 3);
```

Kita bisa melakukannya seperti ini:

```php
$q->where('a', 1);
$q->orWhere(['b' => 2, 'c' => 3]);
```

Diterjemahkan dari: [20 Laravel Eloquent Tips and Tricks | Laravel News - Povilas Korop](https://laravel-news.com/eloquent-tips-tricks)