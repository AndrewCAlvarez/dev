const express = require("express");
const router = express.Router();
const fs = require("fs");
const xml2js = require("xml2js");

var parser = new xml2js.Parser();

router.get("/", (req, res) => {
  var parseString = require("xml2js").parseString;
  var xml = "<root>Hello xml2js!</root>";
  parseString(xml, function(err, result) {
    console.dir(result);
    res.send(result);
  });
  //   fs.readFile(__dirname + "../../D&D App Files/Bestiary/Curse of Strahd Bestiar.0.xml", function(
  //     err,
  //     data
  //   ) {
  //     parser.parseString(data, function(err, result) {
  //       console.dir(result);
  //       console.log("Done");
  //       res.send(result);
  //     });
  //   });
});

module.exports = router;
