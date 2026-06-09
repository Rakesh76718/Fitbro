import { useEffect, useRef } from "react";
import { FiCheck } from "react-icons/fi";
import { gsap } from "../utils/gsapSetup";
import { gymImages } from "../data/images";

const plans = [
  {
    name: "Basic",
    price: 999,
    features: ["Gym Access", "Locker Room", "Basic Equipment", "Weekday Hours"],
    featured: false,
  },
  {
    name: "Pro",
    price: 1999,
    features: [
      "All Basic Features",
      "Personal Trainer (2x/week)",
      "Diet Consultation",
      "Group Classes",
      "24/7 Access",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: 2999,
    features: [
      "All Pro Features",
      "Unlimited PT Sessions",
      "Custom Meal Plans",
      "Recovery & Spa Access",
      "Priority Booking",
    ],
    featured: false,
  },
];

export default function Plans() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".plans-header", {
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

      gsap.from(".plan-card", {
        scrollTrigger: {
          trigger: ".plans-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 70,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".plans-banner img", {
        scrollTrigger: {
          trigger: ".plans-banner",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        scale: 1.15,
        duration: 1.4,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="plans" className="section section-grid-bg" ref={sectionRef}>
      <div className="container">
        <div className="section-header plans-header">
          <span className="section-label">Membership</span>
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-desc">
            Flexible plans designed to match your ambition and lifestyle.
          </p>
        </div>

        <div className="plans-banner">
          <img src={gymImages.gallery[0].src} alt="FIT BRO training floor" loading="lazy" />
          <div className="plans-banner-overlay" />
        </div>

        <div className="plans-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`glass-card plan-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && <span className="plan-badge">Most Popular</span>}
              <p className="plan-name">{plan.name}</p>
              <p className="plan-price">
                <span>₹</span>
                {plan.price}
              </p>
              <p className="plan-period">per month</p>
              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${plan.featured ? "btn-primary" : "btn-outline"}`}>
                Get {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
