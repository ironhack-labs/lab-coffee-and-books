const Place = require('../models/Place.model');

module.exports = {
  acceptedFields: ['name', 'type'],
  getAcceptedFields(container){
    const response = {};
    this.acceptedFields.forEach(field => response[field] = container[field]);
    return response;
  },
  getPlaces(filter = {}){
    return Place.find(filter);
  },
  createPlace(post){
    return Place.create(this.getAcceptedFields(post));
  },
  updatePlace(id, post){
    return Place.findByIdAndUpdate(id, this.getAcceptedFields(post));
  },
  removePlace(id){
    return Place.findByIdAndRemove(id);
  }
  
};