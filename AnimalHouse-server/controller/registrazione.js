//Controller per le operazioni di login

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
//const { db } = require("../connessioneDB");
// ! Risolvere perché non vada il modulo connessione DB
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const URI = process.env.URI;
const mongo = new MongoClient(URI);
const db = mongo.db("AnimalHouse");

//metodo per controllare non sia già in uso lo username
exports.controllaUsername = async (req,res)=> {
    console.log("user:", req.body);
    return await db.collection("utenti").findOne({username: req.body.username}, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      console.log(cursor);
      res.json(cursor);
    });
  }