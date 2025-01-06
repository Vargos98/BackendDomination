const express = require('express');
const app = express();
const PORT = 3000;

const {userModel, validateModel }= require('./models/user.model.js');
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/create', async (req, res) => {
  const { name, username, age, contact, email } = req.body;
  validateModel({name, username, age, contact,email});
  res.send("check console");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

