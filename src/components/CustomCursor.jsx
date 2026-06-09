import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";

const INTERACTIVE = "a, button, input, select, textarea, .glass-card, .tilt-card, .hero-slider-dot";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      cursor.style.display = "none";
      dot.style.display = "none";
      return;
    }

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const dotPos = { x: pos.x, y: pos.y };

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      gsap.to(dot, { x: pos.x, y: pos.y, duration: 0.1, ease: "power2.out" });
    };

    const ticker = () => {
      dotPos.x += (pos.x - dotPos.x) * 0.15;
      dotPos.y += (pos.y - dotPos.y) * 0.15;
      gsap.set(cursor, { x: dotPos.x, y: dotPos.y });
    };

    gsap.ticker.add(ticker);
    window.addEventListener("mousemove", onMove);

    const grow = () => {
      gsap.to(cursor, { scale: 2.5, opacity: 0.5, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 0, duration: 0.3 });
    };

    const shrink = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 1, duration: 0.3 });
    };

    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(INTERACTIVE)) grow();
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(INTERACTIVE)) shrink();
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
