const express = require('express')
const checkJwt = require('../auth0')

const router = express.Router()

const db = require('../db/journal')

router.get('/', (req, res) => {
    db.getJournalPosts()
    .then(posts => {
        res.json(posts)
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post('/', checkJwt, (req, res) => {
    const entry  = req.body
    console.log(entry)
    const auth0Id = req.user?.sub
    const newEntry = {
        added_by_user: auth0Id,
        created: entry.created,
        title: entry.title,
        paragraphs: entry.paragraphs,
    }
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