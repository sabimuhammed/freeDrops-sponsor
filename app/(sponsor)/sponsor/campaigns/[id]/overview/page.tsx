import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Overview | FreeDrops Sponsor Portal" };

export default function SponsorCampaignOverviewPage({ params }: { params: { id: string } }) {
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

      <CampaignDetailTabs id={params.id} active="overview" />

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          { label: "Total Bottles", value: "15,000", icon: "lucide:package", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Total Scans", value: "14,205", icon: "lucide:scan-qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Unique Scans", value: "12,504", icon: "lucide:qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Clicks", value: "3,218", icon: "lucide:mouse-pointer-click", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Leads Captured", value: "452", icon: "lucide:users", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Conversion Rate", value: "14.0%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon icon={s.icon} className={`${s.color} text-lg`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 mb-4">Campaign Details</h3>
        <dl className="space-y-3 text-sm">
          {[
            { label: "Start Date", value: "Aug 15, 2024" },
            { label: "End Date", value: "Sep 30, 2024" },
            { label: "CTA Type", value: "FreeDrops Landing Page" },
            { label: "Total Bottles", value: "15,000" },
            { label: "Locations", value: "2 (Dubai)" },
            { label: "Status", value: "Live" },
          ].map((r) => (
            <div key={r.label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
              <dt className="text-gray-500">{r.label}</dt>
              <dd className="font-semibold text-gray-900">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </AnimatedPage>
  );
}
