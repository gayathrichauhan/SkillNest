import express from "express";
import cors from "cors";
import courseRoutes from "./routes/course.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("🚀 SkillNest Backend is live");
});

// ✅ COURSES API
app.use("/api/courses", courseRoutes);

export default app;
