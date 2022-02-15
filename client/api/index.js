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

export function saveJournalEntryAPI(newEntryObj) {
    return request.post('/api/v1/journal')
    .send(newEntryObj)
    .then(response => {
        return response.body
    })
}