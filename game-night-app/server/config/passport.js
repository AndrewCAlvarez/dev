const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

//  load user model
const User = require("./../models/userSchema");

module.exports = function(passport) {
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
        if (user.password != password) {
          console.log("password" + password);
          console.log("Incorrect password.");
          return done(null, false);
        }
        console.log("PASSPORT AUTHENTICATION SUCCESSFUL");
        return done(null, user);
      });
    })
  );

  //  serialize is used in sessions to allow users to get data again without using creds
  passport.serializeUser(function(user, done) {
    console.log(`\nSerializer: ${user}`);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    console.log(`Deserializing: userid = ${id}`);
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
