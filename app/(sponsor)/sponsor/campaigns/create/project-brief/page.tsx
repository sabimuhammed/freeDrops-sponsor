import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Project Brief | FreeDrops Sponsor Portal" };

export default function SponsorCreateProjectBriefPage() {
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

      <SponsorCampaignCreateSteps current={1} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Project Brief</h3>
            <textarea
              rows={5}
              placeholder="Describe your campaign goals, key message, and what you want to achieve..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 resize-none"
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Target Audience</h3>
            <textarea
              rows={5}
              placeholder="Describe your target audience — age group, interests, lifestyle, demographics..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 resize-none"
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 mb-4">Business Model</h3>
            <textarea
              rows={5}
              placeholder="Explain your business model, value proposition, and how this campaign fits your brand strategy..."
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 resize-none"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Attachments</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 cursor-pointer hover:border-[#D63839]/40 hover:bg-red-50/30 transition-colors">
              <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                <Icon icon="lucide:upload" className="text-gray-400 text-lg" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Upload files</p>
                <p className="text-xs text-gray-400 mt-0.5">PDF, PNG, JPG up to 10MB</p>
              </div>
              <input type="file" multiple className="hidden" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mt-6">
        <div className="flex items-center justify-between">
          <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            Save Draft
          </button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              Back to List
            </Link>
            <Link
              href="/sponsor/campaigns/create/step-1"
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
