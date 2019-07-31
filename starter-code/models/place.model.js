const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placeSchema = new Schema(
	{
		name: String,
		type: {
			type: String,
			enum: ['coffee shop', 'bookstore'],
			default: 'coffee shop'
		},
		lat: Number,
		lng: Number
	},
	{
		timestamps: true
	}
)

const Place = mongoose.model('Place', placeSchema)

module.exports = Place
