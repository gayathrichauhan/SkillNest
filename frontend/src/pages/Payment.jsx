import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Payment() {
    const { cartItems, clearCart, setOrder } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [processing, setProcessing] = useState(false);

    const total = cartItems.reduce((s, i) => s + i.price, 0);

    const payNow = () => {
        setProcessing(true);

        setTimeout(() => {
            const orderData = {
                orderId: "ORD-" + Date.now(),
                name: user.name,
                items: cartItems,
                total,
                time: new Date().toLocaleString(),
            };

            setOrder(orderData);
            clearCart();

            alert("✅ Payment Successful");
            navigate("/success");
        }, 1500);
    };

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold mb-8">Payment</h1>

            <div className="border rounded-lg p-6 bg-white">
                <h2 className="font-semibold mb-4">Select Payment Method</h2>

                <div className="space-y-2 mb-6">
                    <label><input type="radio" defaultChecked /> UPI</label><br />
                    <label><input type="radio" /> Card</label><br />
                    <label><input type="radio" /> Gift Card</label>
                </div>

                <div className="font-bold text-lg mb-4">
                    Total Payable: ₹{total}
                </div>

                <button
                    onClick={payNow}
                    disabled={processing}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
                >
                    {processing ? "Processing..." : "Pay Now"}
                </button>
            </div>
        </div>
    );
}
