---
title: 'Static Code Analysis dengan PHPStan'
date: 2023-11-19
category: 'php'
---

Analisis kode (_Code Analysis_) adalah proses pengujian dan evaluasi kode program yang dilakukan secara statis maupun dinamis. Analisis dinamis menguji dan mengevaluasi program — saat perangkat lunak berjalan. Proses ini menangani diagnosis dan perbaikan bug, masalah memori, dan kegagalan program selama dieksekusi. Sementara analisis kode statis adalah metode evaluasi program dengan memeriksa kode sumber sebelum dieksekusi. Ini dilakukan dengan menganalisis set kode terhadap sejumlah aturan penulisan kode.

Analisis statis dijalankan sebelum pengujian perangkat lunak dimulai. Ini dilakukan untuk menjamin bahwa kode yang kita kirim untuk diuji sesuai dengan standar kualitas tertinggi. Ini juga memberikan umpan balik otomatis sehingga para pengembang akan mengetahui masalah-masalah tersebut lebih awal, yang membuatnya lebih mudah dan lebih murah untuk memperbaiki masalah tersebut.

### Jargon Analisis Kode

Sebelum membahas PHPStan, atau alat lainnya, kita perlu akrab dengan istilah-istilah yang umum digunakan dalam dunia analisis kode. Ada baiknya kita tahu apa yang akan diperiksa oleh alat analisis pada sebuah perangkat lunak.

#### Pengukuran

- **Pemberian Nama (_Naming_):** Memeriksa apakah nama variabel dan metode terlalu pendek atau terlalu panjang. Apakah mereka mengikuti konvensi penamaan seperti _camel-case_?

- **Type Hinting:** Beberapa alat dapat menyarankan nama yang konsisten dengan tipe pengembalian. Misalnya, metode `getFoo()` yang mengembalikan boolean sebaiknya dinamai `isFoo()`.

- **Baris Kode (_Lines of Code_):** Mengukur jumlah baris kode dalam kelas atau metode Anda berbanding dengan nilai maksimum. Selain itu, jumlah parameter metode atau jumlah metode dan properti publik dalam kelas juga diperhitungkan.

- **Kode yang Dikomentari (_Commented Code_):** Sebagian besar waktu, blok kode yang dikomentari tidak diperbolehkan. Selama Anda menggunakan sistem kontrol versi, Anda dapat menghapus kode yang tidak digunakan dan jika diperlukan, kode tersebut dapat dikembalikan.

- **Pernyataan Return (_Return Statements_):** Berapa banyak pernyataan return yang Anda miliki di dalam metode Anda? Banyak pernyataan return membuat metode sulit dipahami.

- **Tipe Pengembalian (_Return Types_):** Pastikan tipe pengembalian sesuai dengan yang diharapkan. Memiliki banyak kemungkinan tipe pengembalian dapat membingungkan para analisis.

#### Struktur Kode

- **Pengecualian Khusus (_Dedicated Exceptions_):** Pastikan penggunaan _exception_ khusus, bukan _exception_ waktu eksekusi umum, yang dapat diambil oleh kode klien.

- **Tidak Ada Panggilan Statis (_No Static Calls_):** Hindari menggunakan panggilan statis dalam kode Anda dan alih-alih gunakan injeksi dependensi. Ada satu pengecualian untuk metode factory.

- **DRY (_Don't Repeat Yourself_):** Periksa duplikasi kode baik dalam nilai literal yang berulang atau seluruh blok kode.

#### Kompleksitas

Memiliki banyak struktur kontrol dalam satu metode, juga dikenal sebagai piramida kehancuran. Beberapa perbaikan mungkin melibatkan:

- Pernyataan return awal
- Penggabungan pernyataan if bersarang dengan fungsi bantu yang membuat kondisi mudah dibaca

#### Masalah Keamanan

- **Algoritma Sipher:** Pastikan penggunaan sistem kriptografi tahan terhadap kriptografi, yang tidak rentan terhadap serangan terkenal seperti serangan brute force.

- **Cookies:** Selalu buat cookie yang sensitif dengan flag "secure" sehingga tidak dikirim melalui permintaan HTTP yang tidak terenkripsi.

- **Eksekusi Dinamis:** Beberapa API memungkinkan eksekusi kode dinamis dengan menyediakannya dalam bentuk string saat runtime. Sebagian besar waktu penggunaannya dihindari karena juga meningkatkan risiko injeksi kode.

### Apa yang Dibawa PHPStan?

#### Menjalankan PHPStan untuk Pertama Kalinya

Ketika pertama kali menemukan repositori PHPStan, saya menemukan klaim yang kontroversial...

> "PHPStan berfokus pada menemukan kesalahan dalam kode Anda tanpa benar-benar menjalankannya. Ini menangkap seluruh kelas bug bahkan sebelum Anda menulis tes untuk kode tersebut. Ini memindahkan PHP lebih dekat ke bahasa yang dikompilasi dalam arti bahwa kebenaran setiap baris kode dapat diperiksa sebelum Anda menjalankan baris tersebut sebenarnya."

PHPStan memiliki banyak level aturan, dan seperti yang dapat Anda lihat, semakin tinggi tingkat yang kita pilih, semakin banyak kesalahan yang kita dapatkan. Sekarang pertanyaannya, tingkat mana yang harus kita pilih? Nah, pertama-tama kita perlu tahu apa aturan dari setiap tingkat.

#### Tingkat Aturan

| Tingkat | Nama           | Detail                                                                                                                                                                |
|--------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 00     | _Basic Checks_   | Memeriksa kelas-kelas yang tidak diketahui, fungsi yang tidak diketahui, metode yang tidak diketahui yang dipanggil pada $this, jumlah argumen yang salah yang dilewatkan ke metode dan fungsi tersebut, variabel yang selalu tidak terdefinisi.                                                                                                                                                  |
| 01     | $this _Unknowns_  | Variabel yang mungkin tidak terdefinisi, metode dan properti ajaib yang tidak diketahui pada kelas dengan __call dan __get.                                                                                                           |
| 02     | _Methods_         | Metode yang tidak diketahui diperiksa pada semua ekspresi (bukan hanya $this), memvalidasi PHPDocs.                                                                                                                               |
| 03     | _Types_           | Memeriksa tipe pengembalian, tipe yang ditugaskan ke properti.                                                                                                                                                                      |
| 04     | _Dead Code_       | Pemeriksaan dasar kode mati - selalu false instanceof dan pemeriksaan tipe lainnya, cabang else mati, kode yang tidak terjangkau setelah return; dll.                                                                            |
| 05     | _Arguments_       | Memeriksa tipe argumen yang dilewatkan ke metode dan fungsi.                                                                                                                                                                        |
| 06     | _Type Hints_      | Melaporkan kurangnya petunjuk tipe.                                                                                                                                                                                                |
| 07     | _Union Types_     | Melaporkan sebagian salahnya tipe gabungan, jika Anda memanggil metode yang hanya ada pada beberapa tipe dalam tipe gabungan, level 7 mulai melaporkan hal tersebut.                                                        |
| 08     | _Nullable Types_   | Melaporkan panggilan metode dan akses ke properti pada tipe yang dapat bernilai null.                                                                                                                                              |
| 09     | _Mixed Type_       | Menjadi sangat ketat tentang tipe campuran, satu-satunya operasi yang diizinkan yang dapat Anda lakukan dengannya adalah meneruskannya ke tipe campuran lainnya.                                                             |

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