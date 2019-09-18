const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const multer = require("multer");
var upload = multer({ dest: "uploads/" });

const port = process.env.PORT || 3000;
const app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var root = "/Users/andrewalvarez/dev/learnNode/learnExpress";

app.use(cors(), express.static("public"));
app.use(express.json()); //for parsing json
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res) {
    res.sendFile("/public/index.html", { root: root });
});

app.get("/maps", function(req, res) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("messages");
        dbo.collection("posts")
            .find({})
            .toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                res.send(result);
                db.close();
            });
    });
});

app.post("/maps", function(req, res, next) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var message = req.body;
        var dbo = db.db("messages");
        var myobj = [{ msg: message }];
        dbo.collection("posts").insertMany(myobj, function(err, res) {
            if (err) throw err;
            console.log(req.body);
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
});

app.post("/", function(req, res) {
    res.send("Got a POST request");
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = [
            { name: "John", address: "Highway 71" },
            { name: "Peter", address: "Lowstreet 4" },
            { name: "Amy", address: "Apple st 652" },
            { name: "Hannah", address: "Mountain 21" },
            { name: "Michael", address: "Valley 345" },
            { name: "Sandy", address: "Ocean blvd 2" },
            { name: "Betty", address: "Green Grass 1" },
            { name: "Richard", address: "Sky st 331" },
            { name: "Susan", address: "One way 98" },
            { name: "Vicky", address: "Yellow Garden 2" },
            { name: "Ben", address: "Park Lane 38" },
            { name: "William", address: "Central st 954" },
            { name: "Chuck", address: "Main Road 989" },
            { name: "Viola", address: "Sideway 1633" }
        ];
        dbo.collection("customers").insertMany(myobj, function(err, res) {
            if (err) throw err;
            console.log("Number of documents inserted: " + res.insertedCount);
            db.close();
        });
    });
});

app.put("/user", function(res, res) {
    res.send("Got a PUT request at /user");
});

app.delete("/user", function(req, res) {
    res.send("Got a DELETE request at /user");
});

app.listen(port, () => console.log("Example app listening on port ${port}!"));
