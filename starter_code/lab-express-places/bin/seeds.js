const mongoose = require('mongoose');
const Place = require('../models/Place');

const dbName = 'lab-express-places';
mongoose.connect(`mongodb://localhost/${dbName}`);

const places = [{
	name: "Mür Café",
	kind: "Coffee-place", 
	location: {
		type: "Point",
		coordinates: [40.425640, -3.712200]
	}
},
{
	name: "Mama Framboise",
	kind: "Coffee-place", 
	location: {
		type: "Point",
		coordinates: [40.424782, -3.695570]
	}
},
{
	name: "Bombardino Café",
	kind: "Coffee-place", 
	location: {
		type: "Point",
		coordinates: [40.4101769, -3.6999321]
	}
},
{
	name: "Swinton",
	kind: "Bookstore", 
	location: {
		type: "Point",
		coordinates: [40.4059602, -3.7039637]
	}
},
{
	name: "Tipos Infames",
	kind: "Bookstore", 
	location: {
		type: "Point",
		coordinates: [40.4246998, -3.7033008]
	}
},
{
	name: "Panta Rei",
	kind: "Bookstore", 
	location: {
		type: "Point",
		coordinates: [40.4404829, -3.7067978]
	}
}];


Place.collection.drop();

Place.create(places)
	.then(() => {
		console.log(`Created ${places.length} places`);
		mongoose.connection.close();
	})
	.catch((e)=>{
		console.log('Error on creating the database');
		throw (e);
	});