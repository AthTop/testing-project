import { capitalize } from "./index.js";

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
