const router = require("express").Router();
const Place = require('./../models/place.model')

router.get('/crear-local', (req, res) => {


    res.render('crud/new-view')




});
router.post('/crear-local', (req, res) => {

    let latitude
    let longitude
    req.body = {
        name,
        type,
        coordinates: [longitude, latitude]
    }
    Place
        .create(req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))

});
router.get('/local/:id/edit', (req, res) => {
    Place
        .findById(req.params.id)
        .then(Place => {
            res.render('crud/edit-view', Place)
        })
        .catch(err => console.log(err))
})
router.post('/local/:id/edit', (req, res) => {

    const { name, type } = req.body

    Place
        .findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))

});






// ///editar




module.exports = router;