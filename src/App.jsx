import TopHeader from "./component/Header/TopHeader";
import BtmHeader from "./component/Header/BtmHeader";
import Home from "./page/Home/Home";
import ProductDetalis from "./page/productDetails/ProductDetalis";
import Favorites from "./page/Favorites";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Cart from "./page/Cart/cart";
import "./component/PageTransition/PageTransition.css";
import { Toaster } from "react-hot-toast";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/SearchResults";
import About from "./page/About/About";
import Blog from "./page/Blog/Blog";
import BlogDetail from "./page/Blog/BlogDetail";
import Contact from "./page/Contact/Contact";
import Accessories from "./page/Accessories/Accessories";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 100);
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={12}
        containerStyle={{
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 4000,
          style: {
            background: "transparent",
            boxShadow: "none",
            padding: "0",
          },
        }}
      />
      <div key={location.pathname} className="fade-in-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetalis />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
