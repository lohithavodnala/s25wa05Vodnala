var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let value1 = Math.random() * 10;
  let result = Math.floor(value1);
  res.send(`${value1} is ${result}`);  // ✅ Corrected template literal syntax
});

module.exports = router;  // ✅ Ensured correct module.exports syntax
