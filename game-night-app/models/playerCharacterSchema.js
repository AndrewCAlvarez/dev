const mongoose = require("mongoose");

//  Create the schema
const playerCharacterSchema = new mongoose.Schema({
  name: String,
  class: {},
  race: {},
  proficiencies: [],
  stats: {},
  background: {},
  alignment: String,
  about: String
  //   spells: {},
  //   items: {}
});

//  Create model
const PlayerCharacter = mongoose.model("PlayerCharacter", playerCharacterSchema);

module.exports = PlayerCharacter;
