const mongoose = require('mongoose');
const Place = require('../models/Place');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [
	{
		name: 'Saraiva',
		type: 'bookstore',
		location: {
			type: 'Point',
			coordinates: [-46.643147, -23.565574],
		} 
  },
  {
		name: 'Livraria Cultura',
		type: 'bookstore',
		location: {
			type: 'Point',
			coordinates: [-46.551316, -23.842626],
		} 
  },{
		name: 'Starbucks',
		type: 'coffee shop',
		location: {
			type: 'Point',
			coordinates: [-46.741369, -23.713926],
		} 
  },
];

Place.create(places, (err) => {
	if (err) {
		throw err;
	}
	console.log(places);
	mongoose.connection.close();
});
