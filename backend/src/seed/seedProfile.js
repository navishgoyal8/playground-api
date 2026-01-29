import dotenv from "dotenv";
import mongoose from "mongoose";
import Profile from "../models/Profile.js";

dotenv.config();

const runSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Profile.deleteMany();

    const profile = await Profile.create({
      name: "Navish Goyal",
      email: "goyalnavish125@gmail.com",

      education: [
        "B.E in Computer Science, Thapar Institute of Engineering and Technology (2022-Present)",
        "Intermediate/+2 PCM, Innocent Hearts School (92.4%)",
        "Matriculation, Innocent Hearts School (93%)"
      ],

      skills: [
        "C",
        "C++",
        "SQL",
        "JavaScript",
        "Python",
        "HTML",
        "CSS",
        "TailwindCSS",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "GitHub",
        "REST APIs",
        "DBMS",
        "DSA"
      ],

      work: [
        "Web Development Intern - INVESHO AI (June 2025 - July 2025)",
        "Built & maintained MERN platform for startups/investors",
        "Implemented LLM-powered email assistant and investor outreach tools"
      ],

      projects: [
        {
          title: "Deep Fake Voice Detection System",
          description:
            "Deepfake voice detection using MFCC feature extraction and LSTM-based model to classify real vs spoofed audio.",
          links: []
        },
        {
          title: "Travel Website - Gulaab Jamoon",
          description:
            "REST APIs for bookings, secure authentication, payment gateway, email verification, scalable handling.",
          links: []
        },
        {
          title: "Expense Tracker",
          description:
            "Full-stack expense tracker with authentication, CRUD income/expenses, real-time UI updates, charts.",
          links: []
        }
      ],

      links: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
        portfolio: ""
      }
    });

    console.log("✅ Seed Completed:", profile._id);
    process.exit(0);
  } catch (err) {
    console.error("❌ Seed Error:", err.message);
    process.exit(1);
  }
};

runSeed();
