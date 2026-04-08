import React, { useContext, useState } from "react";
import { CartContext } from "../../component/context/CartContextObject";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "./ConfirmModal.jsx";
import "./cart.css";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + (Number(item?.price * item.quantity) || 0.0),
    0,
  );

  // سحب clearCart من الكوونتكس (تم إضافة clearCart هنا)
  const { clearCart } = useContext(CartContext);

  // الفانكشن اللي بتمسح وبتقفل الـ Popup مع بعض (تم تعديلها لتستخدم clearCart())
  const handleConfirmClear = () => {
    clearCart(); // استخدام الدالة من الكونتكست
    setIsModalOpen(false); // قفل البوب أب
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="checkout">
        <div className="order_summary">
          <h1>Order Summary</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="clear_all_btn"
            disabled={cartItems.length === 0}
            style={{ cursor: cartItems.length === 0 ? "not-allowed" : "" }}
          >
            Clear All
          </button>
          <div className="items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="item_card">
                  <div className="image_item">
                    <img src={item.images[0]} alt={item.title} />
                  </div>
                  <div className="content">
                    <h1>{item.title}</h1>
                    <p className="price">${item.price.toFixed(2)}</p>
                    <div className="qunatity_control">
                      <button onClick={() => decreaseQuantity(item.id)}>
                        -
                      </button>
                      <span className="quntity text-cyan-700">
                        {item.quantity}
                      </span>
                      <button onClick={() => increaseQuantity(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="delet_icon">
                    <DeleteIcon onClick={() => removeFromCart(item.id)} />
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="bottom_summruy">
            <div className="shop_table">
              <p>Total: </p>
              <span className="total_checkout">${total.toFixed(2)}</span>
            </div>
            <div className="button_div">
              <button type="submit">Checkout</button>
            </div>
            {/* زرار مسح الكل اللي بيفتح الـ Popup */}
          </div>
        </div>
        {/* استدعاء كومبوننت الـ Popup وبنبعتله الـ Props */}
        <ConfirmModal
          isOpen={isModalOpen}
          onConfirm={handleConfirmClear}
          onCancel={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
