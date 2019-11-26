const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const app = express();
const port = 9000;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(session({ secret: "cats" }));

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
  console.log("MongoDB connected!");
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

//  404 ERROR
app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
