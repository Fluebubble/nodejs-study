import readline from 'node:readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is your name? ', (personName) => {
  console.log(`Hi, ${personName}!`);
  rl.close();
});

// import readline from "readline";

// const terminal = readline.createInterface(
//   process.stdin,
//   process.stdout
// );
// terminal.question("What is your name?", (name) => {
//   console.log(`Hi, ${name}!`);
//   terminal.close();
// });
