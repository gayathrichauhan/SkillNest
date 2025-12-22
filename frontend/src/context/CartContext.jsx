import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [toast, setToast] = useState("");
    const [order, setOrder] = useState(null); // ✅ NEW

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) setCartItems(JSON.parse(storedCart));
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (course) => {
        const exists = cartItems.find((item) => item._id === course._id);
        if (!exists) {
            setCartItems([...cartItems, course]);
            setToast("Course added to cart ✅");
            setTimeout(() => setToast(""), 2000);
        }
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter((item) => item._id !== id));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                toast,
                setToast,
                order,
                setOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
