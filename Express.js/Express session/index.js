// const expressSession = require('express-session');
// const express = require('express');
// const app = express();

// const port = 3000; // set the port

// // Session middleware
// app.use(expressSession({
//   secret: "Random texts", // the secret should be unique and secure
//   resave: false,
//   saveUninitialized: false,  // If a session does not exist, it will not be saved to the store.
// }));

// // Root route
// app.get('/', (req, res) => {
//   res.send("Hello, world!");
// });

// // Create session variable
// app.get('/create', (req, res) => {
//   req.session.polo = true; // Set a session variable
//   res.send("Session variable 'polo' set to true!");
// });

// // Check session variable
// app.get('/check', (req, res) => {
//   const poloValue = req.session.polo;
//   console.log("Session polo:", poloValue);
//   if (poloValue) {
//     res.send(`Session variable 'polo' exists and is ${poloValue}`);
//   } else {
//     res.send("Session variable 'polo' is undefined.");
//   }
// });

// // Start the server
// app.listen(port);

const express = require('express');
const expressSession = require('express-session');
const PORT = 3000;
const app = express();

app.use(expressSession({
  secret :"random exncryption key",
  resave: false,
  saveUninitialized : false,
}));


app.get("/create", (req,res,next)=>{
  req.session.name = true;
  res.send("done");
  next();

})

app.get('/check', (req,res,next)=>{
  console.log(req.session.name);
  next()
})

app.listen(PORT);
