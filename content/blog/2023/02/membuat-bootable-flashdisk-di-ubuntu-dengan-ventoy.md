---
title: Membuat Bootable Flashdisk Windows di Ubuntu dengan Ventoy
date: 2023-02-05
category: 'notes'
---

Ventoy adalah *tool open source* untuk membuat *live USB*. 
Kita dapat menggunakannya untuk membuat USB multi-boot, 
live USB Linux yang persisten, dan USB Windows yang bootable.

### Langkah 1: Siapkan USB drive

Ventoy memformat disk USB saat membuat bootable disk. 
Namun, ada kasus di mana proses pemformatan gagal melakukannya 
pada disk Linux yang sudah bootable. Karena alasan ini, disarankan 
untuk memformat disk USB sebelum melanjutkan lebih jauh.

Colokkan lalu format disk USB. Klik kanan pada disk yang terpasang 
dan kemudian memilih opsi format.

Tidak masalah sistem file mana yang dipilih selama pemformatan. 
Ini akan diformat lagi oleh Ventoy di langkah selanjutnya.

Setelah diformat, tetap sambungkan USB dan lanjutkan 
ke langkah berikutnya untuk menginstal Ventoy.

### Langkah 2: Download dan instal Ventoy di Linux

Ventoy adalah tool campuran GUI dan CLI yang dapat digunakan 
pada semua distribusi Linux. Download Ventoy untuk Linux 
dari halaman rilis repositori GitHub-nya.
[Download Ventoy untuk Linux](https://github.com/ventoy/Ventoy/releases)

Pilih file `.tar.gz` dengan nama Linux. Ini adalah file yang harus kita download.
Setelah didownload, ekstrak file tar gz. Klik kanan lalu ekstrak.

Masuk ke dalam folder yang telah diekstraksi, dan kita dapat melihat 
beberapa skrip di dalamnya. Kita perlu menjalankan satu file bernama `VentoyWeb.sh`. 
Buka terminal dari folder tersebut, klik kanan lalu pilih "*Open in Terminal*".

Gunakan perintah berikut untuk menjalankan Ventoy:

```bash
sudo ./VentoyWeb.sh
```

Ventoy akan menjalankan server lokal dan akan memberi kita URL 
untuk membuka GUI di browser. Salin URL ini dan tempel di browser. 
Ini akan membuka halaman web dengan Ventoy berjalan di dalamnya.
Jika USB sudah terpasang, Ventoy akan mengenalinya. 
Jika tidak, tekan tombol *refresh*.

### Langkah 3: Gunakan Ventoy untuk membuat disk USB Windows 10 yang dapat di-boot

Meskipun Ventoy memiliki opsi untuk membuat *bootable disk* 
yang dapat di-boot dengan *secure boot*, saat ini fitur tersebut 
bersifat eksperimental dan mungkin tidak berfungsi.

Mengingat kita akan melakukan instalasi UEFI, 
sebaiknya gunakan GPT untuk skema partisi.

Setelah semuanya diatur, tekan tombol install. Ini akan menunjukkan 
kepada kita beberapa peringatan. Jika penginstalan selesai dengan sukses, 
kita akan melihat pesan sukses.

Catatan: Jika tidak melihat disk Ventoy terpasang setelah instalasi berhasil, 
lepaskan USB lalu pasang kembali.

Saat kita menekan tombol instal, itu membuat dua partisi pada disk USB.

     VTOYEFI: Partisi kecil untuk file UEFI.
     Ventoy: Partisi besar dan kosong dalam format ExFAT tempat kita akan menyalin file image ISO.

Itulah yang perlu kita lakukan. Salin file image ISO Windows 10 
ke partisi ExFAT yang lebih besar di disk USB.

Setelah penyalinan selesai, **JANGAN TERBURU-BURU** melepaskan USB dulu. 
Klik opsi `unmount` dari pengelola file. Kemungkinan beberapa file masih ditulis 
dan mungkin menampilkan pesan error.

Tunggu beberapa menit lagi sampai ada pesan bahwa aman untuk melepaskan disk. 
Sekarang kita dapat mencabutnya dan menggunakannya di sistem mana pun yang diinginkan.

**Referensi**: [https://itsfoss.com/bootable-windows-usb-linux/](https://itsfoss.com/bootable-windows-usb-linux/)