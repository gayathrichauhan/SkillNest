import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Cart = () => {
    const { cartItems, removeFromCart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const proceedToCheckout = () => {
        if (!user) {
            navigate("/login");
        } else {
            navigate("/checkout");
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

            {cartItems.length === 0 && <p>Your cart is empty.</p>}

            {cartItems.map((item) => (
                <div
                    key={item._id}
                    className="flex justify-between items-center border-b py-4"
                >
                    <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-green-600">₹{item.price}</p>
                    </div>
                    <button
                        onClick={() => removeFromCart(item._id)}
                        className="text-red-500 font-semibold"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {cartItems.length > 0 && (
                <>
                    <div className="text-right font-bold text-xl mt-6">
                        Total: ₹{total}
                    </div>

                    <button
                        onClick={proceedToCheckout}
                        className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                    >
                        Proceed to Checkout
                    </button>
                </>
            )}
        </div>
    );
};

export default Cart;
