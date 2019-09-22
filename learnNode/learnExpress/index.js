const express = require("express");
const fs = require("fs");
const monk = require("monk");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var Schema = mongoose.Schema;

exports.models = require("./models/index");

const port = process.env.PORT || 3000;
const app = express();
mongoose.connect("mongodb://localhost/27017");

var root = "/Users/andrewalvarez/dev/learnNode/learnExpress";

app.use(cors(), express.static("public"));
app.use(express.json()); //for parsing json
app.use(express.urlencoded({ extended: false }));

// app.get("/users", function(req, res) {
//     var db = mongoose.connection;
//     db.on("error", console.error.bind(console, "connection error:"));
//     db.once("open", function() {
//         // we're connected!
//     });

//     mongoose.model("users").find(function(err, users) {
//         res.send(users);
//     });
// });

app.get("/kittens", function(req, res) {
    var db = mongoose.connection;
    db.on("error", console.err.bind(console, "connection error:"));
});

app.get("/users", function(req, res) {
    var db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    console.log("Before db.once");
    db.once("open", function() {
        //connected
        console.log("Connection succesful!");
        var user1 = new User({
            name: "Harry"
        });

        user1.save(function(err, user) {
            if (err) return console.error(err);
            console.log(user.name + " saved to the users collection.");
        });
    });
    console.log("done");
    res.send("GET REQUEST");
});

app.get("/", function(req, res) {
    res.sendFile("/public/index.html", { root: root });
});

app.listen(port, () => console.log("Example app listening on port 3000!"));
