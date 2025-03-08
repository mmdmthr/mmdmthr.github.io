---
title: 'Sisi Lain dari Small Functions'
date: 2025-03-08
category: 'notes'
---

Small functions sering dianggap sebagai best practice dalam pemrograman. Prinsip seperti _"Single Responsibility Principle"_ (SRP) dan _"Clean Code"_ mendorong kita untuk membuat fungsi sekecil mungkin, agar mudah diuji dan dipahami. Namun, seperti halnya aturan lain dalam pengembangan perangkat lunak, terlalu berpegang pada small functions juga bisa membawa konsekuensi negatif. Artikel ini akan membahas kekurangan dari pendekatan small functions dan mengapa dalam beberapa kasus, pendekatan ini bisa lebih menyulitkan dibanding membantu.

## 1. Overhead Cost Meningkat

Semakin banyak fungsi kecil yang dibuat, semakin banyak waktu yang dihabiskan untuk memahami kode secara keseluruhan. Hal ini menciptakan **overhead cost**, terutama dalam membaca kode yang terlalu terfragmentasi. Developer harus sering melompat-lompat di antara banyak fungsi kecil hanya untuk memahami satu alur logika sederhana.

## 2. Sulit Melihat Gambaran Besar

Ketika logika utama dipecah menjadi banyak fungsi kecil, developer harus menyusuri berbagai file atau fungsi untuk memahami bagaimana semuanya bekerja bersama. Ini membuat pemahaman keseluruhan menjadi lebih sulit dibandingkan dengan satu fungsi yang cukup panjang namun tetap dapat dibaca dengan baik.

## 3. Jauh dari Model Mental yang Alami

Manusia berpikir dalam pola yang lebih holistik. Jika kode terlalu banyak dipecah menjadi lapisan-lapisan abstraksi, itu bisa menyimpang dari model mental alami yang dipahami oleh developer. Hasilnya, memahami bagaimana suatu fitur bekerja bisa menjadi lebih sulit daripada jika kode ditulis dengan cara yang lebih eksplisit dalam satu tempat.

## 4. Harus Menulis Lebih Banyak Fungsi dan Menamainya

Memecah kode menjadi small functions berarti kita harus menulis lebih banyak fungsi dan memberikan nama yang deskriptif untuk masing-masingnya. Ini bisa menjadi tantangan tersendiri, terutama ketika menemukan nama yang tepat untuk fungsi yang hanya berisi satu atau dua baris kode. Salah satu hal tersulit dalam pemrograman: memberi nama fungsi.

## 5. Meningkatkan Context Switching

Dengan banyaknya fungsi kecil, developer harus sering berpindah konteks antara satu fungsi ke fungsi lain. Context switching ini bisa memperlambat pemahaman kode dan meningkatkan beban kognitif, terutama jika ada banyak dependensi antar fungsi.

## 6. Meningkatkan Ketergantungan pada IDE dan Navigasi

Saat kode terlalu terpecah, developer sering kali harus mengandalkan fitur navigasi IDE untuk menelusuri implementasi fungsi. Ini bisa menjadi masalah ketika bekerja di lingkungan dengan alat yang lebih terbatas atau ketika membaca kode tanpa bantuan IDE yang canggih.

## 7. Tantangan dalam Melakukan Debugging

Dalam kode yang terlalu terfragmentasi, melakukan debugging bisa lebih sulit karena informasi penting tersebar di banyak tempat. Developer harus masuk ke dalam beberapa fungsi hanya untuk menemukan di mana masalah sebenarnya terjadi, alih-alih melihat semuanya dalam satu tempat yang jelas.

## Kesimpulan

Small functions bukanlah sesuatu yang buruk, tetapi seperti semua best practice, penggunaannya harus disesuaikan dengan konteks. Terlalu banyak fragmentasi dapat menyebabkan peningkatan overhead dalam membaca, memahami, dan memelihara kode. Seimbangkan antara keterbacaan, performa, dan kemudahan debugging untuk menghasilkan kode yang tidak hanya bersih, tetapi juga praktis digunakan dalam jangka panjang.

