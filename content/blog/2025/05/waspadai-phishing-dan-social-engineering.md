---
title: 'Ancaman Keamanan Tak Selalu Teknis: Waspadai Phishing dan Social Engineering'
date: 2025-05-03
category: 'notes'
---

> *"Kadang, serangan paling berbahaya bukan datang dari bug di kode, tapi dari kepercayaan yang disalahgunakan."*

Beberapa waktu lalu, saya menerima email internal kantor yang mengingatkan tentang ancaman keamanan yang belakangan makin sering terjadi. Bukan soal eksploitasi sistem atau injeksi SQL, tapi soal **phishing dan social engineering** — serangan yang menyasar sisi manusia, bukan teknologinya.

Dan menariknya, jenis serangan ini bisa menarget siapa saja. Ya, *siapa saja*. Bahkan kita yang kerja di bidang teknologi pun tetap bisa jadi korban.

Tujuan serangan ini sering kali untuk mengelabui korban agar mengungkapkan informasi sensitif, seperti kata sandi, kredensial login, atau rincian keuangan, atau untuk membujuk korban melakukan tindakan yang dapat membahayakan keamanan perusahaan, seperti memasang malware di perangkat korban.

---

## 🤔 Apa Itu Social Engineering?

Social engineering adalah teknik manipulasi psikologis untuk membuat seseorang melakukan sesuatu yang seharusnya tidak dilakukan—seperti membocorkan password, membuka file malware, atau mentransfer uang ke rekening palsu.

Berbeda dengan serangan teknis yang mengeksploitasi sistem, social engineering mengeksploitasi **kebiasaan** dan **kepercayaan** manusia.

---

🇮🇩 Kasus Indodax 2024: Ketika Social Engineering Menembus Sistem

