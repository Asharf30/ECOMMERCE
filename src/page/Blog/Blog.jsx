import { useState } from "react";
import { Link } from "react-router-dom";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Blog.css";
import { blogPosts } from "./blogData";

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
