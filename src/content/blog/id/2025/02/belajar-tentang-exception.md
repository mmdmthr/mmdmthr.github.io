---
title: 'Belajar tentang Exception'
pubDate: 2025-02-22
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

> Exceptions are used to change the normal flow of a script if a specified error occurs.

Dalam pemrograman, _exception_ digunakan untuk menangani kondisi kegagalan yang tidak dapat diatasi dengan cara biasa. [Artikel ini](https://mattwarren.org/2016/12/20/Why-Exceptions-should-be-Exceptional/) menganalogikan situasi yang harusnya tidak terjadi ini seperti peluang sebuah asteroid menabrak bumi, paling tidak peluang kasusnya terjadi adalah kurang dari 1:1000. Ada beberapa poin sejauh ini yang saya pelajari tentang exception:

### Exception Dilempar Jika Post-Condition Tidak Terpenuhi

Saat suatu fungsi dipanggil, kita memiliki ekspektasi tertentu tentang apa yang akan dicapai fungsi tersebut. Secara formal, ekspektasi ini disebut _post-conditions_. Jika fungsi ini gagal memenuhi post-conditions-nya, maka fungsi tersebut harus memunculkan exception.

Ketika sebuah metode memiliki ekspektasi tertentu (post-condition), maka exception harus dilempar jika kondisi tersebut gagal. Contoh:

```php
$model->save();
// post-condition: The model object is saved.
```

Jika model tidak tersimpan karena alasan tertentu, maka exception harus dimunculkan karena post-condition tidak terpenuhi, menunjukkan kondisi yang tidak normal.

```php
$model->save()
// post-condition: (the model is saved && result == true) ||
//                 (the model is not saved && result == false)
```
Jika save tidak benar-benar menyimpan, maka hasil yang dikembalikan akan bernilai false, tetapi post-condition masih dapat terpenuhi, maka tidak ada exception.

### Catch Exception pada Titik Strategis

Exception sebaiknya hanya ditangkap di titik-titik tertentu dalam aplikasi, seperti batas antar modul atau pada tingkat paling atas dari aplikasi (misalnya dalam controller atau job queue handler). Hindari terlalu sering menangkap dan melempar ulang exception kecuali ada kebutuhan khusus, seperti membatalkan perubahan dalam transaksi.

Exception memiliki overhead lebih tinggi dibanding return biasa. Exception lebih sulit di-debug karena bisa menghentikan eksekusi dan "melompat" ke handler. Sebaiknya hanya digunakan untuk kondisi gagal yang tidak bisa ditangani secara normal.

Melempar exception sebenarnya cukup mahal sehingga banyak pakar menyarankan untuk membatasinya pada kasus-kasus yang diyakini bahwa kurang dari 1 panggilan dalam 1000 (99,9%) ke layanan tertentu akan memerlukan exception. 

Ini berarti melemparkan exception pada hal-hal seperti argumen yang tidak valid ke API mungkin baik-baik saja, tetapi di sisi lain melemparkan exception karena input pengguna yang tidak valid, atau teks yang diformat dengan buruk dari sistem eksternal, bisa menjadi ide yang buruk. Penggunaan exception yang signifikan dalam validasi logika bisnis lebih sering merupakan ide yang buruk daripada yang baik, jadi kita perlu berhati-hati.

### Hindari Menggunakan Exception untuk Flow Control

Exception seharusnya tidak digunakan sebagai pengganti percabangan logika (`if`, `switch`). 

Contoh yang buruk:

```php
try {
    $user = getUserOrFail($username);
} catch (UserNotFoundException $e) {
    $user = createGuestUser($username);
}
```

Lebih baik menggunakan pendekatan yang lebih langsung:

```php
$user = getUser($username) ?? createGuestUser($username);
```

Menggunakan exception untuk flow control memperlambat eksekusi dan membuat kode sulit dipahami.

### Gunakan Exception yang Spesifik
Alih-alih menggunakan `Exception` generik, lebih baik gunakan exception yang spesifik agar lebih mudah ditangani:

```php
throw new InvalidArgumentException('Email tidak valid');
```

Dengan exception yang spesifik, kita dapat menangani error secara lebih terarah. Di sini kita juga bisa membuat custom exception.

### Aplikasi Tetap Berjalan

Exception seharusnya tidak menyebabkan aplikasi berhenti sepenuhnya. Misalnya, dalam aplikasi berbasis request-response seperti Laravel, exception harus ditangani dengan baik agar sistem tetap bisa melayani permintaan lain meskipun ada error pada satu request. Paling tidak exception ditangkap, lalu fungsi mengembalikan respon disertai informasi error, sehingga bagian FE bisa memberitahu user apa yang sebenarnya terjadi.

*Referensi:*
- [Jim Weirich on exception](https://avdi.codes/jim-weirich-on-exceptions/)
- [Why Exceptions Should Be Exceptional](https://mattwarren.org/2016/12/20/Why-Exceptions-should-be-Exceptional/)
- [Exception Cost When To Throw and When Not To](https://learn.microsoft.com/en-us/archive/blogs/ricom/exception-cost-when-to-throw-and-when-not-to)