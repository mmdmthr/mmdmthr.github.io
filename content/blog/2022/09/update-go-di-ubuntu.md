---
title: Update Versi Go di Ubuntu
date: 2022-09-04
category: 'notes'
---

## Bagaimana Cara Melakukan Update Versi Go di Ubuntu

### 1. Uninstall Go

Seperti yang tertulis pada [halaman dokumentasi](https://go.dev/doc/install#install) 
kita harus menghapus versi Go sebelumnya yang terinstall di komputer kita 
pada folder `/usr/local/go`. Itu bisa dilakukan dengan perintah berikut:

```bash
sudo rm -rf /usr/local/go
```

### 2. Install versi yang baru

Kunjungi [halaman download](https://go.dev/dl/) lalu download file instalasi 
yang sesuai dengan sistem komputer kita. 

### 3. Ekstrak file

Dari folder tempat kita menyimpan file instalasi, jalankan perintah berikut

```bash
sudo tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
```

### 4. Pastikan PATH sudah tertulis

```bash
echo $PATH | grep "/usr/local/go/bin"
```

### 5. Memastikan versi telah update

Pastikan bahwa kita telah menginstal Go versi baru dengan membuka command prompt 
dan mengetik perintah berikut

```bash
go version
```

Sumber:  
- [Dokumentasi Go](https://go.dev/doc/install#install)
- [Nikhita Gist](https://gist.github.com/nikhita/432436d570b89cab172dcf2894465753)