const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

//passato un nome restituisce i proffessionisti con quel nome
exports.cercaProfessionista = async (req,res)=> {
    //console.log("nome", req.params.nome);
    return await db.collection(`professionisti`).find({nome: {$regex: req.params.nome}}).toArray((err, risp)=>{
        if(err) throw err;
        //console.log("res", risp);
        res.json(risp);
    });
}

//passato un tipo cerca solo i professionisti di quella tipologia
exports.cercaTipo = async (req,res)=> {
    return await db.collection(`professionisti`).find({tipo: req.params.tipo}).toArray((err, risp)=>{
        if(err) throw err;
        //console.log("res", risp);
        res.json(risp);
    });
}

//passato un id di un professionista elimina le sue recensioni
exports.deleteRec= async(req,res)=>{
    //console.log("collezione", req.params.professionista)
    return await db.collection(`recensioni`).delete({professionista: (req.params.professionista) }, (err,cursor)=>{
        if(err) console.log ("Err: ", err);
       // console.log("ciao",cursor);
        res.json(cursor);
    });
}

//passato un utente canclla le rensioni scritte da lui
exports.deleteRecUtente= async(req,res)=>{
    return await db.collection(`recensioni`).delete({utente: (req.params.user) }, (err,cursor)=>{
        if(err) console.log ("Err: ", err);
        //console.log("ciao",cursor);
        res.json(cursor);
    });
}


exports.cercaRecProf = async(req,res)=>{
    //console.log(req.params.professionista);
    return await db.collection('recensioni').find({professionista: (req.params.professionista) }).toArray((err, risp)=>{
        if(err) console.log ("Err: ", err);
        //console.log("ciao",risp);
        res.json(risp);
    });
}