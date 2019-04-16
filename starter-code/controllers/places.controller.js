const Place = require('../models/Place.model');

module.exports = {
  acceptedPlaceType: ['CoffeeShop', 'Bookstore'],
  getAcceptedPlaceType(){
    return this.acceptedPlaceType;
  },
  getPlaceById(id){
    return Place.findById(id);
  },
  getPlaces(filter = {}){
    return Place.find(filter);
  },
  createPlace(post){
    return Place.create({
      name: post.name,
      type: post.type,
      coordinates: [+post.longitude, +post.latitude],
    });
  },
  updatePlace(id, post){
    return Place.findByIdAndUpdate(id, {
      name: post.name,
      type: post.type,
      coordinates: [+post.longitude, +post.latitude],
    });
  },
  removePlace(id){
    return Place.findByIdAndRemove(id);
  }
  
};