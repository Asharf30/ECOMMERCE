import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Product from "../component/sliderProduct/Product";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(true);

  console.log(results);
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        setResults(res.data.products || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    if (query) {
      fetchResult();
    }
  }, [query]);

  return (
    <div>
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
      ) : results.length > 0 ? (
        <div className="container">
          <div className="top_slide">
            <h2 style={{ fontSize: "32px", textTransform: "capitalize" }}>
              Results For : {query}
            </h2>
          </div>
          <div className="products">
            {results.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="top_slide">
            <h2 style={{ fontSize: "32px", textTransform: "capitalize" }}>
              <span style={{ color: "red" }}>No Results Found for </span> :{" "}
              {query}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
