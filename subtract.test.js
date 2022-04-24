const { test } = require("@jest/globals");
const subtract = require("./subtract");

test("subtract numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});
