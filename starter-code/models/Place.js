const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    type: Array,
    enum: ["coffe shop", "bookstore"]
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;