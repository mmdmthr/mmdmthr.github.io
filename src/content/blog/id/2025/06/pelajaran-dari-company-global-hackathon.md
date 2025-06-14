---
title: 'Belajar dari Hackathon Global: Bangun AI untuk Ekstraksi Sertifikat'
pubDate: 2025-06-14
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Beberapa waktu lalu, saya mengikuti hackathon global internal kantor. Ini adalah kali pertama hackathon berskala internasional seperti ini diselenggarakan, pesertanya lintas regional - dari UK, Denmark, dan Australia–New Zealand. Kesempatan ini saya manfaatkan untuk mengeksplorasi tema AI dalam konteks yang sangat praktikal: ekstraksi data dari sertifikat.

#### Ide: Certified Certificate AI

Dari banyak ide yang sudah diseleksi, saya memilih bergabung dengan tim *Certified Certificate AI*. Ide yang ditawarkan adalah solusi untuk membantu pengguna menginput data dari sertifikat (format JPG) ke dalam sebuah existing platform cloud secara otomatis. Tantangannya sederhana tapi nyata: mengurangi input manual dari dokumen fisik.

Kami merancang arsitektur berbasis AWS:
* Frontend: React
* Backend: API Gateway + Lambda
* Storage: S3
* LLM: Claude Sonnet 3.5 via Bedrock
* Semua diintegrasikan dengan Terraform deployment

Arsitektur ini memungkinkan kami untuk membangun alur kerja: upload gambar → ekstraksi data via LLM → hasil siap disimpan atau disinkronkan ke existing platform cloud. Saya sendiri mendapat bagian untuk develop React app dan mengintegrasikan dengan Backend API. Selain itu saya juga sempat membuat satu lambda function dengan Node.js untuk melakukan sync data ke platform cloud.

#### Tantangan Selama Pengembangan

Walaupun terlihat sederhana dari luar, proyek ini membuka banyak pelajaran menarik seputar scoping, teknologi AI, dan batasan praktisnya.

**1. Scoping: Terlalu Banyak atau Terlalu Sedikit?**

Diskusi muncul antara anggota tim: apakah hanya ekstraksi data yang perlu ditampilkan, atau seluruh alur hingga data sinkron ke sistem akhir? Saya pribadi optimis ingin mengembangkan *end-to-end flow*, tapi sebagian rekan memilih memfokuskan scope hanya pada tahap ekstraksi. Perbedaan perspektif ini cukup menantang ketika bekerja dalam tim lintas zona waktu dan latar belakang. Akhirnya kami sepakat dengan scope yang lebih kecil untuk meningkatkan peluang keberhasilan. 

**2. Ekstraksi Data: LLM vs OCR Tradisional**

Saya mencoba membandingkan pendekatan berbasis LLM dengan OCR seperti Textract.
Berikut catatan perbandingan singkat:

| Metode  | Kelebihan                               | Kekurangan                                       |
| ------- | --------------------------------------- | ------------------------------------------------ |
| **LLM** | Lebih fleksibel, bisa memahami konteks  | Sangat tergantung pada prompt; hasil inkonsisten |
| **OCR** | Lebih cepat dan stabil untuk teks ketik | Tidak mampu memahami struktur layout certificate yang kompleks|

Namun, baik LLM maupun OCR memiliki satu tantangan yang sama:
**Tulisan tangan, apalagi yang ditulis dengan pensil, sulit bahkan untuk dibaca manusia**. Tak heran jika hasil ekstraksi dari model juga tidak konsisten. LLM dengan prompt yang tepat dan mengikuti schema json yang sudah disediakan, mampu mengenali field dari certificate dan memberikan hasil yang lebih baik daripada OCR.

**3. Prompt Engineering: Sangat Mempengaruhi Hasil**

Formulasi *system prompt* dan *user prompt* memegang peranan besar. Perubahan kecil pada kata-kata dapat menghasilkan perbedaan besar dalam output. Ini membuktikan bahwa membangun AI bukan hanya soal memilih model, tapi juga memahami bagaimana "berbicara" dengannya supaya dapat menghasilkan output yang sesuai.

**4. Kendala Teknis: Ukuran Gambar**

Gambar terlalu besar (baik ukuran file maupun pixel) bisa gagal diproses oleh model.
Sebaliknya, gambar terlalu kecil menurunkan akurasi ekstraksi. Menemukan sweet spot adalah proses coba-coba yang tidak selalu intuitif.

---

### Catatan dan Pembelajaran Lanjutan

Beberapa poin penting yang muncul di luar ruang lingkup utama proyek tapi layak dicatat untuk pengembangan ke depan:
- Potensi Generalisasi: Mengotomatiskan input sertifikat saja mungkin tidak terdengar seperti sesuatu yang besar. Namun, solusi serupa sangat relevan untuk jenis dokumen lain, seperti invoice dari supplier dan dokumen akreditasi.
- Skalabilitas: Akan bermanfaat jika mendukung bulk upload—mengurangi proses manual untuk input banyak dokumen sekaligus.
- Integrasi Platform: Perlu dipikirkan integrasi dengan aplikasi mobile, bukan hanya desktop/web. Bisa juga diintegrasikan dengan image optimizer untuk memaksimalkan hasil ekstraksi.
- Konteks Lokalitas Dokumen: Struktur data yang kita bangun hari ini bisa jadi perlu disesuaikan di masa depan mengikuti regulasi masing-masing negara.

### Bukan Sekadar Proyek Hackathon

Bagi saya, proyek ini adalah simulasi nyata dari tantangan di dunia kerja modern yang mulai mengadopsi AI sebagai bagian dari solusi. Kolaborasi, iterasi cepat, pemilihan teknologi yang tepat, hingga diplomasi dalam menentukan scope—semua menjadi bagian dari pengalaman yang tidak ternilai.

Dan yang paling penting: bukan soal menang atau kalah, tapi sejauh mana kita belajar dan siap membawa solusi yang lebih baik ke dunia nyata.
