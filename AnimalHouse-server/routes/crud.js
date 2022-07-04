var express = require('express');
var router = express.Router();
const routes = require("../controller/ruotes")

//Prendi tutti i dati da una collection
router.get('/:collezione', routers.getCollection);

//Aggiungi un documento ad una collection
router.put('/:collezione', routers.setData);


module.exports = router;