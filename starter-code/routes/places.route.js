const express = require('express')
const router = express.Router()

const Place = require("../models/place.model")



// GET ==> Para listar todos los elementos de la base de datos:

router.get("/", (req, res, next) => {
    console.log("----------------------antes de encontrar los places")
    
    Place.find()
        .then(allPlaces => {
            res.render('places/index', {allPlaces} )
            console.log(`--------------------------------------------------Se han encontrado: ${allPlaces.length} locales`)
        })
        .catch(err => console.log(`Error al buscar y pintar la lista de celebrities ${err}`))

        console.log("--------------------------------- Se deberian de haber pintado los lugares")
})



// GET ==> Para enseñar los detalles de un elemento de la base de datos cogido por si id

router.get('/:place_id/details', (req, res, next) => {
    console.log("----------------------antes de encontrar el place por el id")

    Place.findById(req.params.place_id)
        .then( place => {
            res.render("places/show", place)
            console.log(`--------------------------------------------------Se han encontrado: ${place}`)
        })
        .catch(err => console.log(`Error buscando un lugar por su ID ${err}`))

        console.log("--------------------------------- Se deberian de haber pintado el lugar buscado por el id correspondiente")

})

// POST ==> Imprimir el fiormulario de creacion en pantalla

router.get('/new', (req, res, next) => res.render('places/new'))

// POST => crear y guardar el nuevo lugar en la base de dotos
router.post('/new', (req, res, next) => {

	let location = {
		type: 'Point',
		coordinates: [req.body.longitud, req.body.latitud]
	}

	const newPlace = new Place({
		name: req.body.name,
		type: req.body.type,
		location
	})

	newPlace.save((error) => {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});



router.post('/:place_id/delete', (req, res, next) => {

    Place.findByIdAndRemove(req.params.place_id)
      .then(res.redirect('/places'))
      .catch(err => console.log(`Error  ${err}`))
})






// GET ==> Para recoger el formulario relleno con los detalles de un restaurante

router.get('/:place_id/update', (req, res, next) => {
    console.log("----------------------antes de encontrar el place por el id para actualizar")

    Place.findById(req.params.place_id)
        .then(foundPlace => res.render('places/update', foundPlace))
        .catch(err => next(err))

})


//POST ==> Para actualizar los datos del lugar por lo que ha introducido el usuario en el formulario

router.post('/:place_id/update', (req, res, next) => {

    const location = { type: 'Point', coordinates: [req.body.latitud, req.body.longitud] }
    const { name, type } = req.body

    Place.findByIdAndUpdate(req.params.place_id, { name, type, location})
      .then(res.redirect(`/places`))
      .catch(err => next(err))
  })




// to see raw data in your browser, just go on: http://localhost:3000/api
router.get('/api', (req, res, next) => {
    
	Place.find({}, (error, allPlacesFromDB) => {

		if (error) {
			next(error);
		} else {
			res.json({ places: allPlacesFromDB });
		}
	});
});

// to see raw data in your browser, just go on: http://localhost:3000/api/someIdHere
router.get('/api/:id', (req, res, next) => {

    let placeId = req.params.id;
    
	Place.findOne({ _id: placeId }, (error, onePlaceFromDB) => {

		if (error) {
			next(error)
		} else {
			res.json({ place: onePlaceFromDB });
		}
	});
});




module.exports = router