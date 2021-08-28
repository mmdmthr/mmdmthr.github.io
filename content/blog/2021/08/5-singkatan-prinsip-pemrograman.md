---
title: 5 Singkatan Prinsip Pemrograman
date: 2021-08-28
category: 'resources'
---

Mengarungi industri teknologi, khususnya di bidang 
pengembangan perangkat lunak, membutuhkan keterampilan 
pemrograman atau menulis kode.

Semakin besar skala sebuah aplikasi perangkat lunak maka kode 
tidak bisa asal ditulis begitu saja. Ada beberapa kaidah populer 
dalam dunia pemrograman yang mungkin sering kita dengar singkatan-singkatannya.


**KISS (*Keep It Simple Stupid*)**

Tulis kode dengan sesederhana mungkin. 
Jangan tergoda untuk membuat kode yang rumit. Jika sebuah kode bisa ditulis 
dalam satu baris, tulislah satu baris. 

```tsx
function addNumbers(num1,num2){
 return num1 + num2;
}
```

Sederhana, mudah dibaca dan langsung dapat dipahami bagaimana kode tersebut bekerja. 
Gunakan nama variabel yang jelas, mencerminkan nilai dalam variabel tersebut. 
Gunakan library yang sudah tersedia. Bayangkan kita akan bekerja dengan kode-kode itu 
lagi setelah 6 bulan tidak melihatnya, apakah kita masih bisa memahaminya? 
Jagalah supaya tetap sederhana agar tidak sakit kepala.

**DRY (*Don't Repeat Yourself*)**

Jangan mengulang penulisan kode. Perilaku 
tersebut adalah kesalahan umum dalam koding yang bisa dihindari dengan beberapa 
metode. Jika masih melakukan copy paste pada sebuah blok code artinya kode kita belum DRY.

***Open/Closed***

Terbuka untuk pengembangan, tapi tertutup untuk perubahan. 
Prinsip ini mendorong kita untuk menulis kode yang dapat dikembangkan, namun sebisa mungkin 
tertutup untuk modifikasi secara langsung. Prinsip ini membutuhkan keterampilan desain dan analisis 
yang tinggi. Kita bisa melihat contohnya pada *library/framework* yang sudah matang dan berumur panjang.

**SRP (*Single Responsibility Principle*)**

Setiap class/modul memiliki satu fungsi spesifik. 
Jangan menambahkan terlalu banyak tugas pada sebuah class karena itu akan meningkatkan kerumitan. 
*Refactor* dan pecah-pecah menjadi class atau modul yang lebih kecil.

**YAGNI (*You Aren't Going to Need It*)**

Jangan membuat kode yang tidak diperlukan saat ini. 
Jangan membuat kode untuk masa depan. Selesaikan masalah saat ini lalu *refactor*. 
Jangan memperbaiki masalah yang tidak ada.
