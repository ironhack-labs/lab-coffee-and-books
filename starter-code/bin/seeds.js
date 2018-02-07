const mongoose = require("mongoose");
const Place = require("../models/Place");

mongoose.connect("mongodb://localhost/coffee-books");

const coffee1 = new Place({
    name: "Starbucks",
    type: "Coffee",

    location: {  type: "Point" , coordinates: [40.420265, -3.705622] }
});
coffee1.save((error) => {
    if (error) { console.log(error) }
    else {
        console.log('seeds done')
    }
})


module.exports = Place;