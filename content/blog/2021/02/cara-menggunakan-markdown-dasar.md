---
title: Cara Menggunakan Markdown Dasar
date: 2021-02-07T07:26:03.284Z
category: 'how to'
---

Markdown dirancang dengan tujuan mudah dibaca oleh manusia. Sebagian besar sintaksnya sederhana dan intuitif sehingga mudah dipelajari. Berikut beberapa sintaks yang mungkin sering anda gunakan dalam menulis.

## Heading

    # Heading 1
    ## Heading 2
    ### Heading 3

Heading pada Markdown ditulis dengan tanda pagar/hash (#). Jumlah pagar menentukan tingkat heading tersebut. Satu pagar menghasilkan h1, dua pagar menghasilkan h2 dan seterusnya sampai maksimal 6 tingkat. Pada praktiknya kita seringkali hanya menggunakan 3 tingkat saja.

## Text

    *italic*
    **bold**
    ***bold-italic***
    [link](https://example.com)

Biasanya kita membutuhkan _tekanan_ pada tulisan kita. Kita bisa menggunakan Markdown untuk membuat penekanan dengan _cetak miring_, **cetak tebal** atau **_cetak miring dan tebal_**. Markdown membuatnya cukup intuitif dengan melambangkannya sesuai jumlah tanda bintang.

Untuk membuat teks link, bungkus teksnya menggunakan tanda kurung siku [] lalu letakkan url setelahnya dengan membungkusnya menggunakan kurung biasa ().

## Image

    ![alt](https://image.com/link.jpg)

Untuk menyematkan gambar pada Markdown caranya hampir sama dengan link, hanya saja sintaks image diawali dengan tanda seru !. Di dalam kurung siku diisi dengan alt atau teks deskriptif mengenai gambar. lalu letakkan url gambar setelahnya dengan membungkusnya menggunakan kurung biasa ().

## List

    * Susu
    * Roti
        * Roti Tawar
        * Roti selai cokelat
    * Mentega

    1. Merapikan taman
    2. Membersihkan dapur
    3. Memasak

Memformat list menggunakan HTML mungkin cukup merepotkan. Di Markdown kita bisa membuat list dengan sangat natural. Jika menginginkan bullet list, ganti tanda \* pada contoh dengan - atau + lalu tanda itu akan diubah menjadi dot (titik). Kita juga bisa membuat list yang bersarang dengan menambah 4 spasi, list dengan indentasi akan otomatis menjadi child. Untuk format angka lakukan hal yang serupa, tetapi tidak menggunakan tanda bintang, gunakan saja angka biasa

- Susu

* Roti
  - Roti Tawar
  * Roti selai cokelat

- Mentega

1. Merapikan taman
   1. Memotong rumput
   2. Menyiram bunga
2. Membersihkan dapur
3. Memasak

## Quotes (kutipan)

    > "I think it is possible for ordinary people to choose to be extraordinary."

Kutipan pada Markdown diawali dengan tanda lebih besar dari (>). Contoh di atas akan diubah menjadi blok quote di bawah.

> "I think it is possible for ordinary people to choose to be extraordinary."

Dengan menguasai sintaks di atas, kita sudah bisa menulis konten menggunakan Markdown. Masih banyak lagi yang bisa kita lakukan dengan Markdown, baca di artikel [Cara Menggunakan Markdown Lanjutan](https://mmdmthr.github.io/cara-menggunakan-markdown-lanjutan)
