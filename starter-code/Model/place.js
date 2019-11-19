const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  type:{
    type: String,
    enum : ['Coffee Shop', 'Bookstore',]
  }
},
{
  timestamps: true
}
);

const Places = mongoose.model("places", schemaName);
module.exports = Places;