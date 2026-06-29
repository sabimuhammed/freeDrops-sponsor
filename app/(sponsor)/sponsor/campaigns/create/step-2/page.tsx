"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

const ctaTypes = [
  { id: "url", icon: "lucide:link", title: "External URL", desc: "Redirect users to a website or app." },
  { id: "whatsapp", icon: "lucide:message-square", title: "WhatsApp", desc: "Start a chat with a prefilled message." },
  { id: "landing", icon: "lucide:layout", title: "FreeDrops Landing", desc: "Host a custom offer page & lead form." },
];

export default function SponsorCreateStep2Page() {
  const [selected, setSelected] = useState("landing");
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Edit Campaign</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Edit Campaign</h1>
        </div>
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <Icon icon="lucide:x" />Cancel
        </Link>
      </div>

      <SponsorCampaignCreateSteps current={3} />

      <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8">
        <h3 className="text-lg font-bold text-gray-900">Choose QR Action Type</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ctaTypes.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelected(t.id)}
              className={`p-6 rounded-2xl text-left border-2 transition-all ${
                selected === t.id ? "border-[#D63839] bg-red-50/50" : "border-gray-100 bg-white hover:border-red-200"
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                selected === t.id ? "bg-[#D63839] text-white" : "bg-gray-50 text-gray-500"
              }`}>
                <Icon icon={t.icon} className="text-xl" />
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">{t.title}</div>
              <p className="text-xs text-gray-500">{t.desc}</p>
            </button>
          ))}
        </div>

        {selected === "url" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Destination URL</label>
              <div className="relative">
                <Icon icon="lucide:globe" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="url" placeholder="https://example.com/promo" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4">
              <div>
                <p className="text-sm font-bold text-gray-900">Auto-Tag UTMs</p>
                <p className="text-xs text-gray-500">Append source and medium tags automatically.</p>
              </div>
              <div className="w-12 h-7 bg-[#D63839] rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow" />
              </div>
            </div>
          </div>
        )}

        {selected === "whatsapp" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">WhatsApp Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+971</span>
                <input type="tel" placeholder="50 123 4567" className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Prefilled Message (Optional)</label>
              <textarea rows={3} placeholder="Hi! I'm interested in the Summer Promo..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm resize-none" />
            </div>
          </div>
        )}

        {(selected === "whatsapp" || selected === "landing") && (
          <div className="space-y-8">
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Landing Banner</label>
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center gap-3 bg-gray-50/30 hover:bg-gray-50 transition-colors cursor-pointer">
                <Icon icon="lucide:upload-cloud" className="text-3xl text-gray-400" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-700">Click to upload banner</p>
                  <p className="text-xs text-gray-400">PNG, JPG (Recommended 1200×600px)</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Offer Title</label>
              <input type="text" placeholder="Get 20% Off Your Next Masafi Order" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm" />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Offer Description</label>
              <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm resize-none" />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">About Us</label>
              <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm resize-none" />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Contact</label>
              <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm resize-none" />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
          <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            Save Draft
          </button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-1" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link
              href="/sponsor/campaigns/create/step-3"
              className="flex items-center gap-2 bg-[#D63839] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Next Step <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
