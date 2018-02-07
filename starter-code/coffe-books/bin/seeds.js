/*jshint esversion: 6 */
const mongoose = require('mongoose');
const location = require('../models/Place');
//const bcrypt         = require("bcrypt");
//const bcryptSalt     = 10;
const User = require('../models/Place');
//const Course = require('../models/course');

mongoose.connect("mongodb://localhost/coffee-books");
//var salt = bcrypt.genSaltSync(bcryptSalt);
//const password = "ironhack";
//var encryptedPass = bcrypt.hashSync(password, salt);

const cafe = new Place({
  name: 'Le Cafe de Nacho',
  description: 'cafeteria',
  role : 'Cafe'
});

const location = [
  {
    
    lat: '28.119888',   
    long: '15.424225',
  },
  {
    lat: '28.119718', 
    long: '15.428538',
  },
  {
    lat: '28.123058',
    long: '15.424890',
  },
]


User.create(cafe, (err, user) => {
  if (err) {
    throw err;
  }
  console.log(user);
});


// Course.create(courses, (err, docs)=>{
//   if (err) { throw err };
//     docs.forEach( (course) => {
//       console.log(course.name)
//     })
//     mongoose.connection.close();
// });
