const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
  try {
    const { title, description, status } =
      req.body;

    const task = await Task.create({
      title,
      description,
      status,
      user: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    });

    res.status(200).json(tasks);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(task);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Dashboard Data
const getDashboardData = async (
  req,
  res
) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    });

    const dashboard = {
      totalTasks: tasks.length,

      status: {
        todo: tasks.filter(
          (t) => t.status === "todo"
        ).length,

        inProgress: tasks.filter(
          (t) =>
            t.status === "inProgress"
        ).length,

        done: tasks.filter(
          (t) => t.status === "done"
        ).length,
      },
    };

    res.status(200).json(dashboard);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getDashboardData,
};