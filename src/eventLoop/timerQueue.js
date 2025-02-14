import fs from "fs";
console.clear();

console.log("---- START ----");

fs.readFile("index.js", () => {
  console.log("File");
});

setTimeout(() => {
  console.log("Timeout");
}, 10);

let count = 0;

console.time("loop");
for (let i = 0; i < 1000000; i++) {
  count++;
}
console.timeEnd("loop");

console.log("---- END ----");
