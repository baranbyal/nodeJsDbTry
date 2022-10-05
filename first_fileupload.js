var http = require('http');
// var url = require('url');
var fs = require('fs');

var formidable = require("formidable");

// var events = require('events');
// var eventEmitter = new events.EventEmitter();


http.createServer(function (req, res) {
  
  // var q = url.parse(req.url, true);
  // var filename = "." + q.pathname;
  // eventEmitter.on('scream', myEventHandler);
  // fs.readFile(filename, function(err, data) {
  //   if (err) {
  //     res.writeHead(404, {'Content-Type': 'text/html'});
  //     return res.end("404 Not Found");
  //   } 
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   eventEmitter.emit("scream");
  //   return res.end();
// });

  if(req.url=="/fileupload"){
    var form= new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
      var oldPath= files.filetoupload.filepath;
      var newPath = "C:/Users/XPS/"+files.filetoupload.originalFilename;
      fs.rename(oldPath,newPath,function(err){
        if (err) throw err;
        res.write("File uploaded and moved");
        res.end();
      });
      // req.write("File Uploaded");
      // req.end();
    });
  }
else {

  
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
  
}

}).listen(8080);


//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}