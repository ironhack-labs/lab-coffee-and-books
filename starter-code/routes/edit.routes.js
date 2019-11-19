const express = require('express');
const router = express.Router();
const Places = require("../models/place.model")

router.get('/add', (req, res) => res.render('add'))

router.post('/add', (req, res) => {

    const {
        name,
        type
    } = req.body

    Places.create({
            name,
            type
        })
        .then(x => res.redirect('add'))
       // .catch(err => 'error with creating place', err) --- err is not defined... why??
})
router.get('/list', (req, res) => {
    Places.find()
        .then(allPlaces => res.render('list', {
            place: allPlaces
        }))
        .catch(err => console.log("Error finding all places: ", err))
});

router.get('/:id', (req, res) => {
    Places.findById(req.params.id)
        .then(onePlace => res.render('details', {
            onePlace: onePlace
        }))
        .catch(err => console.log("Error finding one place: ", err))
});


router.get('/delete/:id', (req, res) => {
    Places.findByIdAndDelete(req.params.id)
        .then(onePlace => res.redirect('index', { //why does this not redirect?
            deletePlace: onePlace
        }))
        .catch(err => console.log("Error deleting place", err))
});

router.get("/edit/:id", (req, res) => {
    Places.findById(req.params.id)
        .then(placeEdit => res.render('edit', {
            edit: placeEdit
        }))
        .catch(err => console.log('error editing places', err))
});
router.post("/edit/:id", (req, res) => {
    const {
        name,
        type
    } = req.body;
    Places.findOneAndUpdate(req.params.id, {
            name,
            type
        })
        .then(res.redirect("/list"))
        .catch(err => console.log("error editing", err));
});
module.exports = router