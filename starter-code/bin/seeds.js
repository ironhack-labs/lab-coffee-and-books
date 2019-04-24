//PASO 2:
const mongoose = require('mongoose')
const Place = require('../models/Place') //importar modelo Place

const places = [{
  name: 'Centro de Salud',
  image: 'https://img.culturacolectiva.com/content/2016/06/el-buen-tiempo-bar-dark.jpeg',
  category: 'Bar',
  stars: 3,
  location: {
    coordinates: [-99.1645228, 19.41636339]
  }
},{
  name: 'Orinoco',
  image: 'https://media.timeout.com/images/104580053/630/472/image.jpg',
  category: 'Restaurant',
  stars: 5,
  location: {
    coordinates: [-99.1650636, 19.4175807]
  }
}, {
  name: 'Mataleon',
  image: 'https://img.maspormas.com/2017/03/Hamburguesa.jpg',
  category: 'Restaurant',
  stars: 2,
  location: {
    coordinates: [-99.1655191, 19.4203567]
  }
}
] 

mongoose
.connect('mongodb://localhost/mamador') //se abre conexión
.then(() =>{
  Place.create(places)
    .then(places => {
      console.log(`${places.length} places created succesfully`)
      
      //se cierra conexión
      mongoose.connection.close()
    })
    .catch(err => {
      console.log(err)
    })
}) 
.catch(err => {
  consolse.log(err)
})
