const express = require('express')
const router = express.Router()
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))

// All Countries
router.get('/', (req, res) => {
    const URL = 'https://api.sampleapis.com/countries/countries'
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            res.render('pages/countries', {
                title: 'A List Of All Countries',
                name: 'A List Of All Countries',
                data
            })
        })
})

// Single Countries
router.get('/:id', (req, res) => {
    const id = req.params.id
    const URL = `https://api.sampleapis.com/countries/countries/${id}`
    fetch(URL)
        .then(res => res.json())
        .then(data => {
            if (Object.keys(data).length >= 1) {
                res.render('pages/single-country', {
                    title: `${data.name}`,
                    name: `${data.name}`,
                    data
                })
            } else {
                res.render('pages/404', {
                    title: '404 Error',
                    name: '404 Error'
                })
            }
        })
        .catch(error => {
            console.log('ERROR', error)
        })
})

module.exports = router