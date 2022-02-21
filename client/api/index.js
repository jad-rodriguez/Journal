import request from 'superagent'


export function getQuotes () {
    return request
    .get('https://api.quotable.io/random')
    .then(response => {
        return response.body
    })
}

export function fetchAllJournalPosts () {
    return request
        .get('/api/v1/journal')
        .then(response => {
            return response.body
        })
}

export function saveJournalEntryAPI(newEntryObj, token) {
    return request.post('/api/v1/journal')
    .set('authorization', `Bearer ${token}`)
    .send(newEntryObj)
    .then(response => {
        return response.body
    })
    .catch(logError)
}

export function patchJournalEntry(entry) {
    return request.patch(`/api/v1/journal/${entry.id}`)
    .send(entry)
    .then(res => {
      return res.body
    })
    .catch(logError)
}

export async function addUser (user) {
    return request.post('api/v1/users')
      .send(user)
      .catch(logError)
}

function logError (err) {
    if (err.message === 'Forbidden') {
      throw new Error('Only the user who wrote this journal entry may update and delete it')
    } else {
      // eslint-disable-next-line no-console
      console.error(
        'Error consuming the API (in client/api.js):',
        err.message
      )
      throw err
    }
}

