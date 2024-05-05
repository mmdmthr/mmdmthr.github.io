---
title: 'Hutang Teknis'
date: 2024-05-05
category: 'notes'
---

Metodologi Agile menekankan pentingnya siklus umpan balik yang cepat, dalam hitungan jam atau beberapa hari. Memperlambat proses umpan balik demi mencapai kesempurnaan yang seolah-olah bisa dicapai bisa merusak fleksibilitas kita. Biaya dari penundaan tersebut adalah nyata dan sering kali jauh melebihi biaya pengembangan. Menunda rilis produk demi mencari pengetahuan yang sempurna dianggap sebagai sebuah praktik yang tidak bertanggung jawab. Hal tersebut sangat mahal sampai dapat mengancam kelangsungan perusahaan.

Ini adalah latar belakang dari konsep "Hutang Teknis".

Dalam praktik Agile, kita sengaja merilis kode agar dapat memperoleh pembelajaran. Hutang teknis didasarkan pada prinsip Agile bahwa merilis kode yang berfungsi secara minimal—tanpa fitur tambahan—adalah langkah yang baik untuk mendapatkan umpan balik. Kita menyadari bahwa kode yang kita rilis tidak akan sempurna. Ini bukan berarti kode tersebut bermasalah, tetapi masih memiliki kekurangan yang bisa diperbaiki. Dengan cara ini, menukarkan kesempurnaan dengan umpan balik yang cepat biasanya akan membawa kita mendekati kesempurnaan lebih cepat. Dengan membiarkan diri kita "berutang" dalam hal perbaikan kode, kita dapat membayar utang tersebut dengan cepat melalui pembelajaran dari umpan balik dan pengalaman. 

## Hutang Teknis vs Bug

> Bugs adalah ketidaksesuaian antara hasil dan harapan kita. Sementara hutang teknis terjadi ketika kode berperilaku sesuai dengan harapan kita, namun harapan tersebut ternyata salah. 

Jika kita bicara tentang bug, itu berarti kode tidak berperilaku sesuai yang diharapkan. Namun, hutang teknis terjadi ketika kode berperilaku seperti yang diharapkan, namun harapan tersebut ternyata tidak tepat. Hutang teknis bukanlah tentang kecerobohan dalam penulisan kode. Tidak ada alasan untuk melakukan hal tersebut karena hal tersebut justru akan memperlambat proses pengembangan. Keyakinan bahwa menulis kode yang tidak berkualitas akan mempercepat proses pengembangan adalah kesalahan besar yang mahal. Jumlah bug yang banyak bukanlah "hutang teknis," tetapi merupakan tanda ketidakmampuan (_skill issue_) yang dapat menghambat efektivitas programmer.

## Melunasi Hutang

Pertimbangan untuk melunasi hutang teknis tidak selalu mudah. Terkadang, mempertahankan hutang tersebut bisa bermanfaat sementara.
Namun, tidak melunasi hutang teknis bisa berakibat buruk bagi perusahaan. Nokia adalah contoh yang mati karena tidak mampu menanggung hutang teknisnya yang menghambat kemampuan pengembang untuk melakukan perubahan dengan cepat. Di sisi lain, hutang teknis bukanlah hal yang sama dengan bug. Kode masih berfungsi dengan baik dan berkualitas tinggi. Walaupun bisa lebih baik, mungkin ada prioritas yang lebih penting daripada memperbaiki kode yang sudah berfungsi. Meskipun demikian, penundaan perbaikan hutang teknis juga harus diperhitungkan karena semakin lama ditunda, semakin sulit untuk melakukan perbaikan tersebut.

Jadi, tidak masalah untuk merilis produk dengan kesadaran bahwa kita akan terus belajar dari waktu ke waktu dan perlu melakukan perbaikan kode sesuai dengan pengalaman yang didapat. Hal ini sesuai dengan prinsip dasar Agile. Namun, menunda perbaikan hutang teknis secara berlebihan bisa menghambat kemampuan kita untuk beradaptasi dengan perubahan. Hal ini bukanlah praktik yang sesuai dengan prinsip Agile. Salah satu caranya adalah mengalokasikan sumber daya kita, misalnya 20% di setiap sprint, untuk mencicil pembayaran hutang teknis tersebut. Dengan begitu kita bisa terus menjaga kecepatan dalam memenuhi kebutuhan pengguna tanpa mengorbankan proses pengembangan secara teknis.