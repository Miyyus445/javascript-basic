/* Study Case 2 - Sistem Login & Session */

function buatSession(username) {
  let isLogin = true;

  return {
    cekStatus() {
      console.log(`User: ${username}`);
      console.log(`Status: ${isLogin ? "Login" : "Logout"}\n`);
    },

    login() {
      if (!isLogin) {
        isLogin = true;
        console.log("Login berhasil.\n");
      } else {
        console.log("User sudah dalam keadaan login.\n");
      }
    },

    logout() {
      if (isLogin) {
        isLogin = false;
        console.log("Logout berhasil.\n");
      } else {
        console.log("User sudah logout.\n");
      }
    }
  };
}

const session = buatSession("budi123");

session.cekStatus();
session.logout();
session.cekStatus();

console.log(session.username); 
console.log(session.isLogin); 
console.log("-------------------\n");

const sessionBudi = buatSession("budi123");
const sessionAni = buatSession("ani456");

sessionBudi.logout();

sessionBudi.cekStatus();
sessionAni.cekStatus();