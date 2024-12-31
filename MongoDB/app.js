const express = require('express');
const mongooseconnection = require('./config/mongoose')
const app = express();

app.get('/', (req,res)=>{
  res.send('Hello from Express.js');
});


app.listen(3000);