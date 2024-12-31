const mongoose = require('mongoose');
const debuglog = require('debuglog')("development:mongooseconfig");




mongoose.connect('mongodb://localhost:27017/testingdb');
const db = mongoose.connection;

db.on("error", (err)=>{
  debuglog(err)
})

db.on("open", ()=>{
  debuglog("Connected to MongoDB")
})


module.exports = db;