---
title: Mengenal RFC 5424 - Panduan untuk Facility dan Severity dalam Syslog
pubDate: 2023-05-27
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

Syslog adalah protokol standar yang digunakan untuk mengirim, mengumpulkan, dan mengelola pesan log pada sistem komputer. Pesan log ini berisi informasi penting tentang kejadian dan keadaan sistem yang dapat membantu dalam pemantauan, analisis, dan pemecahan masalah.

Salah satu aspek penting dalam protokol syslog adalah atribut "*Facility*" dan "*Severity*" yang digunakan untuk memberikan informasi tentang sumber pesan dan seberapa penting pesan tersebut. Meskipun nilainya tidak normatif, namun *Facility* dan *Severity* sering digunakan dalam praktik syslog. RFC 5424 adalah dokumen yang merinci nilai-nilai ini untuk tujuan informasi.

*Facility* adalah kode numerik yang menentukan sumber pesan log. RFC 5424 memperkenalkan 24 nilai *Facility* yang berbeda. Nilai-nilai ini berkisar antara 0 hingga 23 dan memiliki deskripsi yang spesifik. Berikut adalah tabel yang menggambarkan nilai-nilai *Facility* beserta deskripsinya:

```
          Numerical             Facility
             Code

              0             kernel messages
              1             user-level messages
              2             mail system
              3             system daemons
              4             security/authorization messages
              5             messages generated internally by syslogd
              6             line printer subsystem
              7             network news subsystem
              8             UUCP subsystem
              9             clock daemon
             10             security/authorization messages
             11             FTP daemon
             12             NTP subsystem
             13             log audit
             14             log alert
             15             clock daemon (note 2)
             16             local use 0  (local0)
             17             local use 1  (local1)
             18             local use 2  (local2)
             19             local use 3  (local3)
             20             local use 4  (local4)
             21             local use 5  (local5)
             22             local use 6  (local6)
             23             local use 7  (local7)

              Table 1.  Syslog Message Facilities
```

Selanjutnya, *Severity* adalah indikator tingkat kepentingan pesan log. RFC 5424 juga menyediakan 8 nilai Severity yang berbeda, mulai dari 0 hingga 7. Setiap nilai *Severity* memiliki deskripsi yang menjelaskan tingkat kepentingan pesan tersebut. Berikut adalah tabel yang menggambarkan nilai-nilai *Severity* beserta deskripsinya:

```
           Numerical         Severity
             Code

              0       Emergency: system is unusable
              1       Alert: action must be taken immediately
              2       Critical: critical conditions
              3       Error: error conditions
              4       Warning: warning conditions
              5       Notice: normal but significant condition
              6       Informational: informational messages
              7       Debug: debug-level messages

              Table 2. Syslog Message Severities
```

Dalam protokol syslog, nilai *Priority* sebuah pesan log dihitung dengan mengalikan nilai *Facility* dengan 8 terlebih dahulu, kemudian menambahkannya dengan nilai numerik *Severity*. 

Sebagai contoh:
- sebuah pesan kernel (Facility=0) dengan *Severity Emergency* (Severity=0) akan memiliki nilai Prioritas sebesar 0
- sementara pesan "local use 4" (Facility=20) dengan *Severity Notice* (Severity=5) akan memiliki nilai Prioritas sebesar 165

Dalam PRI (prioritas) sebuah pesan syslog, nilai-nilai ini akan ditempatkan di antara tanda kurung sudut sebagai <0> dan <165>. Hanya pada nilai Prioritas "0" yang diikuti oleh tanda "<" sebelumnya. Selain itu, tidak boleh menggunakan angka "0" di depan.