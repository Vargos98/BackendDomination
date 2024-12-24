// const express = require('express');
// const expressSession = require('express-session');
// const flash = require('connect-flash');

// const app = express();
// const port = 3000;

// // Initialize session middleware
// app.use(
//   expressSession({
//     secret: 'Random secret', // A unique secret key
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// // Initialize flash middleware
// app.use(flash());

// // Route to set and redirect with flash message
// app.get('/', (req, res) => {
//   req.flash('error', 'Invalid Credentials'); // Set flash message
//   res.redirect('/error'); // Redirect to /error
// });

// // Route to display flash message
// app.get('/error', (req, res, next) => {
//   const message = req.flash('error'); // Retrieve and consume flash message
//   if (message.length > 0) {
//     res.send('Error occurred: ' + message);
//   } else {
//     res.send('No error message found.');
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());

// Middleware to expose flash messages to templates
app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

// Dummy authentication logic
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        req.flash('success', 'You have logged in successfully!');
        res.redirect('/');
    } else {
        req.flash('error', 'Invalid username or password.');
        res.redirect('/login');
    }
});

// Routes
app.get('/login', (req, res) => {
    res.send(`
        <form method="POST" action="/login">
            <input type="text" name="username" placeholder="Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
        <p>${res.locals.messages.error || ''}</p>
    `);
});

app.get('/', (req, res) => {
    res.send(`
        <h1>Home</h1>
        <p>${res.locals.messages.success || ''}</p>
    `);
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
