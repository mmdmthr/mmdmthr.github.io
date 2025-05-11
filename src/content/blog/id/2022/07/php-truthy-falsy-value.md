---
title: PHP Truthy dan Falsy Value
pubDate: 2022-07-24
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'php'
---

Saat kita menggunakan nilai non-boolean dalam konteks boolean, misalnya untuk kondisi pada pernyataan `if`. 
PHP mengevaluasi nilai tersebut menjadi nilai boolean. Nilai-nilai berikut dievaluasi menjadi `false`:

- Kata kunci `false`
- Bilangan bulat nol `0`
- Angka desimal nol `0.0` dan `-0.0` 
- String kosong `""` dan string `"0"`
- Nilai `NULL`
- Array kosong, yaitu array dengan elemen nol `[]`

PHP mengevaluasi nilai lain menjadi `true`.

Kita bisa melihat hasil evaluasi nilai non-boolean menjadi boolean pada PHP menggunakan cast `(bool)` atau `(boolean)`

```php
<?php
var_dump((bool) false);     // bool(false)
var_dump((bool) 0);         // bool(false)
var_dump((bool) 0.0);       // bool(false)
var_dump((bool) "0");       // bool(false)
var_dump((bool) "");        // bool(false)
var_dump((bool) array());   // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) "false");   // bool(true)
?>
```

Referensi:  
[https://www.php.net/manual/en/language.types.boolean.php](https://www.php.net/manual/en/language.types.boolean.php)