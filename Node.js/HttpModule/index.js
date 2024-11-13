const http = require('http');
port  = 3000;
// var server = http.createServer((req,res)=>{
//    res.end("Are you serving this")
// })


var server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Welcome to the homepage!");
    }
    else if(req.url === '/profile'){
        res.end("Welcome to profile!");    
    }
    else if(req.url=== '/user'){
        res.end("Welcome to user!");
    }
})


server.listen(port);