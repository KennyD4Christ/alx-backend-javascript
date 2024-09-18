const http = require('http');
const url = require('url');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

// Define the port
const PORT = 1245;

// Create the HTTP server
const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const { pathname } = parsedUrl;
  // Use a temporary buffer to capture the output
  let buffer = '';

  if (pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    buffer = buffer.trim();
    res.end('Hello Holberton School!');
  } else if (pathname === '/students') {
    const filePath = process.argv[2];
    if (!filePath || !fs.existsSync(filePath)) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database\n');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });

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
        res.end(`This is the list of our students\n${buffer}`);
      })
      .catch(() => {
        // Restore original console.log
        console.log = originalLog;
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database\n');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found\n');
  }
});

// Start listening on the specified port
app.listen(PORT, () => {
});

module.exports = app;
