---
title: NPM Adalah
date: 2021-02-20
category: 'resources'
---

NPM (_Node Package Manager_) adalah pengelola paket default untuk runtime JavaScript Node.js. NPM dibuat pada tahun 2009 sebagai proyek open source untuk membantu pengembang JavaScript berbagi paket modul kode dengan mudah. NPM terdiri dari dua bagian utama: di sisi kita sebagai klien menggunakan command line interface (CLI) untuk menginstall dan menerbitkan paket, dan repositori online atau disebut npm registry yang menghosting paket-paket kode open source Javascript seperti Node.JS, aplikasi web front-end, aplikasi mobile, robot, router, dan kebutuhan lain yang tak terhitung jumlahnya dari komunitas JavaScript. Banyak paket kode yang diterbitkan di NPM dengan berbagai macam fungsinya bisa mempercepat proses pengembangan web kita.

## npm init

Semua dimulai dari file package.json. Setiap project JavaScript - baik itu Node.js atau aplikasi browser - dapat dicakup sebagai paket npm dengan informasi paketnya sendiri. Tugas package.json adalah mendeskripsikan proyek tersebut. Itu seperti daftar komposisi pada bungkus makanan. package.json dibuat ketika `npm init` dijalankan untuk menginisialisasi proyek JavaScript / Node.js. Di dalamnya terdapat informasi, diantaranya metadata dasar yang disediakan oleh pengembang:

- name: nama library / proyek JavaScript Anda
- version: versi proyek Anda. Bagian ini bisa berguna sebagai sumber versi deploy.
- description: deskripsi proyek
- lisensi: lisensi proyek

## npm script

package.json juga mendukung properti scripts yang dapat didefinisikan untuk menjalankan command line yang diinstal dalam konteks lokal sebuah proyek. Misalnya, bagian skrip dari proyek npm dapat terlihat seperti ini:

```tsx
{
  "scripts": {
    "build": "tsc",
    "format": "prettier --write ** / *. ts",
    "format-check": "prettier --check ** / *. ts",
    "lint": "eslint src / ** / *. ts",
    "pack": "ncc build",
    "test": "jest",
    "all": "npm run build && npm run format && npm run lint && npm run pack && npm test"
  }
}
```

Skrip di atas memberitahu paket apa saja yang dijalankan dengan skrip perintah yang tertulis. Eslint, prettier, ncc, jest tidak harus diinstal sebagai executable global melainkan hanya lokal untuk proyek Anda di dalam folder node_modules / .bin /.

## dependencies vs devDependecies

Bagian ini ditulis dalam bentuk key value object dengan nama library npm sebagai key dan versi library yang ditulis dengan format semantik sebagai value. Ini adalah contoh dari templatenya:

```tsx
{
  "dependencies": {
    "@actions/core": "^1.2.3",
    "@actions/github": "^2.1.1"
  },
  "devDependencies": {
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.0",
    "@typescript-eslint/parser": "^2.22.0",
    "@zeit/ncc": "^0.21.1",
    "eslint": "^6.8.0",
    "eslint-plugin-github": "^3.4.1",
    "eslint-plugin-jest": "^23.8.2",
    "jest": "^25.1.0",
    "jest-circus": "^25.1.0",
    "js-yaml": "^3.13.1",
    "prettier": "^1.19.1",
    "ts-jest": "^25.2.1",
    "typescript": "^3.8.3"
  }
}
```

Dependensi ini nantinya akan diinstal ketika menjalankan perintah `npm install` dengan flag `--save` dan `--save-dev`. Flag tersebut dimaksudkan untuk memberi tahu dependensi akan digunakan masing-masing untuk lingkungan produksi dan pengembangan / pengujian. Kami akan menggali lebih dalam tentang pemasangan paket-paket ini di bagian selanjutnya. Selain itu penting untuk memahami kemungkinan tanda yang muncul sebelum versi semantik (baca selengkapnya tentang semantic versioning):

- ^: rilis minor terbaru. Misalnya, spesifikasi ^1.0.4 mungkin menginstal versi 1.3.0 jika itu adalah versi minor terbaru dalam 1 seri utama.
- ~: rilis patch terbaru. Dengan cara yang sama seperti ^ untuk rilis minor, spesifikasi ~ 1.0.4 mungkin menginstal versi 1.0.7 jika itu adalah versi minor terbaru dalam seri 1.0 minor.
  Semua versi paket yang tepat ini akan didokumentasikan dalam file package-lock.json yang dihasilkan.

## package-lock.json

File ini menjelaskan versi pasti dari dependensi yang digunakan dalam proyek JavaScript npm. Jika dianalogikan seperti makanan package.json adalah label bahan dengan deskripsi secara umum, di dalam package-lock.json semua terlihat lebih detil. Dan sebagaimana makanan kita biasanya hanya membaca secara umum komposisinya, tidak perlu membaca kapan bawang dalam sebuah makanan dipanen dsb. package-lock.json tidak dimaksudkan untuk dibaca baris demi baris oleh pengembang. package-lock.json biasanya dibuat oleh perintah npm install, dan juga dibaca oleh alat NPM CLI kita untuk memastikan reproduksi lingkungan build untuk proyek dengan perintah `npm ci`.

Sumber: [freecodecamp.org](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
