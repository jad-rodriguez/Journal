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
    return (dispatch) => {
        return request
            .get('/api/v1/journal')
            .then(res => {
                dispatch(receiveEntries(res.body))
            })
   
        }
   
}