import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import Product from "../../component/sliderProduct/Product";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FilterListIcon from "@mui/icons-material/FilterList";
import "./Accessories.css";

const ACCESSORIES_CATEGORIES = [
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
];

const CATEGORY_LABELS = {
  "mens-watches": "Men's Watches",
  "womens-watches": "Women's Watches",
  "womens-bags": "Women's Bags",
  "womens-jewellery": "Jewellery",
  "sunglasses": "Sunglasses",
};

function Accessories() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const results = await Promise.all(
          ACCESSORIES_CATEGORIES.map((cat) =>
            axios
              .get(`https://dummyjson.com/products/category/${cat}`)
              .then((res) => res.data.products.map((p) => ({ ...p, _cat: cat })))
          )
        );
        const combined = results.flat();
        setAllProducts(combined);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const displayed = useMemo(() => {
    let list = activeCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p._cat === activeCategory);

    if (sortBy === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") list = [...list].sort((a, b) => (b.rating || 0) - (a.rating || 0));

    return list;
  }, [allProducts, activeCategory, sortBy]);

  return (
    <div className="accessories_page">
      {/* Hero */}
      <section className="page_hero">
        <div className="container">
          <h1>Accessories Collection</h1>
          <p>Discover watches, bags, jewellery, and sunglasses curated for every style.</p>
        </div>
      </section>

      <div className="container">
        <div className="accessories_layout">
          {/* Sidebar */}
          <aside className="accessories_sidebar">
            <div className="sidebar_section">
              <h3><FilterListIcon style={{ fontSize: 18 }} /> Filter by Category</h3>
              <div className="cat_filters">
                <button
                  id="cat-all"
                  className={`cat_btn ${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  All Accessories
                  <span className="cat_count">{allProducts.length}</span>
                </button>
                {ACCESSORIES_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    id={`cat-${cat}`}
                    className={`cat_btn ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {CATEGORY_LABELS[cat]}
                    <span className="cat_count">
                      {allProducts.filter((p) => p._cat === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            </aside>

          {/* Products */}
          <div className="accessories_content">
            {/* Sort bar */}
            <div className="acc_top_bar">
              <p className="acc_count">
                Showing <strong>{displayed.length}</strong> products
              </p>
              <div className="sort_group">
                <label htmlFor="sort-select">Sort by:</label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort_select"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>

            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "40vh" }}>
                <CircularProgress style={{ color: "#7C3AED" }} />
              </Box>
            ) : displayed.length === 0 ? (
              <div className="acc_empty">No products match your filters.</div>
            ) : (
              <div className="products">
                {displayed.map((item) => (
                  <Product item={item} key={`${item.id}-${item._cat}`} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
