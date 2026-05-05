import express from "express";
import {
  createTask,
  getTasks,
  updateTaskStatus,
  getDashboard
} from "../controllers/taskController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// ================= TASK ROUTES =================

// Create task
router.post("/", authMiddleware, createTask);

// Get tasks by project
router.get("/", authMiddleware, getTasks);

// Update task status
router.put("/:id", authMiddleware, updateTaskStatus);

// Dashboard
router.get("/dashboard", authMiddleware, getDashboard);

export default router;