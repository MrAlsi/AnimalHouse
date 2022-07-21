const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

//passato un nome restituisce i proffessionisti con quel nome
exports.cercaProfessionista = async (req,res)=> {
    console.log("nome", req.params.nome);
    return await db.collection(`professionisti`).find({nome: {$regex: req.params.nome}}).toArray((err, risp)=>{
        if(err) throw err;
        console.log("res", risp);
        res.json(risp);
    });
}