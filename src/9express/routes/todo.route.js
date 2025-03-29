import * as todoController from "../controllers/todo.controller.js";

import express from "express";

const router = express.Router();

router.get("/", todoController.get);

router.post("/", todoController.create);

router.delete("/:id", todoController.remove);

router.get("/:id", todoController.getOne);

router.put("/:id", todoController.update);

// const isDeleteAction = (req, res, next) => {
//   if (req.query.action === "delete") {
//     next();

//     return;
//   }
// };

const isAction = (action) => {
  return (req, res, next) => {
    if (req.query.action === action) {
      next();

      return;
    } else {
      next("route");
    }
  };
};

router.patch("/", isAction("delete"), todoController.removeMany);

router.patch("/", isAction("update"), todoController.updateMany);

export { router };
