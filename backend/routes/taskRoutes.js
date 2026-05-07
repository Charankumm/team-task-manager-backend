const express = require("express");

const router = express.Router();

const taskController = require(
  "../controllers/taskController"
);

const authMiddleware = require(
  "../middleware/authMiddleware"
);

// Dashboard route FIRST
router.get(
  "/dashboard",
  authMiddleware,
  taskController.getDashboardData
);

// Create Task
router.post(
  "/",
  authMiddleware,
  taskController.createTask
);

// Get Tasks
router.get(
  "/",
  authMiddleware,
  taskController.getTasks
);

// Update Task
router.put(
  "/:id",
  authMiddleware,
  taskController.updateTask
);

// Delete Task
router.delete(
  "/:id",
  authMiddleware,
  taskController.deleteTask
);

module.exports = router;