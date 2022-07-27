const { MongoClient, ObjectId } = require('mongodb');
const db = require("../connessioneDB");

exports.aggiungiPunteggioQuiz = async (req, res) => {
  try{
      db.collection(`utenti`).updateOne({"quiz.punteggio": req.body.punteggio , "_id": ObjectId(req.body._id)}, {$inc: {"quiz.$.count": 1 }});
  } catch (e) {
    console.log(e);
  }
}

//Aggiungi punteggio partita a memory
exports.aggiungiPunteggioMemory = async (req, res) => {
  console.log("SONO qui alsi", );
  switch(req.body.carte){
    //Aggiunge al DB in facile
    case 5:
      console.log("Facile")
      try {
        db.collection(`utenti`).updateOne({"_id": ObjectId(req.body._id)}, {$push: {"memory-facile": req.body.punteggio }}, {upsert: true} );
      } catch (e) {
        console.log(e);
      }
      
      break;

    //Aggiunge al DB in medio
    case 8:
      try {
        db.collection(`utenti`).updateOne({"_id": ObjectId(req.body._id)}, {$push: {"memory-medio": req.body.punteggio }}, {upsert: true} );
      } catch (e) {
        console.log(e);
      }
      
      break;

    //Aggiunge al DB in difficile
    default: 
      try {
        db.collection(`utenti`).updateOne({"_id": ObjectId(req.body._id)}, {$push: {"memory-difficile": req.body.punteggio }}, {upsert: true} );
      } catch (e) {
        console.log(e);
      }
      
      break;
    }
}


exports.getPunteggiGlobaliQuiz = async(req, res) => {
  try{
    db.collection(`punteggioGiochi`).find().toArray((err, risp) => {
      if(err) throw err;
      console.log("res", risp);
      res.json(risp);
    })
  } catch {

  }

}