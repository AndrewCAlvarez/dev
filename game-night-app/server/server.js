const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());

//  Use routes from routes folder
const routes = require("./routes/api/routes");
app.use("/", routes);

//  Connect to MongoDB
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  //    we're connected!
  console.log("\n\nMongoDB connected!\n\n");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

//  404 ERROR
app.use(function(req, res, next) {
  res.status(404).send("404: Sorry can't find that!");
});
