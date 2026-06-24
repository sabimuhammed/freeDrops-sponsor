"use client";

import { useState, use } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

const leads = [
  { name: "John Doe", phone: "+971 50 123 4567", location: "The Dubai Mall", date: "Jun 19, 2026", status: "New" },
  { name: "Jane Doe", phone: "+971 55 987 6543", location: "The Dubai Mall", date: "Jun 07, 2026", status: "New" },
];

const statusColors: Record<string, string> = {
  New: "text-blue-600",
  Contacted: "text-amber-600",
  Converted: "text-green-600",
};

type Lead = (typeof leads)[number];

export default function SponsorCampaignLeadsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [activeStatus, setActiveStatus] = useState("New");

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
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024 Leads</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
          <Icon icon="lucide:download" />Export CSV
        </button>
      </div>

      <CampaignDetailTabs id={id} active="leads" />

      <AnimatedGrid className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Leads", value: "2", color: "text-gray-900" },
          { label: "Contacted", value: "0", color: "text-amber-600" },
          { label: "Converted", value: "0", color: "text-green-600" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="bg-white border border-gray-200 p-5 rounded-2xl">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search by name, phone or location..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20" />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Statuses</option>
            <option>New</option>
            <option>Contacted</option>
            <option>Converted</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50">
              {leads.map((l) => (
                <AnimatedRow key={l.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{l.name}</td>
                  <td className="px-6 py-4 text-gray-600">{l.phone}</td>
                  <td className="px-6 py-4 text-gray-600">
                    <span className="flex items-center gap-1.5">
                      <Icon icon="lucide:map-pin" className="text-gray-400 text-xs" />
                      {l.location}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{l.date}</td>
                  <td className="px-6 py-4">
                    <span className={`font-semibold ${statusColors[l.status]}`}>{l.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => setSelectedLead(l)}
                      className="text-[#D63839] font-semibold text-sm hover:underline"
                    >
                      View &amp; Manage
                    </button>
                  </td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>
        <div className="px-6 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-400">Showing {leads.length} of {leads.length} total leads</p>
        </div>
      </div>

      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setSelectedLead(null)}>
          <div className="bg-white rounded-2xl w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedLead(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <Icon icon="lucide:x" className="text-xl" />
            </button>

            <h2 className="text-lg font-bold text-gray-900 mb-6">Lead Contact Profile</h2>

            <div className="space-y-5">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</p>
                <p className="text-sm font-semibold text-gray-900">{selectedLead.name}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Phone Number</p>
                <p className="text-sm font-semibold text-gray-900">{selectedLead.phone}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Distribution Location</p>
                <p className="text-sm font-semibold text-gray-900 flex items-center gap-1.5">
                  <Icon icon="lucide:map-pin" className="text-gray-400 text-xs" />
                  {selectedLead.location}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Submitted Date</p>
                <p className="text-sm font-semibold text-gray-900">{selectedLead.date}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">CRM Status Pipeline</p>
                <div className="flex gap-3">
                  {["New", "Contacted", "Converted"].map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveStatus(s)}
                      className={`flex-1 py-2 rounded-lg text-sm font-semibold border transition-all ${
                        activeStatus === s
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-all">
                <Icon icon="lucide:phone" />
                Call Lead
              </button>
              <button
                onClick={() => setSelectedLead(null)}
                className="flex-1 py-3 rounded-xl text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </AnimatedPage>
  );
}
