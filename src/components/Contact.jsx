import { useState, useEffect, useRef } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { gsap } from "../utils/gsapSetup";

const contactDetails = [
  {
    icon: <FiPhone />,
    label: "Phone",
    value: "+91 9876543210",
    link: "tel:+919876543210",
  },
  {
    icon: <FiMail />,
    label: "Email",
    value: "support@fitbro.com",
    link: "mailto:support@fitbro.com",
  },
  {
    icon: <FiMapPin />,
    label: "Address",
    value: "123 Fitness Street, Mumbai, India",
    link: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.from(".contact-detail-card", {
        scrollTrigger: {
          trigger: ".contact-details-row",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.from(".contact-form-card", {
        scrollTrigger: {
          trigger: ".contact-form-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 0.9,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }
    alert("Message sent! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section section-grid-bg" ref={sectionRef}>
      <div className="container">
        <div className="section-header contact-header">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Have a question or want to join? Reach out and we'll respond promptly.
          </p>
        </div>

        <div className="contact-details-row">
          {contactDetails.map((detail) => (
            <a
              key={detail.label}
              href={detail.link}
              className="glass-card contact-detail-card"
            >
              <div className="contact-detail-icon">{detail.icon}</div>
              <div className="contact-detail-info">
                <p className="contact-detail-label">{detail.label}</p>
                <p className="contact-detail-value">{detail.value}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-form-wrapper">
          <div className="glass-card contact-form-card">
            <h3 className="contact-form-title">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="input-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  placeholder="How can we help?"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                <FiSend size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
