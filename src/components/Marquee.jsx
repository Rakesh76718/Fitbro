const words = [
  "STRENGTH", "DISCIPLINE", "POWER", "FOCUS",
  "ENDURANCE", "TRANSFORM", "GRIND", "VICTORY",
];

export default function Marquee() {
  const track = [...words, ...words];

  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {track.map((word, i) => (
          <span key={`${word}-${i}`} className="marquee-word">
            {word}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
