import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Review & Publish | FreeDrops Sponsor Portal" };

export default function SponsorCreateReviewPage() {
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

      <SponsorCampaignCreateSteps current={5} />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Campaign Basics</h3>
              <Link href="/sponsor/campaigns/create/step-1" className="text-sm font-semibold text-[#D63839] hover:text-red-700">Edit</Link>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Name</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">33333</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sponsor</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">Bytecode</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Duration</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">Not scheduled</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">CTA & Offer</h3>
              <Link href="/sponsor/campaigns/create/step-2" className="text-sm font-semibold text-[#D63839] hover:text-red-700">Edit</Link>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Action Type</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">https://example.com/promo</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Coupon Code</p>
                <p className="text-sm font-semibold text-gray-900 mt-0.5">No coupon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-[#D63839]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Locations & Targeting</h3>
            <Link href="/sponsor/campaigns/create/step-4" className="text-sm font-semibold text-[#D63839] hover:text-red-700">Edit</Link>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-4">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Emirate</p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5">Dubai</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total Locations</p>
              <p className="text-sm font-semibold text-gray-900 mt-0.5">1 Assigned</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Tags</p>
              <p className="text-sm font-bold text-[#D63839] mt-0.5">MALL</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Icon icon="lucide:map-pin" className="text-gray-400 text-xs" />
            Includes: The Dubai Mall.
          </div>
        </div>

        <div className="bg-white border-2 border-[#D63839]/20 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Total Bottles</h3>
            <Link href="/sponsor/campaigns/create/step-1" className="text-sm font-semibold text-[#D63839] hover:text-red-700">Edit</Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
              <Icon icon="lucide:droplet" className="text-[#D63839] text-xl" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Planned Total</p>
              <p className="text-lg font-bold text-gray-900">1 Bottles</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center">
              <Icon icon="lucide:alert-circle" className="text-amber-500 text-xl" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Final Confirmation Required</p>
              <p className="text-xs text-gray-500">Once set Live, all assigned QR links become active immediately.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</p>
              <p className="text-sm font-bold text-[#D63839]">Draft</p>
            </div>
            <button className="bg-[#D63839] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all">
              Submit campaign for Approval
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <button className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            <Icon icon="lucide:save" /> Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
}
