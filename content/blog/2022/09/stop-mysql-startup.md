---
title: Stop MySQL dari Start Up
date: 2022-09-15
category: 'notes'
---

Untuk menghentikan service MySQL supaya tidak otomatis dijalankan saat 
start up, gunakan perintah berikut

```bash
sudo systemctl disable mysql
```