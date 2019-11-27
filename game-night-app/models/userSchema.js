const express = require("express");
const mongoose = require("mongoose");

//  Create Schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.methods.usernameAvailable = function(username) {
  console.log("usernameAvailable");

  userSchema.find(function(err, users) {
    if (err) console.error(err);
    console.log(users);
  });
};

//  Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
