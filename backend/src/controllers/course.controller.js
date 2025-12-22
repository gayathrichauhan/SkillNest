import Course from "../models/Course.js";

/* CREATE COURSE */
export const createCourse = async (req, res) => {
    try {
        console.log("CREATE COURSE BODY:", req.body);

        const course = new Course(req.body);
        await course.save();

        res.status(201).json(course);
    } catch (error) {
        console.error("CREATE COURSE ERROR:", error.message);
        res.status(400).json({ message: error.message });
    }
};

/* GET ALL COURSES */
export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
