const express = require('express')
const router = express.Router()

const CoffeeBooks = require('../models/coffeebooks.model')

// Endpoints
router.get('/', (req, res) => res.render('index'))

router.get('/new', (req, res) => res.render('createNew'))

router.post('/new', (req, res, next) => {

    let location = {
        type: 'Point',
        coordinates: [req.body.longitude, req.body.latitude]
    }

    const newCoffeeBook = {
        name: req.body.name,
        type: req.body.type,
        location
    }

    CoffeeBooks.create(newCoffeeBook)
        .then(() => {
            console.log('se ha creado un registro')
            res.redirect('/list')})
            .catch(err => next(err))

})

router.get('/list', (req, res) => {

    CoffeeBooks.find()
        .then(coffeeBooks => {
            res.render('list', {coffeeBooks, key : process.env.KEY})
        })
        .catch(err => next(err))

})

router.get('/delete/:_id', (req, res)=> {
    id = req.params._id

    CoffeeBooks.findByIdAndDelete(id)
        .then(()=> res.redirect('/list'))
        .catch(err => next(err))
})

router.get('/edit/:_id', (req, res) => {
    id = req.params._id

    CoffeeBooks.findById(id)
        .then(details=> res.render('edit', details))
            
        .catch(err => next(err))
})




router.post('/edit/:_id', (req, res) => {
    id = req.params._id
    info = req.body
    console.log('hola1')

    CoffeeBooks.findByIdAndUpdate(id, info)
        .then(()=> {
            console.log('hola2')
            res.redirect('/list')})
        .catch(err => next(err))


})


module.exports = router
