const express = require("express");
const router = express.Router();
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");

const playerCharacter = require("../../models/playerCharacterSchema");

//  Passport config
require("./../../config/passport")(passport);

router.use(bodyParser.urlencoded({ extended: false }));
router.use(
  session({
    // genid: function(req) {
    //   console.log(`GENERATE UUID...\n${req.session}`);
    //   return uuid(); // use UUIDs for session IDs
    // },
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);

//  Passport middleware
router.use(passport.initialize());
router.use(passport.session());

//  GET playerCharacter from db
router.get("/playerCharacter", (req, res) => {
  console.log(req.user._id);
  playerCharacter.find({ user_id: req.user._id }, function(err, characters) {
    if (err) console.error(err);
    res.send(characters);
  });
});

router.post("/playerCharacter", function(req, res) {
  console.log(req.user._id);
  let userID = req.user._id;
  let newPlayerCharacter = new playerCharacter({
    name: req.body.name,
    class: req.body.class,
    race: req.body.race,
    proficiencies: req.body.proficiencies,
    stats: req.body.stats,
    background: req.body.background,
    alignment: req.body.alignment,
    about: req.body.about,
    user_id: userID
  });

  newPlayerCharacter.save(function(err, newPlayerCharacter) {
    if (err) console.error(err);
  });

  res.sendStatus(200);
});

module.exports = router;
