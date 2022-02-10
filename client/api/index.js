import request from 'superagent'

export function getQuotes () {
    return request
    .get('https://api.quotable.io/random')
    .then(response => {
        return response.body
    })
}

export function getAllJournalPosts () {
    return request
    .get('/api/v1/journal')
    .then(res => res.body)
}