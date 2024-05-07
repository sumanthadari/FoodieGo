//import mongoose to create mongoose model
const mongoose = require("mongoose");

//create Schema
const menuListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

//export this Schema
module.exports = mongoose.model("menuList", menuListSchema);
