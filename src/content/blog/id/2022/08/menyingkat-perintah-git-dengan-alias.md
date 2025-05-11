---
title: Menyingkat Perintah Git dengan Alias
pubDate: 2022-08-07
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'git'
---

Dalam pekerjaan sehari-hari saya lebih suka berinteraksi dengan git melalui perintah di command line. 
Paling tidak untuk perintah yang sering digunakan seperti commit, push, atau checkout. Namun semakin lama 
rasanya perintah-perintah tersebut terlalu panjang untuk diketik. Karena itu saya membuat beberapa alias 
untuk menulis perintah git dengan lebih singkat sehingga mempercepat pekerjaan.

### Cara Membuat Alias

Alias memungkinkan kita untuk menetapkan kata kunci yang dapat memicu perintah yang lebih panjang. 
Kita dapat mendefinisikan alias dalam file konfigurasi `.bash_profile` atau `. bashrc` . 
Karena saya menggunakan ZSH, file konfigurasinya bernama `.zshrc`. 
File konfigurasi tersebut biasanya berada di direktori `home`. Misalnya, `.zshrc` saya berada di `/home/user/.zshrc`

Alias pada bash ditulis seperti contoh berikut

```bash
alias ALIAS_NAME="ALIAS_COMMAND"
```

Nama alias bisa apa saja yang kita inginkan, asalkan belum digunakan oleh perintah lain. 
Misalnya, alias di bawah ini akan membuka situs web di Chrome:

```bash
alias devjurnal="chrome https://mmdmthr.github.io"
```

Jika saya mengetik devjurnal di terminal baru, URL tersebut akan terbuka di Chrome.

### Menyingkat Perintah Git

**Commit**

Ini adalah perintah yang paling sering digunakan, yaitu untuk commit dan menambahkan pesan commit.

```bash
alias gac="git add . && git commit -m" # + pesan commit
```

Dengan alias ini, cukup mengetik alias, ditambah pesan komit yang kita inginkan.

```bash
gac "Pesan komit saya"
```

**Pull dan Push**

Melakukan push dan pull ke/dari remote repo adalah perintah umum lainnya.

```bash
alias gp="git push" # + remote & nama branch
alias gl="git pull" # + remote & nama branch
```

**Branch**

Ini adalah alias untuk bekerja dengan branch. Membuat branch baru atau checkout ke cabang lain:

```bash
alias gb="git branch" # + nama branch
alias gco="git checkout" # + nama branch
```

Referensi : [https://bitsofco.de/git-aliases-for-lazy-developers/](https://bitsofco.de/git-aliases-for-lazy-developers/)