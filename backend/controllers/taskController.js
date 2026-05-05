import Task from "../models/Task.js";
import Project from "../models/Project.js";

// ================= CREATE TASK =================
export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate, priority, assignedTo, projectId } = req.body;

    if (!title || !projectId) {
      return res.status(400).json({ message: "Title and projectId are required" });
    }

    // Check project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Check assigned user is part of project
    if (assignedTo && !project.members.includes(assignedTo)) {
      return res.status(400).json({ message: "User is not a member of this project" });
    }

    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      assignedTo,
      projectId
    });

    res.status(201).json(task);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= GET TASKS =================
export const getTasks = async (req, res) => {
  try {
    const { projectId } = req.query;

    const tasks = await Task.find({ projectId })
      .populate("assignedTo", "name email");

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= UPDATE STATUS =================
export const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= DASHBOARD =================
export const getDashboard = async (req, res) => {
  try {
    const totalTasks = await Task.countDocuments();

    const todo = await Task.countDocuments({ status: "To Do" });
    const inProgress = await Task.countDocuments({ status: "In Progress" });
    const done = await Task.countDocuments({ status: "Done" });

    const overdue = await Task.countDocuments({
      dueDate: { $lt: new Date() },
      status: { $ne: "Done" }
    });

    res.json({
      totalTasks,
      status: {
        todo,
        inProgress,
        done
      },
      overdue
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};