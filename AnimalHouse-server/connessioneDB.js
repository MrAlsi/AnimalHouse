const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});
const URI = process.env.URI;
const mongo = new MongoClient(URI);
const db = mongo.db("AnimalHouse");
//console.log("URI", URI)
module.exports = db;