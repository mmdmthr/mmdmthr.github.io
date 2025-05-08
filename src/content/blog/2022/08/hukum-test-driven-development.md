---
title: Tiga Hukum Test Driven Development
pubDate: 2022-08-17
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'testing'
---

### Hukum Pertama 

> Anda tidak boleh menulis kode sampai Anda telah menulis unit test yang gagal.

Artinya kita harus menulis unit tes terlebih dahulu sebelum menulis kode. 
Tentu saja hasil tesnya akan gagal (*failing test*), karena belum ada kode yang ditulis. 

### Hukum Kedua 

> Anda tidak boleh menulis unit test lebih dari yang cukup untuk gagal. 
> Tidak berhasil mengkompilasi adalah gagal.

Pikirkan kasus yang paling sederhana, tes paling dasar yang akan membuat kode kita saat ini gagal.
Tahapan ini akan biasa disebut dengan istilah *red*.

### Hukum Ketiga 

> Anda tidak boleh menulis kode lebih dari yang cukup untuk lulus tes yang gagal saat ini.

Kita mulai menulis kode, hanya untuk lulus dari tes yang sudah kita buat. 
Kita sama sekali tidak menambahkan kode lebih dari yang diperlukan untuk membuat tes lulus. 
Tahapan kode yang berhasil pada tes ini biasa disebut dengan istilah *green*.

Saat berada di tahap hijau (*green*), amati bahwa kode kita kadang kurang baik 
(karena yang paling penting adalah lulus tes dulu). 
Setelah kode berhasil lulus tes, inilah saat kita melakukan refactor, 
selalu lakukan refactor ketika tes telah lulus; 
ini adalah satu-satunya cara untuk memastikan bahwa kita melakukan refactor dengan benar. 
Tidak perlu memikirkan kode yang rapih dan baik atau melakukan refactor jika tes masih gagal.

### Manfaat TDD 

Dengan menggunakan TDD, kita didorong untuk memikirkan segala macam situasi, 
membuat berbagai macam *test case* yang kemungkinan akan dihadapi. 
Kita kemudian menulis tes untuk situasi tersebut, dan dalam prosesnya, 
mulai memahami masalahnya dengan lebih baik. Biasanya, proses ini menghasilkan pengetahuan 
yang mendalam tentang algoritma. 

Jika kita sudah tidak dapat lagi memikirkan tes gagal lainnya untuk ditulis, 
apakah ini berarti kode kita sudah sempurna? Belum tentu, kecuali ada seperangkat aturan 
yang telah ditentukan sebelumnya. TDD tidak menjamin kode tanpa bug; 
metode ini hanya membantu kita menulis kode yang lebih baik 
yang dapat dipahami dan dimodifikasi dengan lebih baik.

Terlebih lagi, jika kita menemukan bug, akan lebih mudah untuk menulis tes 
yang mereproduksi bug tersebut. Dengan cara ini, kita dapat memastikan 
bahwa bug tidak pernah terjadi lagi - karena kita telah mengujinya!
