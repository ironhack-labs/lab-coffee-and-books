//PASO 1
const mongoose = require('mongoose')
/*
mongoose tiene muchas cualidades, entre ellas 
GeoJson Object:
  Permite trazar rutas a trabes de puntos y delimitan un cuadrante y en ese cuadrante ven corrdenadas_:

*/

const placeSchema = new mongoose.Schema({
  name: String,
  image: String,
  category:{
    type: String,
    enum: ['Bar', 'Restaurant', 'Coffee']
  },
  stars: {
    type: Number,
    //enum: [1, 2, 3, 4, 5] --->>> para que solo hayan 5 estrellas, pero se puede representar así:
    min: 1,
    max: 5
  },
  location: {
    address: {
      type: String,
      default: 'Point' //guarda puntos de coordenadas
    },
    coordinates: [Number] //<<<---string de números
  }
})

//exportar para ponerlo disponible
module.exports = mongoose.model('Place', placeSchema)