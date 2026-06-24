import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Analytics | FreeDrops Sponsor Portal" };

export default async function SponsorCampaignAnalyticsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <nav className="flex mb-1">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Spring Oasis Launch 2024</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024 Analytics</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
          <Icon icon="lucide:download" />Export CSV
        </button>
      </div>

      <CampaignDetailTabs id={id} active="analytics" />

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: "Total Bottles", value: "2,000", icon: "lucide:package", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Bottles Scanned", value: "13", icon: "lucide:scan-qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Unique Users", value: "6", icon: "lucide:users", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Clicks", value: "0", icon: "lucide:mouse-pointer-click", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Leads Captured", value: "0", icon: "lucide:user-check", color: "text-orange-600", bg: "bg-orange-50" },
          { label: "QR Engagement Rate", value: "0.3%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Scan Trend</h3>
              <p className="text-sm text-gray-400">Scans frequency over selected period</p>
            </div>
            <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
              <button className="px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50">7D</button>
              <button className="px-4 py-2 text-sm font-bold text-white bg-gray-900">30D</button>
              <button className="px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50">All Time</button>
            </div>
          </div>
          <div className="flex items-end gap-0.5 h-56 mt-6">
            {[
              0,0,0,0,0,0,0,0,0,5,6,0,45,0,0,0,0,0,0,0,0,8,0,0,0,0,12,14,0,0
            ].map((h, i) => (
              <div key={i} className="flex-1 flex items-end h-full">
                <div
                  className="w-full bg-[#D4726A] rounded-t-sm transition-opacity hover:opacity-80 cursor-pointer"
                  style={{ height: h > 0 ? `${Math.max(h, 3)}%` : '0%' }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-xs text-gray-400 font-medium">May 24</span>
            <span className="text-xs text-gray-400 font-medium">Jun 22</span>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col">
          <div className="mb-6">
            <h3 className="font-bold text-gray-900 text-lg">Scans by Location</h3>
            <p className="text-sm text-gray-400">Distribution across distribution points</p>
          </div>
          <div className="space-y-5 flex-1">
            {[
              { name: "Dubai Beaches", pct: 100, count: 13 },
            ].map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-900 font-medium">{l.name}</span>
                  <span className="font-bold text-gray-900">{l.pct}% <span className="text-gray-400 font-normal">({l.count})</span></span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#D63839] h-2 rounded-full" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-auto pt-6 text-center">Total Distribution Points: 1</p>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
