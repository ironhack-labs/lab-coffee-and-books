const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const PlaceSchema = new Schema({
  	name: String,
  	address: String,
    location: { type: { type: String}, coordinates: [Number] },
  	placeType: {
    	type: String,
    	enum : ['BOOKSTORE', 'COFFEESHOP']
  	}
	}, {
  	timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
	}
);

PlaceSchema.index({ location: '2dsphere' });

const Place = mongoose.model("Place", PlaceSchema);

module.exports = Place;