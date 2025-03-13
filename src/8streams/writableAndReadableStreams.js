import http from "http";

const server = new http.Server();

// process.stdin.on("data", (chunk) => {
//   setTimeout(() => {
//     process.stdout.write(`-> ${chunk}`);
//   }, 1000);
// });
server.on("request", (req, res) => {
  res.setHeader("Content-type", "text/html");

  for (let i = 5; i > 0; i--) {
    setTimeout(() => {
      res.write(`<p>${i}</p>`);
    }, (5 - i) * 1000);
  }
  setTimeout(() => {
    res.end(`<h1>Stream</h1>`);
  }, 6000);
});

server.on("error", () => {});

server.listen(3005);
