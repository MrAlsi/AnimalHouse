var express = require('express');
var router = express.Router();
const login = require("../controller/login")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANIMAL HOUSE SERVER' });
});


router.put('/ricercaUtenti', login.controlloUtente);
router.put('/login', login.login);

module.exports = router;
