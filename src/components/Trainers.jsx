import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";
import { gymImages } from "../data/images";
import TiltCard from "./TiltCard";

const trainers = [
  {
    name: "Rakesh Kumar",
    role: "Bodybuilding",
    tag: "8+ Years Experience",
    image: gymImages.trainers[0],
  },
  {
    name: "Riya Sharma",
    role: "Yoga",
    tag: "Certified Instructor",
    image: gymImages.trainers[1],
  },
  {
    name: "Urmila Patel",
    role: "Fitness",
    tag: "HIIT Specialist",
    image: gymImages.trainers[2],
  },
];

export default function Trainers() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trainers-header", {
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

      gsap.from(".trainer-card", {
        scrollTrigger: {
          trigger: ".trainers-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 70,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="trainers" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header trainers-header">
          <span className="section-label">Our Team</span>
          <h2 className="section-title">Meet Your Trainers</h2>
          <p className="section-desc">
            World-class coaches dedicated to unlocking your full potential.
          </p>
        </div>

        <div className="trainers-grid">
          {trainers.map((trainer) => (
            <TiltCard key={trainer.name} className="glass-card trainer-card">
              <div className="trainer-avatar">
                <img src={trainer.image} alt={trainer.name} loading="lazy" />
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p className="trainer-role">{trainer.role}</p>
                <span className="trainer-tag">{trainer.tag}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
