"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export default function SponsorCreateStep4Page() {
  const [preview, setPreview] = useState<"bottle" | "can">("bottle");

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">New Request</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900">Create Campaign</h1>
        </div>
        <button className="text-slate-500 hover:text-slate-900 text-sm font-bold px-4 transition-all">
          Save as Draft
        </button>
      </div>

      <SponsorCampaignCreateSteps current={4} />

      {/* Form Card */}
      <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 p-10">
        <div className="flex justify-between items-start mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-slate-900">Upload Creative</h2>
            <p className="text-slate-500 max-w-lg">Provide your brand assets for the bottle or can labels. We'll generate a quick preview for your reference.</p>
          </div>
          <div className="bg-amber-50 text-amber-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shrink-0">
            <Icon icon="lucide:info" className="text-sm" />
            BRANDING UPDATE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Live Preview */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <div className="bg-slate-50 border border-slate-200 rounded-[32px] p-8 aspect-[4/5] flex flex-col relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

              {/* Toggle */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-1 flex border border-slate-100 z-10">
                <button
                  onClick={() => setPreview("bottle")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${preview === "bottle" ? "bg-[#D63839] text-white" : "text-slate-400 hover:text-slate-600"}`}
                >
                  Bottle
                </button>
                <button
                  onClick={() => setPreview("can")}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${preview === "can" ? "bg-[#D63839] text-white" : "text-slate-400 hover:text-slate-600"}`}
                >
                  Can
                </button>
              </div>

              {/* Mockup Image */}
              <div className="flex-1 flex items-center justify-center relative py-2">
                <img
                  src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1776695498137-14d4d1cb/ChatGPT_Image_Apr_19__2026__12_46_11_PM.png"
                  alt="FreeDrops Water Bottle Mockup"
                  className="h-[480px] w-auto object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>

              {/* Zoom */}
              <button className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-500 hover:text-[#D63839] transition-colors">
                <Icon icon="lucide:maximize-2" className="text-lg" />
              </button>

              <div className="text-center mt-4">
                <p className="text-[11px] font-medium text-slate-400 italic">Approximate preview — final print may vary.</p>
              </div>
            </div>
          </div>

          {/* Right: Upload Inputs */}
          <div className="lg:col-span-7 space-y-8">

            {/* Logo Upload */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Brand Logo</label>
                <span className="text-[11px] text-slate-500">PNG/SVG only • Max 10MB</span>
              </div>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-8 bg-slate-50/50 hover:bg-slate-50 transition-all group flex flex-col items-center justify-center cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover:text-[#D63839] transition-colors mb-4">
                  <Icon icon="lucide:upload-cloud" className="text-2xl" />
                </div>
                <p className="text-sm font-bold text-slate-900">Click to upload logo</p>
                <p className="text-xs text-slate-400 mt-1">or drag and drop your file here</p>
              </div>
            </div>

            {/* Label Artwork — uploaded state */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Label Artwork</label>
                <span className="text-[11px] text-slate-500">AI/PDF/PNG • High Res • Max 50MB</span>
              </div>
              <div className="border border-slate-200 rounded-2xl p-5 bg-white flex items-center justify-between shadow-sm border-l-4 border-l-[#D63839]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#D63839]">
                    <Icon icon="lucide:file-text" className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">summer_campaign_v2.pdf</p>
                    <p className="text-xs text-slate-500">4.2 MB • Uploaded May 12</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors" title="View File">
                    <Icon icon="lucide:eye" className="text-lg" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Remove">
                    <Icon icon="lucide:trash-2" className="text-lg" />
                  </button>
                </div>
              </div>
            </div>

            {/* Brand Guidelines */}
            <div className="space-y-4">
              <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Brand Guidelines <span className="text-slate-400 normal-case font-normal">(Optional)</span></label>
              <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50/50 hover:bg-slate-50 transition-all flex items-center gap-4 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 shrink-0">
                  <Icon icon="lucide:plus" className="text-xl" />
                </div>
                <p className="text-sm font-medium text-slate-500">Add brand guidelines for our design team</p>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-4 pt-4">
              <label className="text-sm font-bold text-slate-900 uppercase tracking-wide">Notes to Production Admin</label>
              <textarea
                rows={4}
                placeholder="Any design notes? QR placement preference, specific color hex codes, or brand rules we should follow..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#D63839] outline-none transition-all resize-none text-sm leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-10 border-t border-slate-100">
          <Link
            href="/sponsor/campaigns/create/step-3"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-all"
          >
            <Icon icon="lucide:arrow-left" /> Back to Offer
          </Link>
          <div className="flex gap-4">
            <button className="px-8 py-4 text-slate-500 font-bold hover:text-slate-900 transition-all">
              Save as Draft
            </button>
            <Link
              href="/sponsor/campaigns/create/step-5"
              className="bg-[#D63839] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:opacity-90 shadow-lg shadow-red-500/20 transition-all"
            >
              Continue to Review <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>

      {/* Helper Tip */}
      <div className="mt-10 flex items-center justify-center gap-4 text-slate-400">
        <div className="flex -space-x-2">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin1" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="" />
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin2" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="" />
        </div>
        <span className="text-xs font-medium max-w-sm">A dedicated production specialist will review your assets and provide final print proofs before production starts.</span>
      </div>
    </div>
  );
}
