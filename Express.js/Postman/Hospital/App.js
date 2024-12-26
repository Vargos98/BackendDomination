const express = require('express');
const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: 'John', kidneys: [1, 2, 3, 4], health: 80, bloodType: 'A+' },
  { id: 2, name: 'Alice', kidneys: [1, 2, 3, 4, 5], health: 90, bloodType: 'B+' },
  { id: 3, name: 'Bob', kidneys: [1, 2, 3], health: 70, bloodType: 'AB+' },
  { id: 5, name: 'Charlie', kidneys: [1, 2, 3, 4, 5], health: 60, bloodType: 'O+' },
  { id: 6, name: 'David', kidneys: [1], health: 100, bloodType: 'A-' },
];

// GET route
app.get('/health/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userFound = users.find(user => user.id === id);

  if (userFound) {
    res.send(
      `Hi ${userFound.name}, you have ${userFound.kidneys.length} kidneys and your health is ${userFound.health}.`
    );
  } else {
    res.status(404).send('User not found');
  }
});

// POST route to add a kidney
app.post('/health/:id/:kidney', (req, res) => {
  const id = parseInt(req.params.id);
  const newKidney = parseInt(req.params.kidney);
  const userFound = users.find(user => user.id === id);

  if (userFound) {
    userFound.kidneys.push(newKidney); // Add new kidney to the kidneys array
    const kidneyCount = userFound.kidneys.length; // Get the updated count

    res.send(
      `Hi ${userFound.name}, your number of kidneys has been updated to ${kidneyCount}.`
    );
  } else {
    res.status(404).send('User not found');
  }
});

// PUT route to replace the kidneys array
app.put('/health/:id/:kidney', (req, res) => {
  const id = parseInt(req.params.id);
  const newKidney = parseInt(req.params.kidney); // Replace all kidneys with this value
  const userFound = users.find(user => user.id === id);

  if (userFound) {
    userFound.kidneys = [newKidney]; // Replace kidneys with a new array containing just the new value
    res.send(
      `Hi ${userFound.name}, your kidneys have been replaced. New kidneys : [${userFound.kidneys.join(
        ', '
      )}].`
    );
  } else {
    res.status(404).send('User not found');
  }
});


app.delete('/health/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userFound = users.find(user => user.id === id);

  if (userFound) {
    if (userFound.kidneys.length > 0) {
      userFound.kidneys.pop(); // Remove the last kidney
      res.send(
        `Hi ${userFound.name}, your number of kidneys has been updated to ${userFound.kidneys.length}.`
      );
    } else {
      res.send(`Hi ${userFound.name}, you have no kidneys left to remove.`);
    }
  } else {
    res.status(404).send('User not found.');
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
