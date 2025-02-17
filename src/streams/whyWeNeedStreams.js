import http from "http";
import fs from "fs";

const server = new http.Server();

server.on("request", (req, res) => {
  if (req.url === "/download") {
    fs.readFile("./Reading files.mp4", (err, content) => {
      if (err) {
        console.log(err);
        res.statusCode = 500;
        res.end("server error");

        return;
      }
      console.log("connected to /download");

      res.setHeader("Content-type", "video/mp4");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Reading-files.mp4"
      );
      res.end(content);
    });

    return;
  }

  res.setHeader("Content-type", "text/html");
  res.end(`
  <a href="/download" target="_blank">
    Download file
  </a>
  `);
});

server.on('error', () => {})

server.listen(3005);
