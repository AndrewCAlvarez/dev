const express = require("express");
const fs = require("fs");
const monk = require("monk");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

exports.models = require("./models/index");

const port = process.env.PORT || 3000;
const app = express();
const url = "mongodb://localhost/27017";

var root = "/Users/andrewalvarez/dev/learnNode/learnExpress";

app.use(cors(), express.static("public"));
app.use(express.json()); //for parsing json
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
//////////////////////////////////////////////////////
///This is for uploading images with Multer//////////
////////////////////////////////////////////////////

///////////////////////////////////////////////////
app.post("/users", function(req, res) {
    MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        function(err, client) {
            const db = client.db("users");
            console.log(req.body);
            db.collection("users").insertOne({ name: req.body });
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
            var cursor = db.collection("users").find({});
            myObjArr = [];
            var myObj = {};
            function iterateFunc(doc) {
                // console.log(JSON.stringify(doc.name, null, 4));
                myObjArr.push(doc.name.userName);
                console.log("array in function: " + myObjArr);
            }
            function errorFunc(error) {
                console.log(error);
            }
            cursor.forEach(iterateFunc, errorFunc);
            setTimeout(function() {
                console.log("\n\narray after function: " + myObjArr + "\n\n");
                res.send(myObjArr);
            }, 1000);
            client.close();
        }
    );
});

app.get("/", function(req, res) {
    res.sendFile("/public/index.html", { root: root });
});

app.listen(port, () => console.log("Example app listening on port 3000!"));
