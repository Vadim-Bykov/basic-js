const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    message = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let code = [];
    let j = 0;
    if (!this.value)
      message = message.split("").reverse();
    for (let i = 0; i < message.length; i++) {
      if (letterArray.includes(message[i])) {
        let index = ((letterArray.indexOf(message[i]) + letterArray.indexOf(keyUp[j])) % 26);
        let res = letterArray[index];
        code.push(res);
        j++;
        if (j == keyUp.length)
          j = 0;
      } else
        code.push(message[i]);
    }
    return code.join("");
  }

  decrypt(message, key) {
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    message = message.toUpperCase();
    let code = [];
    let keyUp = key.toUpperCase();
    let j = 0;
    if (!this.value)
      message = message.split("").reverse();

    for (let i = 0; i < message.length; i++) {
      if (letterArray.includes(message[i])) {
        let index = (((letterArray.indexOf(message[i]) - letterArray.indexOf(keyUp[j])) + 26) % 26);
        let res = letterArray[index];
        code.push(res);
        j++;
        if (j == keyUp.length)
          j = 0;
      } else
        code.push(message[i]);
    }
    return code.join("");
  }
  constructor(value = true) {
    this.value = value;
    return this.value;
  }
}

module.exports = VigenereCipheringMachine;