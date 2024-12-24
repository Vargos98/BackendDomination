// CORS stands for Cross-Origin Resource Sharing, which allows you to request a specific resource through a specific domain and domain name without prompting the user for permission to access that domain without prompting the user for permission.

 const express = require('express')
 const app = express();
 const cors = require('cors');

 app.use(cors()); // enable CORS middleware

// Now we can define as many routes as we want and CORS will allow access to all of them to another domain.



//  Also if we want to share a data from a specific route only then we can use this 

app.get('/shareable',cors(),(req,res)=>{
  res.send("shareable data");
})



 app.get('/', (req,res)=>{
   res.send('Hello from Express.js');
 })

 app.listen(3000);