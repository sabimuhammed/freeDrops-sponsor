import Link from "next/link";

const tabs = [
  { label: "Overview",      href: "/sponsor/campaigns/[id]/overview",      key: "overview" },
  { label: "Scan Info",     href: "/sponsor/campaigns/[id]/scan-info",     key: "scan-info" },
  { label: "Project Brief", href: "/sponsor/campaigns/[id]/project-brief", key: "project-brief" },
  { label: "QR Links",      href: "/sponsor/campaigns/[id]/qr-downloads",  key: "qr-downloads" },
  { label: "Analytics",     href: "/sponsor/campaigns/[id]/analytics",     key: "analytics" },
  { label: "Leads",         href: "/sponsor/campaigns/[id]/leads",         key: "leads", count: "242" },
  { label: "Creative",      href: "/sponsor/campaigns/[id]/creative",      key: "creative" },
];

export default function CampaignDetailTabs({ id, active }: { id: string; active: string }) {
  return (
    <div className="mb-6 border-b border-gray-200">
      <nav className="flex gap-8 overflow-x-auto">
        {tabs.map((t) => (
          <Link
            key={t.key}
            href={t.href.replace("[id]", id)}
            className={`flex items-center gap-2 pb-4 text-sm font-bold whitespace-nowrap transition-colors ${
              active === t.key
                ? "text-[#D63839] border-b-2 border-[#D63839]"
                : "text-gray-500 border-b-2 border-transparent hover:text-[#D63839]"
            }`}
          >
            {t.label}
            {t.count && (
              <span className="px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-500 text-xs font-bold">
                {t.count}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
