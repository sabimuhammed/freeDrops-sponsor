import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 1: Basics | FreeDrops Sponsor Portal" };

export default function SponsorCreateStep1Page() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Create New</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Create New Campaign</h1>
        </div>
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <Icon icon="lucide:x" />Cancel
        </Link>
      </div>

      <SponsorCampaignCreateSteps current={2} />

      <div className="bg-white border border-gray-200 rounded-2xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
          <div>
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">Campaign Name</label>
            <input
              type="text"
              placeholder="e.g. Summer Splash Refresh 2024"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20"
            />
          </div>

          <div className="row-span-3">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">Internal Notes</label>
            <textarea
              rows={8}
              placeholder="Add any special instructions or internal references..."
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 resize-none h-full min-h-[180px]"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">Quantity (Units)</label>
              <input
                type="number"
                defaultValue={50000}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-2">Requested Start</label>
              <div className="relative">
                <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20"
                />
              </div>
            </div>
          </div>

        </div>

        <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-100">
          <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            Save Draft
          </button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/project-brief" className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Back
            </Link>
            <Link
              href="/sponsor/campaigns/create/step-2"
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
