const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const User = require("../../models/userSchema");

const passport = require("passport"),
  LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log("Incorrect user.");
        return done(null, false);
      }
      //  verifyPassword is a method that should be added to the schema later
      //  currently setup in userSchema.js and always returns true
      if (user.password != password) {
        console.log("Incorrect password.");
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    });
  })
);

//  serialize is used in sessions to allow users to get data again without using creds
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get("/sessionID", (req, res) => {
  console.log(req.session.id);
  res.send(req.session.id);
});

router.get("/loginSuccess", (req, res) => {
  console.log(req.user);
  res.sendStatus(200);
});

router.get("/loginFailure", (req, res) => {
  res.sendStatus(401);
});

//  Login as existing user
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/loginSuccess",
    failureRedirect: "/loginFailure"
  })
);

//  Create new user
router.post("/signup", (req, res) => {
  let newUser = new User({
    username: req.body.username,
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

module.exports = router;
