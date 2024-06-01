---
title: 'Contoh Tech Debt'
date: 2024-06-07
category: 'notes'
---

Pada artikel sebelumnya, kita telah membahas tentang [apa itu utang teknologi (tech debt)](/2024/05/hutang-teknis/) dan bagaimana hal itu berbeda dari bug. Inti dari [argumen Allen Holub](https://holub.com/technical-debt/) tersebut adalah bahwa bug adalah kode yang tidak berperilaku seperti yang Kita harapkan, sedangkan utang teknologi adalah kode yang berperilaku persis seperti yang Kita harapkan, tetapi harapan Kita ternyata salah. Utang teknologi tidak ada hubungannya dengan bug. Kita mengirimkan kode terbaik yang Kita bisa, berdasarkan pengetahuan Kita saat itu. Kita tidak dengan sengaja mengabaikan hal-hal tentang bagaimana kode tersebut harus bekerja yang sebenarnya sudah Kita ketahui.

Sekarang, mari kita melihat beberapa contoh nyata dari utang teknologi. Contoh-contoh ini bervariasi dari yang trivial hingga yang besar.

## Contoh Utang Teknologi yang Besar

1. **Arsitektur N-tier yang Tidak Cocok dengan Lingkungan Agile**  
   Salah satu contoh besar dari utang teknologi adalah ketika sebuah organisasi memiliki arsitektur N-tier berlapis-lapis yang ternyata tidak cocok dengan lingkungan kerja Agile. Dalam konteks ini, arsitektur N-tier mungkin sangat sulit untuk diubah dan diperbaiki dengan cepat sesuai dengan kebutuhan yang terus berkembang. Sebagai solusinya, organisasi mungkin perlu beralih ke arsitektur mikroservis (microservice architecture). Ini adalah perubahan besar yang membutuhkan investasi waktu dan sumber daya yang signifikan, tetapi diperlukan untuk meningkatkan kecepatan dan fleksibilitas pengembangan.

2. **Penyalahgunaan Perpustakaan (Library)**  
   Contoh lainnya adalah ketika kita menggunakan sebuah library untuk melakukan sesuatu, dan kemudian menyadari bahwa kita sebenarnya tidak menggunakan library tersebut dengan benar. Misalnya, kita mungkin menggunakan library untuk mengelola koneksi database, tetapi setelah beberapa waktu, kita menemukan bahwa ada cara yang lebih efisien dan aman untuk melakukannya. Ini memerlukan refaktorisasi kode agar sesuai dengan praktik terbaik yang baru ditemukan.

Dalam kasus keduanya, sistem bekerja seperti harapan kita, namun untuk mencapai tujuan tertentu, masih ada pekerjaan yang harus kita lakukan lagi.

## Contoh Utang Teknologi yang Lebih Kecil

1. **Detail User Story yang Salah**  
   Dalam skenario yang lebih kecil, mungkin kita mendapatkan detail cerita (user story) yang salah. Ketika kita duduk bersama pengguna untuk meninjau implementasi sebuah fitur, mereka mungkin memberi tahu kita atau kita melihat sendiri mereka kesulitan dengan cara kerja fitur tersebut. Meskipun ini mungkin tampak seperti masalah kecil, jika tidak diperbaiki, dapat menjadi utang teknologi yang mengganggu pengalaman pengguna dan efisiensi tim. Fiturnya secara bisnis bekerja, tapi ada detil yang terlewat dari user story, dalam hal ini pada sisi pengalaman pengguna.

2. **Desain Antarmuka yang Buruk**  
   Antarmuka pengguna (UI) yang tidak intuitif adalah contoh lain dari utang teknologi. Misalnya, jika pengguna memerlukan banyak klik untuk mencapai tugas yang sederhana, itu berarti desain antarmuka tidak efisien. Meskipun fungsionalitasnya mungkin bekerja seperti yang diharapkan, pengalaman pengguna yang buruk adalah tanda bahwa ada utang teknologi yang perlu diselesaikan dengan memperbaiki desain antarmuka tersebut.

3. **Penggunaan API yang Tidak Optimal**  
   Kita mungkin menggunakan sebuah API untuk berinteraksi dengan layanan eksternal. Itu adalah layanan eksternal baru yang belum pernah kita lihat sebelumnya. Karena waktu yang sempit, kita tidak sempat mendalami dokumentasi dan hanya membuatnya berfungsi saja. Setelah beberapa waktu, kita mengetahui bahwa ada metode yang lebih baik dan lebih efisien yang ditawarkan oleh API tersebut. Meskipun kode kita bekerja dengan baik, menggunakan metode lama bisa berarti kita tidak memanfaatkan sepenuhnya kemampuan API tersebut, yang merupakan bentuk utang teknologi.

## Menyelesaikan Utang Teknologi

Menyelesaikan utang teknologi memerlukan pengakuan bahwa selalu ada ruang untuk perbaikan. Proses ini sering kali melibatkan refaktorisasi kode, memperbarui arsitektur, atau meningkatkan desain antarmuka. Berikut adalah beberapa langkah yang dapat diambil untuk mengatasi utang teknologi:

1. **Prioritaskan Utang Teknologi**  
   Tidak semua utang teknologi perlu diselesaikan segera. Prioritaskan utang teknologi berdasarkan dampaknya terhadap kinerja sistem, pengalaman pengguna dan kapasitas kerja tim.

2. **Refaktorisasi Secara Berkala**  
   Jadwalkan sesi refaktorisasi rutin untuk memperbaiki kode yang kurang optimal. Ini akan membantu mencegah utang teknologi menumpuk hingga menjadi masalah besar.

3. **Libatkan Pengguna dalam Umpan Balik**  
   Melibatkan pengguna dalam proses pengembangan dapat membantu mengidentifikasi utang teknologi sejak dini. Umpan balik pengguna adalah alat yang sangat berharga untuk meningkatkan kualitas produk.

4. **Pelatihan dan Pengembangan Tim**  
   Pastikan tim pengembang selalu memperbarui pengetahuan mereka tentang praktik terbaik terbaru dalam pengembangan perangkat lunak. Investasi dalam pelatihan dapat membantu mengurangi kemungkinan terjadinya utang teknologi di masa depan.