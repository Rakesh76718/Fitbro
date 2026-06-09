import { useEffect, useRef } from "react";
import { FiActivity, FiUsers, FiCoffee } from "react-icons/fi";
import { gsap } from "../utils/gsapSetup";
import { gymImages } from "../data/images";
import TiltCard from "./TiltCard";

const aboutInfo = {
  mission: "Transforming lives through fitness and empowerment",
  description: "Welcome to FitBro — where dedication meets innovation. Founded in 2015, we've built a community of fitness enthusiasts committed to breaking barriers and achieving extraordinary results. Our state-of-the-art facility combines cutting-edge equipment, expert guidance, and a supportive atmosphere to help you become the strongest version of yourself.",
  stats: [
    { number: "10K+", label: "Active Members" },
    { number: "50+", label: "Certified Trainers" },
    { number: "15+", label: "Years of Excellence" },
    { number: "100%", label: "Member Satisfaction" },
  ],
};

const features = [
  {
    icon: <FiActivity />,
    title: "Modern Equipment",
    desc: "State-of-the-art machines and free weights designed for peak performance and safety.",
    image: gymImages.about[0],
  },
  {
    icon: <FiUsers />,
    title: "Expert Trainers",
    desc: "Certified coaches who craft personalized programs to push your limits safely.",
    image: gymImages.about[1],
  },
  {
    icon: <FiCoffee />,
    title: "Diet Plans",
    desc: "Nutrition guidance tailored to your goals — muscle gain, fat loss, or maintenance.",
    image: gymImages.about[2],
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
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

      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".about-card-img img", {
        scrollTrigger: {
          trigger: ".about-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        scale: 1.2,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section section-grid-bg" ref={sectionRef}>
      <div className="container">
        {/* About Info Section */}
        <div className="about-info-wrapper">
          <div className="about-info-header">
            <h2 className="section-title">{aboutInfo.mission}</h2>
            <p className="about-description">{aboutInfo.description}</p>
          </div>

          <div className="about-stats-grid">
            {aboutInfo.stats.map((stat) => (
              <div key={stat.label} className="about-stat-card">
                <h3 className="about-stat-number">{stat.number}</h3>
                <p className="about-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="section-header about-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built for Champions</h2>
          <p className="section-desc">
            Everything you need to crush your fitness goals — under one roof.
          </p>
        </div>

        <div className="about-grid">
          {features.map((feature) => (
            <TiltCard key={feature.title} className="glass-card about-card">
              <div className="about-card-img">
                <img src={feature.image} alt={feature.title} loading="lazy" />
              </div>
              <div className="about-card-body">
                <div className="about-card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
