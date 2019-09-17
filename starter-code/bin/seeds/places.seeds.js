const mongoose = require("mongoose");
const Places = require("./../../models/Places.model");
const placesJSON = require("./data/places.data.json");

/**
 * Create an async function to:
 *  1. Delete all the registers in the Places collection
 *  2. Create the places imported in the places.data.json file
 * 
 * ----------------------------------------------------------------
 * async: indicates that is an async process. It's mandatory to
 *        use await
 * 
 * await: waits for the request. In this case, waits for the places
 *        to be deleted and only when it has finished, continue. Returns
 *        a Promise. If the process returns a JSON, it can be saved
 *        to a variable to parse it later.
 **/
const createPlacesSeed = async () => {
  await Places.deleteMany();
  await Places.create(placesJSON);
};

module.exports = createPlacesSeed;
