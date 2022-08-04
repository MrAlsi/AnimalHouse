//Controller per le operazioni di login

const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

//metodo per controllare non sia già in uso lo username
exports.controllaUsername = async (req,res)=> {
    //console.log("user:", req.body.username);
    return await db.collection("utenti").findOne({username: req.body.username}, (err,cursor)=>{
        if(err) console.log ("Err: ", err);
        //console.log(cursor);
        res.json(cursor);
    });
}

//metodo per controllare non sia già in uso la mail
exports.controllaEmail = async (req,res)=> {
    //console.log("mail:", req.body.email);
    return await db.collection("utenti").findOne({mail: req.body.email}, (err,cursor)=>{
        if(err) console.log ("Err: ", err);
        //console.log(cursor);
        res.json(cursor);
    });
}

exports.getAnimali = async (req, res) => {
    db.collection('listaAnimali').find().sort( { "name": 1 } ).toArray((err, risp) => {
        if(err) throw err;
       // console.log("res", risp);
        res.json(risp);
    }) 
}