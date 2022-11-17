const { Schema, model } = require('mongoose')

const sitesSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },

        type: {
            type: String,
            enum: ['Coffee Shop', 'Bookstore'],
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
    }
)
sitesSchema.index({ location: '2dsphere' })

const Site = model('Site', sitesSchema)

module.exports = Site