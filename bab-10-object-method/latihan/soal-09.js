/* Soal-09 */

const akunBank = {
    pemilik: "Azmi",
    saldo: 10000000000000000,

    setor(jumlah){
    this.saldo += jumlah;
    }
};

console.log("Saldo Awal     : US$",akunBank.saldo);
akunBank.setor(5000000000);
console.log("Saldo Sekarang : US$",akunBank.saldo);