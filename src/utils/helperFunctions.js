const words =  require('./words');
const candidates = require('./dictionary');
const { findScore } = require('./scoreGenerator');


// Shuffles a given set of letters
const shuffle = str => {
  let arr = str.split('');
  let currentIndex = arr.length - 1, randomIndex;

  while (currentIndex >= 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);

    [arr[currentIndex], arr[randomIndex]] =
    [arr[randomIndex], arr[currentIndex]];

    currentIndex -= 1;
  }

  return arr.join('');
};

// Picks a random word
const getRandomWord = () => {
  let count = [];

  randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex];
}

// Converts seconds into minutes
const secondsToMinutes = seconds => {
  if (!seconds || typeof seconds === 'string') return '0:00';

  const minutes = seconds > 60 ? Math.floor(seconds / 60) : 0;
  const secs = seconds - 60 * minutes;

  return `${minutes}:${secs > 9 ? secs : `0${secs}`}`;
}

// Checks if user has made it into top 10
const updateLeaders = (leaders, score, username) => {//It's important that leaders are sorted by score
  if(!score) return false;

  let oldScore, userIndex;
  const userIsLeader = leaders.some((leader, i) => {
    if (leader.username === username) {
      oldScore = leader.score;
      userIndex = i;
      return true;
    }
    return false;
  });

  if (userIsLeader) {
    if (score > oldScore) {//replace score
      leaders[userIndex]['score'] = score;
      return true;
    } else {
      return false;
    }
  } else {
    if (leaders.length < 10) {//add user
      leaders.push({ username, score });
      return true;
    } else {
      const lowestScore = leaders[leaders.length - 1]['score'];

      if (score > lowestScore) {
        leaders.pop();
        leaders.push({ username, score });
        return true;
      } else {
        return false;
      }
    }
  }
};

const continousTense = (parentStr, str) => {
  const isContinuous = str.slice(-3) === 'ing';

  return isContinuous && (str.slice(0, -3) in candidates[parentStr]);
}

const findSolutionWords = str => {
  const words = [];

  for(let key in candidates[str]) {
    words.push(key);
  };

  words.sort((str1, str2) => findScore(str1) > findScore(str2) ? -1 : 1);

  return words.slice(0, 50);
}


module.exports = { shuffle, getRandomWord, secondsToMinutes, updateLeaders, continousTense, findSolutionWords};