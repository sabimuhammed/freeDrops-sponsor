"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export default function SponsorCreateStep3Page() {
  const [product, setProduct] = useState<"bottle" | "can">("bottle");

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
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <Icon icon="lucide:x" />Cancel
        </Link>
      </div>

      <SponsorCampaignCreateSteps current={3} />

      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-10 border-b border-gray-100 space-y-10">
          <div>
            <div className="mb-2">
              <span className="px-3 py-1 bg-red-50 text-[#D63839] text-[10px] font-bold uppercase tracking-widest rounded-full border border-red-100">Step 3 of 6</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">Packages & Creative</h2>
            <p className="text-sm text-gray-500 mt-1">Select the type of product and specify the quantity for this campaign.</p>
          </div>

          {/* Product Type */}
          <section>
            <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Icon icon="lucide:box" className="text-[#D63839]" />
              Select Product Type
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bottle */}
              <button
                type="button"
                onClick={() => setProduct("bottle")}
                className={`p-8 rounded-3xl border-2 flex flex-col items-center text-center gap-6 transition-all ${
                  product === "bottle"
                    ? "border-[#D63839] bg-red-50/40"
                    : "border-slate-200 bg-white hover:border-red-200 hover:-translate-y-0.5"
                }`}
              >
                <div className="h-48 flex items-center justify-center">
                  <img
                    src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1776693932611-109f10a0/ChatGPT_Image_Mar_24__2026__08_28_26_PM.png"
                    alt="Bottle Mockup"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Bottle</h4>
                  <p className="text-sm text-gray-500 mt-1">Standard 500ml rPET Spring Water Bottle</p>
                </div>
                {product === "bottle" && (
                  <Icon icon="lucide:check-circle-2" className="text-[#D63839] text-2xl" />
                )}
              </button>

              {/* Can */}
              <button
                type="button"
                onClick={() => setProduct("can")}
                className={`p-8 rounded-3xl border-2 flex flex-col items-center text-center gap-6 transition-all ${
                  product === "can"
                    ? "border-[#D63839] bg-red-50/40"
                    : "border-slate-200 bg-white hover:border-red-200 hover:-translate-y-0.5"
                }`}
              >
                <div className="h-48 flex items-center justify-center">
                  <img
                    src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1776693925408-ee29e0eb/ChatGPT_Image_Mar_24__2026__08_28_18_PM.png"
                    alt="Can Mockup"
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Can</h4>
                  <p className="text-sm text-gray-500 mt-1">Premium 330ml Aluminum Infinitely Recyclable Can</p>
                </div>
                {product === "can" && (
                  <Icon icon="lucide:check-circle-2" className="text-[#D63839] text-2xl" />
                )}
              </button>
            </div>
          </section>

          {/* Inventory Allocation */}
          <section className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-base font-bold text-gray-900 mb-5 flex items-center gap-2">
              <Icon icon="lucide:layers" className="text-[#D63839]" />
              Inventory Allocation
            </h3>
            <div className="max-w-md">
              <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-tight">
                Number of Units
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border border-slate-200 text-slate-900 font-medium rounded-xl focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none block p-4 pr-10 shadow-sm transition-all"
                  defaultValue=""
                >
                  <option value="" disabled>Select number of units</option>
                  <option value="5000">5,000 Units</option>
                  <option value="10000">10,000 Units</option>
                  <option value="25000">25,000 Units</option>
                  <option value="50000">50,000 Units</option>
                  <option value="100000">100,000 Units</option>
                  <option value="250000">250,000 Units (Max)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                  <Icon icon="lucide:chevron-down" />
                </div>
              </div>
              <p className="mt-3 text-xs text-slate-400 italic">
                Units are incremented by 1,000 for standard distribution logistics.
              </p>
            </div>
          </section>
        </div>

        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900">Save as Draft</button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-2" className="px-8 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-3">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link href="/sponsor/campaigns/create/step-4" className="flex items-center gap-3 bg-[#D63839] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200">
              Continue to Coupons <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 p-4 text-slate-400 text-sm">
        <Icon icon="lucide:info" className="text-lg flex-shrink-0" />
        <p>High-volume campaigns (over 100k units) may require an additional 14 days lead time.</p>
      </div>
    </div>
  );
}
