//Controller per le operazioni CRUD base

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
//const { db } = require("../connessioneDB");
// ! Risolvere perché non vada il modulo connessione DB
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const URI = process.env.URI;
const mongo = new MongoClient(URI);
const db = mongo.db("AnimalHouse");
// ! Risolvere perché non vada il modulo connessione DB

//CREATE: inserisce un nuovo documento in una collezione passata per parametro,
exports.setData = (req, res) => {
  const body = req.body;
  console.log("Body:", req.body);
  try{
    return db.collection(`${req.params.collezione}`).insertOne(body);
  } catch (e) {
    console.log(e);
  }
}

//READ: legge un'intera collezione passato come parametro nell'URL
exports.getCollection = (req, res)=>{
  console.log(db);
    db.collection(`${req.params.collezione}`).find().toArray((err, risp) => {
        if(err) throw err;
        console.log("res", risp);
        res.json(risp);
      })
    
}




