import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Creatives | FreeDrops Sponsor Portal" };

const assets = [
  {
    name: "Campaign Banner",
    format: "PNG",
    size: "—",
    status: "Approved",
    note: "Saved on campaign",
  },
];

export default async function SponsorCampaignCreativePage({ params }: { params: Promise<{ id: string }> }) {
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
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024 Creatives</h1>
        </div>
      </div>

      <CampaignDetailTabs id={id} active="creative" />

      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {assets.map((a) => (
          <AnimatedCell key={a.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#D63839] hover:shadow-md hover:shadow-red-100 transition-all">
            <div className="bg-gray-50 h-48 flex items-center justify-center border-b border-gray-100">
              <Icon icon="lucide:image" className="text-5xl text-gray-300" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between mb-1">
                <p className="text-sm font-bold text-gray-900">{a.name}</p>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-green-50 text-green-700 border border-green-100">
                  {a.status}
                </span>
              </div>
              <p className="text-xs text-gray-400">{a.format} • {a.size}</p>
              <p className="text-xs text-gray-400 mt-1">{a.note}</p>
            </div>
            <div className="flex items-center justify-between px-5 py-3 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-medium">Review Completed</span>
              <button className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <Icon icon="lucide:download" className="text-lg" />
              </button>
            </div>
          </AnimatedCell>
        ))}
      </AnimatedGrid>
    </div>
    </AnimatedPage>
  );
}
