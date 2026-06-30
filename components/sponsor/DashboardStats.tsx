"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const initialStats = [
  { label: "Total Bottles", value: 2450, icon: "lucide:package-check", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total Unique Scans", value: 12504, icon: "lucide:qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total Scans", value: 14205, icon: "lucide:scan-line", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total CTA Clicks", value: 3110, icon: "lucide:mouse-pointer-2", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Total Leads", value: 842, icon: "lucide:user-round-plus", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Active Campaigns", value: 2, icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
];

type Delta = { count: number; phase: "show" | "merge" } | null;

export default function DashboardStats() {
  // committed values — what the main number displays
  const [committed, setCommitted] = useState(initialStats.map((s) => s.value));
  // pending counts — accumulated in the green badge, not yet added to the number
  const pending = useRef<number[]>(initialStats.map(() => 0));
  const [deltas, setDeltas] = useState<Delta[]>(initialStats.map(() => null));
  const [pulses, setPulses] = useState<boolean[]>(initialStats.map(() => false));
  const mergeTimers = useRef<(ReturnType<typeof setTimeout> | null)[]>(initialStats.map(() => null));

  const triggerDelta = (idx: number) => {
    // Accumulate in pending (don't touch committed yet)
    pending.current[idx] += 1;

    setDeltas((prev) => {
      const next = [...prev];
      next[idx] = { count: pending.current[idx], phase: "show" };
      return next;
    });

    // Debounce: reset merge timer on every new hit
    if (mergeTimers.current[idx]) clearTimeout(mergeTimers.current[idx]!);
    mergeTimers.current[idx] = setTimeout(() => {
      // Start merge animation
      setDeltas((prev) => {
        const next = [...prev];
        if (next[idx]) next[idx] = { ...next[idx]!, phase: "merge" };
        return next;
      });
      setPulses((prev) => { const n = [...prev]; n[idx] = true; return n; });

      // After merge animation completes → commit the pending count to the main number
      setTimeout(() => {
        setCommitted((prev) => {
          const next = [...prev];
          next[idx] = prev[idx] + pending.current[idx];
          return next;
        });
        pending.current[idx] = 0;
        setDeltas((prev) => { const n = [...prev]; n[idx] = null; return n; });
        setPulses((prev) => { const n = [...prev]; n[idx] = false; return n; });
      }, 500);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const idx = Math.floor(Math.random() * (initialStats.length - 1));
      triggerDelta(idx);
    }, 1000);

    return () => {
      clearInterval(interval);
      mergeTimers.current.forEach((t) => t && clearTimeout(t));
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes delta-in {
          from { opacity: 0; transform: translateY(-4px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes delta-fade {
          from { opacity: 1; }
          to   { opacity: 0; }
        }
        @keyframes num-absorb {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
        .delta-show  { animation: delta-in   0.25s ease-out forwards; }
        .delta-merge { animation: delta-fade 0.5s  ease-in  forwards; }
        .num-absorb  { animation: num-absorb 0.4s  ease-out; }
      `}</style>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {initialStats.map((s, i) => (
          <div key={s.label} className="bg-white p-6 rounded-3xl login-card">
            <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-5`}>
              <Icon icon={s.icon} className="text-2xl" />
            </div>
            <p className="text-sm font-medium text-slate-500 mb-1">{s.label}</p>
            <div className="flex items-center gap-3">
              <h3 className={`text-3xl font-bold text-slate-900 ${pulses[i] ? "num-absorb" : ""}`}>
                <AnimatedCounter value={committed[i].toLocaleString()} />
              </h3>
              {deltas[i] && (
                <span
                  key={`${i}-${deltas[i]!.count}`}
                  className={`flex items-center gap-0.5 text-sm font-bold text-emerald-500 ${
                    deltas[i]!.phase === "show" ? "delta-show" : "delta-merge"
                  }`}
                >
                  +{deltas[i]!.count}
                  <Icon icon="lucide:arrow-up" className="text-xs" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
