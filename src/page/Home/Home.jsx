import { useEffect, useState } from "react";
import Slider from "../../component/Header/Slider";
import SlideProduct from "../../component/sliderProduct/slideProduct";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const categories = [
  "mens-watches",
  "smartphones",
  "laptops",
  "mens-shoes",
  "sports-accessories",
];

function Home() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await axios.get(
              `https://dummyjson.com/products/category/${category}`,
            );
            return { [category]: res.data.products };
          }),
        );

        const productData = Object.assign({}, ...results);
        setProducts(productData);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
      <Slider />

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        categories.map((category) => (
          <SlideProduct
            key={category}
            data={products[category]}
            title={category.replace(/-/g, " ")}
          />
        ))
      )}
    </div>
  );
}

export default Home;
