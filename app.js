const http = require('http');
 
http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/html"
  });
  res.end("Hello World");
}).listen(process.env.PORT);
 
console.log('Server is running at port 8000');