const { Router } = require('express');
var express = require('express');
var router = express.Router();

var data = {
    title: "Finances",
    cost: 1200,
    category: 900
};

var expenses = {
    title: "",
    cost: "",
    category: ""
}

router.get('/', function(req, res){
    console.log(expenses)
    res.send(expenses);
})

router.post('/', function(req,res){
    expenses = req.body.data;
    console.log(expenses);
})

router.post('/delete', (req,res) => {
    data.title = "";
})

router.post('/addExpense', (req, res) => {
    expense = req.body;
    console.log("Expenses: ", expenses);
})


module.exports = router;