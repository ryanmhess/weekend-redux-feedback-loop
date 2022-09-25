const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

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