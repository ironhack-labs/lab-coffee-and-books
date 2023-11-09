const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
    {
        name: String,
        description: {
            type: String,
            enum: ["coffee shop", "bookstore"]
        },
        location: {
            type: {
                type: "String"
            },
            coordinates: {
                type: [Number]
            }
        }
    }, {
    timestamps: true
})

placeSchema.index({ location: "2dsphere" })

module.exports = model("Place", placeSchema)