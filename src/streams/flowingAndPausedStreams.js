import http from "http";
import fs from "fs";

const server = new http.Server();

server.on("request", (req, res) => {
  // console.log(req.url);

  // res.setHeader("Content-Type", "text/plain");

  if (req.url === "/favicon.ico") {
    // res.end("kek");
  }

  const file = fs.createReadStream("./package.json");

  file.on("open", () => console.log("open"));
  file.on("close", () => console.log("close"));
  file.resume();

  file.on("error", () => {
    res.statusCode = 404;
    res.end("No such file");

    return;
  });
});

server.on("error", () => {});

server.listen(3005);
