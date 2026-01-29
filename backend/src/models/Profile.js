import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    links: [{ type: String }]
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },

    education: [{ type: String }],

    skills: [{ type: String }],

    projects: [projectSchema],

    work: [{ type: String }],

    links: {
      github: { type: String },
      linkedin: { type: String },
      portfolio: { type: String }
    }
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
