const { Schema, model } = require("mongoose")

const placesSchema = new Schema(
    {

        name: {
            type: String
        },
        type: {
            type: String,
            enum: ["coffee shop", "bookstore"]
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
    }
)

placesSchema.index({ location: '2dsphere' })

const Places = model('Places', placesSchema)

module.exports = Places