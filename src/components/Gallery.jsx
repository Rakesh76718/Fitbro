import { useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";
import { gymImages } from "../data/images";

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-header", {
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

      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.85,
        y: 40,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.to(".gallery-item img", {
        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: -30,
        ease: "none",
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="gallery" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header gallery-header">
          <span className="section-label">Our Space</span>
          <h2 className="section-title">Inside the Gym</h2>
          <p className="section-desc">
            World-class facilities built for serious training.
          </p>
        </div>

        <div className="gallery-grid">
          {gymImages.gallery.map((item) => (
            <div key={item.alt} className={`gallery-item gallery-item--${item.span}`}>
              <div className="gallery-item-inner">
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span>{item.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
