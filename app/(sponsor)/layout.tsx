import SponsorSidebar from "@/components/sponsor/SponsorSidebar";

export default function SponsorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      <SponsorSidebar />
      <main className="flex-1 ml-64 p-8">{children}</main>
    </div>
  );
}
