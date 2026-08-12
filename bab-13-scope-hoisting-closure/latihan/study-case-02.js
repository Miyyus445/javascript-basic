/* Study Case 02 - Sistem Rekening Bank */

function buatRekening(saldoAwal) {
  let saldo = saldoAwal;
  return {
    cekSaldo() {
      console.log("Saldo Awal:", saldo);
    },

    setor(jumlahSetor) {

      if (jumlahSetor > 0) {
        saldo += jumlahSetor;
        console.log("Setor berhasil! Saldo sekarang:", saldo);
      } else {
        console.log("Jumlah setor harus lebih dari 0!");
      }
    },

    tarik(jumlahTarik) {
      if (jumlahTarik <= saldo) {
        saldo -= jumlahTarik;
        console.log("Penarikan berhasil! Saldo tersisa:", saldo);
      } else {
        console.log("Saldo tidak cukup!");
      }
    }
  };
}

const rekening = buatRekening(100000); // Saldo awal 100000

rekening.cekSaldo();       // Output: Saldo Awal: 100000
rekening.setor(50000);     // Output: Setor berhasil! Saldo sekarang: 150000
rekening.tarik(30000);     // Output: Penarikan berhasil! Saldo tersisa: 120000