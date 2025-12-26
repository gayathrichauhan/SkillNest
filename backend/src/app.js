import express from "express";
import cors from "cors";
import courseRoutes from "./routes/course.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

/* ✅ ALLOW ALL FRONTENDS (Render + Local) */
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 SkillNest Backend is live");
});

app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);

export default app;
