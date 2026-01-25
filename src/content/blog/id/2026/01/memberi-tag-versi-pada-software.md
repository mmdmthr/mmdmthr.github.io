---
title: 'Belajar Memberi Versi pada Software'
pubDate: 2026-01-26
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Waktu pertama kali mengenal Git tag, aku mengira itu hanya formalitas: angka versi, changelog, dokumentasi.
Tapi saat mengerjakan project dengan klien—di mana feedback datang bertahap, deployment berjalan paralel, dan “selesai” itu abu-abu—aku baru sadar:

> Git tag bukan soal teknis. Ia soal menetapkan *keputusan*.

---

### Masalah yang Sering Terjadi

Dalam banyak project klien, kondisinya sering seperti ini:

* Aplikasi sudah dideploy ke production
* Klien diminta mencoba
* Feedback datang sambil jalan
* Tidak jelas kapan “rilis pertama” sebenarnya

Akibatnya:

* Tidak ada baseline yang jelas
* Sulit membedakan perubahan produk vs perubahan konten
* Versi pertama terus ditunda karena “belum sempurna”

---

### Git Tag Bukan Klaim Kesempurnaan

Kesalahan berpikir paling umum:

> “Jangan kasih tag dulu, masih ada feedback.”

Padahal, yang perlu ditanyakan bukan:

* *apakah masih ada feedback?*

Tapi:

* *feedback jenis apa?*

---

### Tiga Jenis Feedback, Tiga Keputusan Berbeda

#### 1. Klien Setuju Tanpa Feedback

Ini kondisi ideal.

* user flow disetujui
* behavior disetujui
* tidak ada “nanti kita ubah lagi”

➡️ **Waktu yang tepat untuk memberi tag.**
Ini baseline resmi.

---

#### 2. Klien Setuju Flow & UX, tapi Ada Feedback Konten / Bahasa

Ini yang paling sering terjadi.

* tombol OK
* alur OK
* fitur OK
* tapi teks, label, email wording masih berubah

➡️ **Tetap beri tag.**

Karena:

* produk sudah stabil
* yang berubah hanyalah konten
* bukan breaking change

Tag di sini berarti:

> “Produknya sudah jadi. Kita sedang memoles.”

---

#### 3. Klien Ingin Ubah User Flow atau Behavior

Ini beda cerita.

* alur berubah
* asumsi awal gugur
* fitur perlu dipikir ulang

➡️ **Jangan beri tag dulu.**

Tag pada kondisi ini hanya akan jadi beban mental di kemudian hari.

---

### Definisi “Stabil” Versi Dunia Nyata

Stabil bukan berarti:

* semua teks final
* semua edge case tertutup

Stabil berarti:

* user tidak bingung
* behavior bisa diprediksi
* kamu tidak takut deploy ulang

---

### Git Tag sebagai Tanggung Jawab

Memberi tag artinya berkata:

> “Kalau project berhenti di commit ini, aku tetap berani mempertanggungjawabkannya.”

Bukan ke GitHub.
Bukan ke CI.
Tapi ke klien—dan ke diri sendiri.

---

Aku mulai memberi Git tag bukan karena project sudah sempurna,
tapi karena aku butuh **titik pijak yang jujur**.

Tag pertama tidak harus `v1.0.0`.
Bahkan `v0.1.0` (pre-release) pun tidak masalah.

Yang penting:
**ada baseline, ada sejarah, ada tanggung jawab dan milestone.**
