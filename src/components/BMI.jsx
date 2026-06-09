import { useState, useEffect, useRef } from "react";
import { gsap } from "../utils/gsapSetup";

function getBMICategory(bmi) {
  if (bmi < 18.5) return { label: "Underweight", advice: "Focus on balanced nutrition and strength training." };
  if (bmi < 25) return { label: "Normal Weight", advice: "Great job! Maintain your current routine." };
  if (bmi < 30) return { label: "Overweight", advice: "Consider cardio and a calorie-conscious diet." };
  return { label: "Obese", advice: "Consult a trainer for a structured weight-loss plan." };
}

export default function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bmi-animate", {
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

  const calculate = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      alert("Please enter valid height (cm) and weight (kg).");
      return;
    }

    const bmi = w / (h / 100) ** 2;
    const category = getBMICategory(bmi);
    setResult({ value: bmi.toFixed(1), ...category });
  };

  return (
    <section id="bmi" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header bmi-animate">
          <span className="section-label">Health Check</span>
          <h2 className="section-title">BMI Calculator</h2>
          <p className="section-desc">
            Track your body mass index and understand where you stand.
          </p>
        </div>

        <div className="bmi-wrapper bmi-animate">
          <div className="glass-card bmi-card">
            <div className="bmi-inputs">
              <div className="input-group">
                <label htmlFor="height">Height (cm)</label>
                <input
                  id="height"
                  type="number"
                  placeholder="e.g. 175"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="weight">Weight (kg)</label>
                <input
                  id="weight"
                  type="number"
                  placeholder="e.g. 70"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
            </div>

            <button className="btn btn-primary" onClick={calculate} style={{ width: "100%" }}>
              Calculate BMI
            </button>

            {result && (
              <div className="bmi-result">
                <p className="bmi-value">{result.value}</p>
                <p className="bmi-category">{result.label}</p>
                <p className="bmi-advice">{result.advice}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
