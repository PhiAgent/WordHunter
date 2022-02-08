DROP DATABASE IF EXISTS word_game;

CREATE DATABASE word_game;

\connect word_game;

CREATE TABLE words (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  word CHARACTER VARYING UNIQUE,
  PRIMARY KEY(id)
);

CREATE TABLE leaderboard (
  id INTEGER GENERATED ALWAYS AS IDENTITY,
  word_id INTEGER NOT NULL,
  word CHARACTER VARYING NOT NULL,
  username VARCHAR(255) NOT NULL,
  score INTEGER DEFAULT 0,
  PRIMARY KEY(id),
  CONSTRAINT fk_word
    FOREIGN KEY(word_id)
      REFERENCES words(id)
      ON DELETE CASCADE
);

CREATE INDEX ON leaderboard(word);

-- INSERT INTO words(word)
-- VALUES('ambiences'),
--       ('amazement');

-- INSERT INTO leaderboard(word_id, word, username, score)
-- VALUES(1,'ambiences','PhiAgent',74),
--       (2,'amazement','PhiAgent',83);