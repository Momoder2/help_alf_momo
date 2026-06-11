function findSpaceship(map) {
  if (!map.includes("X")) {
    return "Spaceship lost forever.";
  }

  return [0, 0];
}

module.exports = { findSpaceship };