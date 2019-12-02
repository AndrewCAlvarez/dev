const express = require("express");
const session = require("express-session");
const router = express.Router();
const bodyParser = require("body-parser");
const uuid = require("uuid");

const User = require("../../models/userSchema");

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

router.use(passport.initialize());

router.use(
  session({
    genid: (req) => {
      console.log("Inside the session middleware");
      console.log(req.sessionID);
      return uuid(); // use UUIDs for session IDs
    },
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

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

router.get("/signinSuccess", (req, res) => {
  console.log("Inside the homepage callback function");
  console.log(req.sessionID);
  res.sendStatus(200);
});

router.get("/signinFailure", (req, res) => {
  res.sendStatus(401);
});

//  Signin as existing user
router.post("/signin", (req, res, next) => {
  console.log("Inside POST /login callback");

  passport.authenticate("local", (err, user, info) => {
    console.log("Inside passport.authenticate() callback");
    console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
    console.log(`req.user: ${JSON.stringify(req.user)}`);
    req.login(user, (err) => {
      console.log("Inside req.login() callback");
      console.log(`req.session.passport: ${JSON.stringify(req.session.passport)}`);
      console.log(`req.user: ${JSON.stringify(req.user)}`);
      return res.send("You were authenticated & logged in!\n");
    });
  })(req, res, next);
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

router.get("/authrequired", (req, res) => {
  console.log("Inside GET /authrequired callback");
  console.log(`User authenticated? ${req.isAuthenticated()}`);
  if (req.isAuthenticated()) {
    res.send("you hit the authentication endpoint\n");
  } else {
    res.redirect("/");
  }
});

module.exports = router;
