import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-inner > *", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container footer-inner">
        <p className="footer-logo">
          FIT <span>BRO</span>
        </p>
        <div className="footer-divider" />
        <p className="footer-tagline">Fitness Redefined</p>
        <p className="footer-copy">© 2026 FIT BRO – Fitness Redefined</p>
      </div>
    </footer>
  );
}
