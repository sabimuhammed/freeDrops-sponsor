import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 3: Coupon | FreeDrops Sponsor Portal" };

export default function SponsorCreateStep3Page() {
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

      <SponsorCampaignCreateSteps current={4} />

      <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Coupon / Offer Setup</h3>
          <p className="text-sm text-gray-500 mt-1">Optionally attach a coupon or promotional offer to this campaign.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Coupon Code</label>
            <input type="text" placeholder="e.g. SUMMER20" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm" />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Expiry Date</label>
            <div className="relative">
              <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Discount Type</label>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm appearance-none">
                <option>Percentage Discount (%)</option>
                <option>Fixed Amount (AED)</option>
              </select>
              <Icon icon="lucide:chevron-down" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Max Redemptions</label>
            <input type="text" placeholder="Unlimited" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Discount Value</label>
            <div className="relative">
              <input type="number" defaultValue={20} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm pr-10" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 flex items-start gap-3">
              <Icon icon="lucide:alert-circle" className="text-amber-500 text-lg mt-0.5 shrink-0" />
              <p className="text-sm text-amber-700">Coupon is optional. Skip this step if no promotional code is needed for this campaign.</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
          <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            Save Draft
          </button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-2" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link
              href="/sponsor/campaigns/create/step-4"
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
