//Routes per le operazioni CRUD

var express = require('express');
var router = express.Router();
const routers = require("../controller/crud")

//CREATE: un documento ad una collection
router.put('/:collezione', routers.setData);

//READ: tutti i dati da una collection
router.get('/:collezione', routers.getCollection);

//dato e una collezione ti ritorna il documento corrispondente all'id
router.get('/one/:collezione/:id', routers.getOneDocument);

module.exports = router;