import http from "http";
import fs from "fs";
import { URL } from "url";

const PORT = process.env.PORT || 3006;

const server = http.createServer((req, res) => {
  const normalizedUrl = new URL(
    req.url,
    `http://${req.headers.host}`
  );
  console.log(normalizedUrl);

  const fileName = normalizedUrl.pathname.slice(1) || "index.html";
  console.log(fileName);

  fs.readFile(`public/${fileName}`, (err, data) => {
    console.log(err);

    if (!err) {
      res.end(data);
    }

    res.statusCode = 404;
    res.end();
  });
});

server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`);
});
