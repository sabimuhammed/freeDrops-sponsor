"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

const ctaTypes = [
  { id: "url", icon: "lucide:link", title: "External URL", desc: "Redirect users to a website or app." },
  { id: "whatsapp", icon: "lucide:message-circle", title: "WhatsApp", desc: "Start a chat with a prefilled message." },
  { id: "landing", icon: "lucide:layout", title: "FreeDrops Landing", desc: "Host a custom offer page & lead form." },
];

export default function SponsorCreateStep2Page() {
  const [selected, setSelected] = useState("url");
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

      <SponsorCampaignCreateSteps current={2} />

      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-10 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">QR Action Setup</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {ctaTypes.map((t) => (
              <button key={t.id} onClick={() => setSelected(t.id)} className={`p-6 rounded-2xl text-left border-2 transition-all ${selected === t.id ? "border-[#D63839] bg-red-50/50" : "border-gray-100 bg-white hover:border-red-200"}`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${selected === t.id ? "bg-[#D63839] text-white" : "bg-gray-50 text-gray-500"}`}>
                  <Icon icon={t.icon} className="text-xl" />
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{t.title}</div>
                <p className="text-xs text-gray-500">{t.desc}</p>
              </button>
            ))}
          </div>
          {selected === "url" && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Destination URL</label>
              <div className="relative">
                <Icon icon="lucide:globe" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="url" placeholder="https://example.com/promo" className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
              </div>
            </div>
          )}
          {selected === "whatsapp" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">WhatsApp Number</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-2xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+971</span>
                  <input type="tel" placeholder="50 123 4567" className="flex-1 px-4 py-4 rounded-r-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Landing Banner</label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Icon icon="lucide:upload-cloud" className="text-3xl text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700">Click to upload banner</p>
                    <p className="text-xs text-gray-400">PNG, JPG (Recommended 1200x600px)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Offer Title</label>
                <input type="text" placeholder="Get 20% Off Your Next Masafi Order" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Offer Description</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">About Us</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Contact</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
            </div>
          )}
          {selected === "landing" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Landing Banner</label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Icon icon="lucide:upload-cloud" className="text-3xl text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700">Click to upload banner</p>
                    <p className="text-xs text-gray-400">PNG, JPG (Recommended 1200x600px)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Offer Title</label>
                <input type="text" placeholder="Get 20% Off Your Next Masafi Order" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Offer Description</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">About Us</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Contact</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
            </div>
          )}
        </div>
        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900">Save as Draft</button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-1" className="px-8 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-3"><Icon icon="lucide:arrow-left" /> Back</Link>
            <Link href="/sponsor/campaigns/create/step-3" className="flex items-center gap-3 bg-[#D63839] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200">Next Step <Icon icon="lucide:arrow-right" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
