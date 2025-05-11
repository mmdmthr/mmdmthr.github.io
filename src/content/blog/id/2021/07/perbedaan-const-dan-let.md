---
title: Perbedaan const dan let
pubDate: 2021-07-24
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'javascript'
---

Sampai tahun 2015 JavaScript menggunakan `var` untuk mendeklarasikan variabel.
Sejak ES6 muncul `const` dan `let` digunakan untuk mendeklarasikan variabel. 
Apa perbedaan keduanya? Kita bisa lihat dari karakteristik berikut:

1. `const` harus diinisialisasi saat deklarasi
```tsx
const a
```
Menyebabkan error `SyntaxError: Missing initializer in const declaration`. 
Ketika mendeklarasikan variabel harus menginisialisasi sebuah nilai
```tsx
const a = 1
```
Sedangkan pendeklarasian `let` tidak harus dengan inisialisasi nilai
```tsx
let a
a = 1
```
2. `const` tidak dapat di-*assign* ulang nilainya setelah diinisialisasi
```tsx
const a = 1
a = 2
```
Menyebabkan error `TypeError: Assignment to constant variable`, 
sementara `let` dapat di-*assign* ulang nilainya
```tsx
let a = 1
a = 2
```
3. `const` dan `let` tidak dapat dideklarasikan ulang
```tsx
let a = 1
let a = 2
//
const a = 1
const a = 2
```
Menyebabkan error `SyntaxError: Identifier 'a' has already been declared`

Lalu apa faedahnya? Paling aman gunakan `const`, kecuali kita tahu persis akan melakukan
perubahan nilai dari variabel yang kita buat. Jika sebuah variabel tidak
bisa diubah nilainya maka itu akan mengurangi kemungkinan bug yang disebebabkan oleh
nilai variabel yang tidak sengaja berubah.