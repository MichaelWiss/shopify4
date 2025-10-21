'use client';

import { ReactNode, useEffect, useRef, useState } from "react";

type ViewportFadeInProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function ViewportFadeIn({
  delay = 0,
  className = "",
  children
}: ViewportFadeInProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`transform-gpu opacity-0 transition duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3"
      } ${className}`}
    >
      {children}
    </div>
  );
}
