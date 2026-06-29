"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

const categoryTags = ["Airport", "Dubai Metro", "Event", "Gym", "Hospital", "Mall", "Office", "Public Locations"];

const locations = [
  { name: "Dubai Beaches", area: "Jumeirah & Mimzer Beaches" },
  { name: "The Dubai Mall", area: "Downtown" },
];

export default function SponsorCreateStep4Page() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleLocation = (name: string) => {
    setSelectedLocations((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

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

      <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-8">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Target Locations & Tags</h3>
          <p className="text-sm text-gray-500 mt-1">Define where your campaign will be distributed across the UAE.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Select Emirate</label>
            <div className="relative">
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm appearance-none">
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
                <option>Ajman</option>
                <option>Ras Al Khaimah</option>
                <option>Fujairah</option>
                <option>Umm Al Quwain</option>
              </select>
              <Icon icon="lucide:chevron-down" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Category Tag (Optional)</label>
            <div className="flex flex-wrap gap-2">
              {categoryTags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 border rounded-full text-sm transition-colors ${
                      active
                        ? "border-[#D63839] bg-red-50 text-[#D63839]"
                        : "border-gray-200 text-gray-600 hover:border-[#D63839] hover:text-[#D63839]"
                    }`}
                  >
                    <Icon icon="lucide:tag" className="text-xs" />
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest">Assigned Location</label>
            {selectedLocations.length > 0 && (
              <button
                onClick={() => setSelectedLocations([])}
                className="text-sm font-semibold text-[#D63839] hover:text-red-700 transition-colors"
              >
                Clear Selection
              </button>
            )}
          </div>
          <div className="relative">
            <Icon icon="lucide:search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search locations in Dubai..."
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((loc) => {
              const active = selectedLocations.includes(loc.name);
              return (
                <button
                  key={loc.name}
                  onClick={() => toggleLocation(loc.name)}
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl text-left transition-colors ${
                    active ? "border-[#D63839] bg-red-50/30" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                    active ? "border-[#D63839] bg-[#D63839]" : "border-gray-300"
                  }`}>
                    {active && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{loc.name}</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{loc.area}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-gray-100">
          <button className="text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">
            Save Draft
          </button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-3" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link
              href="/sponsor/campaigns/create/review"
              className="flex items-center gap-2 bg-[#D63839] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Review & Publish <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
