import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "QR Links | FreeDrops Sponsor Portal" };

export default function QRLinksPage({ params }: { params: { id: string } }) {
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

      <CampaignDetailTabs id={params.id} active="qr-downloads" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-6">QR Code Preview</p>
          <div className="bg-gray-50 rounded-xl aspect-square flex items-center justify-center mb-6 border border-gray-100">
            <Icon icon="lucide:qr-code" className="text-gray-400 text-[120px]" />
          </div>
          <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-xl text-sm font-bold transition-all mb-3">
            <Icon icon="lucide:download" />
            Download SVG (Vector for Print)
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-5 py-3 rounded-xl text-sm font-bold transition-all mb-3">
            <Icon icon="lucide:download" />
            Download High-Res PNG (2000x2000)
          </button>
          <p className="text-xs text-gray-400 text-center">SVG format is vector-based and scales infinitely for printing.</p>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-6">QR Link Settings</h3>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Short Code / Slug</p>
                <p className="text-sm font-mono font-semibold text-gray-900 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">FD-03EB7757-F76298</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Date Generated</p>
                <p className="text-sm font-semibold text-gray-900 mt-2">Jun 18, 2026</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Scan Redirect Link (Short URL)</p>
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <p className="text-sm font-mono text-gray-700">https://claim.freedrops.ae/?code=FD-03EB7757-F76298</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all whitespace-nowrap">
                  <Icon icon="lucide:copy" className="text-sm" />
                  Copy Link
                </button>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Final Campaign Destination</p>
              <div className="flex items-center gap-2">
                <Icon icon="lucide:globe" className="text-green-500" />
                <p className="text-sm font-semibold text-gray-900">https://google.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <Icon icon="lucide:scan-qr-code" className="text-[#D63839] text-xl" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">0</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total QR Scans</p>
              </div>
            </div>
            <Link
              href={`/sponsor/campaigns/${params.id}/scan-info`}
              className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#D63839] transition-colors"
            >
              View Detailed Logs
              <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
