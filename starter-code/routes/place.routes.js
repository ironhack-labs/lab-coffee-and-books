const express = require('express')
const router = express.Router()

const Place = require('../models/place')



// Inicio
router.get('/', (req, res, next) => res.render('place-index'))


// Listado
router.get('/list', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  Place.find()                                                         // ESTO ES EL MODELO
    .then(allPlaces => res.render('place-list', { places: allPlaces }))  // ESTO ES LA VISTA
    .catch(error => console.log(error))
})

// Detalle
router.get('/detail/:place_id', (req, res) => {
  Place.findById(req.params.place_id)
    .then(thePlace => res.render('place-detail', { place: thePlace }))
    .catch(error => console.log(error))
})



// Añadir nueva
router.get('/create', (req, res) => res.render('place-create'))


router.post('/create', (req, res, next) => {

	console.log(req.body)

	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};

	const newPlace = new Place({
		name: req.body.name,
		type: req.body.type,
		location: location
	});

	newPlace.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/place/list');
		}
	});
});


// Editar 
router.get('/edit', (req, res) => {
  Place.findOne({ _id: req.query.place_id })
    .then(place => res.render("place-edit", { place }))
    .catch(error => console.log(error))
})

router.post('/edit', (req, res) => {
	let location = {
		type: 'Point',
		coordinates: [req.body.longitude, req.body.latitude]
	};
  Place.findById(req.params.place_id, (error, place) => {
		if (error) {
			next(error);
		} else {
			place.name = req.body.name;
			place.type = req.body.type;
			location=location
			place.save(error => {
				if (error) {
					next(error);
				} else {
					res.redirect(`/place/list`);
				}
			});
		}
	});
})







//Eliminar 

router.post('/delete/:place_id', (req, res, next) => {
  const id= req.params.place_id
  Place.findByIdAndDelete(id)
    .then(thePlace => res.redirect('/place/list'))
    .catch(error => console.log(error))
})




router.get('/api', (req, res, next) => {
	Place.find({}, (error, plac) => {
		if (error) {
			next(error);
		} else {
			res.status(200).json({ places: plac });
		}
	});
});


router.get('/api/:id', (req, res, next) => {
	let placeId = req.params.id;
	Place.findOne({ _id: placeId }, (error, plac) => {
		if (error) {
			next(error)
		} else {
			res.status(200).json({ places: plac });
		}
	});
});

module.exports = router