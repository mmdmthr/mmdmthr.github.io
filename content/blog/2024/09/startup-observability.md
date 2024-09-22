---
title: 'Startup Observability'
date: 2024-09-22
category: 'notes'
---

Observability menjadi elemen kunci untuk memahami kinerja bisnis dan teknis dalam sebuah startup. Dengan memahami metrik-metrik penting di kedua area ini, perusahaan dapat mengidentifikasi masalah lebih cepat, mengoptimalkan kinerja, dan pada akhirnya mencapai pertumbuhan yang lebih baik. Dalam artikel ini, kita akan melihat dua aspek penting dari observability: Business Observability dan Engineering Observability.

### Business Observability

Business observability adalah pengamatan terhadap metrik-metrik yang berhubungan dengan kinerja bisnis. Ini mencakup pemantauan terhadap berbagai elemen seperti revenue, inventaris, transaksi, dan pengguna. Berikut beberapa metrik utama:

- **Revenue**  
  Metrik ini menjadi dasar utama bagi bisnis untuk melihat performa penjualan dan pendapatan secara keseluruhan. Pemantauan real-time terhadap revenue dapat membantu bisnis merespons fluktuasi dengan cepat.

- **Number of Inventory**  
  Memantau jumlah inventaris sangat penting, terutama untuk perusahaan yang bergerak dalam penjualan barang fisik. Ketika inventaris terlalu sedikit atau berlebihan, itu dapat mempengaruhi arus kas dan pengalaman pelanggan.

- **Number of Transactions/Contacts**  
  Metrik ini mengukur seberapa banyak interaksi atau transaksi yang terjadi dalam jangka waktu tertentu. Peningkatan atau penurunan angka ini bisa memberikan gambaran jelas mengenai pertumbuhan bisnis.

- **Number of Users**  
  Metrik ini memantau jumlah pengguna yang menggunakan platform. Startup bisa mendapatkan alert saat ada lonjakan atau penurunan signifikan pada jumlah pengguna yang login, membantu mereka segera mengambil tindakan preventif atau korektif.

Untuk mengelola dan memvisualisasikan data ini, banyak startup menggunakan alat seperti:
- **Excel/Google Sheet**  
  Ini adalah alat sederhana namun efektif untuk pelacakan data awal, khususnya bagi startup yang baru memulai.
  
- **Metabase/Redash**  
  Platform ini memungkinkan visualisasi data yang lebih kompleks dan terstruktur, memberikan gambaran menyeluruh tentang kinerja bisnis.

Hasil dari pengamatan ini biasanya dikumpulkan dalam **management/business reports** yang disampaikan kepada eksekutif untuk pengambilan keputusan strategis.

### Engineering Observability

Di sisi teknis, observability membantu tim teknis memantau kinerja sistem, produktivitas, dan biaya. Engineering observability berfokus pada metrik teknis yang lebih mendalam, yang mencakup beberapa elemen berikut:

#### Productivity

Metrik produktivitas dalam teknik sering diukur menggunakan kerangka seperti **DORA/SPACE**:
- **Deployment Frequency**  
  Seberapa sering tim dapat melakukan deployment ke produksi. Semakin sering deployment, semakin agile tim dalam merespons perubahan.
  
- **Lead Time**  
  Waktu yang dibutuhkan dari awal pengembangan hingga siap di-deploy. Lead time yang lebih pendek menunjukkan efisiensi yang baik.

- **MTTA/MTTR**  
  _Mean Time to Acknowledge/Mean Time to Resolve_, mengukur seberapa cepat tim bereaksi terhadap masalah dan menyelesaikannya.

- **Change Failure Rate**  
  Persentase perubahan yang menyebabkan kegagalan di sistem produksi. Semakin rendah angka ini, semakin stabil sistem.

#### Availability

Ketersediaan dan performa sistem dipantau dengan metrik seperti:
- **Uptime**  
  Persentase waktu sistem atau aplikasi tetap tersedia dan berjalan dengan baik.
  
- **Error Rate**  
  Jumlah error yang terjadi dalam jangka waktu tertentu.
  
- **Crash Rate (Mobile App)**  
  Khusus untuk aplikasi mobile, crash rate adalah indikator kritis untuk pengalaman pengguna. Penurunan crash rate menunjukkan peningkatan kualitas aplikasi.

#### Cost

Mengelola biaya merupakan bagian penting dari observability di engineering:
- **People**  
  Termasuk gaji, biaya outsource, dan biaya SDM lainnya.
  
- **Infra**  
  Mencakup biaya untuk infrastruktur seperti database, transaksi, dan data penyimpanan.

- **Latency**  
  Metrik ini mengukur waktu yang dibutuhkan sistem untuk merespons, dan latensi yang rendah sangat penting untuk kinerja yang baik.

Selain itu, pemantauan terhadap **alerts**, **logging & tracing**, serta **engineering satisfaction** melalui survei internal membantu memastikan tim tetap termotivasi dan sistem berjalan lancar.

Untuk mendukung engineering observability, berbagai alat digunakan:
- **Datadog**  
  Alat ini memungkinkan pemantauan end-to-end terhadap infrastruktur dan aplikasi, memberikan insight yang mendalam.

- **Grafana - Prometheus**  
  Kombinasi alat ini sering digunakan untuk memvisualisasikan data dari sistem monitoring dan mengukur kinerja secara real-time.

- **ELK Stack**  
  ELK (Elasticsearch, Logstash, Kibana) digunakan untuk mengelola log dan analitik. Ini membantu dalam pelacakan masalah teknis dan menemukan pola anomali di sistem.

### Kesimpulan

Startup observability memadukan antara Business Observability dan Engineering Observability untuk memberikan gambaran lengkap tentang bagaimana bisnis dan sistem teknis mereka berjalan. Dengan pendekatan ini, startup dapat lebih proaktif dalam merespons masalah, meningkatkan kinerja, dan menjaga pertumbuhan yang sehat.

## Mind Map

- Business Observability 
  - Revenue 
  - Number of inventory 
  - Number of transactions/contacts 
  - Number of users 
    - Alerts to number of logged in users 
  - Excel/Google Sheet 
  - Metabase/Redash 
  - Goes to management/business reports 

- Engineering Observability
  - Productivity 
    - DORA/SPACE 
      - Deployment frequency 
      - Lead time 
      - MTTA/MTTR 
      - Change failure rate 
    - Availability
      - Uptime 
      - Error rate 
      - Crash rate (mobile app)
    - Cost 
      - People
        - Salary 
        - Outsource 
      - Infra 
        - Data 
        - Transactional 
      - Latency 
      - Alerts
      - Logging & tracing
      - Engineering Satisfaction 
        - Measured through multiple surveys
      - Datadog
      - Grafana - Prometheus
      - ELK stack 

Referensi: Listiarso Wastuargo - Startup Observability (LinkedIn post)