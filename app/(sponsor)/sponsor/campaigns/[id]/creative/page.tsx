import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";
import UploadAssetModal from "@/components/sponsor/UploadAssetModal";

export const metadata = { title: "Campaign Creative | FreeDrops Sponsor Portal" };

const assets = [
  { name: "Main Banner", format: "PNG", size: "1200×600px", status: "Approved" },
  { name: "QR Sticker", format: "SVG", size: "500×500px", status: "Approved" },
  { name: "Side Panel Art", format: "JPG", size: "300×600px", status: "Pending Review" },
];

export default function SponsorCampaignCreativePage({ params }: { params: { id: string } }) {
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
        <UploadAssetModal />
      </div>

      <CampaignDetailTabs id={params.id} active="creative" />

      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {assets.map((a) => (
          <AnimatedCell key={a.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#D63839] transition-all">
            <div className="bg-gray-50 h-36 flex items-center justify-center">
              <Icon icon="lucide:image" className="text-4xl text-gray-300" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-bold text-gray-900">{a.name}</p>
                  <p className="text-xs text-gray-400">{a.format} • {a.size}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${a.status === "Approved" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>{a.status}</span>
              </div>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-50">
                <button className="text-gray-400 hover:text-[#D63839]"><Icon icon="lucide:download" className="text-sm" /></button>
                <button className="text-gray-400 hover:text-red-500"><Icon icon="lucide:trash-2" className="text-sm" /></button>
              </div>
            </div>
          </AnimatedCell>
        ))}
      </AnimatedGrid>
    </div>
    </AnimatedPage>
  );
}
