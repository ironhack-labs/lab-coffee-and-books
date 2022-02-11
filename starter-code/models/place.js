const { Schema, model } = require('mongoose');

const placeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Indica el nombre de la cafeteria'],
      unique: true
    },
    type: {
      type: String,
      enum: ['coffee shop', 'bookstore'],
      unique: true,
    },

  },
  {
    timestamps: true
  }
);

module.exports = model('Place', placeSchema);
