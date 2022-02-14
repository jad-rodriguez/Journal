const config = require('./knexfile').development
const db = require('knex')(config)

function getJournalPosts () {
    return db('Posts')
    .select()
}

function addJournalEntry (newEntry) {
    return db('Posts')
    .insert(newEntry)
}

function getEntryById (newId) {
    return db('Posts')
    .select()
    .where('id', newId)
}

module.exports = {
    getJournalPosts,
    addJournalEntry,
    getEntryById
}