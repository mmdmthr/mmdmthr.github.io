---
title: Apa Itu OAuth2 part 1
pubDate: 2023-04-16
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

OAuth 2.0 adalah protokol standar industri untuk otorisasi. OAuth 2.0 berfokus pada kesederhanaan pengembang aplikasi klien serta memberikan alur otorisasi khusus untuk aplikasi web, aplikasi desktop, ponsel, dan perangkat ruangan.

## Roles (Peran)

### Aplikasi Pihak Ketiga: "Client"

*Client* adalah aplikasi yang berusaha mendapatkan akses ke data pengguna. Aplikasi pihak ketiga ini perlu mendapatkan izin dari pengguna sebelum dapat mengakses sumber daya di server penyedia layanan.

### API: "Resource Server (Server Sumber Daya)"

Server sumber daya adalah server API yang digunakan untuk mengakses data pengguna.

### Authorization Server (Server Otorisasi)

Ini adalah server yang menyajikan antarmuka tempat pengguna dapat menyetujui atau menolak permintaan akses. Dalam implementasi yang lebih kecil, ini mungkin server yang sama dengan server API, tetapi dalam penerapan pada skala yang lebih besar, server ini sering dibangun sebagai komponen terpisah.

### User/Pengguna: "Resource Owner (Pemilik Sumber Daya)"

Pemilik sumber daya adalah pengguna yang memberikan akses ke sebagian sumber daya di akunnya.

### Contoh

Kita sedang mengembangkan aplikasi yang perlu mengakses data pada Google Drive pengguna. Aplikasi yang kita buat dalam kasus tersebut berperan sebagai client. Sementara pemilik akun Google Drive berperan sebagai *resource owner*, dia adalah pemilik sumber daya yang berhak mengizinkan atau menolak permintaan dari aplikasi kita untuk mengakses data-datanya. Sementara Google adalah penyedia layanan API sekaligus server otorisasi. Aplikasi yang kita buat hanya bisa mengakses data-data di server hanya jika diberikan izin oleh pengguna.

## Membuat Aplikasi

Sebelum dapat memulai proses OAuth, kita harus mendaftarkan aplikasi client ke penyedia layanan terlebih dahulu (dalam contoh di atas Google Drive API). Saat mendaftarkan aplikasi baru, kita biasanya memberikan informasi dasar seperti nama aplikasi, situs web, logo, dll. Selain itu, kita harus mendaftarkan redirect URI yang akan digunakan untuk mengalihkan pengguna ke server web, aplikasi berbasis browser, atau aplikasi seluler.

### Redirect URI

Penyedia layanan hanya akan mengarahkan pengguna ke URI terdaftar, ini untuk membantu mencegah beberapa jenis serangan. Redirect URI berupa HTTP harus disajikan melalui HTTPS. Ini membantu mencegah token dicegat dan terbaca selama proses otorisasi. Aplikasi native dapat mendaftarkan redirect URI dengan skema URL khusus untuk aplikasi tersebut, yang mungkin terlihat seperti demoapp://redirect.

### Client ID dan Secret

Setelah mendaftarkan aplikasi client, kita akan menerima ID klien dan secara opsional kode rahasia klien. ID klien dianggap sebagai informasi publik, dan digunakan untuk membuat URL login, atau disertakan dalam kode Javascript di halaman. Kode rahasia klien harus dijaga kerahasiaannya. Jika aplikasi yang diterapkan tidak dapat menjaga kerahasiaan kode ini, seperti aplikasi SPA Javascript atau aplikasi native, maka kode tersebut tidak digunakan, dan idealnya layanan tidak seharusnya mengeluarkan kode rahasia untuk jenis aplikasi ini sejak awal.

**Sumber**: [https://aaronparecki.com/oauth-2-simplified/](https://aaronparecki.com/oauth-2-simplified/)