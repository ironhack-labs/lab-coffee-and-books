const restaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
restaurantSchema.index({ location: '2dsphere' });