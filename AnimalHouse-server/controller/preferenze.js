const { MongoClient, ObjectId } = require('mongodb');
const jwt= require("jsonwebtoken");
const db = require("../connessioneDB");

exports.deletePrefe= async(req,res)=>{
    return await db.collection(`animaliPreferiti`).delete({username: (req.params.id) }, (err,cursor)=>{
      if(err) console.log ("Err: ", err);
      //console.log("ciao",cursor);
      res.json(cursor);
    });
}