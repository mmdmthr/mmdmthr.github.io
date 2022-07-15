---
title: JAMStack Adalah
date: 2021-02-16T07:26:03.284Z
category: 'notes'
---

JAMstack adalah arsitektur software yang disusun dari 3 komponen: Javascript, API, dan Markup. Arsitektur JAMStack dirancang untuk membuat website lebih cepat, lebih aman, dan lebih mudah untuk diskalakan. Prinsip inti JAMStack adalah _pre-rendering_ dan _decoupling_.

**_Pre-rendering_** berarti halaman website (markup) yang mewakili view adalah file statis yang telah dibuild (berupa file html). Web server tidak perlu melakukan render setiap kali user melakukan request. Dengan Jamstack, front-end dibangun terlebih dahulu menjadi halaman statis beserta aset yang sudah sangat dioptimalkan selama proses build. Proses _pre-rendering_ ini menghasilkan website yang dapat disajikan langsung dari CDN. Dengan begitu akan mengurangi biaya, kompleksitas, dan risiko server dinamis sebagai infrastruktur penting.

**_Decoupling_** berarti memisahkan antara sistem dengan service. Masing-masing komponen berdiri sendiri dan berkomunikasi menggunakan API. Pada praktik kebanyakan, halaman website dirender di sisi server setiap kali user melakukan request. Ini yang disebut dengan website dinamis, misalnya tampilan sebuah website (view) dirender dengan PHP atau bahasa pemrograman lainnya. Dengan metode itu kebutuhan server akan meningkat seiring dengan penambahan pengguna. Ini membuat sitem semakin besar dan kompleks.

Istilah "JAMStack" muncul saat Matt Biilmann dan Chris Bach membuat alur kerja pengembangan web modern di Netlify, mereka mencari istilah mudah untuk merujuk pada sebuah pendekatan arsitektural itu untuk digunakan dalam percakapan. Jamstack mencakup banyak dasar-dasar arsitektur web yang ada, sehingga mereka menciptakan istilah Jamstack untuk membantu orang-orang membicarakannya dengan lebih ringkas.

Dengan begitu banyak tool populer untuk membuat website statis, seperti Gatsby, Hugo, Jekyll, Eleventy, NextJS, dan masih banyak lagi, banyak pengembang web sudah terbiasa dengan alat yang dibutuhkan untuk mengembangkan Jamstack.

## Mengapa menggunakan JAMStack

Arsitektur JAMStack dapat memberi beberapa kelebihan pada website dan alur kerja pengembangan. Berikut beberapa kelebihannya

#### Keamanan

Jamstack menghilangkan penggunaan bagian dinamis dalam infrastruktur hosting sehingga menghasilkan lebih sedikit penggunaan server dan sistem menjadi lebih sulit untuk diserang.Tampilan halaman web dan aset adalah file yang dibuat secara pre-render, ini memungkinkan hanya memberikan akses baca saja (read-only) ke hosting. Hal itu mengurangi risiko serangan lebih jauh. Sementara layanan yang sifatnya dinamis dapat disediakan oleh vendor dengan tim yang dedicated atau pihak ketiga yang sudah memiliki keamanan sistem.

#### Skala

Arsitektur yang populer saat ini menangani beban lalu lintas yang padat dengan menambahkan logika untuk membuat cache pada tampilan dan sumber daya yang sering diakses. Jamstack secara natural menyediakan ini. Karena halaman web dapat disajikan sepenuhnya dari CDN, tidak ada logika atau alur kerja yang rumit untuk menentukan aset apa yang dapat di-cache dan kapan. Bahkan dengan website Jamstack semuanya dapat disimpan dalam cache di CDN. Dengan begitu penerapannya bisa lebih sederhana dan kapasitas loadnya bisa lebih besar.

#### Performa

Kita semua tau kecepatan memuat (_load_) halaman berdampak pada pengalaman pengguna dan konversi. Website Jamstack menghilangkan kebutuhan untuk menghasilkan tampilan halaman di server setiap kali ada request, karena halaman telah dibuat sebelumnya (_pre-rendered_). Dengan semua halaman telah tersedia di CDN yang dekat dengan pengguna dan siap untuk ditayangkan, kinerja yang sangat tinggi dimungkinkan tanpa menggunakan infrastruktur yang mahal atau kompleks.

#### Pemeliharaan

Ketika kompleksitas hosting berkurang, berkurang pula tugas pemeliharaan. Situs yang dibuat sebelumnya (_pre-rendered_), disajikan langsung dari host sederhana atau langsung dari CDN sehingga tidak memerlukan tim ahli untuk memastikannya tetap bisa diakses. Pekerjaan yang berhubungan dengan tampilan halaman sudah selesai selama pembuatan, jadi website yang dihasilkan sudah stabil dan dapat dihosting tanpa server yang mungkin memerlukan patching, update, dan maintenance.

#### Portabilitas

Situs Jamstack bersifat _pre-rendered_ atau sudah dibuat sebelumnya. Itu berarti kita dapat menghostingnya dari berbagai layanan hosting dan memiliki kemampuan lebih besar untuk memindahkannya ke host pilihan Anda. Kita tidak perlu memindahkan banyak sekali file, cukup source file halaman web saja. Solusi hosting statis sederhana apa pun harus dapat melayani situs Jamstack. Kita tidak lagi terkunci pada satu infrastruktur.

#### Pengalaman Pengembang

Jamstack adalah sebuah arsitektur, bukan alat yang spesifik. Website Jamstack dapat dibangun dengan berbagai alat. Itu tidak bergantung pada teknologi eksklusif atau framework yang eksotis dan sedikit diketahui. Sebaliknya, mereka mengembangkan alat dan konvensi yang tersedia secara luas.

Sumber: [jamstack.org](https://jamstack.org/what-is-jamstack/)
