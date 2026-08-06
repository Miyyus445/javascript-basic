/* Challenge-02 - Sistem Inventaris */

const produk = {
    nama: "Botol",
    harga: 25000,
    stok: 30,

    tambahkanStok(Jumlah){
        this.stok += Jumlah;
    },

    kurangiStok(Jumlah){
        this.stok -= Jumlah;
    },

    tampilkanInfo(){
        console.log("=== INFO PRODUK ===");
        console.log("Nama Produk :", this.nama);
        console.log("Harga       : Rp", this.harga);
        console.log("Stok Tersisa:", this.stok);
        console.log("-------------------");
    },
};

produk.tampilkanInfo();

produk.tambahkanStok(6);
produk.kurangiStok(10);

produk.tampilkanInfo();