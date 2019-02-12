const mongoose = require('mongoose')
const Schema = mongoose.Schema

let placeSchema = new Schema({
	name: String,
	place: {
		type: String,
		enum: ['coffeeshop', 'bookstore'],
	},
	address: {
		location: {
			type: String,
			default: 'Point'
		},
		coordinates: [],
	}

},{timestamps:true})

module.exports = mongoose.model('Place', placeSchema)