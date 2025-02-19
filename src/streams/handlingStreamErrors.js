import http from "http";
import fs from "fs";

const server = new http.Server();

server.on("request", (req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    const file = fs.createReadStream("./package.json");

    file.pipe(res);
  } else if (req.url === "/favicon.ico") {
    res.end("kek");
  } else {
    const file = fs.createReadStream("./package.json1");

    file.on("error", () => {
      res.statusCode = 404;
      res.end('No such file')
    });
    file.pipe(res);
  }
});

server.listen(3005);
