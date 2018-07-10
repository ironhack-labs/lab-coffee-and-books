require('dotenv').config();

const mongoose = require('mongoose');
const Place = require('../models/Place');

const dburl = process.env.DBURL;
mongoose.connect(`mongodb://localhost/${process.env.DBURL}`).then(() => console.log(`Connected to db: ${dburl}`));


Place.collection.drop();

Place.create([
    {
        name: 'Tik Books Libros Usados SB',
        type: 'Book Store',
        location:{
            type: "Point",
            coordinates:[40.425665,-3.6889412]
        }
    },
    {
        name: 'Libros Melior Hermosilla',
        type: 'Book Store',
        location:{
            type: "Point",
            coordinates:[40.4256296,-3.6736203]
        }
    },
    {
      name: 'Café Viena',
      type: 'Coffee Shop',
      location: {
        type: 'Point',
        coordinates:[40.4251415,-3.7176745]
      }
    }, {
      name: 'ABONAVIDA',
      type: 'Coffee Shop',
      location: {
        type: 'Point',
        coordinates:[40.4191524,-3.7089214]
      }
    }
])
.then( () => {
    console.log("Places created")
    mongoose.disconnect();
});