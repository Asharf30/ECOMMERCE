/* eslint-disable react-hooks/set-state-in-effect */
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./responsive.css";

export default function BtmHeader() {
  const [categories, setCategories] = useState([]);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close everything on route change
  useEffect(() => {
    setCategoryOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const NavLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Accessories", link: "/accessories" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <div className="btm_header">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Mobile top bar — only visible on mobile */}
        <div className="mobile_top_bar">
          <button
            className="hamburger_btn"
            id="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <CloseIcon style={{ color: "white", fontSize: "26px" }} />
            ) : (
              <MenuOutlinedIcon style={{ color: "white", fontSize: "26px" }} />
            )}
          </button>
        </div>

        {/* Category Browse */}
        <div className="category_nav">
          <div
            className="category_btn"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <MenuOutlinedIcon style={{ color: "white", fontSize: "20px" }} />
            <p style={{ color: "white", fontSize: "15px", fontWeight: "600" }}>
              Browse Categories
            </p>
            <ArrowDropDownOutlinedIcon
              style={{ color: "white", fontSize: "22px" }}
            />
          </div>
          <div className={`category_list ${categoryOpen ? "active" : ""}`}>
            {categories.map((category) => {
              return (
                <Link to={`/category/${category.slug}`} key={category.slug}>
                  {category.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Nav links */}
        <nav className={`nav ${mobileMenuOpen ? "mobile_open" : ""}`}>
          <ul className="nav_links">
            {NavLinks.map((item) => (
              <li
                className={location.pathname === item.link ? "active" : ""}
                key={item.link}
              >
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </div>
  );
}
