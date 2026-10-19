require('dotenv').config();
const express = require('express');
const app = express();

port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/twitter', (req, res) => {
  res.send('Welcome to the Twitter route!');
});

app.get('/login', (req , res) => {
    res.send('Welcome to the login route please login to continue');
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/youtube', (req , res) => {
    res.send('<h2>Chai aur Code</h2>')
})