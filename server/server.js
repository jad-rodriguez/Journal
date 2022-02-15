const express = require('express')
const path = require('path')

const journalRoutes = require('./routes/journal')
const server = express()

server.use(express.static(path.join(__dirname, 'public')))
server.use(express.json())

server.use('/api/v1/journal', journalRoutes)

server.get('*', (req, res) => {
    res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
