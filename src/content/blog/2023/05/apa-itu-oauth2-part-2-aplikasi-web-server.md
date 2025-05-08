---
title: Apa Itu OAuth2 part 2 - Aplikasi Web Server
pubDate: 2023-05-06
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Langkah pertama dalam proses OAuth2 adalah mendapatkan otorisasi dari pengguna (*authorization*). Pada aplikasi berbasis browser (web misalnya) atau aplikasi native mobile (Android, iOS, dsb), hal ini biasanya dilakukan dengan menampilkan antarmuka yang disediakan oleh layanan kepada pengguna. 

OAuth2 menyediakan beberapa jenis pemberian akses (*grant types*) untuk berbagai kasus penggunaan:

- **Authorization Code** untuk aplikasi yang berjalan di server web, aplikasi berbasis browser, dan seluler.
- **Password** untuk masuk dengan nama pengguna dan kata sandi (hanya untuk aplikasi pihak pertama)
- **Client credentials** untuk akses aplikasi tanpa kehadiran pengguna
- **Implicit** sebelumnya direkomendasikan untuk klien tanpa client secret, tetapi telah digantikan dengan menggunakan pemberian Kode Otorisasi dengan PKCE.

## Web Server Apps

Aplikasi server web adalah jenis aplikasi paling umum saat berhadapan dengan server OAuth. Aplikasi web ditulis dalam bahasa sisi server dan dijalankan di server di mana kode sumber aplikasi tidak dapat diakses secara publik. Ini berarti aplikasi dapat menggunakan *client secret* saat berkomunikasi dengan server otorisasi, yang dapat membantu menghindari banyak vektor serangan.

### Authorization

Buat link untuk "*log in*" pengguna:

```
https://authorization-server.com/auth?response_type=code&
  client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&scope=photos&state=1234zyx
```

- **`response_type=code`** - Menunjukkan bahwa server menghendaki untuk menerima kode otorisasi (*auth code*)
- **`client_id`** - ID klien yang kita dapat saat pertama kali membuat aplikasi
- **`redirect_uri`** - URI untuk mengembalikan pengguna ke aplikasi kita setelah proses otorisasi selesai
- **`scope`** - cakupan/bagian mana dari akun pengguna yang ingin kita akses (dapat berisi satu atau beberapa)
- **`state`** - string acak yang dibuat oleh aplikasi kita, yang akan digunakan untuk verifikasi nanti

Pemberian Akses oleh Pengguna

Pengguna melihat *prompt* otorisasi berupa antarmuka yang disediakan oleh penyedia layanan. Di proses ini aplikasi meminta persetujuan pengguna untuk mengakses sumber daya/data pengguna. Pengguna dapat mengizinkan atau menolak permintaan akses tersebut. Pengguna akan diminta *log in* terlebih dahulu jika belum.

![auth prompt](https://aaronparecki.com/oauth-2-simplified/oauth-authorization-prompt.png)
<p align = "center">
<i>Antarmuka Pengguna untuk Prompt Otorisasi - diambil dari web aaronparecki.com</i>
</p>

Jika pengguna mengklik "izinkan", layanan akan mengalihkan pengguna kembali ke situs kita, dan aplikasi kita akan mendapatkan kode otorisasi.

```
https://example-app.com/cb?code=AUTH_CODE_DISINI&state=1234zyx
```

- **`code`** - Server mengembalikan kode otorisasi (auth code) dalam query string
- **`state`** - Server mengembalikan nilai state yang sama dengan yang aplikasi kita berikan pada login URL

Kita harus terlebih dahulu membandingkan nilai state ini untuk memastikannya sesuai dengan yang aplikasi kita buat. Kita dapat menyimpan nilai state dalam *cookie* atau *session*, dan membandingkannya saat pengguna kembali. Ini membantu memastikan titik akhir pengalihan (*redirection endpoint*) kita tidak dapat diakali untuk mencoba bertukar kode otorisasi arbitrer.

### Mendapatkan Token Akses

Server kita perlu menukar kode otorisasi dengan token akses dengan membuat *http request* POST ke endpoint token server otorisasi:

```
POST https://api.authorization-server.com/token
  grant_type=authorization_code&
  code=AUTH_CODE_HERE&
  redirect_uri=REDIRECT_URI&
  client_id=CLIENT_ID&
  client_secret=CLIENT_SECRET
```

- **`grant_type=authorization_code`** - Jenis pemberian akses untuk alur ini adalah "*authorization_code*" (kode otorisasi)
- **`code=AUTH_CODE_HERE`** - Ini adalah kode yang kita terima dalam string kueri
- **`redirect_uri=REDIRECT_URI`** - Harus sama dengan redirect URI yang disediakan di link asli
- **`client_id=CLIENT_ID`** - ID klien yang kita terima saat pertama kali membuat aplikasi
- **`client_secret=CLIENT_SECRET`** - Karena permintaan ini dibuat dari kode sisi server, *client secret* disertakan di respons (tidak akan terlihat di browser)

Server membalas dengan token akses dan waktu kedaluwarsa

```
{
  "access_token":"RsT5OjbzRn430zqMLgV3Ia",
  "expires_in":3600
}
```

atau jika ada kesalahan

```
{
  "error":"invalid_request"
}
```

Keamanan: Perhatikan bahwa penyedia layanan harus mewajibkan aplikasi untuk melakukan pendaftaran redirect URI sebelumnya. Ini untuk memastikan bahwa pengguna tidak dapat di-*redirect* selain menuju ke aplikasi kita.


**Sumber**: [https://aaronparecki.com/oauth-2-simplified/](https://aaronparecki.com/oauth-2-simplified/)