import http from "http";

const PORT = process.env.PORT || 3006;

const server = new http.Server();

server.on("request", (req, res) => {
  if (req.url === "/error") {
    server.emit("error", new Error());
  }

  res.end("hello world!");
});

server.on("error", (err) => {
  console.log("error", err);
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
