import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 1: Basics | FreeDrops Sponsor Portal" };

export default function SponsorCreateStep1Page() {
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

      <SponsorCampaignCreateSteps current={1} />

      <div className="bg-white border border-slate-100 rounded-[32px] shadow-sm overflow-hidden">
        <div className="p-10 space-y-10">
          {/* Header */}
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="mb-2">
                <span className="px-3 py-1 bg-red-50 text-[#D63839] text-[10px] font-bold uppercase tracking-widest rounded-full border border-red-100">Step 1 of 6</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Campaign Basics</h2>
              <p className="text-slate-500">Define your campaign identity and initial scheduling details.</p>
            </div>
          </div>

          {/* Form + Tips */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Fields */}
            <div className="md:col-span-8 space-y-8">
              <div className="space-y-3">
                <label htmlFor="campaign-name" className="block text-sm font-bold text-slate-700">
                  Campaign Name <span className="text-[#D63839]">*</span>
                </label>
                <div className="relative">
                  <Icon icon="lucide:tag" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  <input
                    type="text"
                    id="campaign-name"
                    placeholder="e.g. Summer Refresh 2024"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="launch-date" className="block text-sm font-bold text-slate-700">
                  Launch Date <span className="text-[#D63839]">*</span>
                </label>
                <div className="relative">
                  <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg" />
                  <input
                    type="date"
                    id="launch-date"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="notes" className="block text-sm font-bold text-slate-700">
                  Internal Notes <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  placeholder="Any specific instructions or context for this campaign..."
                  className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm resize-none"
                />
              </div>
            </div>

            {/* Pro Tips */}
            <div className="md:col-span-4">
              <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-700">
                  <Icon icon="lucide:lightbulb" className="text-xl" />
                  <h3 className="text-sm font-bold">Pro Tips</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Icon icon="lucide:check-circle" className="text-amber-500 text-sm mt-0.5 shrink-0" />
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>Campaign Name:</strong> Use descriptive names for easier tracking in analytics.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <Icon icon="lucide:check-circle" className="text-amber-500 text-sm mt-0.5 shrink-0" />
                    <p className="text-xs text-amber-800 leading-relaxed">
                      <strong>Launch Date:</strong> We recommend setting this at least 14 days from today.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="flex items-center justify-between pt-10 border-t border-slate-100">
            <Link href="/sponsor/campaigns" className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition-all text-sm">
              Cancel
            </Link>
            <Link
              href="/sponsor/campaigns/create/step-2"
              className="flex items-center gap-3 bg-[#D63839] hover:opacity-90 text-white px-10 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-red-200"
            >
              Next Step: QR Action <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3 text-slate-400 text-sm">
        <Icon icon="lucide:sparkles" />
        <span>Clear basics help streamline your production timeline.</span>
      </div>
    </div>
  );
}
