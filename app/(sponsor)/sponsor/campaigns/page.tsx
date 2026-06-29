import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "My Campaigns | FreeDrops Sponsor Portal" };

const stats = [
  {
    label: "Bottles",
    value: "2,450",
    icon: "lucide:package-check",
    color: "text-[#D63839]",
    bg: "bg-red-50",
  },
  {
    label: "Total Scans",
    value: "14,205",
    icon: "lucide:scan-qr-code",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Unique Scans",
    value: "12,504",
    icon: "lucide:qr-code",
    color: "text-[#D63839]",
    bg: "bg-red-50",
  },
  {
    label: "Total Clicks",
    value: "3,110",
    icon: "lucide:mouse-pointer-2",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    label: "Total Leads",
    value: "842",
    icon: "lucide:users",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

const campaigns = [
  {
    name: "Summer Refresh 2024",
    id: "CMP-2401-AF",
    icon: "lucide:droplet",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    status: "Live",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    dotColor: "bg-green-500",
    start: "Jun 12, 2024",
    bottles: "5,000",
    scans: "2,841",
    uniqueScans: "2,410",
    clicks: "412",
    leads: "—",
    action: "View",
    actionIcon: "lucide:arrow-right",
  },
  {
    name: "Expo Dubai Special",
    id: "CMP-2402-AF",
    icon: "lucide:gift",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    status: "Live",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    dotColor: "bg-green-500",
    start: "May 20, 2024",
    bottles: "4,000",
    scans: "1,902",
    uniqueScans: "1,640",
    clicks: "285",
    leads: "—",
    action: "View",
    actionIcon: "lucide:arrow-right",
  },
  {
    name: "Corporate Hydration",
    id: "CMP-2403-AF",
    icon: "lucide:award",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    status: "In Review",
    statusColor: "bg-blue-50 text-blue-700 border-blue-100",
    dotColor: "bg-blue-500",
    start: "Pending...",
    startMuted: true,
    bottles: "0",
    scans: "0",
    uniqueScans: "0",
    clicks: "—",
    leads: null,
    action: null,
  },
  {
    name: "Ramadan Nights Giveaway",
    id: "CMP-2404-AF",
    icon: "lucide:edit-3",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-400",
    iconExtra: "grayscale opacity-60",
    status: "Draft",
    statusColor: "bg-slate-100 text-slate-500 border-slate-200",
    start: "Not scheduled",
    startItalic: true,
    bottles: "0",
    scans: "0",
    uniqueScans: "0",
    clicks: "—",
    leads: "—",
    action: "Continue Editing",
    actionIcon: "lucide:arrow-right",
  },
  {
    name: "Spring Hydration Wave",
    id: "CMP-2312-AF",
    icon: "lucide:check-circle",
    iconBg: "bg-slate-900",
    iconColor: "text-white",
    iconExtra: "opacity-80",
    status: "Completed",
    statusColor: "bg-slate-900 text-white border-slate-900",
    start: "Mar 01, 2024",
    bottles: "25,000",
    scans: "14,205",
    uniqueScans: "12,504",
    clicks: "3,110",
    leads: "842",
    action: "View Report",
    actionIcon: "lucide:bar-chart",
  },
];

export default function MyCampaignsPage() {
  return (
    <AnimatedPage>
      <div className="space-y-6">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-slate-900">My Campaigns</h1>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
              <Link href="/sponsor/dashboard" className="hover:text-slate-900 transition-colors">Dashboard</Link>
              <Icon icon="lucide:chevron-right" className="text-xs" />
              <span className="text-slate-900 font-bold">Campaigns</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839] transition-all w-64"
              />
            </div>
            <Link
              href="/sponsor/campaigns/create/project-brief"
              className="bg-[#D63839] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Icon icon="lucide:plus" />
              Create Campaign Request
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {stats.map((s) => (
            <AnimatedCell key={s.label} className="bg-white p-5 rounded-3xl login-card border border-slate-100">
              <div className={`w-10 h-10 ${s.bg} ${s.color} rounded-xl flex items-center justify-center`}>
                <Icon icon={s.icon} className="text-xl" />
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{s.value}</h3>
              </div>
            </AnimatedCell>
          ))}
        </AnimatedGrid>

        {/* Filter Bar */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Search campaign or sponsor..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 transition-all"
            />
          </div>
          <select className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 cursor-pointer">
            <option value="all">All Statuses</option>
            <option value="draft">Draft</option>
            <option value="in-review">In Review</option>
            <option value="live">Live</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* Campaigns Table */}
        <div className="bg-white rounded-3xl login-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="border-b border-slate-100">
                <tr>
                  {["Campaign Name", "Sponsor", "Status", "Unique Scans", "Start Date", "Total Bottles", "Total Scans", "Clicks", "Leads", "Actions"].map((h) => (
                    <th key={h} className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{h}</th>
                  ))}
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-slate-100">
                {campaigns.map((c) => {
                  const statusTextColor: Record<string, string> = {
                    Live: "text-green-600",
                    Draft: "text-purple-600",
                    "In Review": "text-blue-600",
                    Completed: "text-slate-500",
                  };
                  return (
                  <AnimatedRow key={c.id} className="hover:bg-slate-50/50 transition-colors relative">
                    <td className="px-6 py-4">
                      <Link href={`/sponsor/campaigns/${c.id}/overview`} className="absolute inset-0" />
                      <span className="font-bold text-slate-900 relative">{c.name}</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">Masafi Water</td>
                    <td className="px-6 py-4">
                      <span className={`text-sm font-semibold ${statusTextColor[c.status] ?? "text-slate-500"}`}>{c.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-purple-600">{c.uniqueScans}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`text-sm ${c.startMuted || c.startItalic ? "text-slate-400" : "text-slate-600"}`}>
                        {c.startMuted || c.startItalic ? "—" : c.start}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-slate-900">{c.bottles}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{c.scans}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{c.clicks === "—" ? "0" : c.clicks}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600">{c.leads === null || c.leads === "—" ? "0" : c.leads}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-[#D63839] text-xs font-bold uppercase tracking-wider">View</span>
                    </td>
                  </AnimatedRow>
                  );
                })}
              </AnimatedTbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-500">
              Showing <span className="text-slate-900">1 to 5</span> of 12 campaigns
            </p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-900 disabled:opacity-30" disabled>
                <Icon icon="lucide:chevron-left" className="text-lg" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-900 text-xs font-bold flex items-center justify-center shadow-sm">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-white text-slate-500 text-xs font-bold flex items-center justify-center transition-colors">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-white text-slate-500 text-xs font-bold flex items-center justify-center transition-colors">3</button>
              <button className="p-2 text-slate-400 hover:text-slate-900">
                <Icon icon="lucide:chevron-right" className="text-lg" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 z-50"
      >
        <Icon icon="mdi:whatsapp" className="text-3xl" />
        <span className="font-bold pr-2">Contact Support</span>
      </a>
    </AnimatedPage>
  );
}
