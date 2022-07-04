const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const { db } = require("../connessioneDB");
/*const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const URI = process.env.URI;
const mongo = new MongoClient(URI);
const db = mongo.db("AnimalHouse");*/

exports.getCollection = (req, res)=>{
    db.collection(`${req.params.collezione}`).find().toArray((err, risp) => {
        if(err) throw err;
        console.log("res", risp);
        res.json(risp);
      })
    
}

exports.setData = (req, res) => {
  const body = req.body;
  console.log("Body:", req.body);
  try{
    return db.collection(`${req.params.collezione}`).insertOne(body);
  } catch (e) {
    console.log(e);
  }
}


// ! secondo me si possono unire in un unico ~Alsi
exports.controlloUtente = async (req, res) => {
  console.log("Credenziali  ", req.body);
  return await db.collection("utenti").findOne({username: req.body.user, password: req.body.password}, (err, cursor) => {
    if(err) console.log("Err: ", err);
    console.log(cursor);
    res.json(cursor);
  });
}

exports.login = async (req, res) => {
    const payload = req.body;
    token = jwt.sign(payload, "PASSWORDFORTE");
    res.json(token);
}