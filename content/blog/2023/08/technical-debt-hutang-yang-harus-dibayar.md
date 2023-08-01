---
title: 'Technical Debt, Hutang Teknis yang Harus Dibayar'
date: 2023-08-08
category: 'notes'
---

Setiap programmer berusaha sebaik mungkin untuk menulis kode yang baik dan bersih (*clean*) sejak awal. Tidak ada yang sengaja ingin menyusun kode yang kacau dan menyulitkan proyek. Namun, pada suatu titik, bagaimana kode yang bersih bisa berubah menjadi tidak bersih?

Metafora "hutang teknis" yang merujuk pada kode yang tidak bersih awalnya diusulkan oleh Ward Cunningham.

Bayangkan kita mendapatkan pinjaman dari bank untuk dapat membeli sesuatu lebih cepat. Kita akan membayar ekstra sebagai bunga atas pinjaman tersebut. Dengan begitu, kita tidak hanya membayar pokok pinjaman tetapi juga bunga tambahan. Terkadang, bunga yang harus kita bayar bisa begitu besar sehingga jumlahnya melebihi pendapatan kita, membuat pembayaran penuh menjadi sulit dilakukan.

Hal yang serupa dapat terjadi dengan kode. Mungkin kita ingin mempercepat pengembangan dengan tidak menulis tes untuk fitur baru, namun perlahan-lahan hal ini akan memperlambat kemajuan kita setiap harinya hingga akhirnya kita harus "melunasi" hutang tersebut dengan menulis tes.

## Penyebab hutang Teknis

1. **Tekanan Bisnis**

   Terkadang, kondisi bisnis memaksa kita untuk meluncurkan fitur sebelum sepenuhnya selesai. Dalam situasi seperti ini, tambalan dan kode kotor mungkin muncul untuk menyembunyikan bagian proyek yang belum selesai.

1. **Kurangnya Pemahaman tentang Konsekuensi hutang Teknis**

   Terkadang, atasan atau manajemen mungkin tidak sepenuhnya memahami bahwa hutang teknis memiliki konsekuensi, seperti melambatnya laju pengembangan karena hutang terus menumpuk. Hal ini bisa menyulitkan untuk mengalokasikan waktu untuk refactoring karena manajemen mungkin tidak memahami nilai jangka panjang dari perbaikan tersebut.

1. **Kegagalan dalam Menghadapi Keterkaitan Komponen yang Ketat**

   Terkadang, proyek dapat menjadi seperti monolit daripada terdiri dari modul-modul individu. Dalam situasi ini, setiap perubahan pada satu bagian proyek akan mempengaruhi bagian lainnya. Tim pengembangan akan menghadapi kesulitan dalam mengisolasi pekerjaan anggota individu.

1. **Kurangnya Tes**

   Ketidakmampuan untuk menyediakan umpan balik secara langsung dapat mendorong solusi cepat yang berisiko atau pemecahan masalah sementara. Dalam kasus terburuk, perubahan ini dapat diterapkan dan diimplementasikan langsung ke produksi tanpa pengujian sebelumnya, ini menyebabkan masalah serius.

1. **Kurangnya Dokumentasi**

   Kurangnya dokumentasi dapat memperlambat proses integrasi anggota baru ke dalam proyek dan dapat menyebabkan masalah ketika anggota kunci meninggalkan proyek.

1. **Kurangnya Interaksi Antar Anggota Tim**

   Jika pengetahuan tidak didistribusikan secara merata di antara seluruh tim, orang-orang akhirnya akan bekerja dengan pemahaman yang usang tentang proses dan informasi proyek. Hal ini dapat memburuk jika pengembang junior tidak mendapatkan pelatihan yang memadai dari mentor mereka.

1. **Pengembangan Simultan dalam Cabang yang Berbeda**

   Hal ini dapat menyebabkan akumulasi hutang teknis yang semakin bertambah saat perubahan digabungkan. Semakin banyak perubahan yang dilakukan secara terpisah, semakin besar total hutang teknis.

1. **Penundaan *Refactoring***

   Persyaratan proyek (*requirement*) dapat berubah seiring waktu, dan pada suatu titik bisa menjadi jelas bahwa bagian dari kode sudah usang dan tidak lagi praktis. Hal ini memerlukan *refactoring* untuk memenuhi *requirement* baru. Semakin lama *refactoring* ditunda, semakin banyak kode yang bergantung padanya harus dikerjakan ulang di masa mendatang.

1. **Kurangnya Pemantauan Kepatuhan**

   Ini terjadi ketika setiap anggota proyek menulis kode sesuai preferensi pribadinya tanpa peduli keseragaman kode secara keseluruhan.

1. **Ketidakmampuan**

   Terkadang, pengembang mungkin tidak memiliki pengetahuan atau keterampilan untuk menulis kode yang baik dan bersih.

## Mengatasi hutang Teknis

Untuk mengatasi hutang teknis, perlu adanya komitmen dari seluruh tim pengembangan dan manajemen untuk:

- **Menggunakan Prinsip-Prinsip Perancangan yang Baik**: Pastikan seluruh tim memahami dan mengikuti prinsip-prinsip desain yang baik agar kode tetap bersih dan mudah dipahami.

- **Mendokumentasikan Kode**: Selalu berusaha untuk menyertakan dokumentasi yang jelas dan lengkap untuk memudahkan orang lain memahami kode.

- **Mengutamakan Tes**: Selalu menyertakan tes yang memadai untuk setiap bagian kode yang ditulis untuk menghindari masalah di masa depan.

- **Melakukan Refactoring Secara Berkala**: Selalu lakukan refactoring untuk membersihkan kode dan menghilangkan hutang teknis secara teratur.

- **Meningkatkan Kolaborasi**: Pastikan seluruh anggota tim berkomunikasi dan berkolaborasi dengan baik untuk memastikan pengetahuan tentang proyek selalu terbagi dengan baik.

Dengan menerapkan langkah-langkah ini, tim pengembangan dapat mengurangi dan mencegah akumulasi hutang teknis, sehingga proyek dapat berjalan lebih lancar dan lebih efisien.