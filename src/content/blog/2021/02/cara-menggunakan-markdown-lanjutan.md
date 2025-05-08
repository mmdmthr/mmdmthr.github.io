---
title: Cara Menggunakan Markdown Lanjutan
pubDate: 2021-02-09T07:26:03.284Z
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'how to'
---

Ada beberapa pemformatan yang dibutuhkan oleh penulis lanjutan. Itu juga bisa membantu dalam menulis artikel blog. Berikut sintaks Markdown yang biasa digunakan dalam penulisan yang lebih advance

## Garis Horizontal (hr)

    ---

Biasanya kita membutuhkan sebuah viusal untuk membuat pembatas antar section dalam sebuah artikel. Dengan Markdown kita bisa mengetikkan tiga strip yang akan menghasilkan elemen berikut

---

Persis seperti menggunakan elemen `<hr>` pada HTML

## Code Snippet

    Kalimat dengan `code` inline

        .css-class {
            text-decoration: bold;
        }

Jika kita sering menulis dokumentasi teknis, kita mungkin sering menggunakan code snippet untuk menampilkan sintaks kodingan kita. Untuk melakukan itu gunakan tanda backtick (`) untuk membungkus kode yang hanya satu baris. Atau tekan 4 spasi untuk membuat sebuah paragrapf menjadi satu blok kode.

## Daftar Referensi dan Judul

    **The quick brown [fox][1], jumped over the lazy [dog][2].**

    [1]: https://en.wikipedia.org/wiki/Fox "Wikipedia: Fox"
    [2]: https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog"

Penulis yang memerlukan penyematan referensi bisa menggunakan cara di atas. Angka yang dituliskan setelah text dalam kurung siku akan merujuk pada link yang ditulis dengan angka yang sama. Kata dalam kutipan setelah url adalah judul dari kutipan tersebut yang bisa juga digunakan pada link sebagai atribut title.

    [Dog](https://en.wikipedia.org/wiki/Dog "Wikipedia: Dog")

Coba letakkan kursor pada link berikut [Dog](https://en.wikipedia.org/wiki/Dog 'Wikipedia: Dog')

## Escaping

    \*kata\*

Bagaimana jika kita ingin menuliskan secara literal sebuah \*kata\* namun tidak ditampilkan sebagai cetak miring? Escape karakter Markdown dengan tanda back slash (\) supaya tanda baca tidak dikonversi menjadi tag HTML.

## Embedd HTML

    <button>HTML Button</button>

Salah satu fitur paling keren dari Markdown adalah kita tetap bisa menulis sintaks plain HTML. Teks HTML akan dibaca sebagai tag HTML seperti biasa dan menghasilkan komponen sesuai teksnya.

<button>HTML Button</button>

## Markdown Editor

Untuk segera menulis menggunakan Markdown kita bisa beralih dari plain text editor menggunakan Markdown editor yang akan menampilkan teks terformat yang bersumber dari teks Markdown. Untuk pengguna Windows ada beberapa alternatif

- [WriteMonkey](https://writemonkey.com/index.php) - Free
- [MarkdownPad](https://markdownpad.com/) - Free / Pro version
- [Texts](https://www.texts.io/) - Pro version

Jika ingin membaca lebih lanjut tentang panduan Markdown Anda bisa mengunjungi [markdownguide.org](https://markdownguide.org) atau baca post [Markdown Cheatseet](http://mmdmthr.github.io/markdown-cheatseet)
