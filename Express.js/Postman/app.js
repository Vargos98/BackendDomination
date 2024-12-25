const express = require('express');
const app = express();

const PORT = 3000;
// const users = [
//   {
//     id: 1,
//     name: 'John',
//     age: 25,
//     email: 'john@example.com'
//   },
//   {
//     id: 2,
//     name: 'Alice',
//     age: 30,
//     email: 'alice@example.com'
//   },
//   {
//     id: 3,
//     name: 'Bob',
//     age: 28,
//     email: 'bob@example.com'
//   }
// ];
// const data = [1,2,3,4,5,];

// app.get('/', (req, res) => {
//   res.send('Hello from Express.js');
// });

// app.get('/profile', (req, res) => {
//   // Send the users array as a JSON response
//   res.json({
//     message: 'List of users',
//     users: users
//   });
// });



// app.get('/data',(req,res)=>{
//   res.send(data);
// })

// app.post('/data/:number',(req,res)=>{
//   data.push(parseInt(req.params.number));
//   res.send(data);
// })



app.get('/', (req,res)=>{
 
  res.send(`Hello from Express.js` );
})





app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
