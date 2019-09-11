const Place  = require('../models/Place')

exports.home = async (req,res,next) => {
	const places = await Place.find()
	res.render('index', { places })
}

exports.addPlaceForm = async (req,res,next) => {
	const places = await Place.find()
	res.render('addplace', { places })
}

exports.addPlace = async (req,res,next) => {
	const {name, address, location } = req.body
	await Place.create({name, address, location, lng, lat, })
	res.redirect('/')
}

exports.editPlaceForm = async (req,res,next) => {
	const { placeid } = req.query
	const place = await Place.findById(placeid)
	res.render('editplace', place)
}

exports.editPlace = async (req,res,next) => {
	const {name, address, type } = req.body
	const {placeid} = req.query
	await Place.findByIdAndUpdate(placeid,{name, address, location, lng, lat, })
	res.redirect('/')
}

exports.deletePlace = async (req,res,next) => {
	const { id } = req.params
	const place = await Place.findByIdAndDelete(id)
	console.log(place)
	res.redirect('/')
}

