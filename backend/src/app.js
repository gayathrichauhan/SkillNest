import express from "express";
import cors from "cors";
import courseRoutes from "./routes/course.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

/* ✅ FIXED CORS (HANDLES PREFLIGHT TOO) */
app.use(
    cors({
        origin: "https://skillnest-sooty.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

/* ✅ VERY IMPORTANT */
app.options("*", cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 SkillNest Backend is live");
});

app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);

export default app;
