import Project from "../models/Project.js";
import User from "../models/User.js";

// ================= CREATE PROJECT =================
export const createProject = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Project name is required" });
    }

    const project = await Project.create({
      name,
      createdBy: req.user.id,
      members: [req.user.id]
    });

    res.status(201).json(project);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= ADD MEMBER =================
export const addMember = async (req, res) => {
  try {
    const { projectId, email } = req.body;

    if (!projectId || !email) {
      return res.status(400).json({ message: "Project ID and email required" });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Add user to project (avoid duplicates)
    const project = await Project.findByIdAndUpdate(
      projectId,
      { $addToSet: { members: user._id } },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({
      message: "Member added successfully",
      project
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================= GET USER PROJECTS =================
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      members: req.user.id
    }).populate("members", "name email");

    res.json(projects);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};