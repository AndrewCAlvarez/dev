const mongoose = require("mongoose");

//  Create the schema
const playerCharacterSchema = new mongoose.Schema({
  name: String
  //   stats: {},
  //   class: {}
  //   spells: {},
  //   items: {}
});

//  Create model
const PlayerCharacter = mongoose.model("PlayerCharacter", playerCharacterSchema);

module.exports = PlayerCharacter;
