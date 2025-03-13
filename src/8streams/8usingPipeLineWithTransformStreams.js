import http from "http";
import fs from "fs";
import path from "path";
import zlib from "zlib";
import { pipeline } from "stream";

const server = new http.Server();

server.on("request", (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const fileName = url.pathname.slice(1) || "index.html";
  const filePath = path.resolve("public", fileName);

  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end("file not found");

    return;
  }

  res.setHeader("Content-Encoding", "gzip");

  const fileStream = fs.createReadStream(filePath);

  const gzip = zlib.createGzip();

  fileStream
    .on("error", (err) => {
      console.log(err);

      res.statusCode = 500;
      res.end("error");
    })
    .pipe(gzip)
    .on("error", (err) => console.log(err))
    .pipe(res)
    .on("error", (err) => console.log(err));

  pipeline(fileStream, gzip, (err) => {
    console.log(err);
  });
  // gzip.pipe(fs.createWriteStream(filePath + ".gz"));
  // gzip.pipe(res);


  res.on("close", () => fileStream.destroy());
});

server.on("error", () => {});

server.listen(3005);
