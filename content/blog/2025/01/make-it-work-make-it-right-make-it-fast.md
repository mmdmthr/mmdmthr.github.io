---
title: 'Make It Work, Make It Right, Make It Fast'
date: 2025-01-18
category: 'notes'
---

Dalam dunia pengembangan perangkat lunak, ada kata-kata yang sering terdengar, yang berfungsi seperti mantra untuk memandu kita dalam menavigasi kompleksitas pekerjaan ini. Salah satu yang paling terkenal adalah satu kalimat dari Kent Beck:

"Make it work, make it right, make it fast."

Mantra ini, meski sederhana, mengandung filosofi mendalam tentang bagaimana kita seharusnya mendekati pengembangan perangkat lunak. Mari kita bahas tiap bagiannya.

## Make It Work

Langkah pertama adalah memastikan solusi yang kita buat dapat berfungsi sesuai kebutuhan. Acuannya adalah kebutuhan bisnis yang harus diimplementasikan dalam produk. Pada tahap ini, fokus kita adalah keberhasilan implementasi dasar. Tidak masalah jika kode terlihat berantakan atau belum optimal, yang penting adalah masalah telah terselesaikan.

Sebagai contoh, saat membangun prototipe, kita mungkin menggunakan pendekatan langsung (_brute force_) untuk memastikan semua bagian sistem bekerja dengan benar. Tujuan utama di sini adalah mendapatkan solusi yang dapat diuji dan mengumpulkan feedback. Kita tidak membuatnya sempurna di tahap ini karena toh kasusnya belum divalidasi, jika kita terlalu banyak memberikan effort pada tahap ini semua akan sia-sia jika ternyata yang kita kerjakan tidak valid dan menyelesaikan masalah yang menjadi tujuan kita.

## Make It Right

Setelah solusi berhasil dibuat dan divalidasi, langkah berikutnya adalah memperbaiki kode tersebut agar menjadi lebih baik, dengan keyakinan kode ini akan digunakan dalam jangka panjang. Ini mencakup aspek seperti:

- _Refactoring_: Memperbaiki struktur kode untuk meningkatkan keterbacaan dan pemeliharaan.
- _Dokumentasi_: Menambahkan komentar dan deskripsi yang relevan agar kode dapat dipahami oleh tim lain.

Pada tahap ini, kita memastikan bahwa solusi tidak hanya bekerja, tetapi juga benar dari segi logika, struktur, prinsip desain dan menerapkan best practices.

## Make It Fast

Seperti yang sering diingatkan dalam dunia pengembangan perangkat lunak, _"premature optimization is the root of all evil."_ Jangan tergoda untuk mengoptimalkan performa terlalu dini sebelum memastikan kode bekerja dan benar. Inilah mengapa optimasi diletakkan sebagai langkah terakhir. Setelah memastikan bahwa solusi kita berfungsi dan benar, barulah kita memfokuskan diri pada kinerja. Ini bisa mencakup:

- Memperbaiki algoritma untuk efisiensi, mengurangi query data yang berlebihan.
- Mengurangi konsumsi sumber daya seperti memori atau waktu eksekusi.
- Meningkatkan skalabilitas untuk menangani lebih banyak pengguna atau data.

---

Dengan fokus pada satu tujuan di setiap tahap, kita dapat membuat proses pengembangan efektif dan efisien. Di tahap pertama kita bisa dengan cepat mendapatkan feedback dan mem-validasi solusi (hemat waktu). Dengan tahap kedua kita bisa menurunkan biaya pemeliharaan dalam jangka panjang. Tahap ketiga kita bisa menghemat biaya sumber daya sekaligus meningkatkan retensi pengguna dengan memberikan pengalaman menggunakan aplikasi yang cepat. 