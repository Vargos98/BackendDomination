const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userModel = require("./models/user.model.js");
const debuglog = require("debug")("development:appconfig");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://vargos98:9828206Uk@cluster0.p4y9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
app.get("/create", async (req, res, next) => {
  try {
    const createdUser = await userModel.create({
      username: "Vargos9288",
      name: "Umesh bhagat",
      email: "Vargos9828@gmail.com",
      password: "password1234",
    });
    debuglog("Created user:", createdUser);
    res.status(201).send(createdUser);
  } catch (error) {
    console.error(error) // Pass the error to the error-handling middleware
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
