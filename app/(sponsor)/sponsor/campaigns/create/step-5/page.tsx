import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 5: Locations & Tags | FreeDrops Sponsor Portal" };

const locations = [
  { name: "The Dubai Mall", area: "Downtown Dubai", checked: true },
  { name: "Mall of the Emirates", area: "Al Barsha", checked: true },
  { name: "Dubai Festival City", area: "Festival City", checked: false },
  { name: "Ibn Battuta Mall", area: "Jebel Ali", checked: false },
  { name: "Mercato Mall", area: "Jumeirah", checked: false },
  { name: "City Centre Deira", area: "Deira", checked: false },
];

export default function SponsorCreateStep5Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">New Request</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Create Campaign Request</h1>
        </div>
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1"><Icon icon="lucide:x" />Cancel</Link>
      </div>

      <SponsorCampaignCreateSteps current={5} />

      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-10 border-b border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Target Locations & Tags</h3>
              <p className="text-sm text-gray-500 mt-1">Define where your campaign will be distributed across the UAE.</p>
            </div>
            <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-2">
              <Icon icon="lucide:info" className="text-blue-600" />
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-tight">No GPS Tracking</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Select Emirate</label>
                <select className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm">
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Category Tag</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    { icon: "lucide:shopping-bag", label: "Mall", active: true },
                    { icon: "lucide:calendar-days", label: "Event" },
                    { icon: "lucide:dumbbell", label: "Gym" },
                    { icon: "lucide:briefcase", label: "Office" },
                  ].map((t) => (
                    <button key={t.label} className={`px-4 py-2.5 rounded-full border text-xs font-bold transition-all flex items-center gap-2 ${t.active ? "border-red-100 bg-red-50 text-[#D63839]" : "border-gray-200 text-gray-600 hover:border-red-200"}`}>
                      <Icon icon={t.icon} />{t.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Assigned Locations</label>
                <button className="text-xs font-bold text-[#D63839] hover:underline">Select All (12)</button>
              </div>
              <div className="relative border border-gray-200 rounded-2xl">
                <Icon icon="lucide:search" className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input type="text" placeholder="Search locations in Dubai..." className="w-full pl-12 pr-6 py-4 outline-none text-sm rounded-2xl" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto">
                {locations.map((l) => (
                  <label key={l.name} className={`border-2 rounded-2xl p-5 flex items-center gap-4 cursor-pointer transition-all ${l.checked ? "border-[#D63839] bg-red-50/30" : "border-slate-100 bg-slate-50/50 hover:border-[#D63839]"}`}>
                    <input type="checkbox" defaultChecked={l.checked} className="w-5 h-5 rounded accent-[#D63839]" />
                    <div>
                      <p className="text-sm font-bold text-gray-900">{l.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-0.5">{l.area}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900">Save as Draft</button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-4" className="px-8 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-3"><Icon icon="lucide:arrow-left" /> Back to Coupon</Link>
            <Link href="/sponsor/campaigns/create/review" className="flex items-center gap-3 bg-[#D63839] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200">Review & Publish <Icon icon="lucide:arrow-right" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
