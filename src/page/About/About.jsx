import "./About.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SecurityIcon from "@mui/icons-material/Security";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import FavoriteIcon from "@mui/icons-material/Favorite";

const teamMembers = [
  {
    name: "Ahmed Ashraf",
    role: "Founder & CEO",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmed&backgroundColor=b6e3f4",
    bio: "10+ years in e-commerce and retail management.",
  },
  {
    name: "Sara Mohamed",
    role: "Head of Design",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara&backgroundColor=ffd5dc",
    bio: "Award-winning UI/UX designer with a passion for beautiful interfaces.",
  },
  {
    name: "Omar Hassan",
    role: "Lead Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Omar&backgroundColor=c0aede",
    bio: "Full-stack engineer building scalable e-commerce solutions.",
  },
  {
    name: "Nour Ali",
    role: "Customer Success",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nour&backgroundColor=d1d4f9",
    bio: "Dedicated to making every customer experience exceptional.",
  },
];

const stats = [
  { icon: <PeopleIcon />, value: "25K+", label: "Happy Customers" },
  { icon: <StorefrontIcon />, value: "5K+", label: "Products" },
  { icon: <LocalShippingIcon />, value: "98%", label: "On-time Delivery" },
  { icon: <StarIcon />, value: "8+", label: "Years of Experience" },
];

const values = [
  {
    icon: <SecurityIcon />,
    title: "Trust & Security",
    desc: "Your data and payments are always protected with top-grade encryption.",
  },
  {
    icon: <EmojiObjectsIcon />,
    title: "Innovation",
    desc: "We constantly evolve our platform to give you the best shopping experience.",
  },
  {
    icon: <FavoriteIcon />,
    title: "Customer First",
    desc: "Every decision we make is centered around your satisfaction and happiness.",
  },
];

function About() {
  return (
    <div className="about_page">
      {/* Hero */}
      <section className="page_hero">
        <div className="container">
          <h1>About Asharf Online Store</h1>
          <p>We are passionate about bringing you the best products at unbeatable prices.</p>
        </div>
      </section>

      {/* Story */}
      <section className="about_story">
        <div className="container">
          <div className="story_grid">
            <div className="story_content">
              <div className="section_title" style={{ textAlign: "left" }}>
                <h2>Our Story</h2>
                <div className="line" style={{ margin: "14px 0 0" }}></div>
              </div>
              <p>
                Founded in 2016, Asharf Online Store started as a small electronics boutique in Cairo. 
                Our founder, Ahmed Ashraf, believed that everyone deserves access to premium products 
                without breaking the bank.
              </p>
              <p>
                Over the years, we expanded from electronics to a full-fledged marketplace covering 
                fashion, accessories, home goods, and much more — serving over 25,000 happy customers 
                across Egypt and the Arab world.
              </p>
              <p>
                Today, we are proud to be one of the most trusted online shopping destinations, known 
                for our quality, fast delivery, and outstanding customer service.
              </p>
            </div>
            <div className="story_visual">
              <div className="visual_card">
                <div className="visual_icon"><StorefrontIcon /></div>
                <h3>Asharf Online Store</h3>
                <p>Delivering happiness since 2016</p>
                <div className="visual_tags">
                  <span>Electronics</span>
                  <span>Fashion</span>
                  <span>Accessories</span>
                  <span>Home & Living</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about_stats">
        <div className="container">
          <div className="stats_grid">
            {stats.map((stat, i) => (
              <div className="stat_card" key={i}>
                <div className="stat_icon">{stat.icon}</div>
                <div className="stat_value">{stat.value}</div>
                <div className="stat_label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about_mission">
        <div className="container">
          <div className="section_title">
            <h2>Mission & Vision</h2>
            <p>What drives us forward every single day.</p>
            <div className="line"></div>
          </div>
          <div className="mv_grid">
            <div className="mv_card mission">
              <div className="mv_tag">🎯 Our Mission</div>
              <h3>Empower Every Shopper</h3>
              <p>
                To provide an effortless, enjoyable, and trustworthy online shopping experience 
                by curating the finest products from around the world and delivering them to your 
                doorstep with speed and care.
              </p>
            </div>
            <div className="mv_card vision">
              <div className="mv_tag">🚀 Our Vision</div>
              <h3>Leading Regional E-Commerce</h3>
              <p>
                To become the #1 e-commerce destination in the Arab world by 2028 — recognized 
                for our innovation, customer obsession, and the incredible variety of products 
                that cater to every lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about_values">
        <div className="container">
          <div className="section_title">
            <h2>Our Core Values</h2>
            <p>The principles that guide every decision we make.</p>
            <div className="line"></div>
          </div>
          <div className="values_grid">
            {values.map((v, i) => (
              <div className="value_card" key={i}>
                <div className="value_icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about_team">
        <div className="container">
          <div className="section_title">
            <h2>Meet Our Team</h2>
            <p>The talented people behind Asharf Online Store.</p>
            <div className="line"></div>
          </div>
          <div className="team_grid">
            {teamMembers.map((member, i) => (
              <div className="team_card" key={i}>
                <div className="team_avatar">
                  <img src={member.avatar} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <div className="team_role">{member.role}</div>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
