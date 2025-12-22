import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Checkout() {
    const { cartItems } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    if (!user) {
        navigate("/login");
        return null;
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold mb-8">Checkout</h1>

            <div className="border rounded-lg p-6 bg-white">
                <h2 className="font-semibold text-lg mb-4">
                    Order Summary
                </h2>

                {cartItems.map((item) => (
                    <div
                        key={item._id}
                        className="flex justify-between py-2 border-b"
                    >
                        <span>{item.title}</span>
                        <span>₹{item.price}</span>
                    </div>
                ))}

                <div className="flex justify-between font-bold text-lg mt-6">
                    <span>Total</span>
                    <span>₹{total}</span>
                </div>

                <button
                    onClick={() => navigate("/payment")}
                    className="mt-8 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                    Continue to Payment
                </button>
            </div>
        </div>
    );
}
