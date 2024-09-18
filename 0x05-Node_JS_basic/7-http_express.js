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

  if (!filePath || !fs.existsSync(filePath)) {
    res.status(500).type('text/plain').send('Cannot load the database\n');
    return;
  }

  res.type('text/plain');

  // Use a temporary buffer to capture the output
  let buffer = '';

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
      res.status(500).type('text/plain').send('Cannot load the database\n');
    });
});

app.listen(PORT, () => {
});

module.exports = app;
