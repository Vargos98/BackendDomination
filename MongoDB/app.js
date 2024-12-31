
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const userModel = require('./models/user.model.js')
const debuglog = require("debug")("development:appconfig")

// Connect to MongoDB
mongoose.connect('mongodb+srv://vargos98:9828206Uk@cluster0.p4y9u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(console.log("connected to database"))



app.get('/', (req, res) => {});

app.get("/create", async (req,res,next)=>{
  let createdUser = await userModel.create({
    username:"Vargos9288",
    name: "Umesh bhagat",
    email: "Vargos9828@gmail.com",
    password: "password1234",

  })
  debuglog("created user")
  res.send(createdUser)
})

app.listen(3000);