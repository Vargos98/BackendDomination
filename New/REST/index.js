const express = require('express');

const app = express();
const PORT = 3000;
const fs = require("fs");
const users = require('./MOCK_DATA.json')

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/',(req,res)=>{
  res.send("Hello from the users database")
})


// GET- To retrieve all users 
app.get('/api/users', (req, res) => {
  return res.json(users);
})

// GET/users/1 - Get the user with ID 1
app.get('/api/users/:id',(req,res)=>{
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id )
   res.json(user);
})


app.post('/api/users',(req,res)=>{
  const body = req.body;
  users.push({...body, id: users.length+1})
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
    return res.json({status:"pending"});
  })
  
 
})

app.listen(PORT, () => {
  console.log(`Port running on ${PORT}`);
})