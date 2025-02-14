import fs from "fs";

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
fs.readFile("./index.js", () => {
  const startCallback = Date.now();

  // do something that will take 10ms ...
  while (Date.now() - startCallback < 200) {
    // do nothing
  }
});
