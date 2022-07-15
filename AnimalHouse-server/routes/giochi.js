var express = require('express');
var router = express.Router();
const routers = require("../controller/giochi")

//CREATE: un documento ad una collection
router.put('/aggiungiPunteggio/quiz', routers.aggiungiPunteggioQuiz);

router.get('/punteggiGlobaliQuiz', routers.getPunteggiGlobaliQuiz)

module.exports = router;