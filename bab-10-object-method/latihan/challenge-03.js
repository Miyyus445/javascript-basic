/* Challenge-03 - Simulasi Rekening Bank */

const rekening = {
    pemilik: "Azmi",
    saldo: 10000000000000000,

    setor(Jumlah){
        this.saldo += Jumlah;
    },

    tarik(Jumlah){
        this.saldo -= Jumlah
    },

    cekSaldo(){
        console.log("=== INFO SALDO ===");
        console.log("Saldo saat ini : ", this.saldo);
        console.log("------------------");
    },
};

rekening.cekSaldo();

rekening.setor(5000000000);
rekening.tarik(300000000);

rekening.cekSaldo();