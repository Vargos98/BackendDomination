const express = require('express');
const app = express();
const PORT = 3000;

// setting up ejs 
app.set('view engine', 'ejs');

//HOW WE CAN HANDLE FORM in EJS

// These 2 lines are important

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
  res.render('index');
})


app.get('/check', (req,res)=>{
  
  console.log(req.query)
  res.send("working");
})

app.listen(PORT);

