const mongoose = require('mongoose');
const dbtitle = 'coffe-and-books'; //esta base de datos se tiene que llamar igual que la de app js
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const Places = require('../models/place.model');
Places.collection.drop();

const places = [

    {
        name: "Jarra-KAs",
        type: "Bar",
        location: {
            type: 'Point',
            coordinates: [40.393664, -3.659637]
        }
    },
    {
        name: "Bar La Union",
        type: "Bar",
        location: {
            type: 'Point',
            coordinates: [40.393408, -3.659424]
        }
    },
    {
        name: "Bar Anvi",
        type: "Bar",
        location: {
            type: 'Point',
            coordinates: [40.393535, -3.658681]
        }
    }
]

Places.create(places, (err) => {
  if (err) { throw(err) }
  mongoose.connection.close();
});