---
title: 'Mengatur Composer untuk Menggunakan Library di Folder Lokal'
date: 2024-09-29
category: 'notes'
---

Ada kalanya kita membutuhkan library yang berada di folder lokal, baik itu karena kita sedang mengembangkan pustaka tersebut secara paralel, atau mungkin pustaka tersebut tidak tersedia di repository publik seperti Packagist. Pada artikel ini, kita akan membahas bagaimana cara mengatur Composer agar dapat menggunakan library dari folder lokal.
Langkah-langkah Mengatur Composer untuk Library Lokal

## Struktur Direktori

Pertama, pastikan kita memiliki struktur direktori yang benar. Misalkan kita memiliki dua proyek:

    app adalah proyek utama kita.
    library adalah pustaka yang ingin kita gunakan di app, dan pustaka ini berada di folder lokal.

Struktur direktorinya terlihat seperti ini:

```bash
/path/to/projects
├── app/
│   └── composer.json
└── library/
    └── composer.json
```
Pastikan bahwa di dalam folder library terdapat file composer.json yang valid.

## Menambahkan Library Lokal ke Composer

Untuk menghubungkan library ke dalam app, kita perlu mengubah file composer.json di app. Buka file composer.json dan tambahkan repository baru dengan tipe path yang menunjuk ke lokasi pustaka lokal kita. Contohnya:

```json
{
    "repositories": [
        {
            "type": "path",
            "url": "../library" // penulisan dengan relatif path
        },
        // sumber repository lain ditulis setelahnya
        {
            "type": "composer",
            "url": "remote-repo-url"
        }
    ],
    "require": {
        "vendorname/library": "*" // versi yang dibutuhkan
    }
}
```

**Penjelasan:**  
  - `type: "path"`: Ini memberitahu Composer bahwa sumber pustaka adalah dari direktori lokal.
  - `url: "../library"`: Ini adalah path relatif dari app ke library. Sesuaikan path ini dengan lokasi folder kita.
  - `"vendorname/library": "*":` Nama paket dan versi yang ingin diinstal. Pastikan nama ini sesuai dengan yang ada di composer.json dari library.
  - **Urutan Repository**: Composer membaca repository dari atas ke bawah. Jika pustaka lokal berada di urutan pertama, maka Composer akan mencari pustaka tersebut di folder lokal terlebih dahulu sebelum mencoba di repository lainnya.
  - **Menulis versi**: Penggunaan `dev-main` atau `@dev` dalam `"require"` disesuaikan dengan branch atau versi dari pustaka lokal kita. Untuk pustaka di remote repository, disarankan menggunakan versi stabil seperti `^1.0`.

## Menginstall Library

Setelah kita menambahkan konfigurasi di composer.json, jalankan perintah berikut di terminal pada direktori app:

```bash
composer update
```

Composer akan mencari pustaka library di folder lokal sesuai dengan path yang telah Anda tentukan. Jika berhasil, kita akan melihat library tersebut diunduh ke dalam direktori vendor di app.

## Opsi symlink

Secara default, Composer akan menggunakan symbolic link (symlink) untuk pustaka lokal. Ini berarti perubahan yang kita lakukan di library akan langsung tercermin di app tanpa perlu menginstal ulang pustaka. Jika kita tidak ingin menggunakan symlink dan lebih memilih untuk menyalin seluruh pustaka ke dalam folder vendor, kita bisa menambahkan opsi `{"symlink": false}` di konfigurasi repository:

```json
{
    "repositories": [
        {
            "type": "path",
            "url": "../library",
            "options": {
                "symlink": false
            }
        }
    ],
    "require": {
        "vendorname/library": "*"
    }
}
```

## Pengembangan dan Pembaruan

Jika kita sedang aktif mengembangkan library dan ingin memastikan bahwa perubahan terbaru selalu terinstal di app, cukup jalankan:

```bash
composer update vendorname/library
```

Perintah ini akan memperbarui pustaka library di app dengan versi terbaru yang ada di folder lokal kita.

---

Menggunakan pustaka lokal dengan Composer bisa sangat bermanfaat dalam proses pengembangan, terutama jika kita sedang mengerjakan beberapa proyek secara paralel atau mengembangkan pustaka yang tidak tersedia di repository publik. Dengan menambahkan repository bertipe path di file composer.json, Composer dapat mengenali pustaka yang berada di folder lokal dan menggunakannya dalam proyek kita. Dengan cara ini, kita dapat memastikan pustaka lokal selalu up-to-date tanpa perlu menerbitkan pustaka ke Packagist atau repository lainnya.