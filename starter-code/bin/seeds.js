const mongoose = require('mongoose')
const Place = require('../models/Place')

const places = [
  {
    name: 'El Péndulo',
    image: 'https://images.ecosia.org/dp_p-zAmfaAnBDNxLpcvWgyF26M=/0x390/smart/https%3A%2F%2Fassets.atlasobscura.com%2Fmedia%2FW1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzL2UzZGFhODliNGM0ZmY1NWE0Ml9wZW5kdWxvLWRlLXBvbGFuY28tdmVnZXRhY2lvbi5qcGciXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il0sWyJwIiwidGh1bWIiLCI2MDB4PiJdXQ',
    category: 'Coffee Shop',
    stars: 5,
    location: {
      coordinates: [ -99.195666, 19.430487 ]
    }
  },
  {
    name: 'Gandhi',
    image: 'https://images.ecosia.org/EXlvS3ST-vyvNtCRwDxAWV2RHQU=/0x390/smart/https%3A%2F%2Fwww.frogx3.com%2Fwp-content%2Fuploads%2F2012%2F01%2Ffrases-libreria-gandhi-menos-face.gif',
    category: 'Book store',
    stars: 5,
    location: {
      coordinates: [-99.196276, 19.432103 ]  
    }
  },
  {
    name: 'Almanegra',
    image: 'https://images.ecosia.org/xueRax_iSI4H89Xi3K6kFVQH3CU=/0x390/smart/https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F07%2Fa8%2F13%2Fa4%2Falma-negra-cafe.jpg',
    category: 'Coffee Shop',
    stars: 5,
    location: {
      coordinates: [-99.162906, 19.418999 ] 
    }
  }
]

mongoose
  .connect('mongodb://localhost/booksandcoffee')
  .then(()=> {
    Place.create(places)
    .then(places => {
      console.log(`You created ${places.length} places successfully`)
      mongoose.connection.close()
    })
    .catch((err)=> {
      console.log(err)
    })
  })
  .catch((err)=> {
    console.log(err)
  })

 