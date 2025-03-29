import * as todoService from "../services/todo.service.js";

export const get = (req, res) => {
  // get /todos если хотим получить все тудушки

  res.send(todoService.getAll());
};

export const getOne = (req, res) => {
  // get /todos:id если хочу получить определенную тудушку
  const { id } = req.params;
  const todo = todoService.getById(id);

  if (!todo) {
    res.sendStatus(404);

    return;
  }

  res.send(todo);
};

export const patch = (req, res) => {
  const { action } = req.query;
  const { ids, items } = req.body;

  if (action === "delete") {
    if (!Array.isArray(ids)) {
      res.sendStatus(422);

      return;
    }

    if (!ids.every((id) => todoService.getById(id))) {
      throw new Error(
        "pri udalenii ne nashlo todoshko, otmena operatsii"
      );
    }
    console.log(ids);

    todoService.removeMany(ids);

    res.sendStatus(204);
    // res.send(filteredTodos);
    return;
  }

  if (action === "update") {
    if (!Array.isArray(items)) {
      res.sendStatus(422);

      return;
    }

    // todoService.update(items);

    const errors = [];
    const results = [];

    for (const { id, title, completed } of items) {
      const todo = todoService.getById(id);

      if (!todo) {
        errors.push({ id, title, completed, error: "not found" });
      } else {
        const result = todoService.update({ id, title, completed });

        results.push(result);
      }

      Object.assign(todo, { title, completed });
    }

    res.sendStatus({ errors, results });

    return;
  }

  res.sendStatus(422);
};

export const create = (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.sendStatus(422);

    return;
  }

  const newTodo = todoService.create(title);

  res.statusCode = 201;

  res.send(newTodo);
};

export const remove = (req, res) => {
  const { id } = req.params;

  if (!todoService.getById(id)) {
    res.sendStatus(404);

    return;
  }

  todoService.remove(id);

  res.sendStatus(204);
};

export const removeMany = (req, res) => {
  const { ids } = req.body;

  if (!Array.isArray(ids)) {
    res.sendStatus(422);

    return;
  }

  if (!ids.every((id) => todoService.getById(id))) {
    throw new Error(
      "pri udalenii ne nashlo todoshko, otmena operatsii"
    );
  }
  console.log(ids);

  todoService.removeMany(ids);

  res.sendStatus(204);
  // res.send(filteredTodos);
  return;
};

export const updateMany = (req, res) => {
  // if (req.query.action !== "update") {
  //   next();

  //   return;
  // }

  const { items } = req.body;
  if (!Array.isArray(items)) {
    res.sendStatus(422);

    return;
  }

  // todoService.update(items);

  const errors = [];
  const results = [];

  for (const { id, title, completed } of items) {
    const todo = todoService.getById(id);

    if (!todo) {
      errors.push({ id, title, completed, error: "not found" });
    } else {
      const result = todoService.update({ id, title, completed });

      results.push(result);
    }

    Object.assign(todo, { title, completed });
  }

  res.send({ errors, results });

  return;
};

// export const updateMany = (req, res) => {
//   const { action } = req.query;
//   const { items } = req.body;

//   if (action === "update") {
//     if (!Array.isArray(items)) {
//       res.sendStatus(422);

//       return;
//     }

//     // todoService.update(items);

//     const errors = [];
//     const results = [];

//     for (const { id, title, completed } of items) {
//       const todo = todoService.getById(id);

//       if (!todo) {
//         errors.push({ id, title, completed, error: "not found" });
//       } else {
//         const result = todoService.update({ id, title, completed });

//         results.push(result);
//       }

//       Object.assign(todo, { title, completed });
//     }

//     res.sendStatus({ errors, results });

//     return;
//   }
// };

export const update = (req, res) => {
  // put если хотим обновить тудушку с полной перезаписью
  const { id } = req.params;
  const { title, completed } = req.body;
  const todo = todoService.getById(id);

  if (!todo) {
    res.sendStatus(404);

    return;
  }

  if (typeof title !== "string" || typeof completed !== "boolean") {
    res.sendStatus(422);

    return;
  }

  const updatedTodo = todoService.update({ id, title, completed });

  res.send(updatedTodo);
};
