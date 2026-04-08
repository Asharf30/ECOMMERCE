import { useState } from "react";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Blog.css";

export const blogPosts = [
  {
    id: 1,
    slug: "top-10-smartwatches-2024",
    title: "Top 10 Smartwatches to Buy in 2024",
    excerpt:
      "Discover the best smartwatches that combine style, functionality, and value. From budget-friendly options to premium picks, we've got you covered.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    date: "March 15, 2024",
    author: "Ahmed Ashraf",
    category: "Electronics",
    readTime: "5 min read",
    content:
      "Smartwatches have come a long way in recent years. Whether you're looking for fitness tracking, notifications, or style, there's a smartwatch for everyone. In this guide, we'll explore the top 10 options available in 2024...",
  },
  {
    id: 2,
    slug: "fashion-trends-spring-2024",
    title: "Fashion Trends to Watch This Spring",
    excerpt:
      "Spring 2024 brings a fresh wave of styles — from bold prints to sustainable fashion. Here's what's hot this season and how to rock it.",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    date: "March 10, 2024",
    author: "Sara Mohamed",
    category: "Fashion",
    readTime: "4 min read",
    content:
      "Spring is always an exciting time for fashion enthusiasts. This year brings a beautiful blend of nostalgic styles and futuristic cuts...",
  },
  {
    id: 3,
    slug: "how-to-choose-laptop-2024",
    title: "How to Choose the Perfect Laptop in 2024",
    excerpt:
      "With so many options on the market, choosing a laptop can be overwhelming. This guide breaks down the key specs to look for based on your needs.",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    date: "March 5, 2024",
    author: "Omar Hassan",
    category: "Electronics",
    readTime: "7 min read",
    content:
      "The laptop market has never been more competitive. From ultra-thin MacBooks to powerful gaming rigs, finding the right laptop requires knowing what you need...",
  },
  {
    id: 5,
    slug: "smart-home-gadgets-guide",
    title: "Best Smart Home Gadgets for 2024",
    excerpt:
      "Transform your living space with these cutting-edge smart home devices. From smart speakers to automated lighting, create the home of the future.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    date: "Feb 20, 2024",
    author: "Ahmed Ashraf",
    category: "Electronics",
    readTime: "6 min read",
    content:
      "The smart home revolution is here. With more affordable options than ever before, there's never been a better time to upgrade your living space with smart devices...",
  },
  {
    id: 6,
    slug: "sustainable-shopping-tips",
    title: "How to Shop Sustainably Online",
    excerpt:
      "Make eco-conscious choices with your online shopping. Tips on finding sustainable brands, reducing packaging waste, and making your purchases count.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    date: "Feb 14, 2024",
    author: "Sara Mohamed",
    category: "Lifestyle",
    readTime: "5 min read",
    content:
      "Sustainable shopping isn't just a trend — it's a responsibility. As consumers, our choices have a direct impact on the environment and communities around the world...",
  },
];

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Accessories",
  "Lifestyle",
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="blog_page">
      {/* Hero */}
      <section className="page_hero">
        <div className="container">
          <h1>Our Blog</h1>
          <p>
            Tips, trends, and insights to help you shop smarter and live better.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="blog_filters">
        <div className="container">
          <div className="filter_tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase()}`}
                className={`filter_tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="blog_posts">
        <div className="container">
          <div className="posts_grid">
            {filtered.map((post) => (
              <article className="post_card" key={post.id}>
                <Link to={`/blog/${post.slug}`} className="post_image_link">
                  <div className="post_image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <div className="post_category_badge">{post.category}</div>
                  </div>
                </Link>
                <div className="post_body">
                  <div className="post_meta">
                    <span>
                      <CalendarTodayIcon style={{ fontSize: 14 }} /> {post.date}
                    </span>
                    <span>
                      <PersonIcon style={{ fontSize: 14 }} /> {post.author}
                    </span>
                    <span className="read_time">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h2 className="post_title">{post.title}</h2>
                  </Link>
                  <p className="post_excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="read_more_btn">
                    Read More <ArrowForwardIcon style={{ fontSize: 16 }} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="no_posts">No posts in this category yet.</div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
