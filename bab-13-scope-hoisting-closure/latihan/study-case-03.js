/* Study Case 03 */

function buatDompet(saldoAwal) {
  let saldo = saldoAwal;
  return {
    cekSaldo() {
      console.log("Saldo Awal:", saldo);
    },

    tambahSaldo(jumlahSetor) {

      if (jumlahSetor > 0) {
        saldo += jumlahSetor;
        console.log("Setor berhasil! Saldo sekarang:", saldo);
      } else {
        console.log("Jumlah setor harus lebih dari 0!");
      }
    },

    kurangiSaldo(jumlahTarik) {
      if (jumlahTarik <= saldo) {
        saldo -= jumlahTarik;
        console.log("Penarikan berhasil! Saldo tersisa:", saldo);
      } else {
        console.log("Saldo tidak cukup!");
      }
    }
  };
}

const dompet = buatDompet(50000); // Saldo awal 50000

dompet.cekSaldo();
dompet.tambahSaldo(25000);
dompet.kurangiSaldo(10000);
dompet.cekSaldo();