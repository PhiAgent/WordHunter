const {Pool} = require('pg');
const connectionConfig = require('./config');
const dictionary = require('../../src/utils/dictionary');

const pool = new Pool(connectionConfig);



/**
   * Populates the words table
   * @param {object} dictionary - document containing the words
   * @returns {void} - populates database in background. Returns nothing
  */
const addWords = dictionary => {
  let words = '';
  for (let word in dictionary) {
    words += `('${word}'),`
  };
  let query = `INSERT INTO words(word) VALUES ${words.slice(0, -1)}`;
  pool
    .connect()
    .then(client =>
      client
        .query(query)
        .then(complete => client.release())
        .catch(err => {
          client.release();
        })
    )
};
// addWords(dictionary);

/**
   * Gets top-scoring players for particular set of letters
   * @param {string} letters - letters that'll be used to fetch the top scoring players
   * @returns {Object} - returns an object with the top 10 players of that letter set
  */
const getLeaders = (word, cb) => {
  const query = 'SELECT username, score FROM leaderboard WHERE word = $1 LIMIT 10';
  pool
    .connect()
    .then(client =>
      client
        .query(query, [word])
        .then(leaders => {
          client.release();
          let ranking = leaders.rows.sort((leader1, leader2) => leader1.score > leader2.score ? -1 : 1);
          cb(null, ranking);
        })
        .catch(err => {
          client.release();
          cb(err);
        })
      )
};


/**
   * Checks to see if player has made it into top 10 and updates accordingly
   * @param {string} letters - letters that'll be used to fetch the top scoring players
   * @param {string} username - used to check if username is already in top 10
   * @returns {array} - returns an array with the current top 10 players of that letter set
   */
const updateScore = (word, username, newScore, cb) => {
  const query = 'SELECT username, score, word_id FROM leaderboard WHERE word = $1 LIMIT 10';
  pool
    .connect()
    .then(client =>
      client
        .query(query, [word])
        .then(leaders => {
          let oldScore, id = leaders.rows[0]?.word_id;
          const userIsLeader = leaders.rows.some(leader => {
            if (leader.username === username){
              oldScore = leader.score;
              return true;
            }
            return false;
          });
          let ranking = leaders.rows.sort((leader1, leader2) => leader1.score > leader2.score ? -1 : 1);
          if(userIsLeader){
            if(newScore > oldScore){
              let updateQuery = 'UPDATE leaderboard SET score = $1 WHERE (username = $2 AND word = $3)';
              let updatedLeaders = leaders.rows.map(leader => leader.username === username ? {username, score: newScore}: leader);
              let updatedRanking = updatedLeaders.sort((leader1, leader2) => leader1.score > leader2.score ? -1 : 1);
              cb(null, updatedRanking);
              client
                .query(updateQuery, [newScore, username, word])
                .then(updated => {
                  client.release();
                })
                .catch(err => {
                  client.release();
                  cb(err);
                })
            } else {
              client.release();
              cb(null, ranking);
            }
          } else {
            if(leaders.rows.length < 10){
              let insertQuery = id ?
                  'INSERT INTO leaderboard(word_id, word, username, score) VALUES ($1, $2, $3, $4)' :
                  'INSERT INTO leaderboard(word_id, word, username, score) VALUES ((SELECT id FROM words WHERE word = $1), $2, $3, $4)';
              let params = id ?
                  [id, word, username, newScore] : [word, word, username, newScore] ;
              let newLeaders = [...leaders.rows, {username, score: newScore}];
              cb(null, newLeaders);
              client
                .query(insertQuery, params)
                .then(updated => {
                  client.release();
                })
                .catch(err => {
                  client.release();
                  cb(err);
                })
            } else {
              if(newScore > ranking.at(-1).score){
                let subbed = ranking.at(-1).username;
                let updateQuery = 'UPDATE leaderboard SET score = $1, username = $2 WHERE (username = $3 AND word = $4)';
                let params = [newScore, username, subbed, word];
                let updatedLeaders = leaders.rows.map(leader => leader.username === subbed ? { username, score: newScore } : leader);
                let updatedRanking = updatedLeaders.sort((leader1, leader2) => leader1.score > leader2.score ? -1 : 1);
                cb(null, updatedRanking);
                client
                  .query(updateQuery, params)
                  .then(updated => {
                    client.release();
                  })
                  .catch(err => {
                    client.release();
                    cb(err)
                  })
              } else {
                client.release();
                cb(null, ranking);
              }
            }
          }
        })
        .catch(err => {
          client.release();
          cb(err);
        })
      )
};


module.exports = {getLeaders, updateScore};