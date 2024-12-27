const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs');

app.set('view engine', "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(express.static(path.join(__dirname,"public")));

const PORT =3000;

app.get('/',(req,res)=>{
  fs.readdir('./hisaab',(err,data)=>{
    if(err) throw err;
    res.locals.hisaab = data.map(item=>path.parse(item).name)
    res.render('index')
  })
  res.render('index')
  
})

app.listen(PORT)