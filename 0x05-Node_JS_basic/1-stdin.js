#!/usr/bin/env node

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  const name = data.toString().replace(/\n$/, '');
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  process.exit();
});
