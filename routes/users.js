var express = require('express');
var router = express.Router();

// Initialize variables
let ratio = 0.75;
let acc = 1000;

// Define the /users endpoint
router.get('/', function(req, res, next) {
    acc *= ratio;  // Multiply acc by ratio
    res.send(`Value is: ${acc.toFixed(2)}`);  // Send the updated value
});

module.exports = router;
