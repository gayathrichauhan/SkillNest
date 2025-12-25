import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import Toast from "../components/Toast.jsx";


const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { addToCart, toast, setToast } = useCart();

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/courses`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch courses");
                }

                const data = await res.json();
                setCourses(data);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            {toast && (
                <Toast
                    message={toast}
                    onClose={() => setToast("")}
                />
            )}

            <h1 className="text-4xl font-bold mb-10">Courses</h1>

            {loading && <p>Loading courses...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="grid md:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div
                        key={course._id}
                        className="border rounded-xl p-5 bg-white hover:shadow-lg transition"
                    >
                        <div className="h-40 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-green-700 font-semibold">
                                {course.category}
                            </span>
                        </div>

                        <h3 className="font-semibold text-lg mb-2">
                            {course.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4">
                            {course.description}
                        </p>

                        <div className="flex justify-between items-center mb-4">
                            <span className="font-bold text-green-600">
                                ₹{course.price}
                            </span>
                        </div>

                        <button
                            onClick={() => addToCart(course)}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold active:scale-95 transition"
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
