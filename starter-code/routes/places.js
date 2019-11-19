const express = require('express');
const router  = express.Router();

// Db model
const Places = require(`../models/place`)

// Read
router.get('/', (req, res) => {
    Places
    .find()
    .then(allPlaces =>{
        res.render('places/index', {allPlaces});
    })
    .catch(err => console.log(`There was an error reading the db: ${err}`))
});

// Create
router.get('/new', (req, res) => {
  res.render('places/new')
});

router.post('/', (req, res) => {
    let {name, type} = req.body
    const newPlace = new Places ({name, type})

    Places
    .findOne({name})
    .then(placeFound => {
        if (placeFound) {
            console.log({alert : "This place already exists in db"})
            res.redirect('/places/new')

        } else {
            newPlace.save((err, place) => {
                if (err) return console.error(err);
                console.log(place.name + " saved to places collection.");
                res.redirect('/places')
            })
        }
    })
    .catch(err => console.log(`There was an error while saving new place in db: ${err}`))        
})

// Delete
router.post('/:id/delete', (req,res) =>{
    Places
    .findByIdAndDelete({_id : req.params.id})
    .then(placeDeleted => {
        console.log(placeDeleted.name + " deleted from places collection.");
        res.redirect('/places')
    })
    .catch(err => console.log(`There was an error while deleting place from db: ${err}`))        
})


// Edit
router.get('/:id/edit', (req, res) => {
    Places
    .findById({_id : req.params.id})
    .then(placeToEdit => {
        res.render('places/edit', {placeToEdit})
    })
    .catch(err => console.log(`There was an error while rendering the editing form: ${err}`))        
})

router.post('/:id/edit', (req, res) => {

    Places
    .findByIdAndUpdate({_id : req.params.id}, req.body)
    .then(placeUpdated => {
        console.log(placeUpdated.name + " updated to places collection.");
        res.redirect('/places')
    })
    .catch(err => console.log(`There was an error while updating place from db: ${err}`))        
 
})

module.exports = router;
