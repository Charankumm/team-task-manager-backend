import express from "express";
import {
  createProject,
  addMember,
  getProjects
} from "../controllers/projectController.js";

import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// ================= PROJECT ROUTES =================

// Create project
router.post("/", authMiddleware, createProject);

// Add member
router.put("/add-member", authMiddleware, addMember);

// Get projects for logged-in user
router.get("/", authMiddleware, getProjects);

export default router;