let todos = [
  {
    id: "1",
    title: "kek",
    completed: false,
  },
  {
    id: "2",
    title: "shpek",
    completed: false,
  },
  {
    id: "3",
    title: "naswai",
    completed: false,
  },
];

export const getAll = () => {
  return todos;
};

export const getById = (id) => {
  return todos.find((todo) => todo.id === id) || null;
};

export const create = (title) => {
  const newTodo = {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };

  todos.push(newTodo);

  return newTodo;
};

export const update = ({ id, title, completed }) => {
  const todo = getById(id);

  Object.assign(todo, { title, completed });

  return todo;
};

export const remove = (id) => {
  todos = todos.filter((todo) => todo.id !== id);
};

export const removeMany = (ids) => {
  todos = todos.filter((todo) => !ids.includes(todo.id));
};

export const updateMany = (todos) => {
  for (const { id, title, completed } of todos) {
    const todo = todos.getById(id);

    if (!todo) {
      continue;
    }

    Object.assign(todo, { title, completed });
  }
};
