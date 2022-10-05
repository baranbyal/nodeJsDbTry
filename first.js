var mongo = require("mongodb");

var fs= require("fs");
const { errorMonitor } = require("events");


var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
    if(err) throw err;


    var dbo = db.db("mydb");

    // dbo.createCollection("dancers",function(err,res){
    //     if(err) throw err;

    //     console.log("collection created");
    //     db.close();
    // });
    
    var dancerNamesRaw = fs.readFileSync("dancer_names.json");
    var dancerObj = JSON.parse(dancerNamesRaw);
    var dancerNamesRaw = fs.readFileSync("dancer_names2.json");
    var dancerObj2 = JSON.parse(dancerNamesRaw);

    var dancerNamesObj = [dancerObj,dancerObj2];

    // dbo.collection("dancers").insertMany(dancerNamesObj,function(err,res){
    //     if(err) throw err;

    //     console.log("dancer names document insertes");
    //     db.close();
    // });


    

    // dbo.collection("dancers").findOne({},function(err,result){

    //     if(err) throw err;

    //     console.log(result.dancers);
    //     db.close();

    // });

    dbo.collection("dancers").find({}).toArray(function(err,result){

        if(err) throw err;

        console.log(result);
        db.close();

    });

    // console.log("database has been created!");
    // db.close();
});
