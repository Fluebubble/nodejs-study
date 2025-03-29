import express from "express";
import cors from "cors";
import { router as todoRouter } from "./routes/todo.route.js";

const app = express();

// let todos = [
//   {
//     id: "1",
//     title: "kek",
//     completed: false,
//   },
//   {
//     id: "2",
//     title: "shpek",
//     completed: false,
//   },
//   {
//     id: "3",
//     title: "naswai",
//     completed: false,
//   },
// ];

app.use(cors());

app.get("/users", (req, res) => {
  res.send([]);
});

app.use("/todos", express.json(), todoRouter);

app.listen(3005, () => {});
