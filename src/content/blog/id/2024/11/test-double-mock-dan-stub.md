---
title: 'Test Double: Mock dan Stub'
pubDate: 2024-11-09
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'testing'
---

Gerard Meszaros memperkenalkan konsep *Test Doubles* dalam bukunya, *"xUnit Test Patterns"*, sebagai berikut:

> Kadang sulit untuk menguji sistem yang sedang diuji (*System Under Test* atau SUT) karena ia bergantung (memiliki dependency) pada komponen lain yang tidak bisa digunakan dalam lingkungan testing. Ini bisa disebabkan karena komponen tersebut tidak tersedia, tidak mengembalikan hasil yang diperlukan untuk testing, atau karena menjalankannya akan menimbulkan efek samping yang tidak diinginkan. Dalam kasus lain, strategi testing kita mengharuskan kita memiliki lebih banyak kontrol atau visibilitas terhadap perilaku internal SUT.

> Ketika kita menulis testing di mana kita tidak bisa (atau memilih untuk tidak) menggunakan komponen yang sebenarnya diperlukan (DOC), kita bisa menggantinya dengan *Test Double*. *Test Double* tidak harus berperilaku persis seperti DOC asli; ia hanya perlu menyediakan API yang sama sehingga SUT berpikir bahwa ia adalah komponen yang asli!

Konsep ini mengarahkan pada dua tipe *Test Doubles* utama yang sering digunakan: *Mocks* dan *Stubs*. Meskipun keduanya bertujuan untuk mensimulasikan komponen yang kompleks atau sulit diuji, mereka memiliki peran yang berbeda.

### 1. **Tujuan dan Kegunaan**

   - **Stub**:
     - Stub adalah *test double* yang mengembalikan data yang telah ditentukan sebelumnya ke sistem yang sedang diuji. Stub digunakan untuk memberikan respons atau data dari dependensi yang tidak sedang diuji.
     - Stubs biasanya digunakan ketika kita perlu mengontrol input untuk suatu fungsi atau kelas sehingga pengujian menjadi lebih sederhana.
     - Contoh kasus penggunaan: Jika sebuah method bergantung pada data dari API eksternal, stub dapat mengembalikan data statis alih-alih melakukan panggilan API yang sebenarnya.

   - **Mock**:
     - Mock tidak hanya menyediakan data, tetapi juga memungkinkan pengujian untuk memverifikasi bahwa perilaku atau interaksi tertentu terjadi ketika kode dijalankan. Mock mencatat dan memverifikasi bahwa method tertentu dipanggil dengan parameter yang diharapkan.
     - Mock berguna ketika kita ingin menguji bagaimana sistem berinteraksi dengan dependensi, bukan sekadar data yang mereka kembalikan.
     - Contoh kasus penggunaan: Saat menguji kelas yang mengirim email, mock dapat memverifikasi bahwa fungsi pengiriman email dipanggil dengan argumen yang benar.

### 2. **Verifikasi Perilaku**

   - **Stub**:
     - Stub umumnya tidak memverifikasi perilaku atau pemanggilan metode; mereka hanya menyediakan respons yang telah ditentukan sebelumnya.
     - Fokusnya lebih pada memberikan respons sederhana yang membantu menguji fungsionalitas komponen yang sedang diuji.

   - **Mock**:
     - Mock dapat memverifikasi apakah interaksi tertentu terjadi, seperti memeriksa apakah suatu metode dipanggil beberapa kali atau dengan argumen tertentu.
     - Mock membantu dalam memverifikasi perilaku, di mana fokusnya adalah pada interaksi, bukan hanya output.

### 3. **Implementasi**

   - **Stub**:
     - Stub seringkali lebih sederhana untuk diimplementasikan karena hanya melibatkan pengaturan respons untuk metode tertentu.
     - Stubs umumnya tidak perlu mencatat pemanggilan metode atau nilai parameter.

   - **Mock**:
     - Mock memerlukan pengaturan lebih lanjut karena mencakup fungsionalitas untuk melacak pemanggilan dan memverifikasi apakah komponen yang diuji berinteraksi sesuai harapan.
     - Framework mocking (seperti Mockito untuk Java atau PHPUnit mocks untuk PHP) menyediakan alat untuk membuat objek mock dan menetapkan ekspektasi pada interaksi.

### Perbandingan

   Misalkan kita memiliki layanan yang mengambil informasi pengguna dari basis data dan mengirimkannya ke sistem lain:

   - **Menggunakan Stub**: Jika kita ingin menghindari pemanggilan basis data yang sebenarnya, kita dapat menggunakan stub untuk mengembalikan objek pengguna contoh tanpa membuat panggilan basis data nyata.
   - **Menggunakan Mock**: Jika kita ingin memastikan bahwa layanan tersebut benar-benar mencoba mengirim data pengguna dengan parameter yang tepat, kita bisa menggunakan mock untuk melacak interaksi ini dan memverifikasi bahwa metode dipanggil dengan argumen yang diharapkan.

Ringkasnya, *stub menyediakan respons*, sementara *mock menyediakan respons dan memverifikasi perilaku*.

## Contoh

### Skenario

Misalkan kita memiliki layanan-layanan berikut dalam aplikasi Laravel:

- **UserService**: Mengambil detail pengguna (akan kita buat *stub*).
- **DiscountService**: Menghitung diskon untuk pengguna (akan kita buat *stub*).
- **EmailService**: Mengirim email notifikasi setelah pesanan diproses (akan kita buat *mock*).

Selain itu, kita punya kelas `OrderProcessor` yang bertugas memproses pesanan, menghitung total dengan diskon yang berlaku, dan mengirim email konfirmasi.

