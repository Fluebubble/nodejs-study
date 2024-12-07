import express from "express";
import { tweetRouter } from "src/tweet/tweet.controller.js";

const app = express();

// import { DATA } from "./service.js";
// console.log("keks", DATA);

const main = async () => {
  app.use(express.json());

  app.use("/api/tweets", tweetRouter);

  app.listen(4200, () => {
    console.log("server is running on port 4200");
  });
};

main();
