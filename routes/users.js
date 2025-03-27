const express = require('express');
const router = express.Router();

// Step 2: Create variables ratio and acc
let ratio = 0.75;
let acc = 1000;

// Define the route
router.get('/', (req, res, next) => {
  // Step 3: Modify acc by multiplying it with ratio
  acc *= ratio;

  // Step 4: Modify the response to display the result of acc
  res.send(`Value is: ${acc}`);
});

module.exports = router;
