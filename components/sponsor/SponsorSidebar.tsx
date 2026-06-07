"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const navItems = [
  { id: "dashboard", href: "/sponsor/dashboard", icon: "lucide:layout-dashboard", label: "Dashboard" },
  { id: "campaigns", href: "/sponsor/campaigns", icon: "lucide:megaphone", label: "My Campaigns" },
  { id: "support", href: "/sponsor/support", icon: "lucide:headphones", label: "Support" },
];

export default function SponsorSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="w-64 glass-sidebar fixed inset-y-0 left-0 flex flex-col z-50">
      <div className="p-6 flex justify-center">
        <img
          src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
          alt="FreeDrops"
          className="h-12 w-auto object-contain"
        />
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <motion.div key={item.id} whileTap={{ scale: 0.97 }} className="relative">
              {active && (
                <motion.span
                  layoutId="sponsor-nav-indicator"
                  className="absolute inset-0 bg-red-50 rounded-lg border-r-2 border-[#D63839]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <Link
                href={item.href}
                className={`relative flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-link ${active ? "text-[#D63839]" : ""}`}
              >
                <Icon icon={item.icon} className="mr-3 text-lg" />
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-[#FEE2E3] flex items-center justify-center text-[#D63839] font-bold text-xs">
            MW
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Masafi Water</p>
            <p className="text-xs text-gray-500 truncate">Sponsor</p>
          </div>
          <Link href="/login" className="text-gray-400 hover:text-gray-600">
            <Icon icon="lucide:log-out" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
