const mongoose = require("mongoose");

//  Schema
var cardSchema = new mongoose.Schema({
  name: String
});
//  Methods must be added before the model is created
cardSchema.methods.castSpell = function() {
  console.log("COLOR SPRAY!!!");
};

//  Model
var Card = mongoose.model("Card", cardSchema);

module.exports = Card;
