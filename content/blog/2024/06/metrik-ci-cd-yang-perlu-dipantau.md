---
title: '5 Metriks CI/CD yang Perlu Dipantau'
date: 2024-06-14
category: 'notes'
---

_Continuous Integration_ dan _Continuous Deployment_ (CI/CD) adalah praktik penting dalam pengembangan perangkat lunak modern. Untuk memastikan bahwa proses CI/CD berjalan dengan efisien dan efektif, ada beberapa metrik yang perlu kita pantau. Salah satu pendekatan yang efektif adalah menggunakan DORA Metrics. DORA Metrics, yang diperkenalkan oleh tim riset dari Google Cloud, memberikan wawasan berharga tentang efektivitas dan efisiensi tim DevOps. DORA Metrics adalah serangkaian metrik yang dirancang untuk mengukur kinerja dan kemampuan tim DevOps dalam merilis perangkat lunak. Metrik ini memungkinkan organisasi untuk memahami sejauh mana tim mereka dapat mengimplementasikan praktik-praktik DevOps yang baik dan mencapai kecepatan serta stabilitas yang diinginkan. Berikut adalah lima metrik CI/CD yang penting untuk dilacak:

## 1. Build Time

Waktu build mengukur berapa lama waktu yang dibutuhkan ketika seorang developer melakukan commit dan melewati semua pemeriksaan dalam CI. Metrik ini penting karena semakin cepat waktu build, semakin cepat pula umpan balik yang diterima oleh developer. Hal ini membantu dalam mengidentifikasi dan memperbaiki masalah lebih awal, sehingga mempercepat siklus pengembangan.

## 2. Deployment Frequency

Frekuensi deployment menunjukkan seberapa sering kita melakukan deployment. Meskipun lebih sering melakukan deployment bukan selalu berarti lebih baik, namun frekuensi deployment yang tinggi bisa menjadi indikator bahwa tim mampu mengirimkan perubahan dengan cepat dan responsif terhadap kebutuhan pengguna. Penting untuk menemukan keseimbangan antara kecepatan dan kualitas dalam deployment.

## 3. Lead Time for Changes

Lead time untuk perubahan mengukur berapa lama waktu yang dibutuhkan dari saat kode di-commit hingga deployment. Metrik ini memberikan gambaran tentang efisiensi proses pengembangan dan deployment. Semakin pendek lead time, semakin cepat kita bisa menghadirkan fitur baru atau perbaikan bug ke pengguna.

## 4. Change Failure Rate

Tingkat kegagalan perubahan mengukur persentase perubahan yang berujung pada kegagalan. Metrik ini penting karena perubahan yang sering gagal bisa menunjukkan adanya masalah dalam kualitas kode atau proses pengujian. Tingkat kegagalan yang lebih rendah menunjukkan bahwa tim kita berhasil menjaga kualitas dan stabilitas kode. Di sini kita perlu mencatat keberhasilan dan kegagalan setelah deployment dilakukan.

## 5. Mean Time to Recovery

Waktu rata-rata untuk pemulihan mengukur seberapa cepat kita bisa pulih ketika terjadi masalah. Metrik ini sangat penting karena setiap kegagalan atau downtime bisa berdampak negatif pada pengguna. Semakin cepat kita bisa memulihkan sistem, semakin sedikit dampak yang dirasakan oleh pengguna. Pada praktiknya dalam dokumen kegagalan deployment, kita mencatat waktu pertama kali terjadinya insiden. Lalu mencatat kembali waktu saat insiden berhasil ditangani dan layanan pulih kembali.

Dengan memantau metrik-metrik ini, kita dapat memperoleh wawasan berharga tentang efisiensi dan efektivitas proses CI/CD. Hal ini memungkinkan kita untuk membuat keputusan yang lebih baik dan terus meningkatkan kualitas perangkat lunak yang kita kembangkan.