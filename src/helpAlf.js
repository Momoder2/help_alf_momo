function findSpaceship(map) {
  if (!map.includes("X")) {
    return "Spaceship lost forever.";
  }

  const rows = map.split("\n");
  const rowFromTop = rows.findIndex(row => row.includes("X"));
  const x = rows[rowFromTop].indexOf("X");
  const y = rows.length - 1 - rowFromTop;

  return [x, y];
}

module.exports = { findSpaceship };