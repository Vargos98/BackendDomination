const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');

const app = express();
port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, world!');
})


app.listen(port);