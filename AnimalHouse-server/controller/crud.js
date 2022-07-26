/***    Controller per le operazioni CRUD base    ***/

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

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

//passata una collezione restituisce solo il documento con quell'id
exports.getOneDocument = async (req,res)=> {
  console.log("collezione", req.params.id)
  return await db.collection(`${req.params.collezione}`).findOne({_id: ObjectId(req.params.id) }, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      console.log("ciao1",cursor);
      res.json(cursor);
  });
}


//passata una collezione elimina solo il documento con quell'id
exports.deleteOneDocument= async(req,res)=>{
  console.log("collezione", req.params.id)
  return await db.collection(`${req.params.collezione}`).deleteOne({_id: ObjectId(req.params.id) }, (err,cursor)=>{
    if(err) console.log ("Err: ", err);
    console.log("ciao",cursor);
    res.json(cursor);
  });
}

//passata una collezione aggiorna la password del documento con quell'id
exports.updateOnePasswordDocument = (req, res) => {
  const body = req.body.pp;
  //console.log("Body:", req.body.pp);
  return db.collection(`${req.params.collezione}`).updateOne({_id:ObjectId(req.params.id)},{$set:{"password": body}}, (err,cursor)=>{
    if(err) console.log ("Err: ", err);
    console.log("ciao",cursor);
    res.json(cursor);
  });
}

//passata un user cerca gli user con quell'user
exports.cercaUser = async (req,res)=> {
  console.log("collezione", req.params.collezione);
  return await db.collection(`${req.params.collezione}`).findOne({username: (req.params.username) }, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      console.log("ciao",cursor);
      res.json(cursor);
  });
}

exports.cercaRecProf = async( req,res)=>{
  return await db.collection('recensioni').find({professinista: (req.params.id) }).toArray((err, risp)=>{
      if(err) console.log ("Err: ", err);
      console.log("ciao",risp);
      res.json(risp);
  });
}









