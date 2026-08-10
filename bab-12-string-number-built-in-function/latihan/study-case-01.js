/* Study Case 1 - Sistem Login */

const username = "   BUDI123   ";

const usernameTrimmed = username.trim();
const usernameLowerCase = usernameTrimmed.toLowerCase();
const checkUsername = (usernameLowerCase) => {
  if (usernameLowerCase.length < 5) {
    console.log("Username terlalu pendek");
  } else {
    console.log("Username valid");
  }
};

console.log(`Username: ${usernameLowerCase}`);
checkUsername(usernameLowerCase);