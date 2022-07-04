var express = require('express');
var router = express.Router();
const routes = require("../controller/ruotes")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.put('/ricercaUtenti', routes.controlloUtente);
router.put('/login', routes.login);

module.exports = router;
