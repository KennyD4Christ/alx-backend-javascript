// api.js
const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint for cart
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

const server = app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

// Export the server for testing
module.exports = server;
