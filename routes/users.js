var express = require('express');
var router = express.Router();

// Initialize variables
let ratio = 0.75;
let acc = 1000;

// Define the /users endpoint
router.get('/', function(req, res, next) {
    // Check if a reset query parameter is provided to reset acc
    if (req.query.reset === "true") {
        acc = 1000;
    } else {
        acc *= ratio;  // Multiply acc by ratio
    }

    res.send(`Value is: ${acc.toFixed(2)}`);  // Send the updated value with 2 decimal places
});

module.exports = router;
