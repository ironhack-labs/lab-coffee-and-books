const express = require('express')
const router = express.Router()

const CoffeBook = require('../models/coffe.model')

router.get('/coffeBook', (req, res, next) => {

    CoffeBook
        .find()
        .then(list => res.json(list))
        .catch(err => res.status(500).json({ message: 'Server issue D:', errorDetails: err }))

})


module.exports = router