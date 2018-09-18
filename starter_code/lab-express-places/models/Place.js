const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
	name: { 
		type: String, 
		required: true 
	},
	kind: {
		type: String,  
		enum:['Bookstore', 'Coffee-place'],
		required: true
	},
	location: {
		type: { type: String }, 
		coordinates: [Number]
		//coordinates: { type: [ Number ], required: true}
	}
}, {
	timestamps: {
		createdAt: 'created_at',
		updatedAt: 'updated_at'
	}
});

placeSchema.index({
    location: '2dsphere'
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;