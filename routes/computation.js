var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let value1 = Math.random() * 10; // Random number between 0 and 10
  let result = Math.log(value1); // Natural logarithm of the number

  res.send(`${value1} has a natural logarithm of ${result}`);  
});

module.exports = router;
