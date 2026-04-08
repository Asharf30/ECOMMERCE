import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useContext } from "react";
import { CartContext } from "../context/CartContextObject";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "./Search";
export default function TopHeader() {
  const { cartItems, FavriotItme } = useContext(CartContext);

  return (
    <div className="top_header ">
      <div className="container max-w-7xl mx-auto px-4">
        <Link to="/" className="logo">
          {" "}
          <img src={logo} alt="Logo" />
        </Link>
        <Search />
        <div className="header-icons">
          <div className="icons">
            <Link to="/favorites">
              {" "}
              <FavoriteBorderIcon style={{ fontSize: "22px" }} />
              <span className="count" style={{ fontSize: "15px" }}>
                {FavriotItme.length}
              </span>
            </Link>
          </div>
          <div className="icons">
            <Link to="/cart">
              <ShoppingCartOutlinedIcon style={{ fontSize: "22px" }} />
              <span style={{ fontSize: "15px" }}>{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
