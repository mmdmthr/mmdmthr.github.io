---
title: 'Memahami Law of Demeter'
date: 2024-11-23
category: 'notes'
---

**Law of Demeter (LoD)** adalah sebuah prinsip desain perangkat lunak yang juga dikenal sebagai "Prinsip Pengetahuan Paling Sedikit" (_Principle of Least Knowledge_) atau diibaratkan seperti nasihat "Jangan Bicara dengan Orang Asing" (_Don’t talk to strangers_). Orang asing dalam konteks ini adalah objek yang tidak dapat diakses secara langsung. Dalam bahasa berorientasi objek, hal ini paling sering terjadi melalui method getter. 

Dengan kata lain, **jangan memanggil "method dari method"** (misalnya, `a.getB().getC().doSomething()`). Masalah yang muncul adalah, ini menyebabkan ketergantungan yang terlalu erat antar objek (_tightly coupled_). Kode yang menggunakan method di objek lain mengetahui struktur internal objek tersebut. Hasilnya, objek terkait tidak dapat mengubah struktur dengan leluasa, karena harus tetap mendukung cara untuk mendapatkan struktur data lama; jika tidak, kode akan rusak. 

Prinsip ini bertujuan untuk mengurangi ketergantungan antar komponen dalam sebuah code base, sehingga kode menjadi lebih mudah dipelihara, dimodifikasi, dan diuji. 

### **Definisi**
Law of Demeter menyatakan bahwa sebuah objek hanya boleh berkomunikasi langsung dengan:  
1. **Dirinya sendiri**  
2. **Objek yang dibuatnya sendiri**  
3. **Objek yang diteruskan kepadanya sebagai parameter**  
4. **Objek global yang dapat diaksesnya secara langsung**  
5. **Komponen dari objek-objek yang disebutkan di atas (anggota langsungnya)**  

---

### **Contoh**
Misalkan ada 3 kelas: `Person`, `Address`, dan `City`. 
```php
class City {
    public function getName() {
        return "Jakarta";
    }
}

class Address {
    private $city;

    public function __construct(City $city) {
        $this->city = $city;
    }

    public function getCity() {
        return $this->city;
    }
}

class Person {
    private $address;

    public function __construct(Address $address) {
        $this->address = $address;
    }

    public function getAddress() {
        return $this->address;
    }
}
```

#### **Pelanggaran LoD**
Jika kita ingin mendapatkan nama kota dari `Address` seorang `Person`:
```php
$person = new Person(new Address(new City()));
$cityName = $person->getAddress()->getCity()->getName();
```
Kode ini melanggar LoD karena kita memanggil rantai method (`getAddress()` → `getCity()` → `getName()`).

#### **Solusi yang Sesuai LoD**
Kita dapat menambahkan method di kelas `Person` untuk membatasi interaksi langsung:
```php
class Person {
    // ...
    public function getCityName() {
        return $this->address->getCity()->getName();
    }
}

$cityName = $person->getCityName();
```
Dengan cara ini, objek eksternal hanya berinteraksi langsung dengan `Person`, tanpa mengetahui struktur internalnya.

---

### **Keuntungan**
1. **Mengurangi ketergantungan** antar objek, sehingga perubahan pada satu objek tidak berdampak besar pada yang lain. Misalnya class `Address` mengubah caranya dalam mengambil nama dari class `City`, kode pemanggil tidak perlu mempedulikan itu.
2. **Mempermudah pemeliharaan dan pengujian** karena hubungan antar objek menjadi lebih sederhana. Ini berarti lebih sedikit kode dan mengurangi beban mental ketika memahami dan mengetesnya.
3. **Meningkatkan enkapsulasi**, menjaga detail internal objek agar tidak terekspos ke luar.

---

### **Penerapan dalam Praktik**
- Gunakan **getter secukupnya**.
- Hindari **method chaining** pada objek yang tidak saling mengenal secara langsung.
- Fokuskan pada pemisahan tanggung jawab (seperti pada **Single Responsibility Principle**).

Prinsip ini sering dikombinasikan dengan pola desain seperti **Facade Pattern** atau **Mediator Pattern** untuk mengurangi kompleksitas hubungan antar objek.