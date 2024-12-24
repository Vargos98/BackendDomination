const express = require('express');
const app = express();
const PORT = 3000;

// setting up ejs 
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.send('Hellow world');
})

app.listen(PORT);

