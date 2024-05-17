---
title: 'Panduan Teknis Mengirim Email untuk Developer'
date: 2024-05-17
category: 'notes'
---

Jika kita sedang membangun aplikasi dengan fitur pengiriman email, penting untuk memahami praktik terbaik yang memastikan email sampai ke inbox penerima dan tidak berakhir di folder spam. Ada beberapa poin yang perlu diperhatikan untuk mencapai tujuan tersebut.

### 1. Autentikasi Email

Tanpa autentikasi, penyedia layanan email cenderung menandai email yang kita kirim sebagai spam.

#### SPF (Sender Policy Framework)

SPF adalah protokol yang digunakan untuk memverifikasi bahwa server pengirim diotorisasi oleh domain pemilik. Langkah-langkah untuk mengimplementasikan SPF:

1. Tambahkan DNS TXT record untuk domain.
2. Isi record dengan daftar IP atau domain yang diizinkan mengirim email atas nama domain Anda. Contoh record SPF:
    ```
    v=spf1 ip4:192.0.2.0/24 include:_spf.google.com -all
    ```
3. Verifikasi bahwa record SPF telah diterapkan dengan benar menggunakan alat pemeriksa SPF seperti SPF Record Checker.

#### DKIM (DomainKeys Identified Mail)

DKIM memberikan tanda tangan digital pada email untuk memverifikasi integritas dan asal email.

1. Buat public dan private key DKIM.
2. Tambahkan kunci publik sebagai DNS TXT record untuk domain Anda.
3. Konfigurasikan server email Anda untuk menandatangani email dengan kunci pribadi. Contoh DNS TXT record untuk DKIM:
    ```
    default._domainkey.example.com. IN TXT "v=DKIM1; k=rsa; p=MIGfMA0GCSqG..."
    ```
4. Verifikasi tanda tangan DKIM dengan alat seperti [DKIM Checker](https://www.mimecast.com/products/dmarc-analyzer/dkim-check/).

Saya menemukan satu tulisan yang memberikan [panduan membangun email server anda sendiri dengan Ubuntu](https://www.linkedin.com/pulse/how-build-your-own-email-server-ubuntu-part-4-liviu-gelca-gda0e?trk=article-ssr-frontend-pulse_more-articles_related-content-card)

### 2. Minimalkan Styling

Email dengan styling yang kompleks dan banyak gambar sering kali diidentifikasi sebagai spam oleh penyedia layanan email (ESP). Hal ini karena email semacam itu sering digunakan dalam kampanye spam untuk menyembunyikan konten berbahaya atau menipu penerima. Untuk menghindari hal ini, gunakan desain yang sederhana dan bersih. Prioritaskan teks biasa dan pastikan gambar yang digunakan relevan serta memiliki tag alt yang sesuai.

#### Perhatikan Kompatibilitas

Kita dapat menggunakan alat-alat untuk mengecek apakah email yang kita kirim kompatibel dengan device dan aplikasi email client yang digunakan oleh pengguna. Styling yang sangat bagus akan percuma jika tidak kompatibel saat dibuka.

#### Tambahkan Versi Plain Text

Berikan versi plain teks email bersama dengan versi HTML untuk melayani berbagai klien email dan filter spam.

#### Desain Responsif

Meskipun styling minimal, satu hal yang tetap harus kita perhatikan adalah tetap responsif supaya tampilan tetap bagus ketika email dibuka oleh user di berbagai device.

### 3. Mematuhi Pedoman Penyedia Layanan Email

Setiap ESP memiliki pedoman tertentu yang perlu diikuti.

#### Integrasi dengan Yahoo, Outlook, dan Google

1. Baca dan pahami pedoman pengirim dari masing-masing ESP, terutama penyedia layanan yang paling banyak digunakan oleh basis pengguna aplikasi kita.
   - [Yahoo Sender Best Practice](https://senders.yahooinc.com/best-practices/)
   - [Outlook Policies, Practices, and Guidelines](https://sendersupport.olc.protection.outlook.com/pm/policies.aspx)
   - [Google Email sender guidelines](https://support.google.com/a/answer/81126)
2. Sesuaikan konfigurasi server dan konten email sesuai pedoman tersebut.
3. Gunakan alat analitik dan monitoring untuk memastikan kepatuhan.

### 4. Analisis dan Optimasi

Pantau dan optimalkan performa pengiriman email secara berkelanjutan.

#### Pelaporan dan Analitik

1. Implementasikan logging untuk setiap pengiriman email (pantau status: sent, deferred, bounced).
2. Gunakan API ESP untuk mendapatkan metrik pengiriman seperti open rate, click-through rate, dan bounce rate.