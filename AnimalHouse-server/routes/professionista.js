var express = require('express');
var router = express.Router();
const routers = require("../controller/professionista");


//passato un nome ti restituisce i professionisti con quel nome
router.get('/professionisti/:nome', routers.cercaProfessionista);

//passato un tipo ti restituisce i professionisti con quel tipo
router.get('/:tipo', routers.cercaTipo);

//dato un professionista cerca le recensioni su di lui
router.get('/recensioni/:professionista', routers.cercaRecProf);

//dato un id elimina le recnesioni con quel professionista
router.delete('/recensioni/:professionista', routers.deleteRec);

module.exports = router;