---
title: 'Struktur URL: Memahami Komponen-Komponennya'
date: 2023-07-13
category: 'notes'
---

## TL;DR

Contoh URL
```
https://blog.mmdmthr.github.io:8080/subscribe?utm_source=menu#nowhere
```
|  |  |
|--|--|
|`https://` | = protocol |
|`blog.mmdmthr.github.io` | = domain name |
|`:8080` | = port |
|`/subscribe` | = path |
|`?` | = query |
|`utm_source=menu` | = parameters |
|`#nowhere` | = fragments |

URL (*Uniform Resource Locator*) adalah alamat yang digunakan untuk mengidentifikasi dan mengakses sumber daya di internet. URL memiliki struktur yang terdiri dari beberapa komponen penting. Mari kita lihat ringkasan tentang struktur URL dan apa arti dari setiap komponennya.

1. **Protokol (*Protocol*)**

    Protokol menentukan aturan dan format komunikasi yang digunakan untuk mengakses sumber daya di internet. Dalam contoh URL di atas, protokol yang digunakan adalah "https://". Protokol HTTPS digunakan untuk mengakses sumber daya melalui koneksi yang aman dan terenkripsi.

2. **Nama Domain (*Domain Name*)**

    Nama domain merupakan identifikasi unik untuk mengarahkan ke alamat IP yang sesuai dengan server yang menghosting sumber daya yang ingin diakses. Pada contoh URL di atas, nama domain adalah "blog.mmdmthr.github.io". Nama domain ini mengarahkan ke server yang menyediakan konten atau sumber daya yang ingin diakses.

3. ***Port***

    Port adalah angka yang menentukan saluran khusus melalui mana klien dapat berkomunikasi dengan server yang dituju. Pada contoh URL di atas, angka "8080" adalah nomor port yang ditentukan untuk mengakses sumber daya di server tersebut. Port ini bersifat opsional dan biasanya tidak diperlukan jika menggunakan port standar seperti 80 untuk HTTP atau 443 untuk HTTPS.

4. ***Path***

    Path adalah bagian dari URL yang menunjukkan jalur ke sumber daya yang ingin diakses di dalam server. Pada contoh URL di atas, path adalah "/subscribe". Path ini dapat menggambarkan struktur folder dan file pada server yang mengarahkan ke sumber daya yang diminta.

5. ***Query***

    Query adalah bagian URL setelah tanda tanya ("?") yang digunakan untuk mengirimkan data tambahan ke server. Query biasanya berisi parameter dan nilainya yang digunakan oleh server untuk menghasilkan respons yang sesuai. Pada contoh URL di atas, query adalah "utm_source=menu". Jika ada tambahan query, akan dilanjutkan dengan simbol "&". Parameter ini dapat memberikan informasi tambahan kepada server, seperti sumber lalu lintas pengguna.

6. ***Fragmen***

    Fragmen adalah bagian URL yang mengacu pada bagian tertentu dari halaman atau sumber daya yang diakses. Biasanya, fragmen diwakili oleh tanda pagar ("#") diikuti dengan teks atau nama elemen tertentu. Pada contoh URL di atas, fragmen adalah "nowhere". Fragmen ini berguna untuk langsung mengarahkan pengguna ke bagian tertentu dari halaman yang diakses.