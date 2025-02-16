import http from "http";

const PORT = process.env.PORT || 3006;

const server = new http.Server();

server.on("request", (req, res) => {
  res.end("hello world!");
});

// const server = http.createServer((req, res) => {
//   res.end("hello world!");
// });

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
