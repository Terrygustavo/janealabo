// KenBurnsHeroBg.tsx
import React, { useEffect, useRef, useState } from "react";

const images = [
  "/jewel1.webp",
  "/jewel2.webp",
  "/jewel3.webp",
  "/jewel4.webp"
];

const DURATION = 6000; // ms per image
const FADE_DURATION = 1200; // ms fade

export default function KenBurnsHeroBg() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setFade(false);
    timeoutRef.current = setTimeout(() => setFade(true), DURATION - FADE_DURATION);
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % images.length);
      setFade(false);
    }, DURATION);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Hero background"
          className={`w-full h-full object-cover object-center absolute inset-0 transition-opacity duration-[${FADE_DURATION}ms] transition-transform duration-[${DURATION}ms] 
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          style={{
            transform:
              i === index
                ? "scale(1.12)"
                : "scale(1.05)",
            transition: `opacity ${FADE_DURATION}ms ease, transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1)`
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}
