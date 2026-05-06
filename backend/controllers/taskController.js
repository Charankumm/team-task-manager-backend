import Task from "../models/Task.js";

// ======================
// CREATE TASK
// ======================
export const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    const task = await Task.create({
      title,
      description,
      status,
    });

    res.status(201).json({
      message: "Task created successfully",
      task,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// DASHBOARD DATA
// ======================
export const getDashboard = async (req, res) => {
  try {
    const tasks = await Task.find();

    const dashboard = {
      totalTasks: tasks.length,

      status: {
        todo: tasks.filter(
          (t) => t.status === "todo"
        ).length,

        inProgress: tasks.filter(
          (t) => t.status === "inProgress"
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
      message: error.message,
    });
  }
};

// ======================
// GET ALL TASKS
// ======================
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({
      createdAt: -1,
    });

    res.status(200).json(tasks);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// DELETE TASK
// ======================
export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Task deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// ======================
// UPDATE TASK STATUS
// ======================
export const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.status(200).json(task);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};