const { findSpaceship } = require("../src/helpAlf");

test('empty map returns "Spaceship lost forever."', () => {
  expect(findSpaceship("")).toBe("Spaceship lost forever.");
});

test('map without spaceship returns "Spaceship lost forever."', () => {
  const map =
`..........
..........
..........`;

  expect(findSpaceship(map)).toBe("Spaceship lost forever.");
});