// api.js
const express = require('express');
const app = express();
const PORT = 7865;

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
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
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

// Handle 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the server for testing
module.exports = server;
