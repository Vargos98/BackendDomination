// REST API- JSON

// GET/users - list all users
// GET/users/1 - Get the user with ID 1
// POST/users - Create a new user
//PATCH /users/1 - Edit the user with ID 1
//DELETE/users/1 - Delete the user with ID 1





const express = require('express');
const app = express();
const PORT = 4000;
const users = require("./MOCK_DATA.json")

// this route will provide an HTML doc response
app.get("/users", (req, res) => {
  const html = `
    <ul>
      ${users.map(user => `
        <li>
          ${user.id} - ${user.first_name} ${user.last_name} - ${user.email} - ${user.gender} - ${user.job_title}
        </li>
      `).join('')}
    </ul>
  `;
  res.send(html);
});

// This route will provide an json response
app.get("/api/users", (req,res)=>{
  return res.json(users);
})


app.listen(PORT,()=>{
  console.log(`Server running on: ${PORT}`)
})