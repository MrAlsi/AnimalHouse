var express = require('express');
var router = express.Router();
const routers = require("../controller/giochi")

//Aggiungere punteggio di un quiz
router.put('/aggiungiPunteggio/quiz', routers.aggiungiPunteggioQuiz);

//Aggiungere punteggio del memory
router.put('/aggiungiPunteggio/memory', routers.aggiungiPunteggioMemory);

//Aggiungere punteggio dell'impiccato


//Prendere i punteggi di un singolo giocatore per classifica personale


//Prendere tutti i punteggi per la classifica globale
router.get('/punteggiGlobaliQuiz', routers.getPunteggiGlobaliQuiz)

module.exports = router;