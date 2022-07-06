var express = require('express');
var router = express.Router();
const login = require("../controller/login");
const registrazione = require ("../controller/registrazione");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANIMAL HOUSE SERVER' });
});


router.put('/ricercaUtenti', login.controlloUtente);
router.put('/login', login.login);
router.put('/controllaUsername', registrazione.controllaUsername );
router.put('/controllaEmail', registrazione.controllaEmail);

module.exports = router;