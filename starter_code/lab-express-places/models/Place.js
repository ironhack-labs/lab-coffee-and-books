const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
	name: String,
	kind: {type: String, enum:['Bookstore', 'Coffee-place']},
	location: { type: { type: String }, coordinates: [Number] }
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