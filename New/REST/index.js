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
    return res.json({status:"success", id:users.length});
  })
  
  
  app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
  
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    users.splice(userIndex, 1); // Remove user from the array
  
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to delete user' });
      }
      res.json({ status: 'success', message: `User ${id} deleted` });
    });
  });

  app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const userIndex = users.findIndex(user => user.id === id);
  
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    users[userIndex] = { ...users[userIndex], ...body }; // Merge old and new data
  
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to update user' });
      }
      res.json({ status: 'success', user: users[userIndex] });
    });
  });
  
 
})

app.listen(PORT, () => {
  console.log(`Port running on ${PORT}`);
})