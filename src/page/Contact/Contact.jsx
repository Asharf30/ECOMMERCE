import { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./Contact.css";

const contactInfo = [
  {
    icon: <LocationOnIcon />,
    label: "Address",
    value: "123 Commerce Street, Cairo, Egypt",
    sub: "Downtown Business District",
  },
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "+20 1000 000 000",
    sub: "Mon–Fri, 9AM–6PM",
  },
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "support@asharf-store.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: <AccessTimeIcon />,
    label: "Working Hours",
    value: "Sun–Thu: 9AM – 8PM",
    sub: "Fri–Sat: 10AM – 5PM",
  },
];

const subjects = [
  "General Inquiry",
  "Order Issue",
  "Return / Refund",
  "Technical Support",
  "Partnership",
  "Other",
];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address.";
    if (!form.subject) e.subject = "Please select a subject.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="contact_page">
      {/* Hero */}

      <section className="page_hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact_main">
        <div className="container">
          <div className="contact_grid">
            {/* Info Card */}
            <div className="contact_info_panel">
              <h2>Contact Information</h2>
              <p>Reach out through any of the channels below.</p>

              <div className="info_items">
                {contactInfo.map((info, i) => (
                  <div className="info_item" key={i}>
                    <div className="info_icon">{info.icon}</div>
                    <div>
                      <div className="info_label">{info.label}</div>
                      <div className="info_value">{info.value}</div>
                      <div className="info_sub">{info.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social_links">
                <p>Follow us on social media</p>
                <div className="social_icons">
                  <a href="#" id="social-facebook" aria-label="Facebook" className="social_icon"><FacebookIcon /></a>
                  <a href="#" id="social-instagram" aria-label="Instagram" className="social_icon"><InstagramIcon /></a>
                  <a href="#" id="social-twitter" aria-label="Twitter" className="social_icon"><TwitterIcon /></a>
                  <a href="#" id="social-youtube" aria-label="YouTube" className="social_icon"><YouTubeIcon /></a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="contact_form_panel">
              {submitted ? (
                <div className="success_message">
                  <CheckCircleIcon style={{ fontSize: 60, color: "#10b981" }} />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button className="btn" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact_form" id="contact-form" noValidate>
                  <h2>Send Us a Message</h2>

                  <div className="form_row">
                    <div className="form_group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={errors.name ? "error" : ""}
                      />
                      {errors.name && <span className="error_msg">{errors.name}</span>}
                    </div>
                    <div className="form_group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && <span className="error_msg">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form_group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={errors.subject ? "error" : ""}
                    >
                      <option value="">Select a subject…</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.subject && <span className="error_msg">{errors.subject}</span>}
                  </div>

                  <div className="form_group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your message here…"
                      className={errors.message ? "error" : ""}
                    />
                    {errors.message && <span className="error_msg">{errors.message}</span>}
                    <div className="char_count">{form.message.length} / min 20 characters</div>
                  </div>

                  <button type="submit" className="btn submit_btn" id="contact-submit">
                    Send Message <SendIcon style={{ fontSize: 18 }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
