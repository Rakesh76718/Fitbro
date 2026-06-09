import { useEffect, useRef } from "react";
import { FiPhone, FiMail, FiMapPin, FiClock, FiHeadphones, FiCheckCircle } from "react-icons/fi";
import { gsap } from "../utils/gsapSetup";

const careServices = [
  {
    icon: <FiHeadphones />,
    title: "24/7 Support",
    desc: "Round-the-clock customer support to assist you anytime, anywhere.",
  },
  {
    icon: <FiCheckCircle />,
    title: "100% Satisfaction",
    desc: "We guarantee your satisfaction or your money back, no questions asked.",
  },
  {
    icon: <FiClock />,
    title: "Quick Response",
    desc: "Get responses to your queries within 2 hours on business days.",
  },
];

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

export default function CustomerCare() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".care-header", {
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

      gsap.from(".care-service", {
        scrollTrigger: {
          trigger: ".care-services-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".contact-item", {
        scrollTrigger: {
          trigger: ".contact-details-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="customer-care" className="section section-grid-bg" ref={sectionRef}>
      <div className="container">
        <div className="section-header care-header">
          <span className="section-label">Customer Care</span>
          <h2 className="section-title">We're Here For You</h2>
          <p className="section-desc">
            Dedicated support team ready to help you achieve your fitness goals and answer all your questions.
          </p>
        </div>

        <div className="care-services-grid">
          {careServices.map((service) => (
            <div key={service.title} className="glass-card care-service">
              <div className="care-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="care-divider"></div>

        <div className="contact-section">
          <h3 className="contact-title">Get In Touch</h3>
          <div className="contact-details-grid">
            {contactDetails.map((detail) => (
              <a
                key={detail.label}
                href={detail.link}
                className="glass-card contact-item"
              >
                <div className="contact-icon">{detail.icon}</div>
                <div className="contact-info">
                  <p className="contact-label">{detail.label}</p>
                  <p className="contact-value">{detail.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
