// const express = require('express');
// const app = express();

// app.get('/', (req,res)=>{
//   res.send("Homepage");
// });

// app.get("/profile/:username", (req,res)=>{
//   const username = req.params.username; // storing the value passed in the url parameter
//   res.send(`Hello, ${username}!`);
// });

// // Now multiple dynamically registered users data

// app.get("/author/:username/:age", (req,res)=>{
//   const username = req.params.username;
//   const age = parseInt(req.params.age);
//   res.send(`Author ${username} and his age is ${age}`);
// })

// app.listen(3000);


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res)=>{
  res.send('Homepage')
})

app.get('/static',(req,res)=>{
  res.send('Static route');
});

app.get('/profile/:name',(req,res)=>{
  const name = req.params.name;
  res.send(`Welcome ${name} to your profile page`);
})

app.get('/official/:name/:age/:rank',(req,res)=>{
  const name = req.params.name;
  const age = parseInt(req.params.age);
  const rank = req.params.rank;

  res.send(`Hello ${name} we know that you are ${age} years old and hold a rank of ${rank}`)
})

app.listen(PORT);