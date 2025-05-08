---
title: Setting Keyboard Keychron K2 di Ubuntu
pubDate: 2022-09-12
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

### **Mengatur Tombol Fn + F**

Keyboard Keychron di Linux menggunakan driver `hid_apple` (bahkan dalam mode Windows/Android), 
baik dalam mode Bluetooth maupun Kabel. Secara default, driver ini menggunakan tombol F (F1-F12) 
sebagai tombol pintasan multimedia dan kita harus menekan tombol `fn` + untuk mendapatkan tombol F1 hingga F12 yang biasa.

Untuk mengubahnya, kita perlu mengubah parameter `fnmode` untuk modul kernel `hid_apple` . 
Berikut beberapa [dokumentasi](https://help.ubuntu.com/community/AppleKeyboard#Change_Function_Key_behavior) di dalamnya, 
tetapi ringkasan singkatnya dapat ditemukan di bawah:

- 0 = disabled: Menonaktifkan tombol `fn`. Menekan `fn`+`F8` akan berperilaku seperti kita hanya menekan `F8`
- 1 = fkeyslast: Tombol fungsi digunakan sebagai tombol terakhir. Menekan tombol `F8` akan bertindak sebagai tombol khusus (pintasan). 
Menekan `fn`+`F8` akan berperilaku seperti F8
- 2 = fkeysfirst: Tombol fungsi digunakan sebagai tombol pertama. Menekan tombol `F8` akan berperilaku seperti F8. Menekan `fn`+`F8` akan bertindak sebagai tombol khusus (play/pause).

kita dapat menetapkan nilai untuk sementara (untuk pengujian, misalnya) dengan melakukan:

```bash
# ubah <value> di bawah dengan nilai 0, 1 atau 2
# contoh: echo 2 | sudo tee /sys/module/hid_apple/parameters/fnmode
echo <value> | sudo tee /sys/module/hid_apple/parameters/fnmode
```

Uji bagaimana keyboard berperilaku setelah mengubah nilai. Pilih salah satu yang sesuai kebutuhan untuk kita. 
Setelah kita menemukan nilai yang sesuai untuk kita, kita dapat membuat perubahan permanen:

1. Buat file `/etc/modprobe.d/hid_apple.conf`
2. Tambahkan baris ini di dalam file: `options hid_apple fnmode=<value>`, 
ganti `<value>` dengan nilai yang kita inginkan pada tahap sebelumnya (0, 1 atau 2)
3. Simpan file
4. Jalankan `sudo update-initramfs -u`
5. Reboot

Jika mengalami kendala dengan mode numpad: Tekan dua kali F6 atau `fn` + `F6`.

### **Aktifkan konfigurasi koneksi cepat Bluetooth:**

Jika keyboard membutuhkan waktu terlalu lama untuk terhubung ke komputer melalui Bluetooth 
(misalnya, ketika kita menekan tombol dan mengaktifkan dari mode *sleep*), 
kita dapat mengaktifkan koneksi cepat Bluetooth. Ini biasanya membuat keyboard terhubung dalam waktu kurang dari 1 detik.

Beberapa pengguna melaporkan efek samping masalah pada headphone Bluetooth 
seperti audio yang muncul dan ketidakstabilan, tetapi saya belum mengalami hal seperti itu.

1. Edit file /etc/bluetooth/main.conf
2. Hapus komentar konfigurasi FastConnectable dan setel ke true: `FastConnectable = true`
3. Hapus komentar `ReconnectAttempts=7` (setel nilainya ke nilai apa pun yang kita inginkan)
4. Hapus komentar `ReconnectIntervals=1, 2, 3`

Sumber: [https://gist.github.com/andrebrait/961cefe730f4a2c41f57911e6195e444](https://gist.github.com/andrebrait/961cefe730f4a2c41f57911e6195e444)