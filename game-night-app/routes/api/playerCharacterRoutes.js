const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const playerCharacter = require("../../models/playerCharacterSchema");

//  CREATE post new playerCharacter to db
router.post("/playerCharacter", (req, res) => {
  let newPlayerCharacter = new playerCharacter({
    name: req.body.name,
    class: req.body.class
  });

  newPlayerCharacter.save(function(err, newPlayerCharacter) {
    if (err) console.error(err);
  });
  res.send(newPlayerCharacter);
});

module.exports = router;
