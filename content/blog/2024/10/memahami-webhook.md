---
title: 'Memahami Webhook'
date: 2024-10-15
category: 'notes'
---

Webhook adalah sebuah callback HTTP yang didefinisikan oleh pengguna. Ketika sebuah peristiwa (event) yang telah ditentukan terjadi, aplikasi yang bertindak sebagai webhook server akan mengirimkan request HTTP ke URL yang sudah ditentukan (webhook client), yang kemudian memicu suatu aksi di aplikasi penerima.

Secara sederhana, webhook adalah cara untuk memberi tahu sistem eksternal bahwa sebuah peristiwa telah terjadi di aplikasi kita. Saat sebuah peristiwa terjadi, aplikasi kita akan mengirimkan request HTTP ke aplikasi lain untuk memberi tahu tentang peristiwa tersebut beserta informasi terkait. Webhook sangat berguna ketika suatu sistem perlu segera diberi tahu begitu sesuatu terjadi di sistem lain.

### Contoh Penggunaan Umum (Common Use Case)

Salah satu contoh penggunaan yang umum adalah saat pengguna aplikasi kita melakukan pembayaran melalui gateway pembayaran. Dalam kasus ini, setelah peristiwa pembayaran terjadi, gateway akan mengirimkan request webhook ke server kita dengan rincian pembayaran. Aplikasi kita kemudian mendengarkan webhook tersebut, memverifikasi bahwa data benar-benar berasal dari gateway pembayaran yang benar, dan memberikan layanan kepada pelanggan kita. Dengan begitu kita dapat melakukan berbagai tindakan selanjutnya, seperti membuat pesanan, memberikan hadiah atau cashback, mengirim email "Terima Kasih," dan banyak hal lainnya.

Webhook sering kali disebut sebagai "reverse API" atau "push API," karena dalam mekanisme ini tanggung jawab komunikasi berada di server, bukan di klien. Alih-alih klien yang terus-menerus mengirim request HTTP untuk meminta data hingga server merespons, server akan mengirimkan satu request HTTP POST ke klien segera setelah data tersedia.

### Manfaat Webhook

1. **Lebih Sedikit Upaya dan Sumber Daya Dibandingkan Polling API**

   Webhook memerlukan lebih sedikit upaya dan sumber daya daripada polling API, di mana aplikasi secara terus-menerus mengirim request ke server untuk memeriksa apakah ada data baru.

2. **Lebih Mudah untuk Skalabilitas**

   Jika kita perlu memantau banyak sumber daya, memanggil API untuk setiap sumber daya dapat menyebabkan batas kuota panggilan API cepat tercapai. Sebagai gantinya, kita dapat berlangganan beberapa acara webhook dan menerima informasi hanya ketika peristiwa terjadi.

3. **Memungkinkan Pembaruan Hampir Real-Time**

   Webhook memungkinkan pembaruan hampir real-time karena mereka dipicu saat peristiwa terjadi.

4. **Menghilangkan Kebutuhan untuk Polling**

   Ini menghemat sumber daya untuk aplikasi klien karena tidak perlu terus-menerus memeriksa server.

5. **Cepat dan Mudah Dikonfigurasi**

   Jika sebuah aplikasi mendukung webhook, mereka mudah untuk diatur melalui antarmuka pengguna server. Pengguna hanya perlu memasukkan URL webhook dan menetapkan beberapa parameter dasar, seperti jenis peristiwa yang ingin didaftarkan.

6. **Mengotomatiskan Transfer Data**

   Payload dikirim segera setelah peristiwa tertentu terjadi di server. Pertukaran ini dipicu oleh peristiwa tersebut, sehingga terjadi secepat data dapat ditransfer dari server ke klien — secepat mungkin dalam hal transfer data real-time.

7. **Ideal untuk Payload Ringan dan Spesifik**

   Webhook memungkinkan server untuk menentukan jumlah data yang dikirim, dan klien yang akan menginterpretasikan payload serta menggunakannya dengan cara yang produktif. Karena klien tidak mengontrol waktu atau ukuran transfer data, webhook biasanya menangani jumlah informasi kecil antara dua titik akhir, sering kali dalam bentuk notifikasi.

### Masalah Umum yang Terjadi pada Webhook

1. **Keamanan**

   Penting untuk memastikan bahwa panggilan webhook aman dan tidak disalahgunakan oleh pihak tidak bertanggung jawab.

2. **Penandatanganan Panggilan, Pengulangan Panggilan, dan Strategi Backoff**

   Perlu ada mekanisme untuk menandatangani setiap panggilan dan mengulangi panggilan jika ada kegagalan, serta menerapkan strategi backoff untuk menghindari pemanggilan berlebihan.

3. **Beban dan Jaringan**

   Kadang-kadang webhook mungkin lambat karena beban jaringan atau server yang tinggi.

4. **Pembatasan Laju (Rate Limiting)**

   Ada batasan jumlah request yang dapat dikirim dalam satu waktu tertentu, yang harus diperhatikan.

5. **Penanganan Kesalahan**

   Webhook harus mampu menangani kesalahan secara efektif agar tidak terjadi masalah yang lebih besar.

6. **Kondisi Lomba (Race Conditions)**

   Ketika beberapa peristiwa terjadi secara bersamaan, ada kemungkinan terjadinya kondisi lomba yang perlu diatasi.

7. **Mekanisme Kegagalan dan Pengulangan**

   Jika terjadi kesalahan atau waktu habis, webhook harus mencoba kembali untuk memastikan bahwa data tidak hilang.

8. **Antrian**

   Terkadang perlu ada antrian untuk menangani request webhook yang menumpuk.

9. **Pemantauan**

   Memastikan bahwa webhook berfungsi dengan benar dan mengetahui webhook mana yang gagal sangat penting untuk menjaga keandalan sistem.

10. **Penerimaan Webhook yang Sama Berulang Kali**

    Dalam beberapa kasus, Anda mungkin menerima banyak webhook untuk peristiwa yang sama.

11. **Penyedia Webhook Hanya Mengizinkan Satu URL**

    Beberapa penyedia webhook membatasi jumlah URL yang dapat digunakan, yang dapat menjadi tantangan ketika Anda perlu mengintegrasikan beberapa sistem.

_Referensi:_

- https://freek.dev/1383-sending-and-receiving-webhooks-in-laravel-apps
- https://www.redhat.com/en/topics/automation/what-is-a-webhook
- https://medium.com/@prevailexcellent/how-to-handle-webhook-in-laravel-two-ways-and-the-best-way-90abfa7e1a39
