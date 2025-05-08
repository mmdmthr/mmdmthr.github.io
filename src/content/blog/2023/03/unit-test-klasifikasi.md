---
title: Unit Test - Klasifikasi
pubDate: 2023-03-25
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'testing'
---

Sebelum membuat *test case* apa pun, kita perlu menentukan 
nilai input dari fungsi/metode tertentu yang perlu dites. 
*Test case* harus dirancang untuk mencakup semua kombinasi nilai masukan 
dan prasyarat (*precondition*). Jenis input dataset untuk unit test 
bisa dibagi 3.

1. **Normal**: Input berada pada nilai rentang normal (yang dapat diterima). 
Sejumlah besar kode dapat dicakup hanya dengan menjalankan *test case* normal.
1. **Boundary (*Batas*)**: Input berada pada atau di luar batas maksimum atau minimumnya. 
Kasus tersebut lebih digunakan untuk mengidentifikasi kesalahan pada batas daripada menemukan 
yang ada di pusat domain input.
1. **Abnormal**: Input tidak valid (ilegal atau tidak diharapkan) untuk menguji 
penanganan dan pemulihan kesalahan.

Contoh: *Misalkan kita memiliki fungsi yang memvalidasi alamat email yang dimasukkan oleh pengguna. Panjang maksimum alamat email adalah 50 karakter.*

```php
function validate($email) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL) && strlen($email) <= 50) {
        return true;
    }
    return false;
}
```

Kita dapat menulis test case seperti di bawah ini:

### Normal cases

```php
public function test_valid_email_format_and_length()
{
    // Email dengan panjang 18 (kurang dari: maximum - 1)
    $email = 'sample@framgia.com';
    $this->assertEquals(true, validate($email));
}
```

### Boundary cases

```php
public function test_valid_email_format_and_length_max_minus()
{
    // Email dengan panjang 49 (maximum - 1)
    $email = 'samplesamplesamplesamplesamplesamples@framgia.com';
    $this->assertEquals(true, validate($email));
}

public function test_valid_email_format_and_length_max()
{
    // Email dengan panjang 50 (nilai dama dengan maximum)
    $email = 'samplesamplesamplesamplesamplesamplesa@framgia.com';
    $this->assertEquals(true, validate($email));
}

public function test_valid_email_format_and_length_max_plus()
{
    // Email dengan panjang 51 (maximum + 1)
    $email = 'samplesamplesamplesamplesamplesamplesam@framgia.com';
    $this->assertEquals(false, validate($email));
}
```

### Abnormal cases

```php
public function test_invalid_email_format()
{
    // Format email tidak valid dengan panjang normal (antara 0 ~ 50)
    $email = 'framgia.com';
    $this->assertEquals(false, validate($email));
}

public function test_valid_email_format_and_length_exceeded()
{
    // Email dengan panjang 54
    $email = 'samplesamplesamplesamplesamplesamplesample@framgia.com';
    $this->assertEquals(false, validate($email));
}
```

Sumber: [https://github.com/framgia/laravel-test-guideline/blob/master/en/Knowledge.md](https://github.com/framgia/laravel-test-guideline/blob/master/en/Knowledge.md)