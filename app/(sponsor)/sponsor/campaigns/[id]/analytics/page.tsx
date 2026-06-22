import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Analytics | FreeDrops Sponsor Portal" };

export default function SponsorCampaignAnalyticsPage({ params }: { params: { id: string } }) {
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
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024</h1>
          <p className="text-sm text-gray-500">Analytics overview for your campaign</p>
        </div>
        {/* <div className="flex items-center gap-3">
          <Link href={`/sponsor/campaigns/${params.id}/qr-downloads`} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50">
            <Icon icon="lucide:download" />QR Downloads
          </Link>
          <Link href={`/sponsor/campaigns/${params.id}/creative`} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50">
            <Icon icon="lucide:image" />Creative
          </Link>
        </div> */}
      </div>

      <CampaignDetailTabs id={params.id} active="analytics" />

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {[
          { label: "Total Scans", value: "14,205", icon: "lucide:scan-qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Unique Scans", value: "12,504", icon: "lucide:qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Clicks", value: "3,218", icon: "lucide:mouse-pointer-click", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Leads", value: "452", icon: "lucide:users", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "QR Engagement Rate", value: "14.0%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Scans by Month</h3>
            <span className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-semibold text-gray-500">This Year</span>
          </div>
          <div className="flex items-end gap-1.5 h-40">
            {[
              { month: "Jan", h: 35 },
              { month: "Feb", h: 50 },
              { month: "Mar", h: 42 },
              { month: "Apr", h: 68 },
              { month: "May", h: 60 },
              { month: "Jun", h: 80 },
              { month: "Jul", h: 72 },
              { month: "Aug", h: 100 },
              { month: "Sep", h: 88 },
              { month: "Oct", h: 65 },
              { month: "Nov", h: 55 },
              { month: "Dec", h: 45 },
            ].map((m) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full flex items-end h-32">
                  <div className="w-full bg-red-50 rounded-t-sm" style={{ height: `${m.h}%` }}>
                    <div className="w-full h-full bg-[#D63839] rounded-t-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
                  </div>
                </div>
                <span className="text-[9px] font-semibold text-gray-400 uppercase">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Scans by Location</h3>
          <div className="space-y-4">
            {[
              { name: "Dubai Mall", pct: 46 },
              { name: "Mall of Emirates", pct: 35 },
              { name: "Festival City", pct: 19 },
            ].map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-700 font-medium">{l.name}</span>
                  <span className="font-bold text-gray-900">{l.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-[#D63839] h-1.5 rounded-full" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
