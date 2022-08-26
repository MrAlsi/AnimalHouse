//Controller per le operazioni di login

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const  db = require("../connessioneDB");

// Controllo che esista una corrispondenza di username e passoword nel DB
exports.controlloUtente = async (req, res) => {
  //console.log(db);
  //console.log("Credenziali  ", req.body);
  db.collection("utenti").findOne({username: req.body.user, password: req.body.password}, (err, cursor) => {
    if(err) console.log("Err: ", err);
    if(cursor != undefined){
      //console.log("cursor", cursor);

      const payload = {
        "id": cursor._id,
        "username": cursor.username,
        "ruolo": cursor.ruolo,
      };

      token = jwt.sign(payload, "PASSWORDFORTE");
      res.json(token);
    } else {
      res.json(null);
    }
    
  });     
}

//Crea un JWT e lo ritorna per salvarlo nel cookie
exports.login = async (req, res) => {
  
}