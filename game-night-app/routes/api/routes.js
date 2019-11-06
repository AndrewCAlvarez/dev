const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Card = require("../../models/cardSchema");

//  Test card
var Elmin = new Card({ name: "Elmin Black" });
Elmin.castSpell();

router.get("/", (req, res) => {
  //    Find all cards that begin with el (case insensitive)
  Card.find({ name: /^el/i }, function(err, cards) {
    if (err) return console.log(err);
    console.log(cards[0]);
    res.send(cards[0].name);
  });
});

router.post("/", (req, res) => {
  //  Save Elmin to db
  Elmin.save(function(err, Elmin) {
    if (err) console.error(err);
    console.log(Elmin);
  });
  res.send(Elmin);
});

module.exports = router;
