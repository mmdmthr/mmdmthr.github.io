---
title: 'Pengalman Kerja Kedua - Empat Tahun Belajar Lebih Baik'
pubDate: 2026-02-27
description: ''
tags: 'notes'
---

Akhir pekan ini menjadi penutup dari perjalanan kerja aku sebagai web developer bersama satu klien yang telah aku jalani selama lebih dari empat tahun. Bukan waktu yang singkat. Dalam rentang itu, aku tidak hanya menulis kode, tetapi juga belajar bagaimana sebuah produk digital skala platform dibangun, berubah, dan terus beradaptasi.

Tulisan ini adalah refleksi pribadi — rangkuman hal-hal yang paling membentuk cara aku bekerja hari ini.

---

## Tim: Bekerja di Dalam Ekosistem Platform

Aku bekerja dalam sebuah **service team** kecil berisi sekitar 5–7 orang. Namun tim ini hanyalah satu bagian dari sistem yang jauh lebih besar. Produk yang kami bangun adalah sebuah **platform**, sehingga terdapat banyak service team lain yang menangani domain berbeda. Artinya:

* setiap tim memiliki tanggung jawab service masing-masing,
* perubahan di satu tim bisa berdampak ke tim lain,
* komunikasi lintas tim menjadi sama pentingnya dengan coding itu sendiri.

Struktur tim juga bersifat internasional:

* Engineering Manager, Product Owner, dan Support berasal dari luar negeri,
* Developer, QA, dan PM sebagian besar dari Indonesia,
* Zona waktu tersebar antara Sydney, London, Bangladesh, dan WIB.

Distributed engineering memaksa semua orang bekerja dengan jelas dan terstruktur. Tidak ada ruang untuk komunikasi setengah matang.

---

## Titik Perubahan: Akuisisi Perusahaan Global

Sekitar tahun kedua, perusahaan diakuisisi oleh perusahaan global. Di sinilah dinamika kerja berubah cukup signifikan.

Mulai muncul:

* anggota tim dari UK,
* restrukturisasi organisasi,
* perpindahan ownership service,
* perubahan struktur tim,
* penyesuaian proses dan standar kerja.

Secara teknis, tidak selalu nyaman. Banyak hal yang sebelumnya stabil tiba-tiba berubah.

Namun justru di fase ini aku belajar sesuatu yang sangat penting: **adaptability adalah skill engineering**.

Software engineer sering fokus belajar framework baru, tetapi jarang menyadari bahwa perubahan organisasi jauh lebih sering terjadi dibanding perubahan teknologi.

aku belajar:

* cepat memahami konteks baru,
* bekerja dengan rekan tim baru,
* menerima perubahan prioritas,
* dan tetap menjaga delivery di tengah transisi organisasi.

---

## Culture: Lingkungan Kerja yang Dewasa

Hal yang paling membedakan pengalaman ini adalah budaya kerja.

**Transparansi**  
Setiap progress dan obstacle dibagikan secara terbuka. Masalah bukan untuk disembunyikan, tetapi diselesaikan bersama.

**Work-life balance**  
Dalam lebih dari empat tahun, aku hanya sekali lembur sekitar satu jam. Delivery tetap berjalan tanpa budaya heroism.

**Kolaboratif**  
Diskusi teknis berlangsung terbuka lintas role dan lintas negara.

**Continuous learning**  
Leadership engineering membagikan best practice dan perspektif arsitektur, terutama jika kita bertanya. Aku mulai memahami bahwa budaya kerja bukan slogan HR — ia sangat menentukan kualitas software yang dihasilkan.

---

## Proses: Scrum yang Berfungsi Sebagai Sistem Berpikir

Aku mendapatkan training Scrum secara formal saat bekerja di proyek ini.

Perbedaannya terasa jelas: Scrum tidak diperlakukan sebagai ritual meeting, tetapi sebagai cara mengelola kompleksitas.

* pekerjaan dipecah menjadi deliverable kecil,
* fokus pada value,
* perubahan requirement dianggap normal,
* retrospective benar-benar digunakan untuk perbaikan.

Proses membantu tim bergerak stabil bahkan saat organisasi sedang berubah akibat akuisisi.

---

## Tech Stack yang Membentuk Fondasi

Selama perjalanan ini aku bekerja dengan stack berikut:

