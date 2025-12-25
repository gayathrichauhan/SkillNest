import express from "express";
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: "https://skill-nest-sooty.vercel.app/",
        credentials: true,
    })
);

app.use(express.json());

app.get("/api/courses", (req, res) => {
    res.json({ message: "Courses working" });
});

export default app;   // 🔴 THIS LINE WAS MISSING
