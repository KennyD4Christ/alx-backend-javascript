#!/usr/bin/env node

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // For piped input, display the closing message
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  // Close the stdin stream to end the process properly
  process.stdin.end();
});

