const port = 3000 || process.env.port;
const express = require("express");
const app = express();
const cors = require("cors");
const { connect } = require("./configs/db");
const { createUser, login, removeAllUser } = require("./service/userService");
const { authMiddleware } = require("./middleware/authMiddleware");
const {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  updateTodoStatus,
} = require("./service/todoService");
console.clear();

app.use(express.json());
app.use(cors());

connect();

app.get("/ping", (req, res) => {
  res.send("pong");
});

// USER
app.post("/user/register", createUser);
app.post("/user/login", login);
app.get("/user/dev/remove", removeAllUser);

// TODO
app.get("/todo/all", authMiddleware, getAllTodos);
app.post("/todo/create", authMiddleware, createTodo);
app.delete("/todo/delete/:id", authMiddleware, deleteTodo);
app.patch("/todo/update/:id", authMiddleware, updateTodo);
app.patch("/todo/update-status/:id", authMiddleware, updateTodoStatus);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
