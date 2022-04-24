const cloneArray = require("./cloneArray");

test("clone array", () => {
  const array = [2, 3, 4];
  expect(cloneArray(array)).not.toBe(array);
  expect(cloneArray(array)).toEqual(array);
});
