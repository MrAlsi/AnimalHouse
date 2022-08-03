
var express = require('express');
var router = express.Router();
const routers = require("../controller/appuntamenti");

router.put("/", routers.aggiungiAppuntamento)

router.get("/:idProfessionista", routers.getAppuntamenti);

router.get("/tuoiappuntamenti/:user", routers.getTuoiAppuntamenti);

//elimino appuntamenti di un utente
router.delete("/:user",routers.deleteAppuntamenti);


//elimino appuntamenti di un professionoista dato l'id del prof
router.delete("professionista/:prof",routers.deleteAppuntamentiProf);

//dato un id modifica l'appuntamento
router.put('/:id', routers.updateOneAppuntamento);


module.exports = router;