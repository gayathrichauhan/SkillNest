import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/courses");
                if (!res.ok) throw new Error("Failed to fetch courses");

                const data = await res.json();
                setCourses(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-10">Courses</h1>

            {loading && <p>Loading courses...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div
                        key={course._id}
                        className="border rounded-xl p-5 bg-white transition hover:shadow-lg"
                    >
                        {/* Card header */}
                        <div className="h-40 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-green-700 font-semibold text-lg">
                                {course.category}
                            </span>
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            {course.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4">
                            {course.description}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            <span className="font-bold text-green-600 text-lg">
                                ₹{course.price}
                            </span>
                        </div>

                        {/* ✅ REAL BUTTON FEEL */}
                        <button
                            onClick={() => addToCart(course)}
                            className="
                                w-full
                                bg-green-500
                                text-white
                                py-3
                                rounded-lg
                                font-semibold
                                cursor-pointer
                                transition-all
                                duration-200
                                hover:bg-green-600
                                hover:shadow-md
                                hover:-translate-y-0.5
                                active:translate-y-0
                                active:scale-95
                                focus:outline-none
                                focus:ring-2
                                focus:ring-green-400
                                focus:ring-offset-2
                            "
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Courses;
