import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.resolve("public")));

app.use("/", async (req, res) => {
  // res.setHeader('Content-type', 'text/html')
  const filePath = path.resolve("public", "index.html");

  console.log(filePath);

  res.sendFile(filePath);
});

app.listen(3005);
