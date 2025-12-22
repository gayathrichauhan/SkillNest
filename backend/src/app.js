import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 SkillNest Backend is live");
});

// your existing routes
// app.use("/api/courses", courseRoutes);

export default app;
