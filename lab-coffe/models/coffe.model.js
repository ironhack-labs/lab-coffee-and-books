const { Schema, model } = require("mongoose")

const coffeSchema = new Schema(

  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },

    place: {
      type: String,
      enum: ['Coffe shop', 'Bookstore']

    },
    location: {
      type: {
        type: String
      },
      coordinates: {
        type: [Number]
      }
    }
  },

  {
    timestamps: true

  })

coffeSchema.index({ location: '2dsphere' })

const User = model("User", coffeSchema)

module.exports = User
