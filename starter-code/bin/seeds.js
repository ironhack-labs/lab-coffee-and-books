const mongoose = require("mongoose");
const Place = require("../models/Place");

mongoose.connect("mongodb://localhost/coffee-books");

const coffee1 = new Place({
    name: "Starbucks",
    location: {
        type: {
            type: String
        },
        coordinates: [40.420265, -3.705622]}
});

mongoose.connection.close();