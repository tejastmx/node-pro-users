const mongoose = require("../config/db.js"),
  Schema = mongoose.Schema;

var userDetails = new Schema({
  name: String,
  email: String,
  age: Number,
  prograd_id: Number,
  squad: Number,
});

const User = mongoose.model("userdata", userDetails);
module.exports = { User };
