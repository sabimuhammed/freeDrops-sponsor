import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Project Brief | FreeDrops Sponsor Portal" };

export default function SponsorCampaignProjectBriefPage({ params }: { params: { id: string } }) {
  return (
    <AnimatedPage>
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Spring Oasis Launch 2024</span></li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mt-1">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Spring Oasis Launch 2024</h1>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">Live</span>
          </div>
          <p className="text-sm text-gray-500">Campaign ID: FD-SPRING-24-001</p>
        </div>
      </div>

      <CampaignDetailTabs id={params.id} active="project-brief" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Brief overview */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Project Brief</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            FreeDrops connects sponsors with audiences by distributing free, sponsored water at high-traffic
            locations. Every bottle carries your branded QR code, turning a simple act of hydration into a
            measurable touchpoint that drives scans, clicks, and leads back to your campaign.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "Objective", value: "Brand awareness & lead capture" },
              { label: "Audience", value: "Urban commuters, Dubai & Abu Dhabi" },
              { label: "Duration", value: "Aug 15 – Sep 30, 2024" },
              { label: "Distribution", value: "15,000 sponsored bottles" },
            ].map((r) => (
              <div key={r.label} className="border border-gray-100 rounded-xl p-4">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{r.label}</p>
                <p className="font-semibold text-gray-900 mt-1">{r.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Packaging */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center mb-3">
            <Icon icon="lucide:recycle" className="text-emerald-600 text-lg" />
          </div>
          <h3 className="font-bold text-gray-900 mb-2">Responsible Packaging</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            We use recyclable PET bottles to distribute sponsored water in a more environmentally responsible way.
          </p>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
