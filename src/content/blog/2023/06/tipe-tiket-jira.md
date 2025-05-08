---
title: 'Mengenal Tiket Jira: Epic, Story, Bug, Task, dan Subtask dalam Manajemen Proyek'
pubDate: 2023-06-08
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Dalam dunia manajemen proyek, penggunaan perangkat lunak untuk membantu mengatur pekerjaan dan mengelola tugas menjadi hal yang sangat umum. Salah satu perangkat lunak yang populer digunakan dalam manajemen proyek adalah Jira. Jira adalah alat kolaborasi yang membantu tim pengembangan perangkat lunak dalam melacak pekerjaan, mengatur tugas, dan mengelola aliran kerja proyek. 

Dalam Jira, tiket digunakan untuk mewakili tugas-tugas yang perlu diselesaikan dalam proyek. Dalam artikel ini, kita akan menggali lebih dalam tentang jenis tiket yang umum digunakan dalam Jira, yaitu *Epic*, *Story*, *Bug*, *Task*, dan *Subtask*.

## Epic

Epic adalah unit kerja yang besar dan kompleks yang terdiri dari beberapa story atau tugas yang lebih kecil. Epic merupakan tiket teratas dalam hierarki Jira dan digunakan untuk menggambarkan fitur atau fungsionalitas yang besar. Jenis tiket ini adalah satu-satunya yang dapat ditampilkan dalam tampilan *Gantt Cart* di bagian roadmap. 

Biasanya, Epic tidak dapat diselesaikan dalam satu iterasi atau sprint, melainkan memerlukan beberapa iterasi untuk menyelesaikannya. Epic memberikan cara mudah untuk melacak kemajuan proyek atau inisiatif besar dan memastikan bahwa semua pekerjaan yang saling terkait diselaraskan dan diprioritaskan dengan benar. Epic tidak dimasukkan ke dalam backlog.

Contoh Epic adalah "Pengembangan Fitur Autentikasi Pengguna".

## Story

Story adalah tiket yang merepresentasikan fitur, fungsi, atau kebutuhan pengguna yang dapat diselesaikan dalam satu iterasi atau sprint. Story lebih spesifik dibandingkan dengan Epic, tetapi tetap memiliki ukuran yang cukup besar untuk dipecah menjadi tugas-tugas yang lebih kecil. 

Biasanya, Story ditulis dalam format naratif, diungkapkan dalam beberapa kalimat pendek, dan idealnya menggunakan bahasa non-teknis yang berfokus pada kebutuhan pengguna atau pemangku kepentingan. Sintaksis dalam penulisan story dapat dibuat template yang menjawab pertanyaan siapa (*who*), apa (*what/action*) dan mengapa (*why*)

```
who -> As a <user> 
what -> I want to <be able to do ABC>
why -> So that <XYZ can be done>
```

Contoh Story adalah "Sebagai pengguna, saya ingin dapat mengunggah gambar profil saya."

## Bug

Bug adalah tiket yang digunakan untuk melacak masalah atau kesalahan dalam perangkat lunak. Bug dapat muncul saat pengembangan perangkat lunak atau dalam tahap pengujian. Tiket Bug berisi informasi tentang masalah yang ditemukan, termasuk deskripsi, langkah-langkah untuk mengulang masalah, dan prioritas. Tim pengembangan menggunakan tiket Bug untuk memperbaiki masalah dan menguji perbaikan yang diimplementasikan. 

Contoh Bug adalah "Tombol 'Simpan' tidak berfungsi saat mengedit profil pengguna."

## Task

Task adalah tiket yang mewakili tugas-tugas kecil yang perlu diselesaikan untuk menyelesaikan Story atau Epic. Task dapat diberikan kepada anggota tim yang bertanggung jawab untuk menyelesaikannya. 

Biasanya, Task lebih terperinci, bersifat teknis dan memiliki waktu pengerjaan yang lebih singkat dibandingkan dengan Story atau Epic. Dalam proyek pengembangan perangkat lunak misalnya, Task mewakili aktivitas teknis, seperti mendesain diagram, menulis kode untuk membuat fungsionalitas tertentu, menguji perangkat, atau menyiapkan kumpulan data. Task digunakan sebagai referensi commit (menggunakan ID issue Jira) dan dapat berkaitan dengan sebuah branch pada git.

Contoh Task adalah "Membuat halaman pengaturan profil pengguna" atau "Mengimplementasikan validasi input pada formulir pendaftaran."

## Subtask

Subtask adalah tiket yang digunakan untuk memecah Task menjadi bagian yang lebih kecil dan terpisah. Subtask membantu dalam mengorganisir pekerjaan dan membaginya ke dalam tugas-tugas yang lebih mudah dikelola.

*Referensi*:

- [Epic, Story, Task and Bugs - Wiki Onap.org](https://wiki.onap.org/display/DW/Epic%2C+Story%2C+Task+and+Bugs)
- [Jira epics, stories, tasks, bugs & custom issues - Cristina Santamarina](https://cristinasantamarina.com/2021/01/17/jira-epics-stories-tasks-bugs-custom-issue-types/)