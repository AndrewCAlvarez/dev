const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const router = express.Router();

const playerCharacter = require("../../models/playerCharacterSchema");

//GET playerCharacter from db
router.get("/playerCharacter", (req, res) => {
  res.send("Torvan the Conqueror!");
});

//  CREATE post new playerCharacter to db
router.post("/playerCharacter", (req, res) => {
  let newPlayerCharacter = new playerCharacter({
    name: req.body.name,
    class: req.body.class,
    race: req.body.race,
    stats: req.body.stats
  });

  newPlayerCharacter.save(function(err, newPlayerCharacter) {
    if (err) console.error(err);
  });
  res.send(newPlayerCharacter);
});

module.exports = router;
