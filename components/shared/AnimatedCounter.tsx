"use client";
import { useEffect, useRef, useState } from "react";

function parseValue(value: string): { number: number; prefix: string; suffix: string } {
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^([^0-9]*)([0-9.]+)([^0-9]*)$/);
  if (!match) return { number: 0, prefix: "", suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

function formatNumber(n: number, original: string): string {
  if (original.includes(".")) {
    const decimals = original.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 1;
    return n.toFixed(decimals);
  }
  return Math.round(n).toLocaleString();
}

export default function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const { number, prefix, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const duration = 1400;

  useEffect(() => {
    startRef.current = null;

    function easeOutExpo(t: number) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function tick(timestamp: number) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setDisplay(easeOutExpo(progress) * number);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(number);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [number]);

  return (
    <span className={className}>
      {prefix}{formatNumber(display, value.replace(/,/g, ""))}{suffix}
    </span>
  );
}
