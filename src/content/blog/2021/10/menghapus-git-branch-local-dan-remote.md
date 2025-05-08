---
title: Menghapus Git Branch Local dan Remote
pubDate: 2021-10-18
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'git'
---

Perintah untuk menghapus branch git

```bash
// menghapus branch lokal
git branch -d namaBranchLokal

// menghapus branch remote
git push origin --delete namaBranchRemote
```

Kita tidak dapat menghapus branch yang sedang aktif, untuk itu
kita harus melakukan `checkout` ke branch yang sedang tidak akan kita hapus.
misalnya `git checkout main`.

### Perintah untuk menghapus branch lokal: 
```bash
git branch -d <branch>
```

Opsi `-d` hanya akan menghapus branch yang sudah di-push dan merge dengan remote branch. 
Jika ingin menghapus branch yang belum di-push, gunakan opsi `-D`.

### Perintah untuk menghapus branch remote: 
```bash
git push <remote> --delete <branch>
```
atau singkatnya: 
```bash
git push <remote> :<branch>
```

Jika remote branch ternyata sudah dihapus akan muncul pesan error.
```bash
error: unable to push to unqualified destination: remoteBranchName The destination refspec neither matches an existing ref on the remote nor begins with refs/, and we are unable to guess a prefix based on the source ref. error: failed to push some refs to 'git@repository_name'
``` 

Sinkronkan branch lokal kita dengan branch remote
```bash
git fetch -p
```

Opsi `-p` berarti prune, branch lokal yang sudah tidak ada lagi di remote repo akan dihapus.


Sumber [https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/](https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)