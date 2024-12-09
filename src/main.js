import dotenv from "dotenv";
import minimist from "minimist";

dotenv.config();

// console.log(`Hello kookoo ${process.env.x} and ${process.env.y}`);

console.log(minimist(process.argv.slice(2)));
