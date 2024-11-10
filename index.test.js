import { capitalize, reverseString, calculator } from "./index.js";

// capitalize tests
it("capitalize string", () => {
  expect(capitalize("abc")).toBe("ABC");
});
it("capitalize second string", () => {
  expect(capitalize("def")).toBe("DEF");
});
it("capitalize string with space", () => {
  expect(capitalize("string with space")).toBe("STRING WITH SPACE");
});
it("capitalize mixed upper/lower", () => {
  expect(capitalize("UpPeRLoWeR")).toBe("UPPERLOWER");
});
it("capitalize with numbers", () => {
  expect(capitalize("abc123")).toBe("ABC123");
});
it("capitalize with special characters", () => {
  expect(capitalize("abc#@!")).toBe("ABC#@!");
});

// reverseString tests
it("reverse string", () => {
  expect(reverseString("abc")).toBe("cba");
});
it("reverse another string", () => {
  expect(reverseString("def")).toBe("fed");
});
it("reverse string with space", () => {
  expect(reverseString("a b c")).toBe("c b a");
});
it("reverse string with numbers", () => {
  expect(reverseString("abc123")).toBe("321cba");
});
it("reverse string with special characters", () => {
  expect(reverseString("!@#")).toBe("#@!");
});

// calculator tests
it("calculator addition", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});
it("calculator addition 2", () => {
  expect(calculator.add(2, 2)).toEqual(4);
});
it("calculator addition no number input", () => {
  expect(() => {
    calculator.add("a", "$");
  }).toThrow(/number/);
});
it("calculator subtracts", () => {
  expect(calculator.subtract(2, 2)).toEqual(0);
});
it("calculator subtract no number input", () => {
  expect(() => {
    calculator.subtract("a", "$");
  }).toThrow(/number/);
});
it("calculator subtracts negatives", () => {
  expect(calculator.subtract(2, -4)).toEqual(6);
});
it("calculator divides", () => {
  expect(calculator.divide(4, 2)).toEqual(2);
});
it("calculator divide no number input", () => {
  expect(() => {
    calculator.divide("a", "$");
  }).toThrow(/number/);
});
it("calculator divide by 0", () => {
  expect(() => {
    calculator.divide(4, 0);
  }).toThrow(/zero/);
});
it("calculator multiplies", () => {
  expect(calculator.multiply(4, 2)).toEqual(8);
});
it("calculator multiply non numbers", () => {
  expect(() => {
    calculator.multiply("a", "$");
  }).toThrow(/number/);
});
