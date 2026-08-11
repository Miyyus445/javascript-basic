/* Study Case 01 */

// function prosesLogin() {
//   const tokenSesi = "abc123";

//   console.log("Login berhasil");
//   console.log("Token:", tokenSesi);
// }

// prosesLogin();
// console.log(tokenSesi);

// Apa yang terjadi?

// - Output: ReferenceError: tokenSesi is not defined


// Tantangan

// Jelaskan mengapa tokenSesi tidak dapat digunakan dari luar fungsi.  
//  - Karens tokenSesi dibuat dengan function scope, sehingga hanya bisa diakses dari dalam fungsi prosesLogin() saja.

// Kemudian buat variabel namaUser yang dapat digunakan baik di dalam maupun di luar fungsi.

const namaUser = "Budi";

function prosesLogin() {
  const tokenSesi = "abc123";

  console.log("Login berhasil");
  console.log("Token     :", tokenSesi);
  console.log("Nama User :", namaUser);
}

prosesLogin();

// Output:

// Login berhasil
// Token     : abc123
// Nama User : Budi