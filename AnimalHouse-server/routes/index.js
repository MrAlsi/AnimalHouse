var express = require('express');
var router = express.Router();
const login = require("../controller/login");
const registrazione = require ("../controller/registrazione");
const nodemailer = require ('nodemailer');
const dotenv = require('dotenv');
const { getCuriosity } = require('../controller/curiosita');
const {cercaProfessionista, cercaTipo}= require ("../controller/professionista");

dotenv.config({ path: '.env'});

let codice;

let transport=nodemailer.createTransport({
  host: 'smtp.live.com',
  port: 465,
  service: "hotmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORDMAIL
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
    from: process.env.MAIL,
    to: req.params.email,
    subject: "codice cambio password",
    text: `codice: ${codice}`
  }
  console.log("messaggio", message);
  console.log("env",process.env.MAIL);

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
router.get('/curiosita', getCuriosity)


//passato un nome di restituisce i professionisti con quel nome
router.get('/professionisti/:nome', cercaProfessionista);

//passato un tipo ti restituisce i professionisti con quel tipo
router.get('/prof/professionisti/:tipo', cercaTipo);


module.exports = router;