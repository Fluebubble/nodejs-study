import http from "http";
import fs from "fs";

const server = new http.Server();

server.on("request", (req, res) => {
  // console.log(req.url);

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/favicon.ico") {
    // res.end("kek");
  }

  const file = fs.createReadStream("./data.txt");

  file.on("open", () => console.log("open"));
  file.on("close", () => console.log("close"));

  file.on("error", () => {
    res.statusCode = 404;
    res.end("No such file");

    return;
  });

  res.on("close", () => {
    console.log("connnection close");
    file.destroy();
  });

  file.pipe(res);
});

server.on("error", () => {});

server.listen(3005);
