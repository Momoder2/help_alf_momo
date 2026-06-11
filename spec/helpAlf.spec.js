const { findSpaceship } = require("../src/helpAlf");

test('empty map returns "Spaceship lost forever."', () => {
  expect(findSpaceship("")).toBe("Spaceship lost forever.");
});