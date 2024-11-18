const express = require('express');
const app = express();

app.get('/', (req,res)=>{
  res.send("Homepage");
});

app.get("/profile/:username", (req,res)=>{
  const username = req.params.username; // storing the value passed in the url parameter
  res.send(`Hello, ${username}!`);
});

// Now multiple dynamically registered users data

app.get("/author/:username/:age", (req,res)=>{
  const username = req.params.username;
  const age = parseInt(req.params.age);
  res.send(`Author ${username} and his age is ${age}`);
})

app.listen(3000);