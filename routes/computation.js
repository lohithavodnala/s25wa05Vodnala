var express = require('express');
var router = express.Router();

// List of Math functions
const mathFunctions = [
    Math.abs,   // 0 -> Absolute Value
    Math.sqrt,  // 1 -> Square Root
    Math.cbrt,  // 2 -> Cube Root
    Math.log10, // 3 -> Logarithm Base 10
    Math.exp,   // 4 -> Exponential
    Math.sin,   // 5 -> Sine
    Math.cos,   // 6 -> Cosine
    Math.tan,   // 7 -> Tangent
    (x) => x * 2,  // 8 -> Multiply by 2
    Math.round  // 9 -> Rounding
];

// Change this to the last digit of your student ID
const lastDigit = 3;  // Update this with your actual last digit
const selectedFunction = mathFunctions[lastDigit];

router.get('/', function(req, res) {
    let x = req.query.x ? parseFloat(req.query.x) : Math.random() * 100; // Use query param or random

    if (isNaN(x)) {
        return res.status(400).send("Invalid input: 'x' must be a number.");
    }

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
