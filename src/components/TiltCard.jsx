import { useRef, useCallback } from "react";
import { gsap } from "../utils/gsapSetup";

export default function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);

  const handleMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });

    const glow = card.querySelector(".tilt-glow");
    if (glow) {
      gsap.to(glow, {
        opacity: 1,
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, []);

  const handleLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    const glow = card.querySelector(".tilt-glow");
    if (glow) {
      gsap.to(glow, { opacity: 0, duration: 0.4 });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="tilt-glow" />
      {children}
    </div>
  );
}
