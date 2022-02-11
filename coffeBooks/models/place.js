const { Schema, model } = require("mongoose");

const userSchema = new Schema(
{
    name: {
        type: String,
        unique: true
    },
    type: {
        type: String, 
        enum: ['cofee shop', 'bookstore']
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
},
{
    timestamps: true
})

userSchema.index({ location: '2dsphere' })

const User = model("User", userSchema)

module.exports = User