---
title: Dconf Editor
pubDate: 2022-05-05
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'how to'
---

Dconf-editor memungkinkan kita untuk mengubah hampir setiap aspek lingkungan desktop GNOME. Namun kita harus berhati-hati dalam mengedit. Sebagian besar pengaturan dapat diubah dengan cepat, tanpa memerlukan konfirmasi.

Antar muka dconf-editor sangat sederhana, kita bisa melakukan pencarian berdasarkan kata kunci lalu akan diarahkan ke file konfigurasi yang berkaitan, dari situ kita bisa mengubah konfigurasinya langsung.

Berikut perintah untuk menginstall dconf-editor:

```bash
# update repository
apt-get update

# install dconf-editor
apt-get install dconf-editor -y
```

Beberapa hal yang saya ubah menggunakan dconf-editor adalah [melakukan pengaturan pada dash to dock](https://itsfoss.com/customize-ubuntu-dock/) dan [menonaktifkan notifikasi kalender](https://askubuntu.com/questions/1238826/turn-off-calendar-notifications-ubuntu-20-04)

[Untuk mengetahui lebih lanjut mengenai dconf-editor](https://wiki.gnome.org/Apps/DconfEditor)

**Catatan**: Meskipun kita dapat melakukan reset pada perubahan yang kita buat, namun ada risiko setting yang kita buat mengakibatkan sistem bekerja tidak seperti keinginan kita, sehingga akan sulit untuk mengembalikannya ke keadaan semula.

Untuk alasan ini, disarankan untuk tidak bermain-main dengan dconf-editor, khususnya jika kita tidak suka menghabiskan waktu untuk melakukan trouble shooting dan memperbaiki error atau jika kita tidak terlalu familiar dengan Linux dan GNOME.