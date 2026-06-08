import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "Support | FreeDrops Sponsor Portal" };

export default function SponsorSupportPage() {
  return (
    <AnimatedPage>
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Support</h1>
        <p className="text-sm text-gray-500 mt-1">We're here to help. Reach out to our team anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://wa.me/971545060056"
          className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 hover:border-[#D63839] transition-all cursor-pointer"
        >
          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
            <Icon icon="logos:whatsapp-icon" className="text-2xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">WhatsApp Support</h3>
            <p className="text-sm text-gray-500">Chat with our team directly. Usually responds within 30 minutes.</p>
            <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-emerald-600">
              Chat Now <Icon icon="lucide:arrow-right" className="text-xs" />
            </span>
          </div>
        </a>

        <a href="mailto:info@freedrops.ae" className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 hover:border-[#D63839] transition-all cursor-pointer">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
            <Icon icon="lucide:mail" className="text-blue-600 text-2xl" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
            <p className="text-sm text-gray-500">Send us an email and we'll get back to you within 24 hours.</p>
            <span className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-blue-600">
              Send Email <Icon icon="lucide:arrow-right" className="text-xs" />
            </span>
          </div>
        </a>
      </div>
    </div>
    </AnimatedPage>
  );
}
