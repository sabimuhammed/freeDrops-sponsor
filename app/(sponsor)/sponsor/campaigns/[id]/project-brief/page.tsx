import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "Project Brief | FreeDrops Sponsor Portal" };

export default function SponsorCampaignProjectBriefPage({ params }: { params: { id: string } }) {
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
          <div className="flex items-center gap-4 mt-1">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Spring Oasis Launch 2024</h1>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">Live</span>
          </div>
          <p className="text-sm text-gray-500">Campaign ID: FD-SPRING-24-001</p>
        </div>
      </div>

      <CampaignDetailTabs id={params.id} active="project-brief" />

      <div className="bg-white border border-slate-100 rounded-[32px] shadow-sm p-8 md:p-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h2 className="text-3xl font-bold text-slate-900">Project Brief</h2>
          <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-600 text-[11px] font-bold uppercase tracking-widest rounded-full">
            <Icon icon="lucide:lightbulb" className="text-sm" />
            Strategy Phase
          </span>
        </div>
        <p className="text-slate-500 max-w-xl mb-10">
          Help us understand your brand and objectives to ensure the highest quality campaign execution and placement.
        </p>

        <form className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Industry / Field */}
            <div className="space-y-2">
              <label htmlFor="industry" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">
                Industry / Field
              </label>
              <div className="relative">
                <select
                  id="industry"
                  defaultValue=""
                  className="w-full appearance-none px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all"
                >
                  <option value="" disabled>Select your industry</option>
                  <option value="fmcg">FMCG / Consumer Goods</option>
                  <option value="tech">Technology / SaaS</option>
                  <option value="finance">Finance / Banking</option>
                  <option value="retail">Retail / E-commerce</option>
                  <option value="hospitality">Hospitality / F&amp;B</option>
                  <option value="health">Health &amp; Wellness</option>
                  <option value="realestate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
                <Icon icon="lucide:chevron-down" className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            {/* Business Model */}
            <div className="space-y-2">
              <label htmlFor="business-model" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">
                Business Model
              </label>
              <input
                type="text"
                id="business-model"
                placeholder="e.g. B2C, B2B, Hybrid..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all"
              />
            </div>
          </div>

          {/* Brand Nature */}
          <div className="space-y-2">
            <label htmlFor="brand-nature" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">
              Brand Nature
            </label>
            <textarea
              id="brand-nature"
              rows={4}
              placeholder="Describe your brand's personality, tone of voice, and core values..."
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all resize-none"
            />
          </div>

          {/* Label Design Objective */}
          <div className="space-y-2">
            <label htmlFor="label-objective" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">
              Label Design Objective
            </label>
            <textarea
              id="label-objective"
              rows={4}
              placeholder="What do you want to achieve with this label? (e.g., brand awareness, drive app installs, direct sales, seasonal promotion...)"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all resize-none"
            />
          </div>

          {/* Target Audience */}
          <div className="space-y-2">
            <label htmlFor="target-audience" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">
              Target Audience
            </label>
            <textarea
              id="target-audience"
              rows={4}
              placeholder="Who are you trying to reach? (e.g., Professionals in Downtown Dubai, Students, Fitness enthusiasts...)"
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-6 pt-8 border-t border-slate-100">
            <button
              type="button"
              className="font-bold text-slate-600 hover:text-slate-900 text-sm transition-all"
            >
              Save as Draft
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#D63839] hover:opacity-90 text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-red-200"
            >
              Submit Brief
              <Icon icon="lucide:arrow-right" />
            </button>
          </div>
        </form>
      </div>
    </div>
    </AnimatedPage>
  );
}
