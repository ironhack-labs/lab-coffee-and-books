const { Schema, model } = require("mongoose")

const placeSchema = new Schema(
    {
        name: String,
        
        type: {
            type: String,
            enum: ['COFFEE-SHOP', 'BOOKSTORE'],
        },
    },
    {
        timestamps: true
    }
)

module.exports = model("Places", placeSchema)