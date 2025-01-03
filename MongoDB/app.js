const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user.model.js");
const debuglog = require("debug")("development:appconfig");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vargos98:9828206Uk@cluster0.p4y9u.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Define routes

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the application!");
});

// Create user route
app.get("/create/:username/:name/:email/:password", async (req, res, next) => {
  try {
    // Extract user data from req.params
    const { username, name, email, password } = req.params;

    // Validate required fields
    if (!username || !name || !email || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Create the user
    const createdUser = await userModel.create({
      username,
      name,
      email,
      password,
    });

    console.log("Created user:", createdUser);
    res.status(201).send(createdUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ error: "An error occurred while creating the user" });
  }
});

app.get('/AllUsers',async(req,res)=>{
  try{
    const users = await userModel.find({});
    res.send(users);
  } catch(error){
    console.error(error);
  }
})

// Read user route
app.get("/read", async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: "Vargos98" });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    debuglog("Found user:", user);
    res.send(user);
  } catch (error) {
    console.error(error) // Pass the error to the error-handling middleware
  }
});


app.get("/update",async (req,res,next)=>{
  const user = await userModel.findOneAndUpdate({name:"Moni"},{name:"Moni Kumar"}, {new:true})
  res.send(user);
})


app.get("/delete", async (req,res,next)=>{
  const user = await userModel.findOneAndDelete({name:"Moni Kumar"})
  res.send(user);
})


// Error handling middleware
// app.use((error, req, res, next) => {
//   console.error("Error:", error);
//   res.status(500).send({ message: "An internal error occurred", error });
// });

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
