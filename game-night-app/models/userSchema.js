const mongoose = require("mongoose");

//  Create Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.validatePassword = function(password) {
  return true;
};
//  Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
