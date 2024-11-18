const express = require('express');
const expressSession = require('express-session');
const flash = require('connect-flash');

const app = express();
const port = 3000;

// Initialize session middleware
app.use(
  expressSession({
    secret: 'Random secret', // A unique secret key
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize flash middleware
app.use(flash());

// Route to set and redirect with flash message
app.get('/', (req, res) => {
  req.flash('error', 'Invalid Credentials'); // Set flash message
  res.redirect('/error'); // Redirect to /error
});

// Route to display flash message
app.get('/error', (req, res, next) => {
  const message = req.flash('error'); // Retrieve and consume flash message
  if (message.length > 0) {
    res.send('Error occurred: ' + message);
  } else {
    res.send('No error message found.');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
