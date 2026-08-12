/* Study Case 03 - Sistem Saldo Digital */

function buatDompet(saldoAwal) {
  let saldo = saldoAwal;

  return {
    cekSaldo() {
      console.log("Saldo:", saldo);
    },

    tambahSaldo(jumlahSetor) {
      if (jumlahSetor > 0) {
        saldo += jumlahSetor;
        console.log("Saldo berhasil ditambah:", saldo); 
      } else {
        console.log("Jumlah setor harus lebih dari 0!");
      }
    },

    kurangiSaldo(jumlahTarik) {
      if (jumlahTarik <= saldo) {
        saldo -= jumlahTarik;
        console.log("Saldo berhasil dikurangi:", saldo); 
      } else {
        console.log("Saldo tidak cukup!");
      }
    }
  };
}

const dompet = buatDompet(50000);

dompet.cekSaldo();
dompet.tambahSaldo(25000);
dompet.kurangiSaldo(10000);
dompet.cekSaldo();

console.log(dompet.saldo); 