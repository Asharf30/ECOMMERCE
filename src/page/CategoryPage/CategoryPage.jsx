import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../component/sliderProduct/Product";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./categorypage.css";

function CategoryPage() {
  const { category } = useParams();
  console.log(category);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchproduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`,
        );
        setCategoryProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category products:", error);
      }
    };
    fetchproduct();
  }, [category]);
  console.log(categoryProducts);

  return (
    <>
      <div className="categgory_products">
        {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "20vh",
              width: "100%",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <div className="container">
            <div className="top_slide">
              <h2 style={{ fontSize: "32px", textTransform: "capitalize" }}>
                {category} : {categoryProducts.length} Products
              </h2>
              <p style={{ color: " #7b7b7b" }}>
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div className="products">
              {categoryProducts.map((item, index) => (
                <Product item={item} key={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CategoryPage;
