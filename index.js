var res,req,
   fs = require('fs'),
   url = require('url');

 exports.init = function(response,request)
 {
 	res = response;
 	req = request;

 	var readPath = __dirname + '/index.html';
 	console.log('readPath'+readPath);
 	var indexPage = fs.readFileSync(readPath);
 	res.writeHead(200,{'Content-Type':'text/html'});
 	res.end(indexPage);
 }
