import express from "express";
import cors from "cors";
import courseRoutes from "./routes/course.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
    cors({
        origin: "https://skillnest-sooty.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("🚀 SkillNest Backend is live");
});

app.use("/api/courses", courseRoutes);
app.use("/api/auth", authRoutes);

export default app;
