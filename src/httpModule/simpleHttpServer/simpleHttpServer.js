import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.write("<h1>123123</h1>");
  res.end("hello world");
});

server.listen(8080);
