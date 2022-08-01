
var express = require('express');
var router = express.Router();
const routers = require("../controller/appuntamenti");

router.put("/", routers.aggiungiAppuntamento)
router.get("/:idProfessionista", routers.getAppuntamenti);

module.exports = router;