//Routes per le operazioni CRUD

var express = require('express');
var router = express.Router();
const routers = require("../controller/crud")

//CREATE: un documento ad una collection
router.put('/:collezione', routers.setData);

//READ: tutti i dati da una collection
router.get('/:collezione', routers.getCollection);

//dato un user ti ritorna i documenti con quell'user
router.get('/:collezione/:username', routers.cercaUser);

//dato e una collezione ti ritorna il documento corrispondente all'id
router.get('/one/:collezione/:id', routers.getOneDocument);

//dato un id elimina il documento in una collezione
router.delete('/:collezione/:id', routers.deleteOneDocument);

//dato un id aggiorna un dato
router.put('/:collezione/:id', routers.updateOnePasswordDocument);




module.exports = router;