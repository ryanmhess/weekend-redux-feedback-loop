const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    console.log('In GET route');
    let sqlQuery = `
        SELECT * FROM "feedback"
            ORDER BY "id" DESC
    `
    pool.query(sqlQuery)
        .then((dbRes) => {
            let feedbackRows = dbRes.rows;
            res.send(feedbackRows);
        }).catch((dbErr) => {
            console.log('The db query in GET /feedback was unsuccessful:', dbErr);
            res.sendStatus(500);
        });
});

router.post('/', async (req, res) => {
    console.log('In feedback.router POST route.', req.body);
    let feedback = req.body;
    let queryText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
            VALUES
            ($1, $2, $3, $4);
    `;
    pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then((postRes) => {
            console.log('The POST /feedback was successful');
            res.sendStatus(201);
        }).catch((postErr) => {
            console.log('The POST /feedback was unsuccessful:', postErr);
            res.sendStatus(500);
        })
});

module.exports = router;