// computation.js
var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100; // Use query param or random

    let result;
    let functionName = selectedFunction.name || "customFunction"; // Get function name

    // Handle special case for Log10 (undefined for x <= 0)
    if (selectedFunction === Math.log10 && x <= 0) {
        result = "undefined (log10 is not defined for x <= 0)";
    } else {
        try {
            result = selectedFunction(x);
        } catch (error) {
            result = "Error in computation: " + error.message;
        }
    }

    console.log(`✅ Computation request received: x=${x}, function=${functionName}, result=${result}`);

    res.send(`${functionName} applied to ${x.toFixed(2)} is ${result}`);
});

module.exports = router;

