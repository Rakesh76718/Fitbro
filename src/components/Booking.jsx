import { useState, useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";

const slots = [
  { value: "morning", label: "Morning (6 AM – 12 PM)" },
  { value: "evening", label: "Evening (4 PM – 8 PM)" },
  { value: "night", label: "Night (8 PM – 11 PM)" },
];

export default function Booking() {
  const [slot, setSlot] = useState("");
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".booking-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const confirmBooking = () => {
    if (!slot) {
      alert("Please select a time slot first.");
      return;
    }

    const selected = slots.find((s) => s.value === slot);
    alert(`Booking confirmed!\n\nTime Slot: ${selected.label}\n\nSee you at FIT BRO!`);
  };

  return (
    <section id="booking" className="section section-grid-bg" ref={sectionRef}>
      <div className="container">
        <div className="section-header booking-animate">
          <span className="section-label">Reserve</span>
          <h2 className="section-title">Book Your Slot</h2>
          <p className="section-desc">
            Secure your training session at a time that works for you.
          </p>
        </div>

        <div className="booking-wrapper booking-animate">
          <div className="glass-card booking-card">
            <div className="input-group">
              <label htmlFor="slot">Select Time Slot</label>
              <select
                id="slot"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
              >
                <option value="">Choose a slot...</option>
                {slots.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <button className="btn btn-primary" onClick={confirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
