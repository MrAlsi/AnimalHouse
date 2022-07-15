var express = require('express');
var router = express.Router();
const login = require("../controller/login");
const registrazione = require ("../controller/registrazione");
const nodemailer = require ('nodemailer');
let codice;

let transport=nodemailer.createTransport({
  host: 'smtp.live.com',
  port: 465,
  service: "hotmail",
  auth: {
    user: 'AnimalHouse2022@hotmail.com',
    pass: 'ProgettoTechWeb2022'
  },
  secureConnection: false,
  tls: {rejectUnauthorized: false}
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ANIMAL HOUSE SERVER' });
});


router.put('/cambiaPassword/:email', function(req,res){
  console.log("no", req.params);
  codice= generateCodice();
  console.log("cod", codice);
  //console.log("transp", transport);

  const message= {
    from: 'AnimalHouse2022@hotmail.com',
    to: req.params.email, //al momento non esiste
    subject: "codice cambio password",
    text: `codice: ${codice}`
  }
  console.log("messaggio", message);

  transport.sendMail(message, function(err, info){
    if(err){
      console.log(err);
    }else{
      //console.log("info",info);
      console.log("inviata");
      res.json({"codice": codice});
    }
  })
});

function generateCodice(){
  return Math.round(Math.random() * 10000);
}

router.put('/ricercaUtenti', login.controlloUtente);
router.put('/login', login.login);
router.put('/controllaUsername', registrazione.controllaUsername );
router.put('/controllaEmail', registrazione.controllaEmail);

module.exports = router;