export function capitalize(string) {
  return string.toUpperCase();
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  checkIfNumber(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Can only add numbers");
  },
  add(a, b) {
    this.checkIfNumber(a, b);
    return a + b;
  },
  subtract(a, b) {
    this.checkIfNumber(a, b);
    return a - b;
  },
  divide(a, b) {
    this.checkIfNumber(a, b);
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
  multiply(a, b) {
    this.checkIfNumber(a, b);
    return a * b;
  },
};

export function caesarCipher(string, shiftFactor) {
  return string
    .split("")
    .map((char) => {
      if (!isLetter(char)) return char;
      return cipher(char, shiftFactor);
    })
    .join("");
}
function isLetter(letter) {
  return letter.toUpperCase() != letter.toLowerCase();
}
function cipher(char, shiftFactor) {
  let charPos = char.charCodeAt() - "a".charCodeAt();
  charPos = (charPos + shiftFactor) % 26;
  return String.fromCharCode(charPos + "a".charCodeAt());
}
