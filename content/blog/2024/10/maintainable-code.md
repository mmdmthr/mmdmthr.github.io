---
title: 'Maintainable Code'
date: 2024-10-19
category: 'notes'
---

Saat organisasi berkembang, memelihara kode bisa menjadi salah satu komponen biaya terbesar. Bayangkan kita adalah developer yang baru saja masuk kerja dan diminta untuk menambahkan fitur atau memperbaiki bug. Kita perlu membaca dan memahami kode yang sudah ada terlebih dahulu sebelum membuat perubahan.

Kode yang sulit dipahami sering kali mengakibatkan kesulitan dalam melakukan perubahan atau penambahan fitur baru, serta rentan terhadap bug yang dapat mengganggu operasional. Itu memerlukan waktu dan perhatian yang besar dari developer. 

Dalam lingkungan yang bergerak cepat, kemampuan untuk memastikan kode tetap mudah dipelihara adalah suatu keharusan agar tim pengembang dapat bekerja secara efisien. Tapi, seperti apakah kode yang mudah dipelihara itu? Bagaimana kita dapat mengetahuinya?

## Prinsip-Prinsip Dasar Maintainable Code

Ada beberapa prinsip yang bisa diikuti untuk menulis kode yang mudah dipelihara:
- Keterbacaan (_Readability_): Developer lebih banyak menghabiskan waktu membaca kode dibanding melakukan perubahan. Kode harus jelas dan mudah dipahami, baik dari segi penamaan variabel dan fungsi, komentar yang relevan, maupun struktur logika yang digunakan.
- Struktur Modular (_Modularity_): Pecahkan kode menjadi modul-modul kecil yang dapat dipelihara secara terpisah. Ini akan memudahkan perbaikan atau penambahan fungsi tanpa harus mengubah banyak bagian kode. Membuat perubahan pada class/fungsi yang kecil lebih mudah dilakukan. Bayangkan Anda harus melakukan perubahan pada sebuah class dengan 1000 baris kode.
- Uji Kode (_Testing_): Sertakan pengujian otomatis untuk memverifikasi bahwa kode berfungsi seperti yang diharapkan. Pengujian ini juga membantu mencegah bug ketika ada perubahan di masa depan. Dengan membaca kode testing, developer lain juga bisa terbantu dalam memahami ekspektasi output yang dihasilkan dari sebuah fungsi atau bahkan use case apa saja yang menggunakan fungsi tersebut.
- Dokumentasi yang Baik: Meskipun kode seharusnya cukup jelas dengan sendirinya, dokumentasi tetap diperlukan untuk menjelaskan konteks atau keputusan desain yang tidak dapat terlihat langsung dari kode.

## Melihat dari Luar

Dari pengalaman saya, paling tidak ada dua cara untuk mengidentifikasi apakah sebuah kode mudah dipelihara:

**1. Masukan dari Rekan Kerja (Peer Review)**

Sulit untuk menilai kode kita sendiri apakah sudah mudah dipelihara atau belum, karena sebagai penulis kode, kita memiliki pengetahuan lebih dari apa yang bisa ditangkap hanya dengan membaca kodenya. Kita memiliki konteksnya, mengapa kode itu dibuat, dan hal lain yang tidak sepenuhnya diketahui oleh orang lain. 

Ini seringkali menimbulkan bias, kita selalu merasa kode yang kita tulis sudah mudah dipahami. Oleh karena itu, kita membutuhkan orang lain untuk melihat kode yang telah kita tulis dan memberikan pendapatnya. Proses ini dikenal dengan istilah peer review.

Peer review dapat membantu kita mengetahui apakah kode tersebut dapat dengan mudah dipelihara oleh orang lain. Jika seorang rekan kerja, setelah membacanya, dapat memahami desain, tata letak, dan maksud dari kode tersebut dengan benar (sesuai ekspektasi kita). Maka kita bisa cukup yakin bahwa kode yang kita tulis dapat dipahami (_understandable_).

Selanjutnya, jika rekan kita dapat memahami kode tersebut dan memeliharanya (membuat perubahan atau perbaikan) tanpa harus meminta bantuan, maka kode tersebut dapat dianggap mudah dipelihara (_maintainable_).

**2. Waktu Akan Menjawab**

Di dunia nyata, seringkali kita harus melakukan perubahan pada kode yang sudah kita tulis sebelumnya. Salah satu cara terbaik untuk mengetahui apakah kode kita mudah dipelihara adalah dengan kembali ke kode yang kita tulis enam bulan yang lalu dan mencoba memahaminya. Jika kita dapat memahami maksud dan tujuan dari kode tersebut dengan cepat, maka kode tersebut dapat dianggap mudah dibaca dan dipahami. Hal ini menunjukkan bahwa kode tersebut telah ditulis dengan struktur dan dokumentasi yang baik sehingga bisa diikuti meskipun sudah cukup lama tidak dilihat.