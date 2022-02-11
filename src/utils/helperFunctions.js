const words =  require('./words');


// Shuffles a given set of letters
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

// Picks a random word
const getRandomWord = () => {
  let count = [];
  randomIndex = Math.floor(Math.random() * words.length)
  return words[randomIndex];
}

// Converts seconds into minutes
const secondsToMinutes = seconds => {
  if (!seconds || typeof seconds === 'string') return '0:00';
  const minutes = seconds > 60 ? Math.floor(seconds / 60) : 0;
  const secs = seconds - 60 * minutes;
  return `${minutes}:${secs > 9 ? secs : `0${secs}`}`;
}

module.exports = { shuffle, getRandomWord, secondsToMinutes};