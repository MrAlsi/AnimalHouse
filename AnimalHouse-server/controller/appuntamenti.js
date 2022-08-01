
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
