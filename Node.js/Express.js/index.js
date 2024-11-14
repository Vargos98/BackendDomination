const express = require('express');
const app = express();
const port = 3000;

// Middleware definations 

app.use((req,res,next)=>{
    console.log("Hey im the middleware!");
    next();
})

app.get('/', (req,res)=>{
    res.send("Hello, world!");
})

app.get('/about', (req,res)=>{
    res.send("About page");
})


app.listen(port)

