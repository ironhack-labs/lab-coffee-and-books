const
  mongoose = require(`mongoose`),
  Schema   = mongoose.Schema,

  placeSchema = new Schema({
    kind: {
      type: String,
      enum: [`coffee`, `book`],
      required: true
    },
    name: String,
    location: {
      type: {
        type: String,
        default: `Point`
      },
      coordinates: [Number]
    }
  }, {
    timestamps: {
      createdAt: `created_at`,
      updatedAt: `updated_at`
    }
  })
;

placeSchema.index({location: `2dsphere`});

module.exports = mongoose.model(`Place`, placeSchema);