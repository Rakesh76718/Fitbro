import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";

const stats = [
  { value: 2500, suffix: "+", label: "Active Members" },
  { value: 15, suffix: "+", label: "Expert Trainers" },
  { value: 50, suffix: "+", label: "Premium Equipment" },
  { value: 98, suffix: "%", label: "Satisfaction Rate" },
];

export default function Stats() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      });

      stats.forEach((stat, i) => {
        const el = sectionRef.current?.querySelectorAll(".stat-number")[i];
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + stat.suffix;
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item glass-card">
              <p className="stat-number">0{stat.suffix}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
