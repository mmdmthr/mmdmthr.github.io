---
title: Property dan Method Public, Private, Protected
pubDate: 2021-08-08
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'php'
---

Ada tiga macam tipe akses yang dapat diterapkan untuk property (variabel pada class/object) dan method (function pada class/object) pada PHP. Masing-masing tipe memberikan level akses yang berbeda terhadap property atau method dalam sebuah class/object dan digunakan untuk kasus yang berbeda dalam pemrograman berorientasi objek. Dalam PHP dikenal tipe akses public, private dan protected.

## Public

Property atau method yang dideklarasikan dengan kata kunci `public` mengizinkan akses yang paling luas. Public berarti mengizinkan property atau method dapat diakses oleh:
* Class yang mendeklarasikannya
* Sublass/class turunan (class yang melakukan extend)
* Semua object eksternal, class atau kode yang berada diluar hirarki class yang mendeklarasikannya

Contoh dari akses `public` sebagai berikut:

```php
class MyClass {
 // Mendeklrasaikan property public
 public $myProperty = 'test';
 // Mendeklrasikan method public
 public function myMethod() {
 return $this->myProperty;
 }
}
$obj = new MyClass(); //menginstance sebuah object
echo $obj->myMethod(); //mengakses method di kelas MyClass
// Out: test
echo $obj->myProperty; //mengakses property di kelas MyClass
// Out: test
```

## Protected

Mendeklarasikan property atau method dengan kata kunci `protected` berarti mengizinkan untuk diakses oleh:
* Class yang mendeklarasikannya
* Class turunannya (class yang melakukan extend)

Akses `protected` berarti **tidak mengizinkan** object, class atau kode di luar hirarki class untuk mengakses property atau method di dalam class yang mendeklrasikannya. Jika ada kode yang tidak tidak berada dalam lingkup akses tersebut mencoba mengakses property/method protected maka akan muncul pesan error. Intinya yang bisa mengakses property/method private **hanya** instance dari class yang mendeklarasikannya.

Contoh dari akses `protected` sebagai berikut:

```php
class MyClass {
 protected $myProperty = 'test';
 protected function myMethod() {
    return $this->myProperty;
 }
}
// Subclass dari MyClass
class MySubClass extends MyClass {
 public function run() {
    echo $this->myMethod();
 }
}
$obj = new MySubClass();
$obj->run(); // Memanggil MyClass::myMethod() dari dalam sublcass (diizinkan);
// Out: test
$obj->myMethod(); // Mengakses method protected dari instance subclass (tidak diizinkan)
// Out: Fatal error: Call to protected method MyClass::myMethod() from context ''

```

Contoh di atas menunjukkan bahwa kita hanya bisa mengakses elemen `protected` dari dalam scope-nya sendiri. "Apa yang berada di dalam rumah hanya dapat diakses dari dalam rumah"

## Private

Mendeklarasikan property/method `private` mengizinkan untuk dapat diakses oleh:
* Class yang mendeklrasikannya saja (bukan subclass)

Sebuah property/method private hanya dapat diakses di dalam class yang membuatnya. 
Sedikit catatan, objek dengan tipe yang sama akan memiliki akses satu sama lain pada elemen private dan protected meskipun mereka bukan instance yang sama.

```php
class MyClass {
 private $myProperty = 'test';
 private function myPrivateMethod() {
    return $this->myProperty;
 }
 public function myPublicMethod() {
    return $this->myPrivateMethod();
 }
 public function modifyPrivatePropertyOf(MyClass $anotherInstance) {
    $anotherInstance->myProperty = "new value";
 }
}
class MySubClass extends MyClass {
 public function run() {
    echo $this->myPublicMethod();
 }
 public function runWithPrivate() {
    echo $this->myPrivateMethod();
 }
}
$obj = new MySubClass();
$newObj = new MySubClass();
// Memanggil MyClass::myPublicMethod(), yang akan memanggil
// MyClass::myPrivateMethod(); (diizinkan karena yang memanggil 
//adalah method pada class yang mendeklrasikan)
$obj->run();
// Out: test

$obj->modifyPrivatePropertyOf($newObj); //memodifikasi private property 
// dari instance yang berbeda (diizinkan)
$newObj->run();
// Out: new value
echo $obj->myPrivateMethod(); // mengakses method private secara langsung 
//pada super class (tidak diizinkan)
// Out: Fatal error: Call to private method MyClass::myPrivateMethod() from context ''
echo $obj->runWithPrivate(); // mengakses method private 
// dari instance subclass (juga tidak diizinkan)
// Out: Fatal error: Call to private method MyClass::myPrivateMethod() from context 'MySubClass'
```