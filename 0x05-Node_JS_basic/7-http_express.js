const express = require('express');

const app = express();
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const filePath = process.argv[2];

  res.type('text/plain');

  // Use a temporary buffer to capture the output
  let buffer = '';

  // If the file path doesn't exist, append error message to buffer
  if (!filePath || !fs.existsSync(filePath)) {
    buffer = 'Cannot load the database';
    buffer = buffer.trim();
    res.send(`This is the list of our students\n${buffer}`);
    return;
  }

  // Override console.log to capture output
  const originalLog = console.log;
  console.log = (message) => {
    buffer += `${message}\n`;
  };

  // Run countStudents and capture output
  countStudents(filePath)
    .then(() => {
      // Restore original console.log
      console.log = originalLog;
      buffer = buffer.trim();
      res.send(`This is the list of our students\n${buffer}`);
    })
    .catch(() => {
      // Restore original console.log
      console.log = originalLog;
      buffer = 'Cannot load the database';
      buffer = buffer.trim();
      res.send(`This is the list of our students\n${buffer}`);
    });
});

app.listen(PORT, () => {
});

module.exports = app;
