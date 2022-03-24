const express = require('express')
const server = express()
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

server.set('view engine', 'ejs')

server.use('/', router)

server.listen(PORT, () => {
    console.log(`The World version ${PORT} is open for travel...`)
})