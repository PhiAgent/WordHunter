const h2 = require('h2');
const fs = require('fs');

const db = h2.openSync(":mem:test");/*new h2.Database({
    url: 'jdbc:h2:mem:test;DB_CLOSE_DELAY=-1', // In-memory H2 database (lives as long as the JVM session)
    user: 'sa',
    password: ''
});*/

function queryDatabase(query, params){
    return new Promise((resolve, reject) => {
        db.query(query, params, err => {
            if(err) reject(err);
            else resolve(result);
        });
    });
}

db.connect(err => {
    if(err) {
        console.error('Error connecting to H2 database:', err);
        process.exit(1);
    }
    console.log('Connected to H2 database in embedded mode!');

    const schema = fs.readFileSync('schema.sql', 'utf-8');

    db.query(schema, err => {
        if(err) console.error("Error initializing database: ", err);
        else console.log("Database schema initialized successfully!");
    });
});

const addWords = () => {
    let words = '';
    for (let word in dictionary) {
        words += `('${word}'),`
    };
    let query = `INSERT INTO words(word) VALUES ${words.slice(0, -1)}`;

    queryDatabase(query);
}

const getLeaders = (word, cb) => {
    const query = 'SELECT username, score FROM leaderboard WHERE word = $1 LIMIT 10';

    queryDatabase(query, [word])
    .then(leaders => {
        let ranking = leaders.rows.sort((leader1, leader2) => 
            leader1.score > leader2.score ? -1 : 1
        );
        cb(null, ranking);
    })
    .catch(err => {
        cb(err);
    })
}