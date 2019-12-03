const express = require("express");
const session = require("express-session");
const router = express.Router();
const bodyParser = require("body-parser");
const uuid = require("uuid");
const User = require("../../models/userSchema");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

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

router.post("/signin", passport.authenticate("local"), function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.sendStatus(200);
});

//  Create new user
router.post("/signup", (req, res) => {
  let newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  User.find({ username: newUser.username }, function(err, results) {
    if (err) console.error(err);

    //  results.length returns 0 if empty. If empty we want to add user
    if (!results.length) {
      newUser.save(function(err) {
        if (err) return console.error(err);
      });
      res.send(newUser.id); // send user's id
    } else {
      res.sendStatus(401);
    }
  });
});

router.get("/loggedIn", (req, res) => {
  if (req.isAuthenticated()) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

router.get("/logout", (req, res) => {
  console.log("response");
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
