const express = require('express');
const app = express();
const PORT = 7865;

// Existing endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Fallback for invalid routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
