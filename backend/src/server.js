import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import profileRoutes from "./routes/profileRoutes.js";
import morgan from "morgan"
import rateLimit from "express-rate-limit";


dotenv.config();
connectDB();

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 60,
  message: { message: "Too many requests, please try again later." }
});

app.use(limiter);


app.use("/", profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
