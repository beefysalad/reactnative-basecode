const { Todo } = require("../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    console.log(req.user);
    const todo = await Todo.find({
      user: req.user,
    });
    res.status(200).json({
      message: req.user,
      todo: todo,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};

const createTodo = async (req, res) => {
  try {
    const { name, date } = req.body;
    const { user } = req;
    const task = await Todo.create({
      date,
      name,
      user,
    });
    return res.status(201).json({
      message: "Task created",
      data: task,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Todo.deleteMany({ _id: id });

    return res.status(200).json({
      message: "Task Deleted!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, isEditable } = req.body;
    const todo = await Todo.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          date,
          name,
          isEditable,
        },
      }
    );
    return res.status(200).json({
      message: "Task Updated!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;
    const task = await Todo.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          isCompleted,
        },
      }
    );
    return res.status(202).json({
      message: "Updated Status!",
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTask,
  updateTaskStatus,
};
