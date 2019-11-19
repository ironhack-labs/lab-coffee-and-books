const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({

  name: String,
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore']
  },
  pos: { lat: Number, lng: Number}

},
  {
    timestamps: true
  }

);

const Model = mongoose.model("places", schemaName);
module.exports = Model;