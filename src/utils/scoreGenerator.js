
const scoreSheet = {
  A: 6,
  B: 9,
  C: 9,
  D: 8,
  E: 6,
  F: 10,
  G: 8,
  H: 10,
  I: 6,
  J: 20,
  K: 18,
  L: 6,
  M: 9,
  N: 6,
  O: 6,
  P: 9,
  Q: 22,
  R: 6,
  S: 6,
  T: 6,
  U: 6,
  V: 6,
  W: 4,
  X: 20,
  Y: 10,
  Z: 22
};

const bonuses = {
  6: 50,
  7: 100,
  8: 150,
  9: 200
}

const findScore = word => {
  let score = 0,
    bonus = word.length > 5 ?
      bonuses[word.length] : 0;

  for (let letter of word) {
    score += scoreSheet[letter.toUpperCase()];
  }
  return score + bonus;
};

module.exports = {findScore, scoreSheet};