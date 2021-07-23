---
title: JavaScript Truthy dan Falsy
date: 2021-07-22
category: 'javascript'
---

Salah satu tipe data primitif dalam dalam JavaScript adalah boolean, 
yaitu tipe data logis yang memiliki nilai true atau false.
JavaScript memiliki sifat [type coercion][1] atau konversi nilai secara otomatis 
atau implisit dari satu tipe data ke tipe data lainnya (seperti string ke angka, objek ke boolean).

Oleh karena itu nilai-nilai di luar tipe data boolean 
juga dapat dievaluasi sebagai nilai true atau false.
Dalam konteks boolean ada istilah [truthy][2] yaitu nilai-nilai yang dianggap `true`, 
dan [falsy][3] yaitu nilai yang dianggap `false`. 

Beberapa contoh nilai truthy adalah
```tsx
true // boolean true
{} // object
[] // array
15 // integer tidak bernilai 0
'0' // string
```

Sementara nilai falsy adalah
```tsx
false //boolean false
undefined
null
NaN
0 // integer 0
"" // string kosong
```

Di JavaScript setiap nilai bisa dievaluasi nilai boolean-nya menggunakan fungsi `Boolean()`.
```tsx
Boolean(1) // true
Boolean('0') // true
Boolean(0) // false
```

[1]: https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion "Type Coercion"
[2]: https://developer.mozilla.org/en-US/docs/Glossary/Truthy "Truthy"
[3]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy "Falsy"


Sumber bacaan:

1. [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
2. [Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
3. [Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
4. [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)