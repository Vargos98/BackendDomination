const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;
const User = require('./Models/user.model.js')
// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});



// Sample User Data
const usersData = [
  { username: "john_doe", age: 25, email: "john.doe@example.com", password: "password123" },
  { username: "jane_smith", age: 28, email: "jane.smith@example.com", password: "securepass456" },
  { username: "mike_brown", age: 32, email: "mike.brown@example.com", password: "qwerty789" },
  { username: "emily_white", age: 27, email: "emily.white@example.com", password: "password456" },
  { username: "daniel_jones", age: 30, email: "daniel.jones@example.com", password: "pass1234" },
  { username: "sarah_clark", age: 29, email: "sarah.clark@example.com", password: "sarah2023" },
  { username: "kevin_lee", age: 35, email: "kevin.lee@example.com", password: "lee_9876" },
  { username: "amanda_baker", age: 26, email: "amanda.baker@example.com", password: "baker@12" },
  { username: "robert_hall", age: 40, email: "robert.hall@example.com", password: "robH!56" },
  { username: "laura_kim", age: 23, email: "laura.kim@example.com", password: "laura#kim" },
  { username: "paul_wilson", age: 37, email: "paul.wilson@example.com", password: "paul@890" },
  { username: "anna_taylor", age: 24, email: "anna.taylor@example.com", password: "taylor_67" },
  { username: "chris_evans", age: 33, email: "chris.evans@example.com", password: "chris2024" },
  { username: "megan_scott", age: 29, email: "megan.scott@example.com", password: "megan@999" },
  { username: "david_moore", age: 36, email: "david.moore@example.com", password: "moore123" },
];

// Insert Sample Data
app.get('/createMany', async (req, res) => {
  let data = await userModel.insertMany(usersData);
  res.send(data);
});

// MongoDB Aggregation Examples

// Match Stage
app.get('/match', async (req, res) => {
  let result = await userModel.aggregate([
    { $match: { age: { $gte: 30 } } },
  ]);
  res.send(result);
});

// Group Stage
app.get('/group', async (req, res) => {
  let result = await userModel.aggregate([
    { $group: { _id: "$age", totalUsers: { $sum: 1 } } },
  ]);
  res.send(result);
});

// Project Stage
app.get('/project', async (req, res) => {
  let result = await userModel.aggregate([
    { $project: { username: 1, email: 1, age: 1, _id: 0 } },
  ]);
  res.send(result);
});

// Sort Stage
app.get('/sort', async (req, res) => {
  let result = await userModel.aggregate([
    { $sort: { age: 1 } },
  ]);
  res.send(result);
});

// Limit Stage
app.get('/limit', async (req, res) => {
  let result = await userModel.aggregate([
    { $limit: 5 },
  ]);
  res.send(result);
});

// Skip Stage
app.get('/skip', async (req, res) => {
  let result = await userModel.aggregate([
    { $skip: 5 },
  ]);
  res.send(result);
});

// Lookup Stage
app.get('/lookup', async (req, res) => {
  let result = await userModel.aggregate([
    {
      $lookup: {
        from: "orders", // Replace with an actual collection name
        localField: "username",
        foreignField: "user",
        as: "user_orders",
      },
    },
  ]);
  res.send(result);
});

// Unwind Stage
app.get('/unwind', async (req, res) => {
  let result = await userModel.aggregate([
    { $unwind: "$tags" }, // Replace `tags` with a valid array field
  ]);
  res.send(result);
});

// Add Fields Stage
app.get('/addFields', async (req, res) => {
  let result = await userModel.aggregate([
    {
      $addFields: {
        isAdult: { $gte: ["$age", 18] },
      },
    },
  ]);
  res.send(result);
});

// Count Stage
app.get('/count', async (req, res) => {
  let result = await userModel.aggregate([
    { $count: "totalUsers" },
  ]);
  res.send(result);
});

// Sample Stage
app.get('/sample', async (req, res) => {
  let result = await userModel.aggregate([
    { $sample: { size: 3 } },
  ]);
  res.send(result);
});

// Setup Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
