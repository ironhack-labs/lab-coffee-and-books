const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  type:{
    type: String,
    enum : ['Coffee Shop', 'Bookstore',]
  },
  location: { type: { type: String }, coordinates: [Number] }
},
{
  timestamps: true
}
);
schemaName.index({ location: '2dsphere' });
const Places = mongoose.model("places", schemaName);
module.exports = Places;


