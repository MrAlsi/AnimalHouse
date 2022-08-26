/***    Controller per le operazioni CRUD base    ***/

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");


exports.getCuriosity = (req, res)=>{
  //console.log(db);
  db.collection(`curiosita`).find().sort( { "animale": 1 } ).toArray((err, risp) => {
      if(err) throw err;
      //console.log("res", risp);
      res.json(risp);
    }) 
}