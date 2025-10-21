const marqueeWords = [
  "MELT",
  "DRIP",
  "POP",
  "GOUZLE",
  "STRETCH",
  "CRISP",
  "SEAR",
  "MELT",
  "DRIP",
  "POP",
  "GOUZLE",
  "STRETCH",
  "CRISP",
  "SEAR"
];

export function BeltMarquee() {
  return (
    <div className="belt" aria-hidden="true">
      <div className="track">
        {marqueeWords.map((word, index) => (
          <span key={`${word}-${index}`} className="chip">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
