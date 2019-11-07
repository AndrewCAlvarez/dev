const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 9000;
app.use(express.json());
app.use(cors());

var routes = require("./routes/api/routes");

//  Connect to MongoDB
const keys = require("./config/keys");
mongoose.connect(keys.mongoURI);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  //    we're connected!
  console.log("MongoDB connected!");
});

//  Use routes from routes folder
app.use("/", routes);

app.listen(port, () => console.log(`Listening on port ${port}!`));

//  404 ERROR
app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
