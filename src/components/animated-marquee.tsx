type MarqueeProps = {
  phrases: string[];
  density?: "loose" | "dense";
};

export function AnimatedMarquee({ phrases, density = "dense" }: MarqueeProps) {
  const duration = density === "dense" ? "18s" : "26s";
  const content = [...phrases, ...phrases];

  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-gradient-to-r from-[#FFE9C6] via-[#FFD9C8] to-[#FFE9C6]">
      <div
        className="flex min-w-max items-center gap-4 py-3 text-sm font-black uppercase tracking-wide animate-marquee"
        style={{ animationDuration: duration }}
      >
        {content.map((phrase, index) => (
          <span
            key={`${phrase}-${index}`}
            className="inline-flex skew-x-[-6deg] border-2 border-ink bg-mustard px-3 py-1 shadow-[4px_4px_0_0_#0E0A08]"
          >
            {phrase}
          </span>
        ))}
      </div>
    </div>
  );
}
