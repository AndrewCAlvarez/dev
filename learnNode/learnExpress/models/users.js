var mongoose = require("mongoose");

var usersSchema = mongoose.Schema({
    name: String
});

mongoose.model("User", usersSchema, "users");
