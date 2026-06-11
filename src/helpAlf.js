function findSpaceship(map) {
  if (!map.includes("X")) {
    return "Spaceship lost forever.";
  }

  const x = map.indexOf("X");

  return [x, 0];
}

module.exports = { findSpaceship };