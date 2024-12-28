import express from 'express';
const port = process.env.PORT || 3000;
const app = express(); 

app.get('/', (req, res) => {
  res.send("Server is ready!");
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
    { id: 1, 
      title: "Programming Joke", 
      content: "Why do programmers prefer dark mode? Because light attracts bugs!" 
    },
    { id: 2, 
      title: "Dad Joke", 
      content: "Why don't scientists trust atoms? Because they make up everything!" 
    },
    { id: 3, 
      title: "Math Joke", 
      content: "Why was the math book sad? Because it had too many problems." 
    },
    { id: 4, 
      title: "Coffee Joke", 
      content: "How does a tech guy drink coffee? He installs Java!" 
    },
    { id: 5, 
      title: "Music Joke", 
      content: "Why couldn't the pirate play cards? Because he was sitting on the deck!" 
    }
  ];
  res.json(jokes);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})