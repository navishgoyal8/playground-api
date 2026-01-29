import Profile from "../models/Profile.js";

/**
 * GET /health
 */
export const healthCheck = (req, res) => {
  res.status(200).json({ status: "ok", message: "API is live ✅" });
};

/**
 * POST /profile
 * Create profile
 */
export const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * GET /profile
 * Read profile (single candidate profile)
 */
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * PUT /profile/:id
 * Update profile
 */
export const updateProfile = async (req, res) => {
  try {
    const updated = await Profile.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updated) return res.status(404).json({ message: "Profile not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/**
 * GET /projects?skill=python
 */
export const getProjectsBySkill = async (req, res) => {
  try {
    const { skill, page = 1, limit = 5 } = req.query;

    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    let results = profile.projects;

    if (skill) {
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(skill.toLowerCase()) ||
          p.description.toLowerCase().includes(skill.toLowerCase())
      );
    }

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    const start = (pageNum - 1) * limitNum;
    const end = start + limitNum;

    const paginated = results.slice(start, end);

    res.json({
      totalProjects: results.length,
      page: pageNum,
      limit: limitNum,
      projects: paginated
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * GET /skills/top
 * return skill count and top skills
 */
export const getTopSkills = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json({
      total: profile.skills.length,
      skills: profile.skills
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * GET /search?q=mern
 * Search in skills + projects + education + work
 */
export const searchProfile = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ message: "Query 'q' required" });

    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    const query = q.toLowerCase();

    const matchedSkills = profile.skills.filter((s) =>
      s.toLowerCase().includes(query)
    );

    const matchedProjects = profile.projects.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );

    const matchedEducation = profile.education.filter((e) =>
      e.toLowerCase().includes(query)
    );

    const matchedWork = profile.work.filter((w) =>
      w.toLowerCase().includes(query)
    );

    res.json({
      query: q,
      matchedSkills,
      matchedProjects,
      matchedEducation,
      matchedWork
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
