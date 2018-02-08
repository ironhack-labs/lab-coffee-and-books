const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
  name : String,
  description: String,
  role : {
    type: String,
    enum: ['Cafe', 'Libreria'],
    default: 'Cafe'
  }
  
});

const location = new Schema ({
  // name : String,
  lat : String,
  long : String
})

const User = mongoose.model("User", UserSchema);
module.exports = User;