**Backend**

* PHP (Laravel)

**Database**

* MySQL
* MongoDB
* Redis

**API**

* GraphQL
* Swagger

**Frontend**

* HTML
* JavaScript (jQuery dan React)
* CSS

**Monitoring**

* Datadog

**Code Quality & Security**

* PHPUnit
* PHPCS
* PHPStan
* Snyk

Aku mulai melihat software bukan sekadar aplikasi, tetapi sistem hidup yang harus bisa diobservasi, diuji, dan diamankan.

---

## Apa yang Aku Kerjakan

**Product development**  
Berpartisipasi dalam perencanaan produk dari sisi teknis, mengembangkan fitur baru, serta membangun dan memelihara internal library untuk meningkatkan efisiensi tim.

**Integrasi Sistem**  
Mengintegrasikan layanan pihak ketiga termasuk SSO (OAuth, JWT), Adobe Sign, Fixflo.

**Kualitas Kode & Testing**  
Menjaga standar kualitas melalui code review, refaktor kode lama, serta menulis unit test dan feature test.

**Performa & Pemeliharaan**  
Memantau dan mengoptimalkan performa berdasarkan metrik yang ditentukan, menangani perbaikan bug, dan menyusun dokumentasi teknis yang lengkap. Selama di sana aku juga terlibat 2 kali framework version upgrade.

---

## Tools Engineering Sehari-hari

Ekosistem tooling menjadi bagian penting dari workflow:

* Kolaborasi awalnya menggunakan Slack dan Google, lalu transisi menggunakan Microsoft Teams dan Office.
* Jira untuk task management dan Confluence untuk knowledge management
* GitLab dan GitHub untuk version control
* CI/CD pipeline otomatis
* Datadog untuk monitoring produksi
* Application penetration testing dan security check

Engineering modern ternyata lebih dekat ke *system operation* dibanding sekadar menulis kode.

---

## Produk: Proptech Skala Platform

Produk yang dibangun berada di domain **proptech**, meliputi:

* user-facing application,
* API services,
* berbagai integrasi pihak ketiga.

Karena berbentuk platform, stabilitas dan compatibility antar service menjadi tantangan utama.

Fitur baru penting, tetapi menjaga sistem tetap berjalan jauh lebih penting.

---

## Pelajaran Engineering yang Paling Membentuk

### Performa Harus Berbasis Data

Optimalisasi hanya masuk akal jika ada metrics.

### Testing Membuat Tim Bergerak Cepat

Feature test dan unit test mempercepat perubahan jangka panjang.

### Refactoring Adalah Rutinitas

Code review bukan kritik personal, tetapi mekanisme peningkatan kualitas.

### Security Sejak Awal

Belajar implementasi:

* SSO,
* OAuth,
* JWT,
* security standard,
* GDPR compliance.

Security bukan tambahan, tetapi fondasi.

### Mengikuti Pattern Framework

Auth flow, middleware, job/queue, dan service container membuat sistem lebih tahan perubahan.

### Versioning dan Prioritization

Tidak semua issue harus diselesaikan sekarang. Stabilitas sering lebih penting daripada kesempurnaan. Menerapkan semantic versioning.

### Development Cycle yang Realistis

Pendekatan siklus pengembangan dalam rentang 6 pekan seperti di buku *Shape Up* membantu fokus pada outcome dibanding backlog tanpa ujung.

### Dokumentasi Adalah Skill Engineering

Menulis technical dan planning documentation adalah bagian inti pekerjaan.

---

## Refleksi Pribadi

Jika sebelumnya aku hanya fokus membuat fitur berjalan, sekarang aku lebih memikirkan:

* bagaimana sistem tetap stabil meski terjadi perubahan,
* bagaimana tim teknis bisa memberi input positif pada pengembangan produk,
* bagaimana keputusan teknis bertahan dalam jangka panjang.

Empat tahun ini mengajarkan bahwa karier engineering bukan garis lurus. Produk berubah, perusahaan berubah, tim berubah.

Yang bertahan justru kemampuan untuk belajar dan beradaptasi.

Proyek ini selesai untukku sekarang. Tetapi cara berpikir yang terbentuk selama perjalanan ini akan menjadi fondasi untuk semua pekerjaanku berikutnya.
