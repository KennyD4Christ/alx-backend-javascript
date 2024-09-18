#!/usr/bin/env node

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // If input is piped, display the closing message
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  // Exit the process after user input in both interactive and piped modes
  process.exit();
});
