var http = require('http'),
 url = require('url'),
 querystring = require("querystring"),
 path = require('path');




 http.createServer(function(req,res)
 {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/favicon.ico') { return;};

    //处理带后缀名的请求
    var  extname =  path.extname(pathname);
    extname = extname? extname.slice(1):"";
    var realPath  =__dirname+'/static' + pathname;


    var module = pathname.substr(1),
        str = url.parse(req.url).query,
        controller = querystring.parse(str).c,
        classObj = '';

        console.log(module);
        console.log(controller);
        
        
        try
        {
        	classObj = require('./'+module+'.js');
        }
        catch(err)
        {
        	console.log('chdir:');
        }

        if (classObj)
        {
        	classObj.init(res,req);
        	if(controller)classObj[controller].call();
        }
        else
        {
        	res.writeHead(404,{'Content-Type':'Text/plain'});
        	res.end('can not find source');
        }
 }).listen(1337);
