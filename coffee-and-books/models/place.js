'use strict';
const PlaceSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});

PlaceSchema.index({ location: '2dsphere' });
