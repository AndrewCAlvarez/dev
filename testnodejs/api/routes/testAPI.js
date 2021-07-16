const { Router } = require('express');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send({
        title: "Finances",
        income: 900,
        expenses: 900
    });
})

module.exports = router;