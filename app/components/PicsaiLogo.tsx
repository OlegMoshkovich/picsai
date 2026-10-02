"use client";

import { useState } from "react";
import Link from "next/link";

const grid = [
  ['P', 'I', 'C', 'S','A','I'],
];

interface SiteLogoProps {
  size?: number;
  letterSize?: string;
  href?: string | null;
  className?: string;
}

export default function SiteLogo({
  size = 80,
  letterSize,
  href = "/",
  className,
}: SiteLogoProps) {
  const computedFontSize = Math.round((size / 3) * 0.4);
  const [toggledSquares, setToggledSquares] = useState<Set<number>>(new Set());

  const handleToggle = (index: number) => {
    setToggledSquares(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const squares = (
      <div
        className="grid grid-cols-9 aspect-[9/1]"
        style={{ width: size*2, gap: 0, margin: 0, padding: 0 }}
      >
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => {
            const index = rowIndex + colIndex;
            const isToggled = toggledSquares.has(index);
            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer ${
                  isToggled ? "bg-white" : "bg-black"
                }`}
                onMouseEnter={() => handleToggle(index)}
                onClick={() => handleToggle(index)}
                onTouchStart={() => handleToggle(index)}
                style={{
                  aspectRatio: "1/1",
                  margin: 0,
                  padding: 0,
                  border: `1px solid ${isToggled ? "white" : "black"}`,
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                <span
                  className={`${letterSize ?? ""} font-light tracking-widest transition-all duration-300 ease-in-out ${
                    isToggled ? "text-black" : "text-white"
                  }`}
                  style={{
                    fontFamily: "var(--font-archivo), system-ui, sans-serif",
                    ...(letterSize ? {} : { fontSize: computedFontSize }),
                  }}
                >
                  {letter}
                </span>
              </div>
            );
          })
        )}
      </div>
  );

  const mark = href ? (
    <Link href={href} className={className}>
      {squares}
    </Link>
  ) : className ? (
    <div className={className}>{squares}</div>
  ) : (
    squares
  );

  return mark;
}
