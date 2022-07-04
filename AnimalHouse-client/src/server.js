var express= require ("express");
var path= require ("path");
var bodyParser= require("body-parser");
var mongo =require("mongoose");

//mongodb+srv://user:<PaSsWoRd1!>@animalhouse.taxdxih.mongodb.net/?retryWrites=true&w=majority


var db= mongo.connect("mongodb://localhost:4200", function(err,response){
    if(err){console.log(err);}
    else{console.log("connected to"+ db, "+", response);}
});

var app= express();
app.use(bodyParser());
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin","http://localhost:4200");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers","X-Request-With,coontent-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

var Schema=mongo.Schema;

var UsererSchema=new Schema({
    name: {type: String},
    address: {type: String},
},{versionKey: false});

var model= mongo.model("users", UsererSchema, "users");

app.post("/api/SaveUser", function(req,res){
    var mod= new model(req.body);
    if(req.body.mode=="Save"){
        mod.save(function(err,data){
            if(err){
                res.send(err);
            }else{
                res.send({data: "Record has been Inserted..!!"});
            }
        });
    }else{
        model.findByIdAndUpdate(req.body.id,{name: req.body.name, address: req.body.address},
            function (err,data){
                if(err){
                    res.send(err);
                }else{
                    res.send({data: "Record has been Deleted..!!"});
                }
            });
    }
})
