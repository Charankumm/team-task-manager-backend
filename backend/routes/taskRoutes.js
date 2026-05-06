import express from "express";

import {
  createTask,
  getDashboard,
  getTasks,
  deleteTask,
  updateTaskStatus,
} from "../controllers/taskController.js";

const router = express.Router();

// CREATE TASK
router.post("/", createTask);

// DASHBOARD
router.get("/dashboard", getDashboard);

// GET TASKS
router.get("/", getTasks);

// DELETE TASK
router.delete("/:id", deleteTask);

// UPDATE STATUS
router.put("/:id", updateTaskStatus);

export default router;