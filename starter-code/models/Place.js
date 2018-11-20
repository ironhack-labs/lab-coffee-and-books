const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  name: { type: String },
  type: {
    type: String,
    enum: ["coffee shop", "bookstore"]
  },

  timestamps: {               //to show dates
    createdAt: "created_at", 
    updatedAt: "updated_at"
  }
  
});



Place.create({ name: 'House of Books', type:"bookstore", timestamps}) // Hay que poner valores de timestamps?
  .then(place => { console.log('The place is saved and its value is: ', place) })
  .catch(err => { console.log('An error happened:', err) });


  

  

  Place.find({ name: 'House of Books' })
  .then(place => { console.log('The place is found and its value is: ', place) })
  .catch(err => { console.log('An error happened:', err) });


  Place.updateOne({ name: "House of Books"}, { type: "coffee shop" })
  .then(type => { console.log('The type is now: ', type) })
  .catch(err => { console.log('An error happened:', err) });

  Place.deleteOne({ name: "House of Books"})
  .then(place => {console.log('The place is deleted', place)})
  .catch(err => {console.log('An error happened, place is not deleted yet', err)});


const Place = mongoose.model("Place", placeSchema);
module.exports = Place;