const { MongoClient, ObjectId } = require('mongodb');
const db = require("../connessioneDB");

exports.aggiungiPunteggioQuiz = async (req, res) => {
    const body = req.body;
    console.log("Body:", req.body);
    try{
        db.collection(`punteggioGiochi`).updateOne({"quiz.Punteggio": req.body.punteggio , "_id": ObjectId(req.body._id)}, {$inc: {"quiz.$.count": 1 }} );
    } catch (e) {
      console.log(e);
    }
  }