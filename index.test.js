import { capitalize, reverseString } from "./index.js";

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
  