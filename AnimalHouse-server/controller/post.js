const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

exports.getPosts = (req, res) => {
  db.collection('post').find().sort( { "_id": -1 } ).toArray((err, risp) => {
    if(err) throw err;
    //console.log("res", risp);
    res.json(risp);
}) 
}

//aggiorna le persone a cui piace il post
exports.updateMipiace = (req, res) => {
  const body = req.body.user;
 // console.log("Body:", req.body);
  //console.log("req",req);
  return db.collection('post').updateOne({_id:ObjectId(req.params.id)},{$push:{"like": body}}, (err,cursor)=>{
    if(err) console.log ("Err: ", err);
    //console.log("ciao",cursor);
    res.json(cursor);
  });
}

//togli persone nei mi piace
exports.dropMipiace=(req,res)=>{
  //console.log("SONO QUIIIIII")
  const body = req.body.user;
  console.log("Body:", req.body);
  //console.log("req",req);
  return db.collection('post').updateOne({_id:ObjectId(req.params.id)},{$pull:{"like": body}}, (err,cursor)=>{
    if(err) console.log ("Err: ", err);
    console.log("ciao",cursor);
    res.json(cursor);
  });
}

//aggiorna i like di un post
exports.updateLike = (req, res) => {
  const body = req.body.like;
  //console.log("Body:", req.body);
  return db.collection('post').updateOne({_id:ObjectId(req.params.id)},{$set:{"mipiace": body}}, (err,cursor)=>{
    if(err) console.log ("Err: ", err);
   // console.log("ciao",cursor);
    res.json(cursor);
  });
}

//elimino post scritti da un utente
exports.deletePost= async(req,res)=>{
  return await db.collection(`post`).deleteMany({user: (req.params.user) }, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      //console.log("ciao",cursor);
      res.json(cursor);
  });
}