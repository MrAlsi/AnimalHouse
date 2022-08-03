//Routes per le operazioni riguardati i post
var express = require('express');
var router = express.Router();
const routers = require("../controller/post")

//prendi tutti i post
router.get('/getPosts', routers.getPosts);

//aggiungi le persone a cui piace il post
router.put('/persone/:id', routers.updateMipiace);

//aggiorna i like di un post
router.put('/like/:id', routers.updateLike);

//togli persone a cui piace il post
router.put('/dislike/:id', routers.dropMipiace);

//dato un user elimino i suoi post
router.delete('/:user',router.deletePost);

module.exports = router;