Pada 11 September 2024, Indodax, salah satu bursa kripto terbesar di Indonesia, mengalami peretasan yang mengakibatkan kerugian sekitar Rp 300 miliar atau lebih dari $22 juta. ​
[PT Tiga Pilar Keamanan - Fourtrezz](https://fourtrezz.co.id/indodax-dihantam-serangan-siber-dana-investor-kripto-terancam)

🔍 Bagaimana Serangan Terjadi?

Menurut CEO Indodax, Oscar Darmawan, serangan ini bermula ketika seorang engineer Indodax menerima tawaran pekerjaan sampingan dengan bayaran tinggi dari pihak luar. Engineer tersebut diminta untuk mengatur sebuah server dan diminta mengunduh file yang ternyata berisi malware. Malware ini kemudian digunakan untuk menyusup ke sistem Indodax melalui laptop kantor yang digunakan oleh engineer tersebut. ​
[Coinvestasi+1](https://coinvestasi.com/berita/oscar-darmawan-bongkar-kronologi-peretasan-indodax)

---

## 📧 Jenis-Jenis Serangan Social Engineering yang Umum

### 1. **Phishing**
Email palsu yang tampak resmi—mungkin menyamar sebagai HR, manajer, atau bahkan CEO — meminta kita klik tautan atau kirim data sensitif.

### 2. **Spear Phishing**
Lebih berbahaya dari phishing biasa karena ditargetkan secara personal. Nama kita, posisi kita, bahkan aktivitas terakhir kita bisa dijadikan bahan umpan. Seolah kita sedang berbiicara dengan orang yang sudah kita kenal.

### 3. **Vishing**
Serangan lewat telepon, sering kali menyamar sebagai pihak bank atau rekan kerja yang “mendesak” meminta informasi. Baru-baru ini sering juga terjadi penyamaran sebagai pihak rumah sakit yang menyampakian bahwa ada anggota keluarga yang kecelakaan lalu meminta kiriman uang perawatan rumah sakit.

### 4. **Smishing**
Phishing via SMS atau WhatsApp. Seringkali membawa link yang seolah penting, padahal mengarahkan ke situs berbahaya. Ini juga sering menyamar sebagai pihak bank, bahkan kepolisian.

### 5. **Business Email Compromise (BEC)**
Penyerang menyamar sebagai eksekutif perusahaan dan meminta tindakan tertentu—misalnya transfer dana atau buka akses dokumen sensitif.

---

## 🚨 Tanda-Tanda Pesan Mencurigakan

Berikut beberapa red flag yang patut diwaspadai:

- Nada **urgensi berlebihan**: “Segera kirimkan sekarang!”, “Penting! Jangan diberitahukan ke siapa pun!”
- Alamat email yang **hampir mirip**, tapi tidak sama: misalnya `ceo@g0jek.com` (huruf o diganti angka 0)
- Permintaan yang **tidak biasa** dari orang yang tidak biasanya meminta. CEO minta ditransferin uang, atasan minta username dan password.
- **Lampiran aneh**: .zip, .exe, atau file Office yang minta aktifkan makro
- **Link mencurigakan**: pastikan hover dulu link-nya sebelum klik

---

## 🛡️ Tips Melindungi Diri dari Serangan Non-Teknis Ini

1. Waspadalah terhadap email atau pesan yang tidak terduga  
Meskipun nama pengirimnya tampak familier, teliti alamat emailnya dengan saksama. Sering kali, ada sedikit variasi atau kesalahan ejaan. Jangan percaya nama tampilan saja, tetapi lihat pratinjau emailnya misal `cs@g0jek.com` (perhatikan huruf O diganti dengan angka 0).
2. Jangan klik tautan atau lampiran dari email atau pesan yang mencurigakan  
Arahkan kursor ke tautan sebelum mengklik untuk melihat URL sebenarnya. Jika tampak asing atau mencurigakan, jangan klik. Demikian pula, hindari membuka lampiran dari sumber yang tidak dikenal atau tidak tepercaya.
3. Berhati-hatilah terhadap permintaan informasi pribadi  
Jangan pernah membagikan kata sandi, kredensial login, detail bank, atau informasi sensitif lainnya melalui email atau pesan teks. Organisasi yang sah tidak akan pernah meminta informasi tersebut dengan cara ini.
4. Bersikaplah skeptis terhadap permintaan yang mendesak atau tidak biasa  
Jika menerima pesan yang menimbulkan rasa urgensi atau meminta kita melakukan sesuatu yang tidak biasa, berhati-hatilah. **Selalu verifikasi** identitas pengirim lewat jalur lain (chat langsung, call via Teams). Jangan membalas email atau pesan yang mencurigakan.
8. Gunakan kata sandi yang kuat  
Buat kata sandi yang rumit dan unik untuk semua akun, jangan gunakan kembali kata sandi di berbagai platform. Password manager sangat membantu dalam hal ini.
9.  **Gunakan multi-factor authentication (MFA)** untuk perlindungan tambahan.
10. Kalau ragu, **laporkan ke tim IT/security**  
Lebih baik overcautious daripada kecolongan. Jika menerima email, pesan teks, atau panggilan telepon yang mencurigakan, segera laporkan ke tim IT/Support.

## 🧠 Semua Bisa Jadi Target, Bukan Cuma Tim IT

Serangan seperti ini menyasar siapa saja—dari front desk sampai senior engineer. Kenapa? Karena celah bukan hanya soal sistem yang belum di-patch, tapi soal manusia yang dieksploitasi secara psikologis sehingga terlalu cepat percaya.

Ingat, serangan social engineering **tidak perlu skill hacking tinggi**, cukup modal informasi publik + komunikasi meyakinkan.

---

## 🎯 Penutup: Keamanan Itu Tanggung Jawab Bersama

Keamanan bukan hanya urusan tim IT atau DevSecOps. Ini adalah tanggung jawab bersama. Kita semua, sebagai pengguna, punya peran penting dalam menjaga keamanan data dan sistem di perusahaan. Dengan tetap waspada dan mengikuti praktik terbaik ini, kita bersama-sama dapat melindungi diri kita sendiri dan perusahaan kita dari ancaman ini. 

Mulai dari tidak sembarang klik, sampai berani berkata, “Saya akan cek dulu ke tim IT.”

> Jadi, lain kali kalau kamu dapat email mendesak dari “bos” yang minta transfer dana atau kirim file rahasia, jangan buru-buru klik. Bisa jadi, kamu sedang jadi target.

Stay sharp, stay safe.