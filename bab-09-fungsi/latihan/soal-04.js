/* Soal-04 */

function hitungDiskon (harga, diskon = 10) {
    console.log(harga);
    console.log(harga - (harga * diskon / 100));
}

hitungDiskon (100000);
hitungDiskon (100000, 25)