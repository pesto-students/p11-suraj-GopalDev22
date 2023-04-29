function isStrongPassword(password) {
  //checking for password for atleast 8 characters
  if (password.length < 8) {
    console.log(
      `password length is less than 8. Entered password is ${password}`
    );
    return false;
  }
  //checking for password cotaining password string
  if (password.toLowerCase().includes("password")) {
    console.log(
      `password contains password string. Entered password is ${password}`
    );
    return false;
  }
  //checking for atlease one character of uppercase.
  if (!/[A-Z]/.test(password)) {
    console.log(
      `password doesn't have uppercase. Entered password is ${password}`
    );
    return false;
  }
  console.log(`Entered qualified password. Entered password is ${password}`);
  return true;
}

isStrongPassword("Qwerty");
isStrongPassword("passwordQwerty");
isStrongPassword("qwerty123");
isStrongPassword("Qwerty123");
