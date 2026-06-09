import { useEffect, useRef, useState } from "react";
import { gsap } from "../utils/gsapSetup";

export default function HeroSlider() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const slides = [
    { src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop", label: "Train Hard" },
    { src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80&auto=format&fit=crop", label: "Push Limits" },
    { src: "https://images.unsplash.com/photo-1540497077202-7a8f786e6bf9?w=1920&q=80&auto=format&fit=crop", label: "Stay Strong" },
  ];

  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(interval);
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    gsap.to(track, {
      x: `-${current * 100}%`,
      duration: 1.2,
      ease: "power3.inOut",
    });

    const activeSlide = track.children[current];
    const img = activeSlide?.querySelector("img");
    if (img) {
      gsap.fromTo(img, { scale: 1.15 }, { scale: 1.05, duration: 5, ease: "none" });
    }
  }, [current]);

  return (
    <div className="hero-slider">
      <div className="hero-slider-track" ref={trackRef}>
        {slides.map((slide) => (
          <div key={slide.label} className="hero-slider-slide">
            <img src={slide.src} alt={slide.label} />
            <div className="hero-slider-label">{slide.label}</div>
          </div>
        ))}
      </div>
      <div className="hero-slider-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-slider-dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
