---
title: 'Pengalaman Kerja Pertama Sebagai Web Developer'
date: 2025-01-05
category: 'notes'
---

Menulis tulisan ini menjadi kesempatan bagi saya untuk melihat kembali pembelajaran berharga yang saya dapatkan dari pekerjaan pertama saya sebagai seorang web developer. Dalam tulisan ini, saya akan membahas pengalaman tersebut dari sisi teknis dan dinamika tim.

### Tim Kecil, Tanggung Jawab Besar

Selama satu tahun penuh, saya bekerja di sebuah tim kecil yang terdiri dari tiga developer: dua developer web (termasuk saya) dan satu developer aplikasi desktop. Tim yang kecil ini membawa tantangan sekaligus peluang. Meskipun ada tim, kami tidak bekerja secara kolaboratif pada satu proyek. Setiap orang bertanggung jawab penuh atas proyeknya masing-masing, mulai dari menentukan teknologi hingga implementasi dan penyelesaian.

### Proyek yang Saya Kerjakan

Selama di pekerjaan tersebut, saya berkesempatan mengerjakan beberapa proyek yang cukup beragam:

- Web Portal Lowongan Kerja

    Proyek pertama saya adalah membuat portal lowongan kerja. Di sini, saya menggunakan PHP dan CodeIgniter (CI) sebagai framework. Pengalaman ini mengajarkan saya bagaimana membangun aplikasi web yang terstruktur mulai dari nol. Saya bahkan melakukan riset mandiri mulai dari desain UI/UX (tidak ada desainer di dalam tim). Selain itu saya juga harus belajar menerapkan praktik SEO untuk meningkatkan kunjungan web. Saya belajar untuk memasang tool analytic untuk mendapat visibilitas pada metrik-metrik kunjungan dan membuat halaman html yang bisa diindex oleh mesin pencari khusus lowongan pekerjaan. 

- Versi Web Aplikasi POS

    Proyek kedua adalah membuat versi web untuk aplikasi _Point of Sale_ (POS), yang sebelumnya sudah ada versi desktopnya. Kali ini, saya memutuskan untuk menggunakan Laravel di backend dan Vue.js di frontend. Pengalaman ini memperkenalkan saya pada framework modern yang lebih fleksibel dan efisien dibandingkan teknologi sebelumnya. Selain mempercepat proses pengembangan, ini juga memungkinkan saya untuk membuat UI yang lebih mendukung fungsionalitas dan meningkatkan pengalaman pengguna.

- Support & Bug Fix untuk LMS

    Selain membangun aplikasi baru, saya juga terlibat dalam maintenance _Learning Management System_ (LMS) untuk sebuah lembaga kursus. Di sini saya berinteraksi dengan _legacy system_. Tugas saya lebih banyak berurusan dengan debugging dan memastikan sistem berjalan lancar. Seingat saya ada penambahan fitur, namun hanya minor.

### Tantangan Teknis yang Membangun

Bekerja di tim kecil berarti banyak aspek teknis yang harus saya tangani sendiri. Berikut adalah beberapa tantangan yang saya hadapi:

- Shared Hosting dan FTP

    Semua aplikasi kami dihosting di _shared hosting_, dan untuk meng-update aplikasi, saya menggunakan FTP. Ini adalah pengalaman yang membuka mata tentang keterbatasan shared hosting, sekaligus membuat saya lebih menghargai tools modern seperti CI/CD pipelines yang kini menjadi standar. Saya bisa memahami, meskipun memiliki keterbatasan, keputusan ini punya kelebihan dalam hal biaya yang lebih ekonomis. 

- Tidak Ada Version Control

    Di tempat tersebut, version control tidak digunakan. Namun, saya menyadari pentingnya version control sehingga saya mencoba menggunakan Git untuk proyek saya sendiri. Meskipun sederhana, ini membantu saya melacak perubahan dan belajar menggunakan tools seperti GitHub.

- Keamanan Aplikasi

    Saya pernah menerima email laporan serangan XSS di salah satu aplikasi yang saya buat dengan CI. Setelah meneliti, saya menemukan bahwa sanitasi input di CI tidak diaktifkan secara default. Ini adalah momen pembelajaran besar tentang pentingnya keamanan aplikasi web, yang sebelumnya tidak terpikirkan. Sayangnya, karena keterbatasan anggaran, perusahaan tidak bisa memberikan reward kepada pelapor.

### Pelajaran Berharga

Dari pekerjaan pertama ini, saya belajar banyak hal yang menjadi fondasi karier saya:

- Mandiri dalam Memilih dan Belajar Teknologi

    Dengan kebebasan menentukan teknologi, saya belajar mengevaluasi tools berdasarkan kebutuhan proyek. Ini menjadi bekal penting dalam pekerjaan saya berikutnya. Segala macam keterbatasan juga membentuk cara berpikir saya untuk lebih fleksibel dan pragmatis. Lakukan apa yang kita bisa, dengan alat yang tersedia, seoptimal mungkin untuk memberi value dalam bisnis.

- Pentingnya Dokumentasi dan Version Control

    Ketiadaan version control di tempat kerja mendorong saya untuk mulai belajar dan mengimplementasikannya sendiri. Hal ini membentuk kebiasaan baik yang masih saya gunakan hingga saat ini.

- Keamanan adalah Prioritas

    Pengalaman menangani laporan serangan XSS menyadarkan saya bahwa keamanan harus selalu diperhatikan sejak awal pengembangan aplikasi. Bahkan sesederhana sanitasi input, jangan pernah percaya pada pengguna.

- Bekerja di Tim Kecil Membentuk Multi-Skill

    Tim kecil memaksa saya untuk belajar banyak hal, mulai dari backend, frontend, hingga deployment (bahkan desain UI/UX). Ini membuat saya lebih fleksibel dan siap menghadapi berbagai tantangan. Pimpinan juga pernah meminta saya untuk riset dan mempersiapkan presentasi proyek CRM yang dibutuhkan oleh sebuah jaringan restoran yang cukup besar. Bahkan saya diajak di sesi pertemuan tersebut dan melihat bagaimana pelaku bisnis berusaha memecahkan masalah dalam organisasi mereka dengan bantuan teknologi.

#### Penutup

Pekerjaan pertama saya sebagai web developer mungkin terlihat sederhana dari luar, tidak menerapkan praktik terbaik dan memiliki organisasi idel. Tetapi bagi saya itu penuh dengan pelajaran berharga yang membentuk saya menjadi developer seperti sekarang. Bekerja di tim kecil, menghadapi tantangan teknis sendirian, dan menyelesaikan proyek dari awal hingga akhir adalah pengalaman yang tidak tergantikan.

Refleksi ini menjadi pengingat bahwa setiap langkah kecil di awal perjalanan karier memiliki peran besar dalam membentuk masa depan kita. Ini bukan tentang di mana kita bekerja, tapi bagaimana kita bekerja dan apa yang kita pelajari selama kita bekerja, itulah yang jauh lebih penting.