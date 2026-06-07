"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email === "admin@gmail.com") {
      router.push("/admin/dashboard");
    } else if (email === "sponsor@gmail.com") {
      router.push("/sponsor/dashboard");
    }
  }

  return (
    <AnimatedPage>
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-white login-card p-10 rounded-3xl">
            <div className="flex justify-center mb-8">
              <img
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
                alt="FreeDrops.ae"
                className="h-[120px] w-auto object-contain"
              />
            </div>
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Login</h1>
              <p className="text-slate-500">Login to manage your hydration campaigns</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Icon icon="lucide:mail" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
          
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                    <Icon icon="lucide:lock" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2 px-1">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-[#B12B2C] border-slate-300 rounded focus:ring-[#B12B2C]"
                />
                <label htmlFor="remember" className="text-sm text-slate-500">Remember me for 30 days</label>
              </div>

            

              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#B12B2C] text-white font-bold rounded-xl shadow-lg shadow-red-100 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Log In <Icon icon="lucide:arrow-right" />
              </button>
            </form>

            {/* <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Need an account?{" "}
              </p>
            </div> */}
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
