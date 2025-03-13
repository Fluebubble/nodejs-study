import http from "http";
import fs from "fs";

const server = new http.Server();

server.on("request", (req, res) => {
  // console.log(req.url);

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/favicon.ico") {
    // res.end("kek");
  }

  const file = fs.createReadStream("./package-lock.json");

  file.on("error", () => {
    res.statusCode = 404;
    res.end("No such file");

    return;
  });

  file.on("data", (chunk) => {
    const canWrite = res.write(chunk);

    if (canWrite) return;

    file.pause();

    res.once("drain", () => {
      file.resume();
    });
  });

  file.on("end", () => {
    res.end();
  });
});

server.on("error", () => {});

server.listen(3005);
