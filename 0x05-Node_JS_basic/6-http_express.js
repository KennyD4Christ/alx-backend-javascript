const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.use((req, res) => {
  res.status(404).send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Error</title>
</head>
<body>
  <pre>Cannot GET ${req.originalUrl}</pre>
</body>
</html>
  `.trim()); // Use trim() to remove extra spaces and newlines
});

app.listen(PORT, () => {
});

module.exports = app;
