const express = require("express");
const mongoose = require("mongoose");

//  Create Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  character_id: {
    type: Array
  }
});

//  Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
