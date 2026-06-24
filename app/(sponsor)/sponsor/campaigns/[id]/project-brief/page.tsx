import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "Project Brief | FreeDrops Sponsor Portal" };

export default async function SponsorCampaignProjectBriefPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AnimatedPage>
    <div>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#D63839]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Spring Oasis Launch 2024</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Project Brief</h1>
          <p className="text-sm text-gray-500">ID: FD-SPRING-24-001</p>
        </div>
      </div>

      <CampaignDetailTabs id={id} active="project-brief" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Project Brief</h3>
            <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
              <p className="text-sm text-gray-400">No project brief submitted from the sponsor portal yet.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Target Audience</h3>
            <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
              <p className="text-sm text-gray-400">No target audience submitted from the sponsor portal yet.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-4">Business Model</h3>
            <div className="bg-gray-50 border border-gray-100 rounded-xl px-5 py-4">
              <p className="text-sm text-gray-400">No business model submitted from the sponsor portal yet.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Attachments</p>
            <p className="text-sm text-gray-400">No attachments submitted yet.</p>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
