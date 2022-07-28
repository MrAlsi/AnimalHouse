//Routes per le operazioni CRUD

var express = require('express');
var router = express.Router();
const routers = require("../controller/post")


//aggiungi le persone a cui piace il post
router.put('/persone/:id', routers.updateMipiace);

//togli persone a cui piace il post
router.put('/dislike/:id', routers.dropMipiace);


//aggiorna i like di un post
router.put('/like/:id', routers.updateLike);



module.exports = router;