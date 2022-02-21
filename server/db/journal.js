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

function updateJournalEntry (entry, id) {
    return db('Posts')
    .select()
    .where('id', id)
    .update(entry)
}

module.exports = {
    getJournalPosts,
    addJournalEntry,
    getEntryById,
    updateJournalEntry
}