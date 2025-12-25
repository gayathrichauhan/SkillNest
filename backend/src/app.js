import cors from "cors";

app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://skill-nest-sooty.vercel.app/"
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
export default app;