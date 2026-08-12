/* Final Challenge - Sistem Akun Pengguna */

function buatAkun(nama, saldoAwal) {
  let saldo = saldoAwal;

  return {
    lihatProfil() {
      console.log("===== PROFIL =====");
      console.log(`Nama: ${nama}\n`);
    },

    cekSaldo() {
      console.log(`Saldo: Rp${saldo}\n`);
    },

    tambahSaldo(jumlah) {
      saldo += jumlah;
      console.log("Saldo berhasil ditambahkan.");
      console.log(`Saldo sekarang: Rp${saldo}\n`);
    },

    kurangiSaldo(jumlah) {
      if (jumlah <= saldo) {
        saldo -= jumlah;
        console.log("Saldo berhasil dikurangi.");
        console.log(`Saldo sekarang: Rp${saldo}\n`); 
      } else {
        console.log("Saldo tidak mencukupi.\n");
      }
    }
  };
}

const akunBudi = buatAkun("Budi", 100000);
const akunAni = buatAkun("Ani", 500000);

// === Akun Budi ===
akunBudi.lihatProfil();
akunBudi.cekSaldo();
akunBudi.tambahSaldo(50000);
akunBudi.kurangiSaldo(25000);
akunBudi.cekSaldo();

console.log("-------------------\n");

// === Akun Ani ===
akunAni.lihatProfil();
akunAni.cekSaldo();
akunAni.tambahSaldo(100000);
akunAni.kurangiSaldo(700000);