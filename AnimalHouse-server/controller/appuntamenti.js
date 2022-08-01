
const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

exports.getAppuntamenti = async (req,res)=> {
    console.log(req.params.idProfessionista);
    return await db.collection(`appuntamenti`).find({idProfessionista: req.params.idProfessionista}).toArray((err, risp)=>{
        if(err) throw err;
        console.log("res", risp);
        res.json(risp);
    });
}

exports.aggiungiAppuntamento = async (req, res) => {
    return await db.collection(`appuntamenti`).insertOne()
}

exports.getTuoiAppuntamenti= async (req,res)=>{
    console.log(req.params.user);
    return await db.collection(`appuntamenti`).find({Subject: req.params.user}).toArray((err, risp)=>{
        if(err) throw err;
        console.log("res", risp);
        res.json(risp);
    });
}

exports.deleteAppuntamenti= async(req,res)=>{
    console.log("collezione", req.params.user)
    return await db.collection(`${req.params.collezione}`).delete({Subject: (req.params.user) }, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      console.log("ciao",cursor);
      res.json(cursor);
    });
}

exports.deleteAppuntamentiProf= async(req,res)=>{
    console.log("collezione", req.params.prof)
    return await db.collection(`${req.params.collezione}`).delete({idProfessionista: (req.params.prof) }, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      console.log("ciao",cursor);
      res.json(cursor);
    });
}
