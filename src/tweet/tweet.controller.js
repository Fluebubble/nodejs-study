import { Router } from "express";
import { createTweet } from "./tweet.service.js";

export const tweetRouter = Router();

tweetRouter.post("/", (req, res) => {
  const tweet = createTweet(req.body);
  res.status(201).json(tweet);
});
