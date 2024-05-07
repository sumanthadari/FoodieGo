//import mongoose to create mongoose model
const mongoose = require("mongoose");

//create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model("user", UserSchema);
