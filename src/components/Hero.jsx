import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 30, duration: 0.8 })
        .from(".hero-title .hero-word", { opacity: 0, y: 80, duration: 0.9, stagger: 0.12 }, "-=0.4")
        .from(".hero-subtitle", { opacity: 0, y: 40, duration: 0.8 }, "-=0.5")
        .from(".hero-cta-group .btn", { opacity: 0, y: 30, duration: 0.6, stagger: 0.15 }, "-=0.4")
        .from(".hero-scroll", { opacity: 0, duration: 0.8 }, "-=0.2");

      gsap.to(".hero-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        y: 80,
        opacity: 0.3,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-media">
        <HeroSlider />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Premium Fitness Experience
        </div>

        <h1 className="hero-title">
          <span className="hero-word">FIT BRO</span>
          <span className="hero-word accent">FITNESS</span>
        </h1>

        <p className="hero-subtitle">
          Train Hard. Stay Strong. Transform Yourself.
        </p>

        <div className="hero-cta-group">
          <button className="btn btn-primary" onClick={() => scrollTo("#plans")}>
            Get Started
          </button>
          <button className="btn btn-ghost" onClick={() => scrollTo("#gallery")}>
            View Gallery
          </button>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
