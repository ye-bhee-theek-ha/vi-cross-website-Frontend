"use client";
import { motion, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  /** The final numeric value to count up to, e.g. 5 */
  target: number;
  /** The label displayed beneath the numeric value, e.g. "Participants Served" */
  label: string;
  /** A suffix appended to the numeric value, e.g. "M+" or "K+" */
  suffix: string;
}

export function AnimatedStat({ target, label, suffix }: AnimatedStatProps) {
  // Display value that increments from 0 to `target`
  const [displayValue, setDisplayValue] = useState(0);

  // For a circle of r=40: circumference ≈ 251.2
  // We only want a half circle, so halfCircumference = 125.6
  const circumference = 251.2;
  const halfCircumference = circumference - 50;

  // This offset determines how "empty" or "filled" the arc is
  // Start fully empty (half circle not drawn)
  const [offset, setOffset] = useState(halfCircumference);


  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      console.log("in view")
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
          const progress = latest / target;
          setOffset(halfCircumference * (1 - progress));
        },
      });
      return () => controls.stop();
    }
  }, [inView, target, halfCircumference]);

  return (
    <div ref={ref} className="text-center">
      <div className="relative w-64 h-64 md:w-48 md:h-48 lg:w-64 lg:h-64">
        {/* SVG containing the half-circle arc */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <motion.circle
            className="text-[#2E2460] stroke-current"
            strokeWidth="4"
            strokeLinecap="round"
            /*
              strokeDasharray has two values:
              - first is the length of the arc we want to draw (half the circumference)
              - second can be the full circumference or larger to ensure the arc is only half
            */
            strokeDasharray={`${halfCircumference} ${circumference}`}
            /*
              strokeDashoffset is how much of that arc remains "hidden".
              We'll animate this from halfCircumference → 0 for a half-circle fill effect.
            */
            strokeDashoffset={offset}
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            /* Rotate 180° so the arc is drawn along the top half */
            transform="rotate(125 50 50)"
          />
        </svg>

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl md:text-3xl lg:text-6xl font-bold text-[#2E2460] mb-2">
            {displayValue}
            {suffix}
          </span>
          <span className="text-sm text-gray-600">{label}</span>
        </div>
      </div>
    </div>
  );
}
