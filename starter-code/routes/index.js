const express = require('express')
const router = express.Router()
const Coffe = require('../models/coffe.model')

/* GET home page */
router.get('/', (req, res, next) => {

    Coffe.find()
        .then(coffes => res.render('index', { coffes }))
        .catch(err => console.log('La lista de locales no se pudo conseguir', err))

})




module.exports = router