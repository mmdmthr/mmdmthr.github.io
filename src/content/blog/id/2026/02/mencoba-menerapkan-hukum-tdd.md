---
title: 'Mencoba Menerapkan Hukum TDD'
pubDate: 2026-02-18
description: ''
tags: 'notes'
---

Aku pernah menulis tentang [Tiga Hukum TDD](https://mmdmthr.github.io/2022/08/hukum-test-driven-development/). Setelah mempraktikkannya sendiri, aku merasakan manfaat yang sebelumnya tidak terlalu terlihat hanya dari membaca teorinya.

**1. Beban berpikir jauh berkurang**

Tanpa TDD, aku biasanya mencoba membayangkan keseluruhan solusi di kepala sebelum mulai menulis kode. Alurnya, struktur datanya, edge case-nya—semua dipikirkan di awal. Secara teori terdengar rapi, tapi praktiknya melelahkan.

Dengan TDD, aku dipaksa bekerja selangkah demi selangkah. Fokus hanya pada satu perilaku kecil yang ingin diwujudkan sekarang. Karena ada tes sebagai penuntun, aku tidak perlu lagi “memegang” keseluruhan desain di kepala sekaligus. Energi mental yang sebelumnya habis untuk mengingat dan membayangkan, sekarang bisa dipakai untuk berpikir lebih jernih.

**2. Langkah kerja menjadi terpandu**

Tes berfungsi seperti checklist. Ia memberi tahu apa yang harus dikerjakan berikutnya. Sepertinya sepele tapi manfaatnya terasa: potensi melewatkan sesuatu jadi berkurang.

Urutan implementasi juga menjadi natural. Misalnya membuat fitur *create*:

* mulai dari entry point (route),
* lanjut ke controller,
* lalu view,
* kemudian migrasi data atau model.

Semua mengalir mengikuti requirement, bukan mengikuti bayangan dalam pikiran. Commit pun terasa lebih rapi dan mudah dipahami orang lain karena setiap perubahan punya tujuan yang jelas.

**3. Lebih efisien**

Tanpa disadari, kita sering tergoda membuat sesuatu dengan dorongan: “sekalian saja”, padahal belum tentu diperlukan. TDD cukup keras soal ini: kalau belum ada tes yang gagal, jangan tulis kodenya.

Hasilnya justru lebih cepat selesai. Energi tidak bocor ke fitur tambahan, optimasi prematur, atau arsitektur yang belum diperlukan.

---

Awalnya aku mengira TDD hanya soal kualitas kode. Setelah dipraktikkan, ternyata dampak terbesarnya justru pada cara berpikir: pekerjaan terasa lebih ringan, langkah lebih jelas, dan fokus tetap pada hal yang benar-benar dibutuhkan.
