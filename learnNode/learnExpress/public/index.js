const express = require("express");
const fs = require("fs");
const monk = require("monk");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const request = require("request");

var upload = multer({ dest: "uploads/" });

exports.models = require("./models/index");

const port = process.env.PORT || 3000;
const app = express();
const url = "mongodb://localhost/27017";

app.use(cors());
app.use(express.json()); //for parsing json
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

//////////////////////////////////////////////////////
///This is for uploading images with Multer//////////
////////////////////////////////////////////////////
app.post("/upload", upload.single("avatar"), function(req, res, next) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, client) {
            const db = client.db("boardImage");
            console.log(req.file);
            console.log(req.body);
            db.collection("users").insertOne({
                imageName: req.body.imageName,
                image: req.file
            }); //insert image into
            client.close();
        }
    );
});
///////////////////////////////////////////////////
////////// This holds the image visible //////////
///////// to everyone.                 //////////
////////////////////////////////////////////////

app.get("/boardImage", function(req, res) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, client) {
            const db = client.db("boardImage");
            var cursor = db.collection("users").find({ imageName: "default" });
            myObjArr = [];
            function iterateFunc(doc) {
                console.log(doc.image.path);
                console.log("Loaded");
                myObjArr.push(doc.image.path);
            }
            function errorFunc(error) {
                console.log(error);
            }
            cursor.forEach(iterateFunc, errorFunc);
            setTimeout(function() {
                res.send(myObjArr[0]);
            }, 1000);
            client.close();
        }
    );
    // res.send("uploads/76f6f98d1d932dffb2afa87b5c98cf25");
});

app.get("/boardImage/all", function(req, res) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, client) {
            const db = client.db("boardImage");
            var cursor = db.collection("users").find();
            myObjArr = [];
            function iterateFunc(doc) {
                console.log(doc.image.path);
                myObjArr.push(doc.image.path);
            }
            function errorFunc(error) {
                console.log(error);
            }
            cursor.forEach(iterateFunc, errorFunc);
            setTimeout(function() {
                console.log(myObjArr[0]);
                res.send(myObjArr);
            }, 1000);
            client.close();
        }
    );
});

app.post("/boardImage", function(req, res) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, client) {
            const db = client.db("boardImage");
            console.log(req.body);
            db.collection("users").replaceOne({ imageName: "Default" });
            client.close();
        }
    );
});

app.get("/users", function(req, res) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, client) {
            const db = client.db("users");
            var cursor = db.collection("users").find({ imageName: "Slowpoke" });
            console.log(req.query.name);
            myObjArr = [];
            function iterateFunc(doc) {
                myObjArr.push(doc.image.path);
            }
            function errorFunc(error) {
                console.log(error);
            }
            cursor.forEach(iterateFunc, errorFunc);
            setTimeout(function() {
                res.send(myObjArr[0]);
            }, 1000);
            client.close();
        }
    );
});

var root = "/Users/andrewalvarez/dev/learnNode/learnExpress/public/";

app.get("/", function(req, res) {
    res.sendFile("index.html", { root: root });
});

app.listen(port, () => console.log("Game Night app listening on port 3000!"));
