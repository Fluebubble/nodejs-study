import fs from 'node:fs';

setTimeout(() => {
  console.log('1 - start');

  let start = Date.now();

  fs.readFile('src/index.js', (err, data) => {
    console.log('2 - fs.readFile', data.length);
  });

  let x = 0;

  // Watch for changes in the directory
  fs.watch('.', (eventType, filename) => {
    if (filename) {
      console.log(`3 - File ${filename} changed! Event type: ${eventType}`);
    }
  });

  fs.writeFileSync('example.txt', 'Hello World');

  while (Date.now() < start + 100) {
    x++;
  }

  setTimeout(() => {
    console.log('4 - setTimeout 0');
  }, 0);

  setImmediate(() => {
    console.log('5 - setImmediate');
  });

  process.nextTick(() => {
    console.log('6 - nextTick');
  });

  queueMicrotask(() => {
    console.log('7 - queueMicrotask');

    setTimeout(() => {
      console.log('8 - setTimeout 0 in queueMicrotask');
    }, 0);
  });

  while (Date.now() < start + 200) {
    x++;
  }

  console.log('9 - end', x);
}, 0);
