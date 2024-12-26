const express = require('express');
const app = express();
const PORT = 3000;
const users =[

  {
    id:1,
    name: 'John',
    kidneys : 2,
    health : 80,
    bloodType: 'A+'
  },
  {
    id:2,
    name: 'Alice',
    kidneys : 3,
    health : 90,
    bloodType: 'B+'

  },
  {
    id:3,
    name: 'Bob',
    kidneys : 4,
    health : 70,
    bloodType: 'AB+'
  },
  {
    id:5,
    name: 'Charlie',
    kidneys : 5,
    health : 60,
    bloodType: 'O+'
  },
  {
    id:6,
    name: 'David',
    kidneys : 1,
    health : 100,
    bloodType: 'A-'
  }
]
app.get('/health/:id', (req, res) => {
  const id = req.params.id,
  userFound = users.find(user => user.id === parseInt(id));
  res.send(`Hi ${userFound.name} you have ${userFound.kidneys} kidneys and your health is ${userFound.health}`);
});

app.post('/health/:id/:kidney',(req,res)=>{
  const id = req.params.id,
  kidney = req.params.kidney,
  userFound = users.find(user => user.id === parseInt(id));
  if(userFound){
    userFound.kidney = kidney;
    res.send(`Hi ${userFound.name} your number of kidney's has been updated to ${kidney}`);
  }else{
    res.status(404).send('User not found');
  }
})


app.listen(PORT)