"use client";
import Link from "next/link";

const steps = [
  { num: 1, label: "Project Brief", href: "/sponsor/campaigns/create/project-brief" },
  { num: 2, label: "Basics", href: "/sponsor/campaigns/create/step-1" },
  { num: 3, label: "Creative & CTA", href: "/sponsor/campaigns/create/step-2" },
  { num: 4, label: "Coupon", href: "/sponsor/campaigns/create/step-3" },
  { num: 5, label: "Locations & Tags", href: "/sponsor/campaigns/create/step-4" },
  { num: 6, label: "Review", href: "/sponsor/campaigns/create/review" },
];

export default function SponsorCampaignCreateSteps({ current }: { current: number }) {
  return (
    <div className="mb-8 border-b border-gray-200">
      <nav className="flex gap-8 overflow-x-auto">
        {steps.map((s) => (
          <Link
            key={s.num}
            href={s.href}
            className={`pb-4 text-sm font-medium flex items-center gap-2 shrink-0 transition-colors ${
              s.num === current
                ? "text-[#D63839] border-b-2 border-[#D63839]"
                : s.num < current
                ? "text-gray-500 hover:text-[#D63839]"
                : "text-gray-400 border-b-2 border-transparent pointer-events-none"
            }`}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
              s.num === current
                ? "bg-[#D63839] text-white"
                : "bg-gray-200 text-gray-500"
            }`}>{s.num}</span>
            {s.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
