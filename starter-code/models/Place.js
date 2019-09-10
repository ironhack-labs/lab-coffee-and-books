const mongoose = require('mongoose')
const Schema = mongoose.Schema

const placedSchema = new Schema({
	name: String,
	address: String,
	location: {
		type:{
			type: String,
			default: "Point"
		},
		coordinates: [Number]
	}
	
},
{
	timestamps: true,
	versionKey: false
})


module.exports = mongoose.model('Place', placedSchema)