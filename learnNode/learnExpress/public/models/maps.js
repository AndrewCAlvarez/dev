var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var mapsSchema = new Schema({
    name: String
});

mongoose.model("maps", mapsSchema);
