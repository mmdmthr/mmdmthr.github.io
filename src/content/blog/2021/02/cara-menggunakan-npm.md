---
title: Cara Menggunakan NPM
pubDate: 2021-02-17
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'how to'
---

Di sisi pengguna, kita bisa menginstall paket-paket yang tersedia gratis di npm registry dengan menjalankan CLI. Jadi ada baiknya mengetahui cara menggunakan alat yang powerfull ini.

**npm install** - adalah perintah yang paling umum digunakan saat mengembangkan aplikasi JavaScript / Node.js saat ini. Secara default, `npm install <package-name>` akan menginstal versi terbaru dari sebuah paket dengan tanda versi ^. Instalasi npm dalam konteks lokal sebuah project adalah mengunduh paket ke folder node_modules di dalam direktori project sesuai dengan spesifikasi package.json, mengupdate versi paket (dan meregenerasi package-lock.json) di mana pun itu berdasarkan pada pencocokan versi yang ditandai dengan ^ dan ~ .

Kita dapat menambahkan flag global (-g) jika ingin menginstal paket dalam konteks global yang dapat digunakan di direktori manapun dalam komputer (umumnya pada paket tool CLI seperti live server misalnya). npm telah membuat penginstalan paket JavaScript begitu mudah sehingga perintah ini sering digunakan secara tidak benar. Akibatnya npm banyak menjadi lelucon programmer karena menghasilkan folder node_module dengan ukuran sangat besar.

Di sinilah `--production` flag berperan. Di bagian sebelumnya, kita membahas dependensi dan devDependency yang dimaksudkan untuk penggunaan masing-masing dalam lingkungan produksi dan pengembangan / pengujian. Dengan melampirkan `--production` flag ke perintah `npm install`, kita hanya akan menginstal paket dari dependensi, sehingga secara drastis mengurangi ukuran node_modules. Kita hanya menginstal apa yang benar-benar diperlukan agar aplikasi dapat aktif dan berjalan.

**npm ci** - jika `npm install` `--production` optimal untuk lingkungan produksi, haruskah ada perintah yang optimal untuk pengaturan pengembangan lokal dan pengujian? Gunakan `npm ci`. Sama seperti bagaimana jika package-lock.json belum ada dalam proyek yang dihasilkan setiap kali `npm install` dipanggil, `npm ci` menggunakan file ini untuk mengunduh versi yang tepat dari setiap paket yang menjadi dependensi proyek kita. Ini adalah cara memastikan bahwa konteks proyek kita sama persis ketika dijalankan di berbagai mesin, baik laptop kita yang digunakan untuk pengembangan atau lingkungan build CI (Continuous Integration) seperti Github Actions.

**npm audit** - Dengan banyaknya paket yang telah diterbitkan dan dapat dengan mudah diinstal, paket npm rentan terhadap penerbit paket yang buruk dengan niat jahat yang mungkin terjadi seperti [dalam artikel ini](https://jsoverson.medium.com/how-two-malicious-npm-packages-targeted-sabotaged-one-other-fed7199099c8). Menyadari adanya masalah pada ekosistem tersebut, organisasi npm.js memunculkan ide tentang `npm audit`. Mereka membuat daftar celah keamanan yang dapat diaudit oleh pengembang terhadap dependensi paket mereka menggunakan perintah `npm audit`. `npm audit` memberikan informasi kepada pengembang tentang kerentanan dan apakah ada versi dengan perbaikan untuk ditingkatkan. Sebagai contoh,

![screenshot npm audit](https://www.freecodecamp.org/news/content/images/2020/06/npm-audit-result.png)

Jika remediasi tersedia di upgrade versi non-breaking berikutnya, `npm audit fix` dapat digunakan untuk mengupgrade versi dependensi yang terpengaruh secara otomatis.

Sumber: [freecodecamp.org](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
