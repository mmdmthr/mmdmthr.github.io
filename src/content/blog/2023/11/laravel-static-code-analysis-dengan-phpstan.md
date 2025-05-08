---
title: 'Static Code Analysis dengan PHPStan'
pubDate: 2023-11-25
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'php'
---

Analisis kode statis adalah metode evaluasi program dengan memeriksa kode sebelum dieksekusi. Ini dilakukan dengan memeriksa set kode berdasarkan sejumlah aturan penulisan kode (type variable, return value, dsb). Analisis statis dijalankan sebelum pengujian perangkat lunak dimulai. Proses ini dilakukan untuk menjamin bahwa kode yang kita kirim untuk diuji sesuai dengan standar kualitas tertinggi. Ini juga memberikan umpan balik otomatis sehingga para pengembang akan mengetahui masalah-masalah tersebut lebih awal, yang membuatnya lebih mudah dan lebih murah untuk memperbaiki masalah tersebut.

### Apa yang Dibawa PHPStan?

Ketika pertama kali melihat repositori PHPStan, ada klaim yang kontroversial...

> "PHPStan berfokus pada menemukan kesalahan dalam kode Anda tanpa benar-benar menjalankannya. Ini menangkap seluruh kelas bug bahkan sebelum Anda menulis tes untuk kode tersebut. Ini memindahkan PHP lebih dekat ke bahasa yang dikompilasi dalam arti bahwa kebenaran setiap baris kode dapat diperiksa sebelum Anda menjalankan baris tersebut sebenarnya."

PHPStan memiliki banyak level aturan, dan seperti yang dapat Anda lihat, semakin tinggi tingkat yang kita pilih, semakin banyak kesalahan yang kita dapatkan. Sekarang pertanyaannya, tingkat mana yang harus kita pilih? Nah, pertama-tama kita perlu tahu apa aturan dari setiap tingkat.

#### Tingkat Aturan

| Tingkat | Nama           | Detail                                                                                                                                                                |
|--------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 00     | _Basic Checks_   | Memeriksa kelas-kelas, fungsi atau method yang tidak ditemukan yang dipanggil pada $this, jumlah argumen yang salah yang dimasukkan ke method dan fungsi tersebut, variabel yang selalu tidak terdefinisi.|
| 01     | $this _Unknowns_  | Variabel yang mungkin tidak terdefinisi, method dan properti ajaib yang tidak diketahui pada kelas dengan method __call dan __get.|
| 02     | _Methods_         | Method yang tidak diketahui diperiksa pada semua ekspresi (bukan hanya $this), memvalidasi PHPDocs.|
| 03     | _Types_           | Memeriksa tipe return, tipe yang ditugaskan ke properti.|
| 04     | _Dead Code_       | Pemeriksaan dasar kode yang sudah tidak terpakai - selalu false instanceof dan pemeriksaan tipe lainnya, if else mati, kode yang tidak terjangkau setelah return; dll.|
| 05     | _Arguments_       | Memeriksa tipe argumen yang dimasukkan sebagai parameter pada method dan fungsi.|
| 06     | _Type Hints_      | Melaporkan kurangnya petunjuk tipe (argument atau return value).|
| 07     | _Union Types_     | Melaporkan sebagian salahnya tipe gabungan, jika Anda memanggil metode yang hanya ada pada beberapa tipe dalam tipe gabungan, level 7 mulai melaporkan hal tersebut.                                                        |
| 08     | _Nullable Types_   | Melaporkan panggilan metode dan akses ke properti pada tipe yang dapat bernilai null.|
| 09     | _Mixed Type_       | Menjadi sangat ketat tentang tipe campuran, satu-satunya operasi yang diizinkan yang dapat Anda lakukan dengannya adalah meneruskannya ke tipe campuran lainnya.|

#### Berkas Konfigurasi

PHPStan menggunakan berkas konfigurasi, phpstan.neon atau phpstan.neon.dist, yang memungkinkan Anda:

- Mendefinisikan path yang akan dianalisis.
- Menetapkan tingkat aturan.
- Mengecualikan path.
- Menyertakan ekstensi PHPStan.
- Mengabaikan kesalahan.
- Menentukan jumlah maksimum proses paralel.

Berikut adalah contoh berkas konfigurasi sederhana yang secara default berada di direktori root aplikasi Anda, tetapi Anda dapat mempelajari lebih lanjut dari [referensi konfigurasi](https://phpstan.org/config-reference).

```yaml
includes:
    - ./vendor/nunomaduro/larastan/extension.neon

parameters:

    paths:
        - app
        - config
        - database
        - routes

    # Tingkat 9 adalah tingkat tertinggi
    level: 5

    ignoreErrors:
        - '#PHPDoc tag @var#'

    parallel:
        maximumNumberOfProcesses: 4

    noUnnecessaryCollectionCall: false
    checkMissingIterableValueType: false
```

#### Mengabaikan Kesalahan

Kemungkinan besar, Anda akan perlu mengabaikan beberapa kesalahan yang untungnya diizinkan dengan dua cara berbeda:

1. Secara langsung menggunakan tag PHPDoc

    ```php
    function () {
        /** @phpstan-ignore-next-line */
        echo $foo;

        echo $bar /** @phpstan-ignore-line */
    }
    ```

2. Dari berkas konfigurasi dan ini sebenarnya lebih bersih

    ```yaml
    parameters:

        ignoreErrors:

            -
                message: 'Access to an undefined property [a-zA-Z0-9\_]+::\$foo'
                path: some/dir/someFile.php
            -
                message: '#Call to an undefined method [a-zA-Z0-9\_]+::doFoo()#'
                path: other/dir/DifferentFile.php
                count: 2 # opsional, dan itu akan mengabaikan dua kemunculan pertama kesalahan
          -
                message: '#Call to an undefined method [a-zA-Z0-9\_]+::doBar()#'
                paths:
                    - some/dir/*
                    - other/dir/*
    ```

Selengkapnya bisa dibaca di documentasi [https://phpstan.org/user-guide/getting-started](https://phpstan.org/user-guide/getting-started)