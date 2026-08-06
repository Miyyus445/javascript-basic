/* Soal-11 */

const game = {
    pemain: "Leon",
    nyawa: 100,

    terkenaSerangan(damage) {
        this.nyawa -= damage;
        console.log(this.pemain + " terkena serangan! Damage musuh:", damage);
    },
};

console.log("Nyawa Awal     :", game.nyawa);
game.terkenaSerangan(35);
console.log("Nyawa Sekarang :", game.nyawa);