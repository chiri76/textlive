var res,req,
   fs = require('fs'),
   url = require('url'),
   querystring = require('querystring');
   
 exports.init = function(response,request)
 {
 	res = response;
 	req = request;

    var postData = '';
 	req.setEncoding('utf-8');
 	req.addListener('data',function(postDataChunk)
 	{
          postData+= postDataChunk;
 	});

 	req.addListener('end',function(){

          var param = querystring.parse(postData);
          console.log(param);
          res.writeHead(200,{'Content-Type':'text/plain'});
          res.end('received param:'+param.name+','+param.book);
 	});
 }
