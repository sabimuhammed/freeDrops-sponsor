import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "Admin Login | FreeDrops" };

export default function AdminLoginPage() {
  return (
    <AnimatedPage>
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-[448px]">
          <div className="bg-white login-card p-8 rounded-[24px]">
            <div className="mb-6 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
                  alt="FreeDrops.ae"
                  className="h-24 w-auto object-contain"
                />
              </div>
              <h1 className="text-3xl font-semibold text-slate-900 mb-2 tracking-tight">Admin Login</h1>
              <p className="text-slate-500">Access the FreeDrops global control center.</p>
            </div>

            <form className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Icon icon="lucide:mail" className="text-xl" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="admin@freedrops.ae"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                {/* <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                  <Link href="/admin/forgot-password" className="text-xs font-medium text-[#D63839] hover:underline">
                    Forgot password?
                  </Link>
                </div> */}
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Icon icon="lucide:lock" className="text-xl" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 px-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-[#D63839] border-slate-300 rounded focus:ring-[#D63839]"
                />
                <label htmlFor="remember" className="text-sm text-slate-500">Remember me for 7 days</label>
              </div>

              <Link
                href="/admin/dashboard"
                className="w-full py-3.5 px-6 bg-[#D63839] text-white font-bold rounded-xl shadow-lg shadow-red-100 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Log In <Icon icon="lucide:arrow-right" className="text-lg" />
              </Link>
            </form>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Need help?{" "}
              <a href="#" className="text-[#D63839] font-semibold hover:underline">Contact platform support</a>
            </p>
          </div>
        </div>
      </main>

      <footer className="p-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-500">
        {/* <div className="flex items-center gap-2">
          <span>Need help? Contact support via</span>
          <a
            href="https://wa.me/"
            className="flex items-center gap-1.5 font-semibold text-emerald-600 hover:text-emerald-700 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm"
          >
            <Icon icon="logos:whatsapp-icon" className="text-lg" />
            WhatsApp Support
          </a>
        </div> */}
        <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full mx-2" />
        <p>© 2026 FreeDrops Advertising LLC</p>
      </footer>
    </div>
    </AnimatedPage>
  );
}
