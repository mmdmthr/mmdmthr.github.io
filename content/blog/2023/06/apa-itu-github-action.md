---
title: Apa itu GitHub Action?
date: 2023-06-17
category: 'notes'
---

Dalam pengembangan perangkat lunak modern, otomatisasi dan pengaturan aliran kerja (*workflow*) yang efisien sangatlah penting. GitHub Action, yang disediakan oleh GitHub, adalah salah satu platform untuk mengotomatisasi proses pengembangan perangkat lunak. 

Dalam tulisan ini, kita akan membahas tentang GitHub Action, bagaimana cara menggunakannya, dan manfaatnya dalam meningkatkan efisiensi pengembangan perangkat lunak.

### Apa itu GitHub Action?

GitHub Action adalah platform otomatisasi yang disediakan oleh GitHub. Dengan menggunakan GitHub Action, Kita dapat membuat alur kerja otomatis (*workflow*) untuk menjalankan berbagai tugas terkait pengembangan perangkat lunak, seperti pengujian (*test*), pembangunan (*build*), dan pengiriman (*deploy*). 

GitHub Action menggabungkan kekuatan dari pemicu berbasis peristiwa (*event-based triggers*) dengan eksekusi kode dan serangkaian aksi terstruktur, yang semuanya dapat diatur dan dikonfigurasi di dalam repositori GitHub Kita.

### Manfaat GitHub Action

1. Otomatisasi Proses 
    
    GitHub Action memungkinkan Kita mengotomatisasi proses pengembangan perangkat lunak. Kita dapat membuat alur kerja yang menjalankan langkah-langkah tertentu secara otomatis setiap kali ada perubahan di repositori, seperti pengujian unit (*unit test*), membangun aplikasi (*build*), atau mendeploy ke server produksi.

2. Integrasi dengan Repositori GitHub

    GitHub Action sepenuhnya terintegrasi dengan repositori GitHub Kita. Kita dapat membuat dan mengelola alur kerja otomatis langsung dari repositori, memberikan visibilitas yang mudah dan mengurangi kerumitan.

3. *Action Marketplace* 

    GitHub Action memiliki [Marketplace Action](https://github.com/marketplace?type=actions) yang kaya dengan berbagai *action* yang sudah dibuat sebelumnya. Kita dapat dengan mudah menemukan dan menggunakan aksi yang sesuai dengan kebutuhan proyek Kita. *Action-action* ini mencakup pengujian, pembangunan, notifikasi, penerbitan ke layanan cloud, dan banyak lagi.

4. Fleksibilitas dan Kustomisasi

    GitHub Action memberikan fleksibilitas tinggi dalam menentukan langkah-langkah dan aksi-aksi yang akan dieksekusi dalam alur kerja. Kita dapat menyesuaikan alur kerja sesuai kebutuhan proyek Kita dengan menambahkan atau mengubah langkah-langkah yang ada.

5. Kolaborasi Tim

    GitHub Action memudahkan kolaborasi tim dalam pengembangan perangkat lunak. Semua anggota tim dapat melihat, mengelola, dan berkontribusi pada alur kerja otomatis yang ada di repositori. Hal ini memastikan konsistensi dalam pengembangan dan meningkatkan efisiensi kerja tim.

### Cara Menggunakan GitHub Action

Langkah dalam menggunakan GitHub Action secara garis besar sebagai berikut

1. Membuat File Konfigurasi: Buat file konfigurasi untuk alur kerja otomatis (misalnya `.github/*workflow*s/main.yml`) di repositori GitHub Kita.
2. Menentukan Trigger Event: Tentukan event-trigger yang akan memicu alur kerja otomatis, seperti perubahan di repositori, pembukaan *pull request*, atau pembuatan tag.
3. Menentukan Steps: Tentukan langkah-langkah yang akan dieksekusi dalam alur kerja otomatis. Kita dapat menggunakan aksi yang ada di Marketplace atau membuat aksi kustom sesuai kebutuhan.

4. Menyimpan dan Mengaktifkan: Simpan file konfigurasi dan unggah ke repositori GitHub Kita. GitHub Action secara otomatis akan mengaktifkan dan menjalankan alur kerja otomatis sesuai dengan konfigurasi yang telah ditentukan.

## Kesimpulan

GitHub Action adalah alat yang sangat berguna dalam meningkatkan efisiensi pengembangan perangkat lunak. Dengan otomatisasi alur kerja dan integrasi yang kuat dengan repositori GitHub, GitHub Action membantu tim pengembang mengurangi waktu dan usaha yang diperlukan dalam pengujian, pembangunan, dan pengiriman perangkat lunak. Dengan menggunakan GitHub Action, Kita dapat menciptakan alur kerja pengembangan yang efisien, terintegrasi, dan terpusat di repositori GitHub Kita.