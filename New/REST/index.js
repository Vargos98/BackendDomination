const express = require('express');

const app = express();
const PORT = 3000;


app.get('/',(req,res)=>{
  res.send("Welcome to the express Server !")
})


app.listen(PORT,()=>{
  console.log(`Port running on ${PORT}`);
})