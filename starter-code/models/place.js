const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const permittedTypes = [`coffee shop`, `bookstore`];

const placeSchema = new Schema({
  name: {
    type: [String],
  },
  typeSelector: {
    type: [String],
    enum: permittedTypes,
    required: `Please specify either coffee shop or bookstore.`,
  },
  timestamp: {
    type: [Date],
  }
});


// class APIHandler {
//   constructor (baseUrl) {
//     this.BASE_URL = baseUrl;
//     this.client = axios.create({
//       baseURL = this.BASE_URL
//     })
//   }

//   createAxiosFunction (newPlace) {
//     return this.client.post(this.BASE_URL, newPlace);
//   }

//   readAxiosFunction (name) {
//     return this.client.get(`${this.BASE_URL}/${name}`);
//   }

//   updateAxiosFunction (name, editedPlace) {
//     return this.client.put(`${this.BASE_URL}/${name}`, editedPlace);
//   }

//   deleteAxiosFunction (name) {
//     return this.client.delete(`${this.BASE_URL}/${name}`);
//   }
// }


module.exports = mongoose.model('Places', placeSchema);
