const express = require('express')

const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
    db.getJournalPosts()
    .then(posts => {
        res.json(posts)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

module.exports = router