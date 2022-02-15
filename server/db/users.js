const config = require('./knexfile').development
const db = require('knex')(config)

function userExists (username) {
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (username) {
  return db('users')
    .select()
    .where('username', username)
    .first()
}

function createUser (user) {
  return db('users')
    .insert(user)
}

module.exports = {
  userExists,
  getUserByName,
  createUser
}