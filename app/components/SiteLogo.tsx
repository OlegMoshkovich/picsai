"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const grid = [
  ['T', 'H', 'E'],
  ['A', 'I', 'R'],
  ['L', 'A', 'B'],
];

const WANDER_STEP_MS = 260;
const WANDER_TRAIL = 3;
const WANDER_TRAVERSAL = [0, 4, 8, 2, 5, 6, 1, 7, 3];

function wanderLitSquares(step: number): Set<number> {
  const lit = new Set<number>();
  for (let offset = 0; offset < WANDER_TRAIL; offset += 1) {
    const position =
      ((step - offset) % WANDER_TRAVERSAL.length + WANDER_TRAVERSAL.length) %
      WANDER_TRAVERSAL.length;
    lit.add(WANDER_TRAVERSAL[position]);
  }
  return lit;
}

interface SiteLogoProps {
  size?: number;
  letterSize?: string;
  href?: string | null;
  className?: string;
  animating?: boolean;
}

export default function SiteLogo({
  size = 80,
  letterSize,
  href = "/",
  className,
  animating = false,
}: SiteLogoProps) {
  const computedFontSize = Math.round((size / 3) * 0.4);
  const [toggledSquares, setToggledSquares] = useState<Set<number>>(new Set());
  const [wanderLit, setWanderLit] = useState<Set<number> | null>(null);
  const wanderTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const stop = () => {
      if (wanderTimer.current !== undefined) {
        window.clearInterval(wanderTimer.current);
        wanderTimer.current = undefined;
      }
      setWanderLit(null);
    };

    if (!animating || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stop();
      return;
    }

    let step = 0;
    setWanderLit(wanderLitSquares(1));
    wanderTimer.current = window.setInterval(() => {
      step += 1;
      setWanderLit(wanderLitSquares(step + 1));
    }, WANDER_STEP_MS);

    return stop;
  }, [animating]);

  const handleToggle = (index: number) => {
    if (animating) return;
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
      className="grid grid-cols-3 aspect-square"
      style={{ width: size, gap: 0, margin: 0, padding: 0 }}
    >
      {grid.map((row, rowIndex) =>
        row.map((letter, colIndex) => {
          const index = rowIndex * 3 + colIndex;
          const isToggled =
            wanderLit !== null ? wanderLit.has(index) : toggledSquares.has(index);
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
