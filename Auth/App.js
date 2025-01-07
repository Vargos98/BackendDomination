const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

const port = 5000;

app.get('/', (req, res) => {
  res.send(`Welcome`);
});

app.post('/encrypt', async (req, res) => {
  let salt = await bcrypt.genSalt(10);
  res.send(salt);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
