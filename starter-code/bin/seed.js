const mongoose = require('mongoose');
const Place = require('../models/place.model');
// const Author = require('../models/author.model');

const dbtitle = 'lab-coffee-book';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

// Book.collection.drop();
// Author.collection.drop();

