const {Schema, model} = require('mongoose');
const placeSchema = new Schema ({
  name: String,
  type: {
    type:String,
    enum: ['Coffee Shop', 'Bookstore']
  },
  location:{
    type:{
      type: String,
      default:"Point"
    },
    coordinates : [Number]
  }
},{
  timestamps: true,
  versionKey: false
});

module.exports = model ('Place', placeSchema);


