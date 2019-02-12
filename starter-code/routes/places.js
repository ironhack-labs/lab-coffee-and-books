const router = require('express').Router()
const Place = require('../models/Place')

router.get('/', (req, res, next)=>{
	Place.find()
			.then(places=>{
				res.render('places', {places})
			})
			.catch(e=>console.log(e))
})

router.get('/new', (req, res, next)=>{
	const config = {
		action: "/new",
		name: '',
		title: 'Create a new place'
	}
	res.render('new', config)
})

router.post('/new', (req, res, next)=>{
	Place.create(req.body)
			.then(place=>{
				res.redirect(`/detail/${place._id}`)
			})
			.catch(e=>console.log(e))
})

router.get('/detail/:id', (req, res, next)=>{
	Place.findById(req.params.id)
			.then(place=>{
				res.render('detail', place)
			})
			.catch(e=>next(e))
})

router.get('/delete/:id', (req, res, next)=>{
	Place.findByIdAndDelete(req.params.id)
			.then(()=>{
				res.render('places')
			})
			.catch(e=>next(e))
})

router.get('/edit/:id', (req, res, next)=>{
	Place.findById(req.params.id)
			.then(place => {
	const config = {
		action: `/edit/${place._id}`,
		name: place.name,
		title: 'Edit ' + place.name,
		coords : place.address.coordinates,
	}
	res.render('new', config)
			})
})

router.post('/edit/:id', (req, res, next)=>{
	Place.findByIdAndUpdate(req.params.id,req.body)
			.then(place=>{
				res.redirect(`/detail/${place._id}`)
			})
			.catch(e=>console.log(e))
})
module.exports = router