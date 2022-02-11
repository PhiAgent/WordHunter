const candidates = require('./dictionary');

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

const shuffle = str => {
  let arr = str.split('');
  let currentIndex = arr.length - 1, randomIndex;

  while (currentIndex >= 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    currentIndex -= 1;
  }

  return arr.join('');
};

const words = [
  'ambiences', 'amazement', 'abolishes', 'appliance', 'boomerang',
  'brokerage', 'budgetary', 'beverages', 'comebacks', 'chimaeras',
  'cedarwood', 'correlate', 'douchebag', 'diplomats', 'donations',
  'devaluing', 'expanding', 'evaluator', 'entourage', 'encourage',
  'floorings', 'filenames', 'firewalls', 'foretaste', 'generates',
  'gentleman', 'graduates', 'gameshows', 'homepages', 'hermitage',
  'housemate', 'hampering', 'itinerary', 'impetuses', 'immatures',
  'ignorance', 'jalapenos', 'juveniles', 'jackboots', 'junctures',
  'kingmaker', 'kerosenes', 'appeasing', 'averaging', 'labouring',
  'loitering', 'loosening', 'lifesaver', 'middleman', 'mercenary',
  'metaphase', 'maddening', 'numerates', 'negations', 'nursemaid',
  'nefarious', 'operating', 'operation', 'overpedal', 'operators',
  'pregaming', 'pilferage', 'premature', 'probingly', 'quiltings',
  'quietudes', 'repulsive', 'regularly', 'reduction', 'remarking',
  'stumbling', 'shoelaces', 'stonewall', 'scenarios', 'trademark',
  'tenacious', 'tempering', 'threading', 'utterance', 'underages',
  'unrelated', 'untenable', 'verandahs', 'venerator', 'venturing',
  'veeringly', 'wingbeats', 'whistling', 'wondering', 'winemaker',
  'xanthones', 'xenograft', 'juxtapose', 'complexes', 'yellowing',
  'yeastlike', 'yesterday', 'yoghourts', 'zestfully', 'zoophytes', 'humanized', 'apoenzyme'
];

const getRandomWord = () => {
  let count = [];
  randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex];
}

module.exports = { findScore, scoreSheet, shuffle, getRandomWord};