/* eslint-disable react-hooks/set-state-in-effect */

import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const change = (e) => {
    setSearchTerm(e.target.value);
  };
  const [suggestions, setSuggestion] = useState([]);
  const location = useLocation();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
    setSuggestion([]);
  };

  useEffect(() => {
    const fetchSggetion = async () => {
      if (!searchTerm.trim()) {
        setSuggestion([]);
        return;
      }

      try {
        const res = await axios.get(
          `https://dummyjson.com/products/search?q=${searchTerm}`,
        );
        setSuggestion(res.data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestion([]);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchSggetion();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  useEffect(() => {
    setSuggestion([]);
    setSearchTerm("");
  }, [location]);
  return (
    <>
      <div className="searchBox_container">
        <form
          onSubmit={handelSubmit}
          className=" flex items-center bg-background rounded-4xl border border-primary outline-none"
        >
          <input type="text" placeholder="Search..." value={searchTerm} onChange={change} />
          <button type="submit">
            <SearchIcon style={{ fontSize: "22px", color: "white" }} />
          </button>
        </form>
        {suggestions.length > 0 && (
          <ul className="suggetions">
            {suggestions.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                {" "}
                <li key={item.id}>
                  <img src={item.images[0]} alt={item.title} />
                  <span>{item.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Search;
