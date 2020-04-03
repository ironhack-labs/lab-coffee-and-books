const express = require('express');
const router  = express.Router();
const Place = require('../model/place');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});



// mostrar places
router.get('/places', (req, res, next) => {
  Place
  .find().sort({name: 1})
  .then(places => {
    res.render('places', {
      places
    });

  })
  .catch(error => console.log(error));
});



//mostrar detalhes de cada lugar

router.get('/places/:placeId', (req, res) => {
  const {
    placeId
  } = req.params;

  Place
    .findById(placeId)
    .then(places => {
      // console.log(place);
      res.render('place-details', {
        places
      });
    })
    .catch(error => console.log(error));
});




// Editar Place

//GET place edit
router.get('/places-edit/:placeId', (req, res) => {
  const {
    placeId
  } = req.params;

  Place
    .findById(placeId)
    .then(places => {
      console.log(places);
      res.render('places-edit', 
        places
      );
    })
    .catch(error => console.log(error));
});


//POST place edit
router.post('/places-edit', (req, res) => {
  const {
    placeId, 
    name, 
    type, 
    longitude, 
    latitude
  } = req.body

  console.log(req.body)

  const location = {
    type: 'point',
    coordinates: [longitude, latitude]
  }

  Place
  .findByIdAndUpdate(placeId, {$set: {
    name, 
    type,
    location
  }
  }, {
    new: true
  })
  .then(response => {
    // console.log(response);
    res.redirect(`/places/${placeId}`);
  })
  .catch(error => console.log(error));
});



//Adicionar place

//rota GET
router.get('/places-add', (req, res) => {
  res.render('places-add');
})

// rota post
router.post('/places-add', (req, res) => {
  console.log('body: ', req.body);

  const {
    name,
    type,
    latitude,
    longitude,
  } = req.body;

  const location = {
    type: 'point',
    coordinates: [longitude, latitude]
  }
  Place.create({
    name,
    type,
    location
    })
    .then(response => {
      // console.log(response);
      res.redirect('/places');
    })
    .catch(error => console.log(error));
});



//Deletar Place
router.get('/places-delete/:placeId', (req, res) => {
  const {
    placeId
  } = req.params;
  Place
    .findByIdAndRemove(placeId)
    .then(response => {
      // console.log(response);
    res.redirect('/places');
    })
    .catch(error => console.log(error));
});

// router.get('/api/books', (req, res, next) => {
//   Book
//     .find()
//     .then(books => {
//       res.json(books);
//     })
//     .catch(error => console.log(error));
// });


module.exports = router;
