---
title: 'Migrasi Password Manager ke Bitwarden'
date: 2024-08-10
category: 'notes'
---

Mengelola password merupakan salah satu aspek penting dalam menjaga keamanan digital. Seiring waktu, saya menggunakan Dashlane sebagai password manager andalan saya. Namun, beberapa alasan mendorong saya untuk mencari alternatif lain.

### Mengapa Pindah?

Dashlane telah menjadi standar yang cukup tinggi dengan UI dan UX yang sangat baik. Aplikasi ini dapat digunakan sebagai ekstensi browser maupun aplikasi mobile, membuatnya sangat praktis. Namun, biaya langganan Dashlane mengalami kenaikan yang signifikan dari Rp294.999/tahun ke Rp890.000/tahun. Itu membuat saya mempertimbangkan ulang penggunaan layanan ini.

### Alternatif lain

Setelah mencari alternatif lain, saya memutuskan untuk beralih ke Bitwarden. Bitwarden adalah layanan open-source yang terkenal aman dengan sejarah bebas dari pelanggaran keamanan (_security breach_). Selain itu, Bitwarden menawarkan fitur yang lengkap dengan harga yang lebih terjangkau. Saat saya berlangganan, biayanya adalah $10/tahun (sekitar Rp160.000). Pembayarannya hanya bisa dilakukan dengan kartu kredit, tidak seperti Dashlane yang bisa melalui Google Playstore.  Meskipun UI-nya tidak sebaik Dashlane, keamanan dan efisiensinya menjadi nilai tambah yang sulit diabaikan.

### Step-by-Step Migrasi ke Bitwarden

Berikut adalah langkah-langkah yang saya lakukan dalam proses migrasi dari Dashlane ke Bitwarden:

1. **Backup Data**  
   Sebelum memulai migrasi, saya memastikan untuk membuat backup data dari semua password dan 2FA yang ada. Ini penting untuk memastikan bahwa saya memiliki salinan jika terjadi kesalahan selama proses migrasi.

2. **Ekspor Data**  
   Saya mengekspor semua data dari Dashlane. Sebagian besar password manager menawarkan opsi ekspor dalam format CSV, JSON, atau XML. Dashlane sendiri memiliki fitur untuk backup dan ekspor ke file CSV, termasuk daftar QR dan kode untuk autentikasi.

3. **Transfer Aman**  
   Jika perlu melakukan transfer data yang telah diekspor, itu harus lakukan dengan cara yang aman. Saya sendiri menjaga file tetap di local machine. Kita harus menjaga dengan sangat hati-hati file ekspor tersebut karena di dalamnya semua disimpan dalam bentuk raw (tanpa terenkripsi). Sebaiknya kita membuat filenya terenkripsi untuk menjaga keamanannya.

4. **Impor Data**  
   Setelah itu, saya mengimpor data yang diekspor ke Bitwarden. Saya mengikuti petunjuk khusus yang diberikan oleh Bitwarden untuk memastikan data dapat diimpor dengan benar.

5. **Periksa Integritas Data**  
   Saya memeriksa bahwa semua entri telah diimpor dengan benar ke Bitwarden, memastikan tidak ada item yang hilang atau salah diimpor. Saya juga memastikan itu bisa digunakan di aplikasi mobile dan ekstensi browser yang biasa saya gunakan.

6. **Perbarui password**  
   Saya memanfaatkan kesempatan ini untuk memperbarui password yang lemah atau sudah kedaluwarsa. Saya juga membersihkan data-data yang duplikat dan akun yang sudah tidak diperlukan lagi.

7. **Siapkan Autentikasi Dua Faktor (2FA)**  
   Saya mengaktifkan 2FA pada Bitwarden untuk menambahkan lapisan keamanan ekstra pada akun saya.

8. **Uji Akses**  
   Saya menguji akses ke semua akun menggunakan Bitwarden untuk memastikan semuanya berfungsi dengan baik.

9. **Hapus Data Lama**  
   Setelah memastikan bahwa migrasi berhasil dan semua data sudah utuh, saya menghapus data dari Dashlane dan semua file cadangan dengan aman.

10. **Tinjau Pengaturan Keamanan**  
    Saya meninjau dan mengkonfigurasi pengaturan keamanan pada Bitwarden sesuai dengan preferensi saya. Termasuk auto fill dan otentikasi dengan biometrik di aplikasi mobile.

11. **Pelajari Fitur Baru**  
    Terakhir, saya mempelajari fitur-fitur baru yang ditawarkan oleh Bitwarden untuk memaksimalkan penggunaannya.

Dengan mengikuti langkah-langkah di atas, saya berhasil melakukan migrasi dari Dashlane ke Bitwarden dengan lancar dan aman. Bitwarden kini menjadi password manager utama saya, menawarkan kombinasi keamanan, fitur lengkap, dan harga yang terjangkau.