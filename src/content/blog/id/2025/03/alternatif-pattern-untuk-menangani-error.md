---
title: 'Alternatif Pattern untuk Menangani Error'
pubDate: 2025-03-22
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Ini adalah lanjutan dari post (Belajar tentang Exception)[/2025/02/belajar-tentang-exception/] yang membahas tentang dalam situasi apa sebaiknya exception digunakan untuk menangani error. Post ini akan membahas alternatif lain untuk menangani error. Ada beberapa pattern selain `try-catch` yang bertujuan untuk menangani error atau kondisi tertentu tanpa menggunakan exception secara langsung. Berikut beberapa pattern yang sering digunakan beserta contohnya dalam bahasa PHP:  

## TryXXX() Pattern (Mirip dengan .NET)
💡 **Alih-alih melempar exception, fungsi mengembalikan nilai bool yang menunjukkan keberhasilan atau kegagalan.**  

#### Contoh
```php
function tryParseNumber(string $input, &$output): bool
{
    if (!is_numeric($input)) {
        return false; // Tidak perlu exception
    }

    $output = (int) $input;
    return true;
}

if (tryParseNumber("123", $number)) {
    echo "Angka: $number"; // ✅ Angka: 123
} else {
    echo "Input tidak valid"; // ❌ Tidak ada exception, hanya false
}
```

🟢 Keuntungan:
- Lebih cepat: Tidak perlu menangani exception.
- Lebih ringan: Tidak ada overhead stack trace exception.
- Lebih bersih: Error cukup dicek dengan if.

✅ Gunakan TryXXX() jika:
- Errornya biasa terjadi dan bisa ditangani secara normal.
- Ingin menghindari overhead exception.
- Butuh kode yang lebih bersih dan mudah dibaca.

## Result Object Pattern (Either/Result)
💡 **Alih-alih melempar exception, fungsi mengembalikan objek hasil (success/failure).**  
Mirip dengan `TryXXX()`, tetapi lebih eksplisit dan sering digunakan dalam functional programming.  

### Contoh
```php
class Result
{
    public bool $success;
    public mixed $value;
    public ?string $error;

    private function __construct(bool $success, mixed $value = null, ?string $error = null)
    {
        $this->success = $success;
        $this->value = $value;
        $this->error = $error;
    }

    public static function success(mixed $value): self
    {
        return new self(true, $value);
    }

    public static function failure(string $error): self
    {
        return new self(false, null, $error);
    }
}

// Contoh penggunaan:
function getUserRole(): Result
{
    $role = Role::where('name', 'user')->first();

    if (!$role) {
        return Result::failure("User role not found");
    }

    return Result::success($role);
}

// Menggunakan hasil:
$result = getUserRole();
if ($result->success) {
    echo "Role ditemukan: " . $result->value->name;
} else {
    echo "Error: " . $result->error;
}
```
✅ **Keuntungan**:
- Tidak perlu menangkap exception.  
- Hasil lebih eksplisit (`success` atau `failure`).  
- Bisa membawa data sukses atau pesan error tanpa memengaruhi flow program.  

## Null Object Pattern
💡 **Mengembalikan objek "kosong" atau "dummy" sebagai pengganti null, sehingga kode tetap berjalan.**  
Alih-alih melempar exception atau mengembalikan `null`, gunakan objek default agar kode tetap berjalan tanpa error.  

### Contoh
```php
class NullUserRole
{
    public string $name = 'Guest';
}

function getUserRole(): Role|NullUserRole
{
    return Role::where('name', 'user')->first() ?? new NullUserRole();
}

// Tidak perlu cek null, bisa langsung digunakan
$role = getUserRole();
echo "Role: " . $role->name; // Jika tidak ada, akan mencetak "Guest"
```
✅ **Keuntungan**:
- Menghindari **null checks berulang** (`if ($var !== null)`).  
- Kode lebih aman, tidak perlu menangani `null`.  
- Tidak memicu exception yang tidak perlu.  

## Guard Clause Pattern
💡 **Menghentikan eksekusi lebih awal daripada membuat banyak if-else bersarang.**  

### Tanpa Guard Clause (Kurang Rapi)
```php
function processOrder($order)
{
    if ($order) {
        if ($order->isPaid()) {
            if ($order->hasStock()) {
                shipOrder($order);
            } else {
                throw new Exception("Stock not available");
            }
        } else {
            throw new Exception("Order not paid");
        }
    } else {
        throw new Exception("Order not found");
    }
}
```

### Dengan Guard Clause (Lebih Rapi)
```php
function processOrder($order)
{
    if (!$order) return Result::failure("Order not found");
    if (!$order->isPaid()) return Result::failure("Order not paid");
    if (!$order->hasStock()) return Result::failure("Stock not available");

    shipOrder($order);
    return Result::success("Order shipped");
}
```
✅ **Keuntungan**:
- **Menghindari nested if yang dalam**.  
- **Lebih mudah dibaca** karena error ditangani lebih awal.  
- **Lebih ringan** dibanding exception.  

## Fallback Value Pattern
💡 **Jika suatu nilai tidak tersedia, gunakan nilai default sebagai fallback.**  

### Contoh
```php
function getDiscount(): float
{
    return getUserDiscount() ?? 0.0; // Jika tidak ada diskon, gunakan 0.0
}
```
✅ **Keuntungan**:
- Menghindari error karena nilai kosong.  
- Lebih fleksibel tanpa harus melempar exception.