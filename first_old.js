

let http = require('http');
let dt = require('./firstmodule');

let url = require('url');

var fs = require('fs');

http.createServer(function(req,res){

    fs.readFile("demoprofile1.html",function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

    fs.appendFile("mynewfile.txt","hello",function(err){
        if(err) throw err;
        console.log("saved");
    });

    fs.open("newfile2.txt","w",function(err,file){
        if (err) throw err;
        console.log("saved!");
    });

    fs.writeFile("newfile3.txt","hello3",function(err){
        if (err) throw err;
        console.log("saved3!");
    });

    fs.unlink("newfile2.txt",function(err){
        if (err) throw err;
        console.log("deleted");
    });

    // res.writeHead(200,{'Content-Type':'text/html'});

    // // res.write("The date of curretn time is: "+ dt.myDateTime()+"\n");

    // var q= url.parse(req.url,true).query;

    // var txt = q.year+ " "+q.month;

    // // res.write(req.url);

    // res.end(txt);


}).listen(8080);


