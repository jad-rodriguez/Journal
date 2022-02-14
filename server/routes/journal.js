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

router.post('/', (req, res) => {
    const newEntry = req.body
    db.addJournalEntry(newEntry)
    .then(entryIdArr => {
        const newId = entryIdArr[0]
        db.getEntryById(newId)
        .then(returnEntry => {
            res.json(returnEntry)
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
    })
})

module.exports = router