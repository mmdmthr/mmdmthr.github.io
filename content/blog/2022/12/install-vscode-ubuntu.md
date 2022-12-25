---
title: Install VS Code di Ubuntu
date: 2022-12-15
category: 'notes'
---

Berikut adalah cara menginstall VS Code di Ubuntu melalui apt package manager:

### 1. Update Repository

Jalankan perintah berikut untuk melakukan update repository 
dan memastikan kita mendapat vscode versi terbaru

```bash
sudo apt update
```

### 2. Install Package Dependency

Supaya dapat berjalan dengan baik, vscode perlu menginstal dependensi paket. 
Jalankan perintah berikut untuk menginstall dependensi paket:

```bash
sudo apt install software-properties-common apt-transport-https wget -y
```
Perintah tersebut secara otomatis menginstal semua dependensi vscode.

### 3. Tambahkan GPG Key

Impor kunci GPG yang disediakan oleh Microsoft untuk memverifikasi integritas paket:

```bash
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```


### 4. Tambahkan Repository

Jalankan perintah berikut untuk menambahkan repositori Visual Studio Code ke sistem:

```bash
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

### 5. Install vscode

Setelah repository ditambahkan kita bisa menginstall vscode dengan menjalankan perintah berikut:

```bash
sudo apt install code
```

### 6. Verifikasi instalasi

Jalankan perintah berikut untuk memastikan vscode telah terinstall

```bash
code --version
```
Jika instalasi berhasil, output akan menunjukkan versi vscode.

Sumber: [https://phoenixnap.com/kb/install-vscode-ubuntu](https://phoenixnap.com/kb/install-vscode-ubuntu)