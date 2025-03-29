import express from "express";

const app = express();

app.use(express.static("src/9express/public"));

// app.use(express.urlencoded({ extended: true }));

app.post("/api", express.json(), (req, res) => {
  console.log(req.body);
});

// app.use(express.static());

app.listen(3005, () => {});
