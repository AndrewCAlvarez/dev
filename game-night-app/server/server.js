const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 9000;

const app = express();

// app.use(express.static(path.join(__dirname, "test.html")));

//  cors config
//  accept cookies (credentials) and specify where to accept them from (origin)
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

//  Use routes from routes folder
const routes = require("./routes/api/routes");
app.use("/", routes);

//  Connect to MongoDB
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  //    we're connected!
  console.log("MongoDB connected!\n\n");
});

app.get("/", (req, res) => {
  res.send("Gatorwebdev is working.");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

//  404 ERROR
app.use(function(req, res, next) {
  res.status(404).send("Gatorwebdev.com\n404: Sorry can't find that!");
});
