
//ENVIRONMENT
const path = require('path');
require("dotenv").config({path: path.join(__dirname,"./config.env")});

// SERVER
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8080;

// DATABASE
const { getLeaders, updateScore } = require('../database/psql/db');

// MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));


// ROUTES

// Get the highest ranking users
app.get('/leaders', (req, res) => {
  let word = req.query.word;
  const callback = (err, leaders) =>
                    err ?
                    res.status(400).send(err) :
                    res.status(200).send(leaders);

  word && getLeaders(word, callback);
});

// Update database with score
app.post('/leaders', (req, res) => {
  let word = req.body.word,
      username = req.body.username,
      score = req.body.score;

  const callback = (err, leaders) =>
                    err ?
                    res.status(400) :
                    res.status(200);

  // Expensive API call so contingencies must be met beforehand
  word && username && score && updateScore(word, username, score, callback);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
})

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

