// REST API- JSON




//PATCH /users/1 - Edit the user with ID 1
//DELETE/users/1 - Delete the user with ID 1





const express = require('express');
const fs = require('fs')
const app = express();
const PORT = 4000;
let users = require("./MOCK_DATA.json")

//Middleware
app.use(express.urlencoded({ extended: false }));

app.route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id)
    return res.json(user || {message:"User not found!"});
  })
  .patch((req, res) => {
    const id = Number(req.params.id)
    const user = users.find(user => user.id  === id);
    if(!user) return res.json({message:"User not found"});
    
    // return res.json({ status: "Pending" });
    Object.assign(user,req.body)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err)=>{
      if(err) return res.json("Error saving data");
      return res.json({status:"Success", updatedUser: user});
    })

  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    users = users.filter(user=> user.id !== id);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),()=>{
      res.json({message:"User deleted"})
    })

    // return res.json({ status: "Pending" })
  })

app.post("/api/users", (req, res) => {
  const body = req.body;


  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: "Succes", id: users.length })
  })


})


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


// GET/users - list all users
// This route will provide an json response
app.get("/api/users", (req, res) => {
  return res.json(users);
})
// GET/users/1 - Get the user with ID 1


// POST/users - Create a new user



app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`)
})