const express = require('express');
const router  = express.Router();
const Store = require("../models/bookModel")

router.get('/places/api', async (res,next) => {
  try {
    const places = await Store.find()
    res.json(places)
  }
  catch(err){
    next(err)
  }
})
router.get('/places', (req, res, next) => {
  // Iteration #2: List the drones
  Store.find()
    .then((Store) => {

      res.render('places/places', { Store })

    })
    .catch((err) => next(err))
}
);

router.get('/places/create', (req, res, next) => {
res.render('places/create')
});

router.get('/places/edit/:id', (req, res, next) => {
  const { id: idPlaces } = req.params

  Store.findById(idPlaces)
    .then(place => {
      res.render('places/edit', place)
    })
    .catch((err) => next(err));
});

router.get('/places/delete/:id', (req,res,next) => {

  const { id:idPlaces } = req.params

  Store.findByIdAndDelete(idPlaces)
    .then(() => {
      res.redirect('/places')
    })
    .catch((err)=> console.log(err))
  });
 


router.post('/places/create', (req, res, next) => {
  const { name, type, coordinates} = req.body;
  Store.create({ name, coordinates, type})
    .then(() => {
      res.redirect('/places')
    })
    .catch((err) => {
      next(err);
    })
});



router.post('/places/edit/:id', (req, res, next) => {
  const { name, type, coordinates } = req.body
  Store.findByIdAndUpdate(req.params.id, { name, type, coordinates })
    .then(() => {

      res.redirect('/places');
    })
    .catch((err) => next(err));
});

router.post('/', (req,res,next)=> {
  const {longitude, latitude, name, type } = req.body
  
  const newPlace = new Store ({
    name,
    type,
    location: {
      type: {enum: ['Coffee shop','Bookstore']},
      coordinates: [longitude, latitude]
    }
  })
  newPlace
  .save()
  .then((place)=> {
    res.redirect('/')
  })
  .catch((err)=> next(err))
})

module.exports = router;



