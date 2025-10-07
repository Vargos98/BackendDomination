const express = require('express');
const app = express();
const PORT = 4000;

app.get("/", (req,res)=>{
  return res.send("Hello from express server");
})


app.listen(PORT,()=>{
  console.log(`Server running on: ${PORT}`)
})