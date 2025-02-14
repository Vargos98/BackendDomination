const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// ✅ Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/trial')
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Failed:", err));




const { Schema } = mongoose;

// ✅ Define User Schema
const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  jobTitle: { type: String, required: true }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Home Route
app.get('/', (req, res) => {
  res.send("Welcome to the User API");
});

// ✅ GET All Users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users", details: error.message });
  }
});

// ✅ GET a Single User by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user", details: error.message });
  }
});

// ✅ POST (Create) a New User
app.post('/api/users', async (req, res) => {
  try {
    const { first_name, last_name, email, gender, jobTitle } = req.body;
    if (!first_name || !last_name || !email || !gender || !jobTitle) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = await User.create(req.body);
    res.status(201).json({ message: "User created successfully"});
  } catch (error) {
    res.status(500).json((err)=>console.log(err));
  }
});

// ✅ PATCH (Update) User by ID
app.patch('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to update user", details: error.message });
  }
});

// ✅ DELETE User by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user", details: error.message });
  }
});

// ✅ Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
