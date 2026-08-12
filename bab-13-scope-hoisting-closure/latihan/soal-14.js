/* Soal-14 */

function buatCounter() {
    let hitungan = 0;

    return function () {
        hitungan++;
        console.log("Jumlah Klik:", hitungan);
    };
}

const counter = buatCounter();

counter();
counter();
counter();
counter();