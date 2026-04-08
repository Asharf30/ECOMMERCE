import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../context/CartContextObject";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
  const { cartItems, addToCart, FavriotItme, addToFavriot, removeFromFavriot } =
    useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((cartItem) => cartItem.id === product.id);

  const handelAddToCart = () => {
    addToCart(product);

    toast.custom(
      (t) => (
        <div
          className={`tost_wrapper ${t.visible ? "toast-enter" : "toast-exit"}`}
        >
          <img src={product.images[0]} alt={product.title} />
          <div className="toast_content">
            <strong>{product.title}</strong>
            <div className="success-text">added to Cart</div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      ),
      { duration: 2000 },
    );
  };

  const isInFavriot = FavriotItme.some(
    (favriotItem) => favriotItem.id === product.id,
  );
  const handelAddToFavriot = () => {
    if (isInFavriot) {
      removeFromFavriot(product.id);
      toast.error(`${product.title} Removed From favorites`);
    } else {
      addToFavriot(product);
      toast.success(`${product.title} added to favorites!`);
    }
  };

  return (
    <div>
      <div className="details">
        <h1 className="name">{product?.title}</h1>

        {/* خلينا النجوم لوحدها */}
        <div className="stars">
          <StarIcon />
          <StarIcon />

          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </div>

        {/* طلعنا باقي التفاصيل بره عشان نتحكم في مسافاتها براحتنا */}
        <p className="price">${product?.price}</p>

        <h5 className="info">
          Availability: <span>{product?.availabilityStatus}</span>
        </h5>
        <h5 className="info">
          Brand: <span>{product?.brand}</span>
        </h5>

        <p className="desc">{product?.description}</p>

        <h5 className="stock_warning">
          Hurry Up! only <span>{product?.stock}</span> products left in stock
        </h5>

        {/* جمعنا الأزرار في ديف واحد عشان نجيبهم جنب بعض */}
        <div className="actions">
          <button
            type="button"
            className={`add_to_cart ${isInCart ? "in-cart" : ""}`}
            aria-label="Add to cart"
            onClick={() => handelAddToCart(product)}
          >
            {isInCart ? "Item in Cart" : "Add to Cart"}{" "}
            <ShoppingCartOutlinedIcon />
          </button>
          <button
            type="button"
            className={`wishlist_btn ${isInFavriot ? "in-favorites" : ""}`}
            aria-label="Add to wishlist"
            onClick={handelAddToFavriot}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductInfo;
