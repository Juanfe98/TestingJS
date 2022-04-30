const {getRandomCity} = require("../index");

it("Should return a string", () => {
  const result = getRandomCity();
  expect(typeof(result)).toBe('string');
})