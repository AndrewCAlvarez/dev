const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Card = require("../../models/cardSchema");

//  Test card
//  var Elmin = new Card({ name: "Elmin Black" });

//  CREATE: Post a new card into the db
router.post("/", (req, res) => {
  let newCard = new Card({ name: req.body.name });
  //  Save newCard to db
  newCard.save(function(err, newCard) {
    if (err) console.error(err);
    console.log(newCard);
  });
  res.send(newCard);
});

//  READ: Get all cards returned as an array
router.get("/", (req, res) => {
  Card.find(function(err, cards) {
    if (err) return console.log(err);
    console.log(cards);
    res.send(cards);
  });
});

//  UPDATE: Change a card
router.put("/", (req, res) => {
  Card.findByIdAndUpdate(req.body.id, { name: req.body.name }, function(err) {});
  res.send("PUT");
});

//  DELETE a card from the db
router.delete("/", (req, res) => {
  Card.deleteOne({ _id: req.body.id }, function(err) {});
  res.send("Deleted!");
});

module.exports = router;
