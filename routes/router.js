const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

router.use(express.static('public'))

const countryRoutes = require('./api/countryRoutes')

router.use('/countries', countryRoutes)

router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/countries/countries'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Countries And Their Info',
                name: 'Countries And Their Info',
                data
            })
        })
})

router.get('*', (req, res) => {
    if (req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.render('pages/404', {
            title:'404 Error - The Countries Are On Vacation, Come Back Later Please',
            name: '404 Error - The Countries Are On Vacation, Come Back Later Please'
        })
    }
})

module.exports = router