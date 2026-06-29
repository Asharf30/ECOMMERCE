import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SlideProduct from "../../component/sliderProduct/slideProduct";
import "./ProductDetalis.css";
import ProductImages from "../../component/sliderProduct/ProdcutImages";
import ProductInfo from "../../component/sliderProduct/ProductInfo";
function ProductDetalis() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        setProduct(response.data);
        setMainImage(response.data.images[0]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (!product?.category) return;

    const getRelatedProdcut = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${product.category}`,
        );
        setRelatedProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching related products:", error);
      } finally {
        setLoadingRelatedProducts(false);
      }
    };

    getRelatedProdcut();
  }, [product?.category]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "20vh",
          width: "100%",
        }}
      >
        <CircularProgress product={product} />
      </Box>
    );
  }
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <div className="item_details">
        <div className="container">
          <ProductImages
            product={product}
            mainImage={mainImage}
            setMainImage={setMainImage}
          />
          <ProductInfo product={product} />
        </div>
      </div>
      {loadingRelatedProducts ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-10px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <SlideProduct
          key={product.category}
          data={relatedProducts}
          title={product.category.replace("-", " ")}
        />
      )}
    </div>
  );
}

export default ProductDetalis;
