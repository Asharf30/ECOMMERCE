import { useState, useEffect } from "react";
import { CartContext } from "./CartContextObject";

export default function CartProvider({ children }) {
  // FAVIROTS
  const [FavriotItme, setFavriotItme] = useState(() => {
    const savedFavriot = localStorage.getItem("favriotItems");
    return savedFavriot ? JSON.parse(savedFavriot) : [];
  });

  const addToFavriot = (item) => {
    setFavriotItme((prevItems) => {
      if (!prevItems.some((i) => i.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromFavriot = (id) => {
    setFavriotItme((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  useEffect(() => {
    localStorage.setItem("favriotItems", JSON.stringify(FavriotItme));
  }, [FavriotItme]);

  // ***FAVIROTS***
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
  };

  // --- دالة مسح الكل - مضافة جديد ---
  const clearCart = () => {
    setCartItems([]);
  };
  // ------------------------------------

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // السطر الذي سألت عنه! (isInCart) - راجع الصورة الثالثة للشرح المرئي
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart, // دالة مسح الكل - مضافة جديد في الـ value
        addToFavriot,
        FavriotItme,
        removeFromFavriot,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
