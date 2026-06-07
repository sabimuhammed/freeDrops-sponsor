import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Dashboard | FreeDrops" };

const stats = [
  { label: "Bottles Scanned", value: "2,450", icon: "lucide:package-check", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total Scans", value: "14,205", icon: "lucide:scan-line", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total Unique Scans", value: "12,504", icon: "lucide:qr-code", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total CTA Clicks", value: "3,110", icon: "lucide:mouse-pointer-2", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Total Leads", value: "842", icon: "lucide:user-round-plus", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Active Campaigns", value: "2", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
];

const campaigns = [
  {
    name: "Spring Hydration Wave",
    icon: "lucide:check-circle",
    iconBg: "bg-slate-900",
    iconColor: "text-white",
    bottles: "25,000",
    scans: "14,205",
    uniqueScans: "12,504",
    clicks: "3,110",
    leads: "842",
    status: "Completed",
    statusColor: "bg-slate-900 text-white border-slate-900",
    dotColor: null,
  },
  {
    name: "Summer Refresh 2024",
    icon: "lucide:droplet",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    bottles: "5,000",
    scans: "2,841",
    uniqueScans: "2,410",
    clicks: "412",
    leads: "—",
    status: "Live",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    dotColor: "bg-green-500",
  },
  {
    name: "Expo Dubai Special",
    icon: "lucide:gift",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    bottles: "4,000",
    scans: "1,902",
    uniqueScans: "1,640",
    clicks: "285",
    leads: "—",
    status: "Live",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    dotColor: "bg-green-500",
  },
];

export default function SponsorDashboardPage() {
  return (
    <AnimatedPage>
      <div className="space-y-8">

        {/* Header */}
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1 max-w-md">
              Welcome back, Masafi Water. Here&apos;s what&apos;s happening across your campaigns.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="relative">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839] transition-all w-64"
              />
            </div>

            <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-xl p-1">
              {["Today", "7d", "30d"].map((range) => (
                <button
                  key={range}
                  className={`px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-colors ${
                    range === "Today" ? "bg-[#D63839] text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>

            <Link
              href="/sponsor/campaigns/create/step-1"
              className="bg-[#D63839] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Icon icon="lucide:plus" />
              Create Campaign
            </Link>

            {/* <Link
              href="/login"
              className="flex items-center gap-2 text-sm font-bold text-[#D63839] hover:opacity-80 transition-opacity"
            >
              <Icon icon="lucide:log-out" />
              Logout
            </Link> */}
          </div>
        </div>

        {/* Stats Grid */}
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {stats.map((s) => (
            <AnimatedCell key={s.label} className="bg-white p-6 rounded-3xl login-card">
              <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-5`}>
                <Icon icon={s.icon} className="text-2xl" />
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{s.label}</p>
              <h3 className="text-3xl font-bold text-slate-900">{s.value}</h3>
            </AnimatedCell>
          ))}
        </AnimatedGrid>

        {/* Top Campaigns */}
        <div className="bg-white rounded-3xl login-card overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <h2 className="text-lg font-bold text-slate-900">Top Campaigns</h2>
            <Link href="/sponsor/campaigns" className="text-sm font-bold text-[#D63839] hover:underline">
              View All Campaigns
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-y border-slate-100">
                <tr>
                  {["Campaign", "Total Bottles", "Scans", "Unique Scans", "Clicks", "Leads", "Status"].map((h) => (
                    <th key={h} className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-slate-50">
                {campaigns.map((c) => (
                  <AnimatedRow key={c.name} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${c.iconBg} ${c.iconColor} flex items-center justify-center`}>
                          <Icon icon={c.icon} className="text-lg" />
                        </div>
                        <span className="font-semibold text-slate-900 whitespace-nowrap">{c.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-bold text-slate-900 font-mono">{c.bottles}</td>
                    <td className="px-6 py-5 text-sm text-slate-600 font-mono">{c.scans}</td>
                    <td className="px-6 py-5 text-sm font-semibold text-purple-700 font-mono">{c.uniqueScans}</td>
                    <td className="px-6 py-5 text-sm text-slate-600 font-mono">{c.clicks}</td>
                    <td className="px-6 py-5 text-sm text-slate-400 font-mono">{c.leads}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-full border ${c.statusColor}`}>
                        {c.dotColor && <span className={`w-1.5 h-1.5 rounded-full ${c.dotColor}`} />}
                        {c.status}
                      </span>
                    </td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 z-30"
      >
        <Icon icon="mdi:whatsapp" className="text-3xl" />
        <span className="font-bold pr-2">Contact Support</span>
      </a>
    </AnimatedPage>
  );
}
