---
title: 'Refactor yang Baik, Buruk dan Menjebak'
pubDate: 2024-10-05
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Post ini diterjemahkan dari artikel [Good vs Bad Refactoring](https://www.builder.io/blog/good-vs-bad-refactoring)

Refactoring adalah gabungan seni dan sains. Seringkali, keinginan untuk membuat segalanya lebih baik bisa menjadi pedang bermata dua. Abstraksi dalam pemrograman bisa menjadi hal yang baik, tetapi juga bisa berbahaya. Kuncinya adalah mengetahui kapan dan bagaimana menerapkannya. Mari kita lihat beberapa kesalahan umum yang sering terjadi saat refactoring dan cara menghindarinya.

## Mengubah Gaya Kode Secara Substansial

Salah satu kesalahan paling umum yang sering terjadi adalah ketika pengembang mengubah gaya kode secara drastis selama refactoring. Hal ini sering terjadi ketika seseorang berasal dari latar belakang yang berbeda atau memiliki pandangan kuat tentang paradigma pemrograman tertentu.

Contoh:
Bayangkan kita memiliki potongan kode berikut:

Sebelum:

```javascript
function processUsers(users: User[]) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      const formattedUser = {
        name: users[i].name.toUpperCase(),
        age: users[i].age,
        isAdult: true
      };
      result.push(formattedUser);
    }
  }
  return result;
}
```

Refactor Buruk:

```javascript
import * as R from 'ramda';

const processUsers = R.pipe(
  R.filter(R.propSatisfies(R.gte(R.__, 18), 'age')),
  R.map(R.applySpec({
    name: R.pipe(R.prop('name'), R.toUpper),
    age: R.prop('age'),
    isAdult: R.always(true)
  }))
);
```

Meskipun versi refaktor ini mungkin menarik bagi penggemar pemrograman fungsional, namun memperkenalkan pustaka baru (Ramda) dan gaya pemrograman yang benar-benar berbeda. Untuk tim yang tidak terbiasa dengan pendekatan ini, kode ini bisa menjadi lebih sulit untuk dipelihara.

Refactor Baik:

```javascript
function processUsers(users: User[]): FormattedUser[] {
  return users
    .filter(user => user.age >= 18)
    .map(user => ({
      name: user.name.toUpperCase(),
      age: user.age,
      isAdult: true
    }));
}
```

Versi ini memperbaiki kode asli dengan menggunakan metode JavaScript yang lebih idiomatik seperti filter dan map. Kode ini lebih ringkas dan mudah dibaca, tanpa memperkenalkan paradigma baru atau dependensi eksternal.

## Abstraksi yang Tidak Perlu

Ini mungkin dilakukan oleh seseorang yang ingin menambahkan banyak abstraksi baru tanpa memahami kode dasarnya. Mereka mulai mengelompokkan hal-hal yang seharusnya tidak dikelompokkan dan mengonsolidasikan beberapa konfigurasi yang seharusnya tetap terpisah.

Contoh:

Sebelum:

```javascript
function processUsers(users: User[]) {
  const result = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= 18) {
      const formattedUser = {
        name: users[i].name.toUpperCase(),
        age: users[i].age,
        isAdult: true
      };
      result.push(formattedUser);
    }
  }
  return result;
}
```

Refactor Buruk:

```javascript
class UserProcessor {
  private users: User[];

  constructor(users: User[]) {
    this.users = users;
  }

  public process(): FormattedUser[] {
    return this.filterAdults().formatUsers();
  }

  private filterAdults(): UserProcessor {
    this.users = this.users.filter(user => user.age >= 18);
    return this;
  }

  private formatUsers(): FormattedUser[] {
    return this.users.map(user => ({
      name: this.formatName(user.name),
      age: user.age,
      isAdult: true
    }));
  }

  private formatName(name: string): string {
    return name.toUpperCase();
  }
}

const processUsers = (users: User[]): FormattedUser[] => {
  return new UserProcessor(users).process();
};
```

Refaktor ini memperkenalkan kelas dengan banyak method, yang mungkin tampak lebih "berorientasi objek", tetapi sebenarnya lebih kompleks dan lebih sulit dipahami.

Refaktor Baik:

```javascript
const isAdult = (user: User): boolean => user.age >= 18;

const formatUser = (user: User): FormattedUser => ({
  name: user.name.toUpperCase(),
  age: user.age,
  isAdult: true
});

function processUsers(users: User[]): FormattedUser[] {
  return users.filter(isAdult).map(formatUser);
}
```

Versi ini memecah logika menjadi fungsi kecil yang dapat digunakan kembali tanpa memperkenalkan kompleksitas yang tidak perlu.

## Menambah Inkonsistensi

Ada kalanya pengembang memperbarui satu bagian dari kode agar bekerja dengan cara yang benar-benar berbeda dari yang lain, dengan maksud untuk memperbaikinya. Ini sering menyebabkan kebingungan dan frustrasi bagi pengembang lain yang harus beralih konteks antara gaya yang berbeda.

Contoh:

Bayangkan kita memiliki aplikasi React yang secara konsisten menggunakan React Query untuk pengambilan data:

Sebelum:

```javascript
import { useQuery } from 'react-query';

function UserProfile({ userId }) {
  const { data: user, isLoading } = useQuery(['user', userId], fetchUser);

  if (isLoading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

Sekarang bayangkan seorang pengembang memutuskan untuk menggunakan Redux Toolkit hanya untuk satu komponen:

Refactor Buruk:

```javascript
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';

function PostList() {
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}
```

Inkonsistensi ini mengganggu karena memperkenalkan pola manajemen status yang benar-benar berbeda hanya untuk satu komponen.

Refactor Baik:
```javascript
import { useQuery } from 'react-query';

function PostList() {
  const { data: posts, isLoading } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}
```

Versi ini mempertahankan konsistensi dengan menggunakan React Query untuk pengambilan data di seluruh aplikasi. Ini lebih sederhana dan tidak mengharuskan pengembang lain mempelajari pola baru hanya untuk satu komponen.

## Tidak Memahami Kode Sebelum Refactoring

Salah satu sumber masalah terbesar dalam refactoring adalah merombak kode saat sedang mempelajarinya. Ini adalah ide yang buruk. Anda kemungkinan besar akan menciptakan bug, merusak performa, dan lain-lain.

Contoh:

Sebelum:

```javascript
function fetchUserData(userId: string) {
  const cachedData = localStorage.getItem(`user_${userId}`);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  return api.fetchUser(userId).then(userData => {
    localStorage.setItem(`user_${userId}`, JSON.stringify(userData));
    return userData;
  });
}
```

Refactor Buruk:

```javascript
function fetchUserData(userId: string) {
  return api.fetchUser(userId);
}
```

Orang yang melakukan refactor mungkin berpikir bahwa mereka menyederhanakan kode, tetapi sebenarnya mereka menghapus mekanisme caching penting yang ada untuk mengurangi panggilan API dan meningkatkan performa.

Refactor Baik:

```javascript
async function fetchUserData(userId: string) {
  const cachedData = await cacheManager.get(`user_${userId}`);
  if (cachedData) {
    return cachedData;
  }

  const userData = await api.fetchUser(userId);
  await cacheManager.set(`user_${userId}`, userData, { expiresIn: '1h' });
  return userData;
}
```

Refactor ini mempertahankan perilaku caching sambil mungkin meningkatkannya dengan menggunakan pengelola cache yang lebih canggih dengan masa kedaluwarsa.

## Memahami Konteks Bisnis

Saya pernah bergabung dengan sebuah perusahaan yang memiliki banyak kode warisan yang buruk. Saya memimpin proyek untuk memigrasi perusahaan e-commerce ini ke teknologi yang baru, modern, cepat, dan lebih baik... Angular.js.

Ternyata, bisnis ini sangat bergantung pada SEO, dan kami membangun aplikasi halaman tunggal yang lambat dan bengkak.

Kami tidak merilis apa pun selama 2 tahun selain salinan karbon dari situs web yang lebih lambat, penuh bug, dan kurang dapat dipelihara. Mengapa? Orang-orang yang memimpin ini (termasuk saya - saya adalah penyebab masalah ini) belum pernah bekerja di situs ini sebelumnya. Saya muda dan bodoh.

Contoh:

Refactor Buruk:

```javascript
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:id" component={ProductDetails} />
      </Switch

>
    </Router>
  );
}
```

Versi ini mungkin tampak modern, tetapi untuk situs yang sangat bergantung pada SEO, pendekatan SPA ini mungkin memiliki efek merugikan pada peringkat pencarian mereka.

Refactor Baik:

```javascript
function ProductDetailsPage({ match }) {
  const productId = match.params.id;

  // Server-side rendered product details for SEO
  return (
    <div>
      <ProductSEO productId={productId} />
      <ProductDetails productId={productId} />
    </div>
  );
}
```

Pendekatan ini mungkin melibatkan sedikit lebih banyak kerumitan, tetapi tetap menjaga konten yang dapat diindeks oleh mesin pencari dan memberikan pengalaman pengguna yang baik.

---
Memahami kapan refaktor diperlukan, bagaimana melakukannya dengan benar, dan dampak apa yang akan ditimbulkannya adalah kunci untuk melakukannya dengan sukses. Berhati-hatilah, pikirkan konteks bisnis, dan selalu tanyakan pada diri sendiri, "Apakah ini benar-benar perbaikan?" sebelum mulai mengubah kode.
