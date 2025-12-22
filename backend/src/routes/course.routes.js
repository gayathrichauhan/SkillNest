import express from "express";
import {
    createCourse,
    getAllCourses,
} from "../controllers/course.controller.js";

const router = express.Router();

router.post("/", createCourse);
router.get("/", getAllCourses);

export default router;
