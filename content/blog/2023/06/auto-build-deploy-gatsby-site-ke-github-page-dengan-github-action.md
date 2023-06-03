---
title: Auto Build dan Deploy Gatsby Site ke GitHub Page dengan GitHub Action
date: 2023-06-03
category: 'notes'
---

Blog yang sedang Anda baca ini dibuat dengan [GatsbyJs](https://www.gatsbyjs.com/) dan dihosting di [GitHub Pages](https://pages.github.com/). 
Sebelumnya, deploy site dilakukan secara manual menggunakan perintah `gatsby build` setiap saya menambahkan artikel baru.

```bash
gatsby build --prefix-paths && gh-pages -d public
```

### Auto Deploy

Proses ini dapat dibuat otomatis dengan memanfaatkan [GitHub Actions](https://docs.github.com/en/actions) workflow.

1. Buat branch baru `github-action`

    Semua perubahan file berkaitan dengan pekerjaan GitHub action akan disimpan di sini.

1. Buat *Personal Access Token*

    Untuk dapat menggunakan *workflow* ini, kita juga perlu membuat Token Akses. Buka Setting (klik foto profil di pojok kanan atas) -> Developer Settings (paling bawah) -> Generate new token. Pada token classic, kita pilih scope berikut: `repo`, `workflow`, dan `write: package`.

1. Set access token di actions

    Copy *secret* token. Kemudian kembali ke repositori kita: Settings -> Secrets and Variable -> Actions. Klik tombol *new repository secret*. Kita atur namanya `ACCESS_TOKEN` yang akan kita gunakan di file `deploy.yml`. 

1. Buat file workflow

    Untuk melakukan ini, kita akan membuat file bernama `deploy.yml` di dalam folder `.github/workflows`. 
    
    ```yml
    name: Gatsby Publish

    on:
      push:
        branches:
        - main

    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
        - name: Checkout
            uses: actions/checkout@v3
        - name: Use Node.js
            uses: actions/setup-node@v3
            with:
              node-version: '16'
        - name: Gatsby Publish
            uses: enriikke/gatsby-gh-pages-action@v2
            with:
              access-token: ${{ secrets.ACCESS_TOKEN }}
              deploy-branch: gh-pages
            env:
              NPM_CONFIG_LEGACY_PEER_DEPS: true
    ```
    
    Dalam file ini, kita mendefinisikan bahwa setiap kali melakukan `push` ke branch `main`, kita menjalankan job [Gatsby Publish](https://github.com/marketplace/actions/gatsby-publish). 
    
    Saya menambahkan setup node untuk memastikan proses build menggunakan versi nodejs yang tepat. Saya juga mengeset `deploy-branch: gh-pages` karena itu branch yang saya gunakan untuk mempublikasikan blog. Sementara attribute env `NPM_CONFIG_LEGACY_PEER_DEPS: true` untuk mengantisipasi versi peer dependency yang tidak cocok (namun sebenarnya tetap bisa berfungsi).

1. Buat Pull Request dan Merge

    Setelah semua siap, kita bisa mencoba script tersebut dengan cara melakukan pull request ke branch main. Github akan menampilkan status *workflow* di bawah tab Actions. Setiap kali kita melakukan push commit baru atau melakukan merge dari branch lain, actions akan melakukan build pada aplikasi kita.

Referensi: [Auto-Deploy Gatsby to Github Pages](https://medium.com/@alpercitak/auto-deploy-gatsby-to-github-pages-1a4d18ac239f)