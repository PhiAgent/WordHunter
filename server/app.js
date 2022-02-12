
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
  const cb = (err, leaders) =>
                err ?
                res.status(400).send(err) :
                res.status(200).send(leaders);
  word && getLeaders(word, cb);
});

// Update database with score
app.post('/leaders', (req, res) => {
  let word = req.body.word,
      username = req.body.username,
      score = req.body.score;

  const cb = (err, leaders) =>
              err ? res.status(400) : res.status(200);

  word && username && score && updateScore(word, username, score, cb);
});


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