### Langkah 1: Membuat Kelas OrderProcessor

Berikut adalah versi sederhana dari kelas `OrderProcessor`:

```php
<?php

namespace App\Services;

class OrderProcessor
{
    protected $userService;
    protected $discountService;
    protected $emailService;

    public function __construct($userService, $discountService, $emailService)
    {
        $this->userService = $userService;
        $this->discountService = $discountService;
        $this->emailService = $emailService;
    }

    public function calculateOrderTotal($userId, $items)
    {
        $total = array_sum(array_column($items, 'price'));
        $discount = $this->discountService->getDiscountForUser($userId);
        return $total - ($total * $discount);
    }

    public function processOrder($userId, $items)
    {
        $total = $this->calculateOrderTotal($userId, $items);
        
        // Mengirim email konfirmasi
        $user = $this->userService->getUserById($userId);
        $this->emailService->sendOrderConfirmation($user->email);

        return $total;
    }
}
```

### Langkah 2: Menulis Tes Menggunakan Stubs (Untuk `calculateOrderTotal`)

Di sini kita akan menguji bahwa `calculateOrderTotal` menerapkan diskon dengan benar. Kita akan menggunakan *stub* untuk `DiscountService` agar mengembalikan nilai diskon tertentu (misalnya 10%).

```php
<?php

namespace Tests\Unit;

use App\Services\OrderProcessor;
use PHPUnit\Framework\TestCase;

class OrderProcessorTest extends TestCase
{
    public function testCalculateOrderTotalWithDiscount()
    {
        // Membuat stub untuk DiscountService
        $discountServiceStub = $this->createStub(\App\Services\DiscountService::class);

        // Mengonfigurasi stub agar mengembalikan diskon statis 10%
        $discountServiceStub->method('getDiscountForUser')->willReturn(0.1);

        // Dependensi lainnya (biarkan null untuk tes ini)
        $userService = $this->createStub(\App\Services\UserService::class);
        $emailService = $this->createStub(\App\Services\EmailService::class);

        // Membuat OrderProcessor dengan stubs
        $orderProcessor = new OrderProcessor($userService, $discountServiceStub, $emailService);

        // Data pengujian
        $userId = 1;
        $items = [
            ['price' => 100],
            ['price' => 200],
        ];

        // Menghitung total dengan diskon 10%
        $total = $orderProcessor->calculateOrderTotal($userId, $items);

        // Memastikan total sesuai dengan perhitungan setelah diskon 10%
        $this->assertEquals(270, $total);  // (100 + 200) - 10%
    }
}
```

Pada tes ini, kita hanya perlu mengecek output dari `calculateOrderTotal`, sehingga kita menggunakan *stub* untuk mengembalikan nilai diskon 10% tanpa memverifikasi interaksi apa pun di kode dalam fungsi tersebut.

### Langkah 3: Menulis Tes Menggunakan Mocks (Untuk `processOrder`)

Selanjutnya, kita akan menguji bahwa `processOrder` mengirim email konfirmasi setelah memproses pesanan. Kita menggunakan *mock* untuk memverifikasi bahwa metode `sendOrderConfirmation` pada `EmailService` dipanggil dengan argumen yang benar.

```php
<?php

namespace Tests\Unit;

use App\Services\OrderProcessor;
use App\Services\UserService;
use App\Services\DiscountService;
use App\Services\EmailService;
use PHPUnit\Framework\TestCase;

class OrderProcessorTest extends TestCase
{
    public function testProcessOrderSendsEmail()
    {
        // Membuat stub untuk UserService dan DiscountService
        $userServiceStub = $this->createStub(UserService::class);
        $discountServiceStub = $this->createStub(DiscountService::class);

        // Mengonfigurasi UserService stub untuk mengembalikan objek user yang kita buat sendiri
        $user = new \stdClass();
        $user->email = 'user@example.com';
        $userServiceStub->method('getUserById')->willReturn($user);

        // Mengonfigurasi DiscountService stub untuk mengembalikan diskon 10%
        $discountServiceStub->method('getDiscountForUser')->willReturn(0.1);

        // Membuat mock untuk EmailService
        $emailServiceMock = $this->createMock(EmailService::class);

        // Menetapkan ekspektasi: `sendOrderConfirmation` harus dipanggil sekali dengan argumen 'user@example.com'
        $emailServiceMock->expects($this->once())
                         ->method('sendOrderConfirmation')
                         ->with($this->equalTo('user@example.com'));

        // Membuat OrderProcessor dengan stubs dan mock
        $orderProcessor = new OrderProcessor($userServiceStub, $discountServiceStub, $emailServiceMock);

        // Data pengujian
        $userId = 1;
        $items = [
            ['price' => 100],
            ['price' => 200],
        ];

        // Memanggil processOrder dan memverifikasi bahwa email dikirim
        $orderProcessor->processOrder($userId, $items);
    }
}
```

Pada tes ini:

- Kita *mock* `EmailService` karena kita ingin memverifikasi bahwa `sendOrderConfirmation` dipanggil dengan alamat email yang benar, yang merupakan tes verifikasi perilaku.
- Kita menggunakan *stub* untuk `UserService` dan `DiscountService` karena kita hanya membutuhkan respons statis dari layanan-layanan ini tanpa memverifikasi interaksinya.

**Ringkasan**

- *Stub* dalam `testCalculateOrderTotalWithDiscount`: Mengembalikan nilai diskon statis untuk menghitung total pesanan tanpa verifikasi interaksi.
- *Mock* dalam `testProcessOrderSendsEmail`: Memverifikasi bahwa `OrderProcessor` memanggil `sendOrderConfirmation` pada `EmailService` dengan email yang benar, memastikan perilaku yang tepat.