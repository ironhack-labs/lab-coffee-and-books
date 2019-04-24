const  mongoose = require('mongoose')
const Place = require('../models/Place')


const places = [
  {
    name: 'Centro de Salud',
    image: 'https://cdn-5befa143f911c80db489a19d.closte.com/wp-content/uploads/2016/07/00-destacada2-1.jpg',
    category: 'Bar',
    stars: 2,
    location: {
      coordinates:[-99.1659057, 19.416691]
    }
  },
  {
    name: 'Orinoco',
    image: 'https://img.chilango.com/2017/10/tacos-orinoco.jpg',
    category: 'Restaurant',
    stars: 5,
    location: {
      coordinates:[-99.1670934, 19.4176674]
    }
  },
  {
    name: 'Mataleon',
    image: 'https://img.maspormas.com/2017/03/Hamburguesa.jpg',
    category: 'Restaurant',
    stars: 5,
    location: {
      coordinates:[-99.1678435, 19.4202671]
    }
  }
]



mongoose.connect('mongodb://localhost/mamadores2')  // conectar a la base de datos


.then(()=>{
  Place.create(places)
  .then(places=>{
    console.log(`You created ${places.length} places succesfully`)
    mongoose.connection.close()
  })
  .catch(err => {
    console.log(err)
  })
  .catch (err =>{
    console.log(err)
  })
})
