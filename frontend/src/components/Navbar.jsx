import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
    const { user, logout } = useAuth();
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-green-600">
                    SkillNest
                </Link>

                <div className="flex gap-6 items-center">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>

                    {/* CART */}
                    <Link to="/cart" className="relative">
                        🛒
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-3 bg-green-500 text-white text-xs px-2 rounded-full">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {!user ? (
                        <>
                            <Link to="/login">Login</Link>
                            <Link
                                to="/signup"
                                className="bg-green-500 text-white px-4 py-2 rounded-lg"
                            >
                                Sign Up
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="text-gray-600 font-medium">
                                Hi, {user.name}
                            </span>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-lg"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
