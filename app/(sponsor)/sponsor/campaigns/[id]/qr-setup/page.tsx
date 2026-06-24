import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "QR Action Setup | FreeDrops Sponsor Portal" };

export default async function QRSetupPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <nav className="flex mb-1">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Spring Oasis Launch 2024</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024</h1>
        </div>
      </div>

      <CampaignDetailTabs id={id} active="qr-setup" />

      <div className="max-w-2xl">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">QR Action Configuration</h2>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Action Type</label>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:layout" className="text-[#D63839]" />
                  <span className="text-sm font-semibold text-gray-900">FreeDrops Landing Page</span>
                </div>
                <button className="text-xs font-bold text-[#D63839] hover:underline">Change</button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Destination URL</label>
              <div className="relative">
                <Icon icon="lucide:globe" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="url" defaultValue="https://springoasis.masafi.com" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div>
                <p className="text-sm font-bold text-gray-900">UTM Auto-Tagging</p>
                <p className="text-xs text-gray-500">Automatically append campaign source tags</p>
              </div>
              <div className="w-11 h-6 bg-[#D63839] rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>

            <button className="w-full py-3 px-6 bg-[#D63839] text-white font-bold rounded-xl hover:opacity-90 transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
