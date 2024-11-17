const express = require('express');
// const flash = require('connect-flash');
const app = express();
const port = 3000;

const expressSession = require('express-session');

app.use(expressSession({
    secret:"Random texts", // the secret should be unique and because of this only the whole code in encrypted.
    resave: false,
    saveUninitialized: false,
}))

app.get('/', (req,res)=>{
    res.send("Hello, world!");
})

app.get('/create', (req,res, next)=>{
    req.session.polo = true;
    res.send("done");
    next();
})
app.get('/check', (req,res, next)=>{
    console.log(req.session.polo);
    
})



// Middleware definations 

// app.use((req,res,next)=>{
//     console.log("Hey im the middleware!");
//     next();
// })



// app.get('/about', (req,res)=>{
//     res.send("About page");
// })


app.listen(port)

