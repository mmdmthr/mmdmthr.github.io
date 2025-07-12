---
title: 'Metriks Kerumitan Kode'
pubDate: 2025-07-12
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

> *"Code is read more than it is written." – Robert C. Martin*

Dalam proses pengembangan software, saya menemukan satu hal yang konsisten: **kode yang kompleks membuat kita lambat.**

Bukan hanya saat menulis, tapi terutama saat membaca. Faktanya, saya pribadi menghabiskan jauh lebih banyak waktu **memahami kode yang sudah ada** dibanding menulis yang baru. Tidak hanya berlaku pada production code, tapi juga termasuk testing code. Ketika kode tersebut rumit, tidak konsisten, atau terlalu banyak "akal-akalan", saya merasa seperti sedang memecahkan teka-teki tanpa kunci.

---

### 🧠 **Mengapa Kode yang Kompleks Itu Tidak Efisien?**

#### 1. **Sulit Dipahami**

Kita tidak (hanya) menulis kode untuk mesin — dalam sebuah tim, kita juga menulisnya untuk manusia (orang lain yang akan ikut mengembangkan softwarenya).
Kode yang terlalu dalam di sebuah fungsi, bercabang ke mana-mana, penuh nested `if` atau callback chain, membuat siapa pun (termasuk diri kita sendiri 3 bulan ke depan) akan kesulitan memahami maksudnya.

#### 2. **Debugging Jadi Mimpi Buruk**

Semakin banyak jalur logika dalam kode, semakin tinggi pula kemungkinan bug muncul. Dan ketika bug itu terjadi, melacak sumbernya di tengah kompleksitas seperti mencari jarum di tumpukan jerami.

#### 3. **Membebani Tim**

Kode kompleks adalah **beban teknis**. Semakin sulit dipahami, semakin susah diajarkan, didiskusikan, atau dimodifikasi oleh anggota tim lain. Produktivitas melambat karena semua orang harus "mikir keras" dulu sebelum bisa mengubah apa pun.

#### 4. **Menghambat Refactoring**

Ironisnya, kode yang kompleks cenderung dihindari — karena takut rusak kalau disentuh. Akibatnya, kode itu makin lama makin membusuk, makin sulit disentuh, hingga akhirnya jadi "zona terlarang" di codebase.

---

### 🧪 **Diagnosis Kompleksitas Kode**

Mengetahui bahwa kode kompleks itu buruk saja tidak cukup. Kita perlu **alat untuk mengukurnya** — agar bisa memutuskan bagian mana yang butuh disederhanakan lebih dulu. Ada beberapa metrik yang mungkin berguna:

---

#### 1. **Cyclomatic Complexity**

Mengukur jumlah *independent path* dalam suatu fungsi/modul.

* Semakin banyak `if`, `for`, `switch`, dan percabangan lainnya, semakin tinggi nilai kompleksitas.
* Nilai tinggi menunjukkan kode tersebut punya banyak jalur logika — artinya lebih sulit dipahami dan diuji.
* Tools seperti ESLint (dengan plugin), PHP Mess Detector, Go Cyclo, dsb bisa menghitung ini.

---

#### 2. **Cognitive Complexity**

Dikembangkan oleh tim SonarSource, metrik ini lebih manusiawi.
Ia mengukur **beban mental yang dibutuhkan untuk memahami struktur logika kode**, bukan hanya jumlah percabangan.

* Tidak hanya menghitung `if`, tapi juga seberapa dalam nesting-nya, apakah ada `goto`, `continue`, dsb.
* Lebih akurat merepresentasikan “kerumitan pemahaman manusia”.

📌 Tools: SonarQube, SonarLint, linter modern

---

#### 3. **Change Frequency + Complexity Score (X-Ray Style)**

Konsep dari buku *The Software Design X-RAY* (Adam Tornhill).

* Ambil data dari **versi kontrol (Git)**.
* Cek file mana yang **paling sering berubah + paling kompleks secara logika**. Kompleksitas di sini dilihat berdasarkan kedalaman indentasi. Semakin banyak indentasi, berarti banyak operasi nested, semakin kompleks.
* Kombinasinya menunjukkan _“hotspot”_ — bagian kode yang rumit dan berisiko tinggi.

Keunggulannya:

* **Netral terhadap bahasa pemrograman**
* Tidak butuh AST parser
* Bisa bantu prioritas refactoring secara strategis

📌 Tools: [CodeScene](https://codescene.io), git log + skrip analisis sederhana

Ada banyak cara lain untuk mengukur kompleksitas kode, termasuk dari visual https://seeinglogic.com/posts/visual-readability-patterns/

---

### 🔧 **Solusinya: Refaktor Bertahap**

Kita tidak harus refactor semuanya sekaligus. Gunakan prinsip ini:

> Dahulukan refactor pada kode **yang paling sering disentuh** dan **paling sulit dimengerti** lebih dulu.

Langkah awal:

1. Identifikasi _hotspot_ dengan tool di atas.
2. Pahami apa yang membuatnya kompleks (bisa jadi perlu diskusi dengan anggota tim).
3. Lengkapi tes untuk jaga stabilitas saat refaktor.
4. Refaktor sedikit demi sedikit.

---

Kode adalah investasi jangka panjang.
Menulis kode yang "jalan saja" itu mudah. Tapi membuat kode yang bisa dipelihara dengan tenang, dimengerti rekan tim, dan efisien saat di-debug — itu sulit, tapi layak diusahakan.