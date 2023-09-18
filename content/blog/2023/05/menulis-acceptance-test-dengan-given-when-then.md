---
title: Menulis Acceptance Test dengan Formula Given-When-Then
date: 2023-05-20
category: 'testing'
---

Dalam pengembangan perangkat lunak, *Given-When-Then* merupakan sebuah formula atau template yang bertujuan untuk memandu penulisan *acceptance test* (pengujian penerimaan) terhadap *User Story*. Formula ini terdiri dari tiga bagian, yaitu:
- (*Given*) beberapa konteks atau kondisi awal
- (*When*) aksi atau tindakan tertentu yang dilakukan
- (*Then*) sejumlah konsekuensi yang dapat diamati (seharusnya terjadi)

Contoh penggunaan formula *Given-When-Then*:
- *Given my bank account is in credit, and I made no withdrawals recently* (saldo rekening bank saya mencukupi dan saya belum melakukan penarikan dana baru-baru ini),
- *When I attempt to withdraw an amount less than my card’s limit* (saya mencoba menarik dana dalam jumlah kurang dari batas kartu saya),
- *Then a particular set of observable consequences should obtain* (penarikan dana harus berhasil tanpa adanya kesalahan atau peringatan),

### Manfaat

Formula *Given-When-Then* membantu dalam merancang *acceptance test* dengan lebih terstruktur dan jelas. Bagian *Given* memberikan konteks atau kondisi awal yang diperlukan sebelum menjalankan aksi atau tindakan. Bagian *When* menyatakan aksi atau tindakan yang akan diuji. Sedangkan bagian *Then* menyatakan hasil atau konsekuensi yang diharapkan setelah aksi dilakukan.

Dengan menggunakan formula ini, tim pengembang perangkat lunak dapat memastikan bahwa *User Story* atau cerita pengguna telah memenuhi persyaratan yang telah ditentukan. Penggunaan formula *Given-When-Then* juga membantu mempermudah komunikasi antara anggota tim pengembang (*developer*), penguji (QA), dan pemangku kepentingan lainnya, sehingga meminimalkan risiko kesalahpahaman.

Dalam praktiknya, formula *Given-When-Then* dapat digunakan secara berulang untuk menulis skenario pengujian *acceptance test* yang berbeda-beda, sehingga memastikan bahwa aplikasi atau sistem yang dikembangkan berperilaku sesuai dengan harapan dan kebutuhan pengguna.

Jadi, dengan menggunakan formula *Given-When-Then*, tim pengembang dapat lebih mudah menggambarkan konteks, tindakan, dan hasil yang diharapkan dalam pengujian *acceptance test*. Hal ini membantu memastikan kualitas dan keandalan perangkat lunak yang dikembangkan, serta meminimalisir risiko adanya *bug* atau kesalahan dalam sistem.