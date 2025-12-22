import { useCart } from "../context/CartContext";
import { Navigate } from "react-router-dom";

export default function OrderSuccess() {
    const { order } = useCart();

    if (!order) return <Navigate to="/" />;

    return (
        <div className="max-w-3xl mx-auto px-6 py-20">
            <div className="border rounded-lg p-8 bg-white">
                <h1 className="text-3xl font-bold mb-2 text-green-600">
                    Payment Successful ✅
                </h1>

                <p className="mb-6 text-gray-600">Invoice</p>

                <p><b>Name:</b> {order.name}</p>
                <p><b>Order ID:</b> {order.orderId}</p>
                <p><b>Date:</b> {order.time}</p>

                <hr className="my-4" />

                {order.items.map(item => (
                    <div
                        key={item._id}
                        className="flex justify-between py-2"
                    >
                        <span>{item.title}</span>
                        <span>₹{item.price}</span>
                    </div>
                ))}

                <hr className="my-4" />

                <div className="flex justify-between font-bold text-lg">
                    <span>Total Paid</span>
                    <span>₹{order.total}</span>
                </div>
            </div>
        </div>
    );
}
