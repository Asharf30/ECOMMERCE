import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { CartContext } from "../context/CartContextObject";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Product({ item }) {
  const { cartItems, addToCart, FavriotItme, addToFavriot, removeFromFavriot } =
    useContext(CartContext);
  const navigate = useNavigate();
  const isInCart = cartItems.some((cartItem) => cartItem.id === item.id);

  const handelAddToCart = () => {
    addToCart(item);

    toast.custom(
      (t) => (
        <div
          className={`tost_wrapper ${t.visible ? "toast-enter" : "toast-exit"}`}
        >
          <img src={item.images[0]} alt={item.title} />
          <div className="toast_content">
            <strong>{item.title}</strong>
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
    (favriotItem) => favriotItem.id === item.id,
  );
  const handelAddToFavriot = () => {
    if (isInFavriot) {
      removeFromFavriot(item.id);
      toast.error(`${item.title} Removed From favorites`);
    } else {
      addToFavriot(item);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  return (
    <div className={`Product ${isInCart ? "in-cart" : ""}`}>
      <Link
        to={`/product/${item.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <span className="state_Cart">
          {isInCart && <CheckIcon />}
          in Cart
        </span>
        <div className="img_product">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </div>
        <p className="price">${item.price}</p>
      </Link>

      <div className="icons">
        <span
          style={{ fontSize: "12px" }}
          onClick={handelAddToCart}
          className="btn_addCart"
        >
          <ShoppingCartOutlinedIcon />
        </span>
        <span
          onClick={handelAddToFavriot}
          className={isInFavriot ? "in-favorites" : ""}
        >
          <FavoriteBorderOutlinedIcon />
        </span>
      </div>
    </div>
  );
}

export default Product;
