'use client';

import { ReactNode, useEffect, useRef, useState } from "react";

type ViewportFadeInProps = {
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function ViewportFadeIn({
  as: Component = "div",
  delay = 0,
  className = "",
  children
}: ViewportFadeInProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
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

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Component
      ref={(node) => {
        ref.current = node as HTMLElement | null;
      }}
      className={`transform-gpu opacity-0 transition duration-500 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3"
      } ${className}`}
    >
      {children}
    </Component>
  );
}
