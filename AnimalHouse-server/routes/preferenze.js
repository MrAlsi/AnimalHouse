var express = require('express');
var router = express.Router();
const routers = require("../controller/preferenze");

router.delete("/:id",routers.deletePrefe);



module.exports = router;