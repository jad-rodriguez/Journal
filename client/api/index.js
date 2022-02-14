import request from 'superagent'
import { receiveEntries } from '../actions'

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
    .send(response => {
        return response.body
    })
}