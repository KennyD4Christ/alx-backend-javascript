const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 7865;

app.use(bodyParser.json()); // Middleware to parse JSON bodies

// Existing endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for available payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// New endpoint for login
app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

// Fallback for invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app; // Export the app for testing

