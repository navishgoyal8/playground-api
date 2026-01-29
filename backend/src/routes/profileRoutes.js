import express from "express";
import {
  healthCheck,
  createProfile,
  getProfile,
  updateProfile,
  getProjectsBySkill,
  getTopSkills,
  searchProfile
} from "../controllers/profileController.js";

import { requireApiKey } from "../middleware/auth.js";

const router = express.Router();

router.get("/health", healthCheck);

// Read allowed without auth
router.get("/profile", getProfile);

// Write endpoints protected ✅
router.post("/profile", requireApiKey, createProfile);
router.put("/profile/:id", requireApiKey, updateProfile);

// Query endpoints
router.get("/projects", getProjectsBySkill);
router.get("/skills/top", getTopSkills);
router.get("/search", searchProfile);

export default router;
