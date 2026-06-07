import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Review & Publish | FreeDrops Sponsor Portal" };

export default function SponsorCreateReviewPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Review & Publish</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Review & Submit Request</h1>
        </div>
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1"><Icon icon="lucide:x" />Cancel</Link>
      </div>

      <SponsorCampaignCreateSteps current={6} />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Campaign Basics", fields: [{ label: "Name", value: "Spring Oasis Launch 2024" }, { label: "Start Date", value: "Aug 15, 2024" }, { label: "End Date", value: "Sep 30, 2024" }] },
            { title: "QR Action", fields: [{ label: "Type", value: "FreeDrops Landing Page" }, { label: "UTM Tagging", value: "Enabled" }] },
          ].map((card) => (
            <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#D63839] transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{card.title}</h3>
                <button className="text-xs font-bold text-[#D63839] hover:underline">Edit</button>
              </div>
              <div className="space-y-3">
                {card.fields.map((f) => (
                  <div key={f.label} className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">{f.label}</span>
                    <span className="text-sm font-semibold text-gray-900 mt-0.5">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {[
          { title: "Package & Creative", fields: [{ label: "Package", value: "Growth — 15,000 Bottles" }, { label: "Price", value: "AED 11,500" }, { label: "Creative", value: "spring-oasis-banner.png" }] },
          { title: "Locations", fields: [{ label: "Emirate", value: "Dubai" }, { label: "Locations", value: "2 selected" }, { label: "Tag", value: "Mall" }] },
        ].map((card) => (
          <div key={card.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#D63839] transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{card.title}</h3>
              <button className="text-xs font-bold text-[#D63839] hover:underline">Edit</button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {card.fields.map((f) => (
                <div key={f.label} className="flex flex-col">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">{f.label}</span>
                  <span className="text-sm font-semibold text-gray-900 mt-0.5">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 flex items-start gap-4">
          <Icon icon="lucide:info" className="text-amber-500 text-xl shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-bold text-gray-900">Awaiting Admin Approval</p>
            <p className="text-xs text-gray-500 mt-1">Once submitted, your campaign request will be reviewed by the FreeDrops team within 1–2 business days. You'll receive an email notification when it's approved.</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 flex items-center gap-2">
            <Icon icon="lucide:save" /> Save as Draft
          </button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-5" className="px-8 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-3"><Icon icon="lucide:arrow-left" /> Back</Link>
            <Link href="/sponsor/campaigns" className="flex items-center gap-3 bg-[#D63839] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200">Submit Request <Icon icon="lucide:check" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
