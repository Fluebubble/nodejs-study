import http from "http";
import fs from "fs";

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  const fileName = req.url.slice(1) || "index.html";
  console.log(fileName);

  fs.readFile(`public/${fileName}`, (err, data) => {
    console.log(err);

    if (!err) {
      res.end(data);

      return;
    }

    res.statusCode = 404;
    res.end();
  });

  // if (err.code === "ENOENT") {
  // }
  // // res.end("hello world");
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
