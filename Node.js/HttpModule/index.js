const http = require('http');
port  = 3000;
var server = http.createServer((req,res)=>{
   res.end("Are you serving this")
})

server.listen(port);