---
title: Update Snap Store
date: 2022-10-15
category: 'notes'
---

Untuk melakukan update snap store

```bash
snap-store --quit

sudo snap refresh
```

Jika aplikasi tersebut masih menjalankan proses, 
perintah tersebut akan mengembalikan nilai PID.
Kita harus menghentikan prosesnya

```bash
kill <pid>
```

Sumber: [https://askubuntu.com/questions/1412575/pending-update-of-snap-store](https://askubuntu.com/questions/1412575/pending-update-of-snap-store)