const express = require('express');

const app = express();

app.get('/',(req,res)=>{
  res.send("Hello World!")
})

app.get('/user',(req,res)=>{
  res.send("Hey "+req.query.name);
})

app.listen(8080);