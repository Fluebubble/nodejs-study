import http from "http";

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.write("<h1>123123</h1>");
  res.end("hello world");
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
