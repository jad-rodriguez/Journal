import request from 'superagent'

export function getQuotes () {
    return request
    .get('https://api.quotable.io/random')
    .then(response => {
        return response.body
    })
}