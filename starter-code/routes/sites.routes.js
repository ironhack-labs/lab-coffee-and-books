const express = require('express')
const router = express.Router()

const Book = require('/models/sites.model')

// Endpoints
router.get('/listado', (req, res) => {

    Site.find()
        .then(allSites => res.render('sites/list', { allSites }))
        .catch(err => console.log("Error en DB", err))
})


router.get('/detalle/:id', (req, res) => {

    Book.findById(req.params.id)
        .then(theBook => res.render('books/details', theBook))
        .catch(err => console.log("Error en la BBDD", err))
})

module.exports = router