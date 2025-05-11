---
title: Stop MySQL dari Start Up
pubDate: 2022-09-15
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Untuk menghentikan service MySQL supaya tidak otomatis dijalankan saat 
start up, gunakan perintah berikut

```bash
sudo systemctl disable mysql
```