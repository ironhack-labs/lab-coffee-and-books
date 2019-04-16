const Place = require('../models/Place');

module.exports = {
  getPlaces(filter = {}){
    return Place.find(filter);
  },
  createPlace(post){
    return Place.create({
      name: post.name,
      type: post.type,
    });
  }
};