import React, { useContext } from "react";
import { CartContext } from "../component/context/CartContextObject";
import Product from "../component/sliderProduct/Product";
import "../component/sliderProduct/SlideProduct.css";
import "./Favorites.css";

function Favorites() {
  const { FavriotItme } = useContext(CartContext);
  return (
    <>
      <div className="favorites_page">
        <div className="container">
          <div className="top_slide" style={{ marginTop: "30px" }}>
            <h2 style={{ fontSize: "32px", textTransform: "capitalize" }}>
              Your Favorites
            </h2>
            <p style={{ color: "#7b7b7b" }}>
              {FavriotItme.length} item{FavriotItme.length !== 1 ? "s" : ""} saved
            </p>
          </div>

          {FavriotItme.length === 0 ? (
            <div className="empty_favorites">
              <p>💔 No favorite items yet. Start adding some!</p>
            </div>
          ) : (
            <div className="favorites_grid">
              {FavriotItme.map((item) => (
                <Product item={item} key={item.id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;
