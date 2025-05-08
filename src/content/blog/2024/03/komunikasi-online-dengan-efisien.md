---
title: 'Komunikasi Online Efektif dan Efisien'
pubDate: 2024-03-16
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Kita hidup di era di mana obrolan online semakin menjadi bagian penting dari interaksi sehari-hari, penting untuk memahami bagaimana berkomunikasi secara efektif di platform tersebut. Ada beberapa hal sederhana yang perlu kita perhatikan untuk memastikan pertukaran pesan yang produktif dan menyenangkan di ruang obrolan online.

## [Don't ask to ask, just ask](https://dontasktoask.com/)

Persis seperti judulnya: jangan bertanya untuk bertanya, tanya saja. Dalam artikel tersebut dijelaskan tentang perilaku kurang tepat yang seringkali terjadi dalam ruang obrolan online. Banyak orang datang dan bertanya, 

> "Apakah ada ahli JavaScript di sini?". 

Pertanyaan semacam ini sebenarnya tidak efektif dan tidak pantas. Apa yang sebenarnya dimaksudkan oleh orang tersebut adalah, 

> "Apakah ada ahli JavaScript di sini yang bersedia untuk memeriksa masalah saya, apa pun itu, bahkan jika tidak berkaitan dengan JavaScript atau jika seseorang yang tidak tahu apa-apa tentang JavaScript sebenarnya bisa menjawab pertanyaan saya?"

Kita tidak akan segera mendapatkan jawaban yang kita butuhkan dengan pertanyaan itu. Di samping itu ada beberapa masalah juga di sini, itu seolah menuntut orang untuk bertanggung jawab (sebagai ahli) dan membatasi partisipasi dari orang lain (yang tidak ahli tidak boleh jawab?). S

Jadi, sebaiknya langsung mengajukan pertanyaan konkret mengenai masalah yang dihadapi. Singkatnya, jangan bertanya "Apakah ada ahli JavaScript di sini?", tetapi sebaiknya langsung mengajukan pertanyaan dengan informasi yang relevan, misalnya "Bagaimana cara menyelesaikan [masalah] dengan JavaScript dan [informasi lainnya yang relevan]?"

## [The XY Problem](https://xyproblem.info/)

Masalah XY adalah saat seseorang bertanya tentang solusi yang sedang mereka coba daripada menjelaskan masalah sebenarnya. Hal ini menyebabkan pemborosan waktu dan energi yang besar, baik bagi orang yang meminta bantuan maupun bagi mereka yang memberikan bantuan.

- Bob ingin melakukan X.
- Bob tidak tahu bagaimana cara melakukan X, tetapi berpikir bahwa mereka bisa mendapatkan solusi jika mereka bisa melakukan Y.
- Bob juga tidak tahu bagaimana cara melakukan Y.
- Bob meminta bantuan tentang masalah Y.
- Orang lain mencoba membantu Bob dengan Y, tetapi bingung karena Y tampak seperti masalah yang aneh untuk diselesaikan.
- Setelah banyak interaksi dan pemborosan waktu, akhirnya menjadi jelas bahwa Bob sebenarnya ingin bantuan dengan X, dan bahwa Y bahkan bukanlah solusi yang sesuai untuk X.

**Contoh:**
Bob sebenarnya tidak ingin tiga karakter terakhir dalam sebuah nama file, dia ingin mendapatkan ekstensi file, jadi mengapa bertanya tentang tiga karakter terakhir?

```
<bob> Bagaimana cara saya menampilkan tiga karakter terakhir dalam sebuah nama file?
<feline> Jika mereka berada dalam sebuah variabel: echo ${foo: -3}
<feline> Mengapa tiga karakter? Apa yang sebenarnya Anda inginkan?
<feline> Apakah Anda menginginkan ekstensi?
<bob> Ya.
<feline> Tidak ada jaminan bahwa setiap nama file akan memiliki ekstensi tiga huruf,
<feline> jadi dengan sembrono mengambil tiga karakter tidak akan memecahkan masalah.
<feline> echo ${foo##*.}
```

Masalah itu terjadi ketika orang terjebak pada apa yang mereka yakini sebagai solusi dan tidak dapat mundur dan menjelaskan masalahnya secara lengkap. Dengan membingkai ulang pendekatan dalam menyelesaikan masalah dan fokus pada masalah yang sebenarnya, solusi yang lebih efektif dapat dicapai. Ini yang bisa kita lakukan:

- Selalu sertakan informasi tentang gambaran yang lebih luas bersama dengan setiap solusi yang dicoba.
- Jika seseorang meminta informasi lebih lanjut, berikan detail.
- Jika ada solusi lain yang sudah Anda tolak, bagikan alasan mengapa Anda menolaknya. Hal ini memberikan informasi lebih lanjut tentang kebutuhan Anda.

**Contoh:**
```
Saya sedang mencoba memecahkan masalah X, saya pikir ini bisa dilakukan dengan cara Y, hanya saya belum berhasil melakukannya. Beberapa orang menyarankan untuk melakukan Z, T, tapi dalam kasus saya tidak mungkin dilakukan karena ...
```

Ingatlah bahwa jika teori diagnostik kita akurat, kita tidak akan meminta bantuan, bukan?

## [No Hello](https://nohello.net/en/)

Ini juga salah satu masalah yang membuat sebuah percakapan tidak efektif. Alasan orang melakukannya umumnya untuk mencoba sopan dengan tidak langsung melontarkan permintaan (basa basi), seperti yang biasanya dilakukan secara langsung atau melalui telepon - dan itu bagus! Tetapi saat ini obrolan online (chat) tidaklah sama dengan hal-hal tersebut. Jadi meskipun dengan niat terbaik, sebenarnya kita hanya membuat orang lain menunggu kita menyusun pertanyaan, yang berarti produktivitas terbuang percuma (dan agak mengganggu). 

**Contoh:**
```
A: Hai
-- 10 menit --
B: Ya?
-- 10 menit --
A: Bagaimana keputusan tentang hal ini?
-- 10 menit --
B: Oh, mengenai hal itu ....
```

Langsung saja utarakan maksud kita. Jika kita merasa agak terlalu tegas hanya dengan mengatakan "Hi" dan langsung bertanya, kita masih bisa memulai pesan kita dengan sebanyak mungkin kata-kata sopan sesuai yang kita anggap perlu. 

**Contoh:**
```
A: Hai B, saya sedang mengerjakan tentang X, saya perlu informasi darimu bagaimana keputusan tentang hal ini?
-- 10 menit --
B: Hai A, mengenai hal itu ....
```

Ini mungkin terlihat sepele, tetapi dengan bertanya pertanyaan kita sebelum mendapatkan balasan salam awal, itu juga memungkinkan untuk komunikasi asinkron. Jika pihak lain sedang tidak ada untuk langsung membalas, dan kita pergi sebelum mereka kembali, mereka masih bisa menjawab pertanyaan kita, alih-alih hanya menatap kata "Halo" dan bertanya-tanya apa yang mereka lewatkan.



## [Stack Overflow - How do I ask a good question?](https://stackoverflow.com/help/how-to-ask)

Ini adalah sebuah panduan untuk membuat pertanyaan dengan baik di Stack Overflow. Dengan mengikuti panduan ini, kita dapat membuat sebuah pertanyaan yang efektif dan efisien bagi kedua belah pihak, penanya dan orang-orang yang mau memberikan jawaban.