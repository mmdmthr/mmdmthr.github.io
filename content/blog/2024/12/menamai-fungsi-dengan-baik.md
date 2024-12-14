---
title: 'Menamai Fungsi dengan Baik'
date: 2024-12-14
category: 'notes'
---

Memberi nama _function_ (fungsi) dalam kode bukan sekadar tugas teknis – saya rasa ada aspek seni yang bisa membuat kode kita menjadi lebih mudah dipahami dan dikelola. Meski tidak ada aturan yang berlaku untuk semua situasi, ada beberapa prinsip yang membantu untuk menemukan nama yang tepat untuk sebuah fungsi:

1. **Jujur.** Nama fungsi harus jelas mencerminkan tujuan fungsi tersebut. Baca kembali dan perhatikan dengan serius apa yang sebenarnya dilakukan oleh fungsi yang kita buat. Jika nama fungsi tidak sesuai dengan apa yang dilakukannya, ini bisa jadi menyesatkan atau membingungkan.
2. **Lengkap.** Nama fungsi harus mencerminkan semua tugas yang dilakukan oleh fungsi tersebut. Jika sebuah fungsi mengerjakan lebih dari yang disebutkan, pertimbangkan untuk memecahnya menjadi fungsi-fungsi yang lebih kecil. Dengan menulis nama secara jujur dan lengkap saja, kita akan terbantu melihat kemungkinan jika fungsi kita melanggar _single responsibility principle_.
3. **Relevan dengan Domain.** Gunakan istilah yang biasa digunakan dalam bidang atau domain kerja kita. Ini tidak hanya membantu pengembang lain memahami kode kita lebih cepat, tetapi juga memudahkan diskusi tentang kode dengan tim atau bahkan dengan klien/pelanggan.

### Contoh

Mari kita lihat contohnya. Misalkan kita sedang memecah fungsi besar bernama *update* menjadi dua bagian yang lebih kecil. Setelah menganalisis secara sekilas, kita menemukan bahwa:
- fungsi pertama banyak berhubungan dengan *input*
- fungsi kedua berhubungan dengan *map*

Sebagai langkah awal, kita mungkin memberi nama *updateInputs* dan *updateMap*. Nama *updateMap* sudah cukup baik, tetapi nama *updateInputs* terasa kurang tepat karena fungsi tersebut mungkin tidak benar-benar “memperbarui” *input*. Jadi, kita mencoba pendekatan lain: mengganti kata “update” dengan “handle”, sehingga namanya menjadi *handleInputs*.

Namun, tugas kita tidak berhenti di situ. Setelah fungsi-fungsi tersebut disederhanakan lebih jauh, sempatkan waktu untuk kembali meninjau nama-namanya. Apakah nama tersebut masih sesuai dengan apa yang fungsi lakukan? Jika tidak, jangan ragu untuk memperbaikinya.

Mengapa ini penting? Karena nama yang baik bukan hanya soal estetika – ini adalah cara untuk meningkatkan produktivitas dan kolaborasi. Ketika kode mudah dibaca, diskusi tentangnya menjadi lebih lancar, pengembang baru lebih cepat menyesuaikan diri, dan bahkan pelanggan bisa lebih mengerti apa yang dilakukan oleh sistem kita. Jadi, jangan anggap remeh seni memberi nama fungsi.

