🧠 Pertanyaan Refleksi

Jawab dengan bahasamu sendiri.

1.  Apa yang dimaksud dengan Scope?
2.  Apa perbedaan Global Scope dan Local Scope?
3.  Apa yang dimaksud dengan Block Scope?
4.  Apa itu Scope Chain?
5.  Apa yang dimaksud dengan Hoisting?
6.  Apa perbedaan hoisting var dengan let dan const?
7.  Apa yang dimaksud dengan Closure?
8.  Mengapa Closure dapat digunakan untuk membuat data privat?
9.  Mengapa dua Closure yang dibuat dari fungsi yang sama dapat memiliki data yang berbeda?
10. Menurutmu, apa manfaat Closure dalam aplikasi nyata?

Jawaban:

1. Scope adalah batasan wilayah di mana sebuah variabel dapat diakses atau dipanggil dalam kode.
2. Global Scope bisa diakses dari mana saja di seluruh file, sedangkan Local Scope cuma bisa diakses dari dalam fungsi tempat ia dibuat.
3. Block Scope adalah wilayah akses variabel yang dibatasi oleh kurung kurawal {} (seperti if atau for), khusus untuk variabel let dan const.
4. Scope Chain adalah proses JavaScript mencari nilai variabel secara bertingkat, mulai dari scope terdalam lalu naik ke scope terluar sampai ketemu.
5. Hoisting adalah perilaku otomatis JavaScript yang "mewadahi" atau menarik deklarasi fungsi dan variabel ke bagian paling atas sebelum kode dijalankan.
6. Jika dipanggil sebelum baris pembuatannya, var bernilai undefined, sedangkan let dan const bakal langsung menghasilkan Error.
7. Closure adalah kemampuan fungsi anak untuk tetap mengingat dan mengakses variabel dari fungsi induknya, meskipun fungsi induk sudah selesai dieksekusi.
8. Karena variabel dikunci di dalam scope fungsi dan tidak bisa diintip atau diubah secara langsung dari luar.
9. Karena setiap kali fungsi induk dipanggil, JavaScript membuat alokasi ruang memori (ransel closure) baru yang terpisah dan independen.
10. Untuk mengamankan data sensitif (seperti saldo bank atau token) dan mengelola status variabel secara rapi tanpa mengotori Global Scope.