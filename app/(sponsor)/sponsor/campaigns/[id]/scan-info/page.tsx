"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/sponsor/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

type ScanEntry = {
  ip: string;
  network: string;
  location: string;
  flag: string;
  browser: string;
  browserIcon: string;
  device: string;
  timestamp: string;
};

const scans: ScanEntry[] = [
  { ip: "192.168.1.15", network: "Etisalat 5G", location: "Dubai, UAE", flag: "flag:ae-4x3", browser: "Chrome 122 / iOS", browserIcon: "logos:chrome", device: "iPhone 15 Pro Max", timestamp: "Oct 15, 2024 - 3:15 PM" },
  { ip: "10.0.5.22", network: "Du WiFi", location: "Abu Dhabi, UAE", flag: "flag:ae-4x3", browser: "Safari / iOS", browserIcon: "logos:safari", device: "iPhone 15", timestamp: "Oct 15, 2024 - 3:12 PM" },
  { ip: "172.16.8.44", network: "Etisalat WiFi", location: "Sharjah, UAE", flag: "flag:ae-4x3", browser: "Chrome 121 / Android", browserIcon: "logos:chrome", device: "Samsung S24 Ultra", timestamp: "Oct 15, 2024 - 3:08 PM" },
  { ip: "92.241.168.4", network: "Etisalat UAE", location: "Dubai, UAE", flag: "flag:ae-4x3", browser: "Chrome 120 / iOS", browserIcon: "logos:chrome", device: "iPhone 15 Pro", timestamp: "Oct 15, 2024 - 2:45 PM" },
  { ip: "104.28.182.2", network: "Du Internet", location: "Abu Dhabi, UAE", flag: "flag:ae-4x3", browser: "Safari / iOS", browserIcon: "logos:safari", device: "Samsung S23", timestamp: "Oct 15, 2024 - 2:40 PM" },
  { ip: "185.192.69.10", network: "Mobile Data", location: "Riyadh, KSA", flag: "flag:sa-4x3", browser: "Chrome 121 / Android", browserIcon: "logos:chrome", device: "Pixel 8", timestamp: "Oct 15, 2024 - 2:33 PM" },
  { ip: "192.168.10.5", network: "WiFi + 5G", location: "Sharjah, UAE", flag: "flag:ae-4x3", browser: "Safari / iOS", browserIcon: "logos:safari", device: "iPad Pro M2", timestamp: "Oct 15, 2024 - 2:28 PM" },
  { ip: "10.0.8.114", network: "4G LTE", location: "Ajman, UAE", flag: "flag:ae-4x3", browser: "Chrome 120 / Android", browserIcon: "logos:chrome", device: "Nothing Phone (2)", timestamp: "Oct 15, 2024 - 2:22 PM" },
];

const PAGE_SIZE = 5;

export default function SponsorCampaignScanInfoPage({ params }: { params: { id: string } }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(scans.length / PAGE_SIZE);
  const pagedScans = scans.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <AnimatedPage>
    <div>

      {/* Header */}
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

      <CampaignDetailTabs id={params.id} active="scan-info" />

      {/* Detailed Scan Log card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-6 flex items-start justify-between gap-4 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Detailed Scan Log</h2>
            <p className="text-sm text-gray-500 mt-1">Real-time activity for your campaign</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all">
              <Icon icon="lucide:filter" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl text-sm font-bold transition-all">
              <Icon icon="lucide:download" /> Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Browser / OS</th>
                <th className="px-6 py-4">Device</th>
                <th className="px-6 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-100 text-sm">
              {pagedScans.map((s) => (
                <AnimatedRow key={s.ip} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{s.ip}</p>
                    <p className="text-xs text-gray-400">{s.network}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Icon icon={s.flag} className="text-lg rounded-sm shrink-0" />
                      {s.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Icon icon={s.browserIcon} className="text-lg shrink-0" />
                      {s.browser}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-600">{s.device}</span>
                  </td>
                  <td className="px-6 py-4 text-right text-gray-700 font-medium whitespace-nowrap">{s.timestamp}</td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-500 font-medium">
            Showing {Math.min((currentPage - 1) * PAGE_SIZE + 1, scans.length)}–{Math.min(currentPage * PAGE_SIZE, scans.length)} of {scans.length} scans
          </p>
          <div className="flex items-center gap-2">
            <button
              className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <Icon icon="lucide:chevron-left" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  page === currentPage
                    ? "font-bold bg-white border border-gray-200 text-[#D63839] shadow-sm"
                    : "font-medium text-gray-600 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <Icon icon="lucide:chevron-right" />
            </button>
          </div>
        </div>
      </div>

    </div>
    </AnimatedPage>
  );
}
