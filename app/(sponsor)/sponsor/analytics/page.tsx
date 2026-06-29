import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Analytics | FreeDrops Sponsor Portal" };

export default function SponsorAnalyticsPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500">Network-wide performance overview</p>
        </div>
        <div className="flex items-center gap-1 bg-gray-100 rounded-full p-0.5">
          <button className="px-4 py-1.5 bg-[#D63839] text-white text-xs font-bold rounded-full">30d</button>
          <button className="px-4 py-1.5 text-gray-500 text-xs font-bold rounded-full hover:text-gray-700">7d</button>
          <button className="px-4 py-1.5 text-gray-500 text-xs font-bold rounded-full hover:text-gray-700">All</button>
        </div>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: "Total Bottles", value: "44,702", icon: "lucide:package-check", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Unique Scans", value: "21", icon: "lucide:qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Scans", value: "112", icon: "lucide:scan-line", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Clicks", value: "7", icon: "lucide:mouse-pointer-2", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Leads", value: "2", icon: "lucide:user-round-plus", color: "text-amber-600", bg: "bg-amber-50" },
          { label: "QR Engagement Rate", value: "18.8%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
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

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
        <div className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Icon icon="lucide:trending-up" className="text-gray-400" />
            <h3 className="font-bold text-gray-900">Total Scan Trend (30 days)</h3>
          </div>
          <div className="flex items-end gap-1.5 h-44">
            {[
              { day: "1", h: 5 }, { day: "2", h: 3 }, { day: "3", h: 8 }, { day: "4", h: 4 },
              { day: "5", h: 6 }, { day: "6", h: 10 }, { day: "7", h: 7 }, { day: "8", h: 12 },
              { day: "9", h: 15 }, { day: "10", h: 18 }, { day: "11", h: 22 }, { day: "12", h: 20 },
              { day: "13", h: 35 }, { day: "14", h: 42 }, { day: "15", h: 38 }, { day: "16", h: 30 },
              { day: "17", h: 25 }, { day: "18", h: 28 }, { day: "19", h: 55 }, { day: "20", h: 60 },
              { day: "21", h: 48 }, { day: "22", h: 45 }, { day: "23", h: 70 }, { day: "24", h: 85 },
              { day: "25", h: 100 }, { day: "26", h: 75 }, { day: "27", h: 50 }, { day: "28", h: 40 },
              { day: "29", h: 35 }, { day: "30", h: 30 },
            ].map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center">
                <div className="w-full flex items-end h-36">
                  <div className="w-full bg-[#D63839] rounded-t-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer" style={{ height: `${d.h}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Icon icon="lucide:map-pin" className="text-gray-400" />
            <h3 className="font-bold text-gray-900">Total Scan by Location</h3>
          </div>
          <div className="space-y-5">
            {[
              { name: "Dubai Beaches", pct: 82, count: 92 },
              { name: "The Dubai Mall", pct: 18, count: 20 },
            ].map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-700 font-medium">{l.name}</span>
                  <span className="font-bold text-gray-900">{l.pct}% ({l.count})</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#D63839] h-2 rounded-full" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl">
        <div className="border-b border-gray-200 px-6 pt-4">
          <div className="flex gap-6">
            <button className="pb-3 text-sm font-bold text-[#D63839] border-b-2 border-[#D63839]">Top Campaigns</button>
            <button className="pb-3 text-sm font-bold text-gray-400 hover:text-gray-600">Redirect Links</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Campaign</th>
                <th className="text-left px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sponsor</th>
                <th className="text-left px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Scans</th>
                <th className="text-left px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Unique Scans</th>
                <th className="text-left px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Clicks</th>
                <th className="text-left px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Leads</th>
                <th className="text-right px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">QR Engagement Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "PC1-FreeDrops.ae", sponsor: "Freedrops.ae", scans: 16, unique: 8, clicks: 0, leads: 0, rate: "50.0%" },
                { name: "PC1-OunceEvents", sponsor: "Freedrops.ae", scans: 13, unique: 6, clicks: 0, leads: 0, rate: "46.2%" },
              ].map((c) => (
                <tr key={c.name} className="border-b border-gray-50 hover:bg-gray-50/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold text-xs">P</div>
                      <span className="font-semibold text-gray-900">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{c.sponsor}</td>
                  <td className="px-6 py-4 text-gray-900 font-medium">{c.scans}</td>
                  <td className="px-6 py-4 text-[#D63839] font-bold">{c.unique}</td>
                  <td className="px-6 py-4 text-gray-900">{c.clicks}</td>
                  <td className="px-6 py-4 text-gray-900">{c.leads}</td>
                  <td className="px-6 py-4 text-right text-[#D63839] font-bold">{c.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
