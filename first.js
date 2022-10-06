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
    
    // var dancerNamesRaw = fs.readFileSync("dancer_names.json");
    // var dancerObj = JSON.parse(dancerNamesRaw);
    // var dancerNamesRaw = fs.readFileSync("dancer_names2.json");
    // var dancerObj2 = JSON.parse(dancerNamesRaw);

    // var dancerNamesObj = [dancerObj,dancerObj2];

    // var dancers= [add_dancer("dancer_1.json"),
    // add_dancer("dancer_2.json"),
    // add_dancer("dancer_3.json"),
    // add_dancer("dancer_4.json"),
    // add_dancer("dancer_5.json")];

    // dbo.collection("dancers").insertMany(dancers,function(err,res){
    //     if(err) throw err;

    //     console.log("dancer names document insertes");
    //     db.close();
    // });


    

    // dbo.collection("dancers").findOne({},function(err,result){

    //     if(err) throw err;

    //     console.log(result.dancers);
    //     db.close();

    // });

    // dbo.collection("dancers").find({}).toArray(function(err,result){

    //     if(err) throw err;

    //     console.log(result);
    //     db.close();

    // });

    // dbo.collection("dancers").find({}, { projection: { _id: 1, dancers: 1 } }).toArray(function(err,result){
    //     if(err) throw err;

    //     console.log((result[6].dancers));
    //     db.close();
    // });


    var query = {name:/^B/};
    dbo.collection("dancers").find(query).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        db.close();
    });

    // console.log("database has been created!");
    // db.close();
});

function add_dancer(dancerFileName){
    var dancerNamesRaw = fs.readFileSync(dancerFileName);
    return JSON.parse(dancerNamesRaw);
}
