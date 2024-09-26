const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copy = document.querySelector("#copy-icon");

const length = 12;
// let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const uppercase = "ABCDEGHIKLMNOPQRSTVXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "!@#$%^&*({)_+}";

let allchars = uppercase + lowercase + number + symbol;
function createPassword() {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }

  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

button.addEventListener("click", createPassword);
copy.addEventListener("click", copyPassword);
