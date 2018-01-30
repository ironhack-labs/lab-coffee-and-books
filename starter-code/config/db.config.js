const mongoose = require('mongoose');
const DB_NAME = 'bookstore-gmaps';
const MONGO_URI = `mongodb://localhost/${DB_NAME}`;
const options = {
  useMongoClient: true,
};

mongoose.Promise = Promise;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to ${DB_NAME} database.`);
  }).catch((error) => {
    console.error(`Database connection error: ${error}`);
  });