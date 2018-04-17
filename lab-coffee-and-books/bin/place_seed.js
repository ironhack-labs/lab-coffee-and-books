require("dotenv").config();

const mongoose = require("mongoose"); // Importar mongoose
const Place = require("../models/Place") // Importar modelo Celebritu
const place_data = require('./place_data.js'); // Importar base de datos de los celebrities

const dbURL = process.env.DBURL;


mongoose.connect(dbURL).then(() => {
    console.log(`Connected to db ${dbURL}`);
    Place.collection.drop(); // limpiar base de datos 

    Place.create(place_data)
        .then(place => {
            console.log(place);
            console.log("Created celebities");
            mongoose.disconnect();
        })

})
    .catch((err) => {
        console.log(err)
    });
