import express from "express";
import cors from "cors";
import courseRoutes from "./routes/course.routes.js";
// ⬆️ make sure this path matches your actual file name

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.send("🚀 SkillNest Backend is live");
});

// ✅ IMPORTANT: mount courses routes
app.use("/api/courses", courseRoutes);

export default app;
