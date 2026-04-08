import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blogData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./Blog.css";

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="blog_not_found">
        <div className="container">
          <h2>Post not found</h2>
          <Link to="/blog" className="btn">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="blog_detail_page">
      {/* Hero */}
      <div
        className="detail_hero"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="detail_hero_overlay">
          <div className="container">
            <Link to="/blog" className="back_link">
              <ArrowBackIcon style={{ fontSize: 18 }} /> Back to Blog
            </Link>
            <div className="detail_category_badge">{post.category}</div>
            <h1>{post.title}</h1>
            <div className="detail_meta">
              <span>
                <CalendarTodayIcon style={{ fontSize: 15 }} /> {post.date}
              </span>
              <span>
                <PersonIcon style={{ fontSize: 15 }} /> {post.author}
              </span>
              <span>
                <AccessTimeIcon style={{ fontSize: 15 }} /> {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="detail_content">
        <div className="container">
          <div className="detail_body">
            <p className="detail_excerpt">{post.excerpt}</p>
            <div className="detail_article">
              <p>{post.content}</p>
              <p>
                Shopping online has transformed how we discover and purchase
                products. With the rise of e-commerce, consumers now have access
                to a global marketplace from the comfort of their homes. This
                revolution has brought both opportunities and challenges, making
                it more important than ever to be an informed and savvy shopper.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>Research products thoroughly before purchasing.</li>
                <li>Compare prices across multiple platforms.</li>
                <li>Read customer reviews for real-world insights.</li>
                <li>Check return and refund policies before buying.</li>
                <li>Look for deals and discounts to maximize value.</li>
              </ul>
              <h2>Why This Matters</h2>
              <p>
                Making informed purchasing decisions not only saves you money
                but also ensures you get products that truly meet your needs. At
                Asharf Online Store, we're committed to helping you make the
                best choices with transparent information and quality products.
              </p>
            </div>
          </div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="related_posts">
              <h2 className="related_title">Related Articles</h2>
              <div className="related_grid">
                {related.map((rp) => (
                  <Link
                    to={`/blog/${rp.slug}`}
                    className="related_card"
                    key={rp.id}
                  >
                    <div className="related_img">
                      <img src={rp.image} alt={rp.title} />
                    </div>
                    <div className="related_info">
                      <span className="related_cat">{rp.category}</span>
                      <h3>{rp.title}</h3>
                      <p>{rp.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
