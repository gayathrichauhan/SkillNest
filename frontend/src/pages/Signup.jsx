import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message);
            return;
        }

        login(data.user);
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-2">Create Account</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                    />

                    <button className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold">
                        Sign Up
                    </button>
                </form>

                <p className="text-center mt-6">
                    Already registered?{" "}
                    <Link to="/login" className="text-green-600 font-semibold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
