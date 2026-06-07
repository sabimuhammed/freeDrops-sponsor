import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Leads | FreeDrops Sponsor Portal" };

const leads = [
  { name: "Mohammed Al Hassan", phone: "+971 50 123 4567", location: "Dubai Mall", date: "Jul 12, 2024", status: "New" },
  { name: "Sarah Johnson", phone: "+971 55 987 6543", location: "Mall of Emirates", date: "Jul 11, 2024", status: "Contacted" },
  { name: "Ahmad Khalil", phone: "+971 52 333 2222", location: "Dubai Mall", date: "Jul 10, 2024", status: "Converted" },
  { name: "Priya Sharma", phone: "+971 58 444 5555", location: "Festival City", date: "Jul 09, 2024", status: "New" },
  { name: "Omar Al Rashid", phone: "+971 56 777 8888", location: "Ibn Battuta", date: "Jul 08, 2024", status: "Contacted" },
];

const statusColors: Record<string, string> = {
  New: "bg-blue-50 text-blue-700",
  Contacted: "bg-amber-50 text-amber-700",
  Converted: "bg-green-50 text-green-700",
};

export default function SponsorCampaignLeadsPage({ params }: { params: { id: string } }) {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-end justify-between mb-8">
        <div>
          <nav className="flex mb-1">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Spring Oasis Launch 2024</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
          <Icon icon="lucide:download" />Export CSV
        </button>
      </div>

      <CampaignDetailTabs id={params.id} active="leads" />

      <AnimatedGrid className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Leads", value: "452", color: "text-gray-900" },
          { label: "Contacted", value: "186", color: "text-amber-600" },
          { label: "Converted", value: "63", color: "text-green-600" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search leads..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20" />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Statuses</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Phone</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {leads.map((l) => (
                <AnimatedRow key={l.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{l.name}</td>
                  <td className="px-6 py-4 text-gray-600">{l.phone}</td>
                  <td className="px-6 py-4 text-gray-600">{l.location}</td>
                  <td className="px-6 py-4 text-gray-500">{l.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${statusColors[l.status]}`}>{l.status}</span>
                  </td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
