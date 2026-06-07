"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <AnimatedPage>
      <div className="min-h-screen" style={{ background: "radial-gradient(circle at top right, rgba(168,32,26,0.03), transparent 40%), radial-gradient(circle at bottom left, rgba(168,32,26,0.02), transparent 40%)" }}>

        {/* Header */}
        <header className="w-full px-6 py-5 md:px-12 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
          <Link href="/" className="flex items-center">
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
              alt="FreeDrops.ae"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-[#a8201a] transition-colors">How it Works</a>
            <a href="#" className="hover:text-[#a8201a] transition-colors">Locations</a>
            <span className="text-[#a8201a]">Become a Sponsor</span>
          </nav>

          <a
            href="#"
            className="px-6 py-2.5 bg-[#a8201a] text-white text-sm font-bold rounded-full hover:opacity-90 active:scale-95 transition-all"
          >
            Contact Sales
          </a>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center">

          {/* Hero */}
          <div className="text-center max-w-3xl mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Become a FreeDrops{" "}
              <span className="text-[#a8201a]">Sponsor</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Scale your impact, reach your audience, and join the movement. Complete your profile below to start your hydration campaign today.
            </p>
          </div>

          {/* Registration Card */}
          <div className="w-full max-w-2xl">
            <div
              className="bg-white p-10 md:p-16"
              style={{
                borderRadius: "40px",
                boxShadow: "rgba(0,0,0,0.08) 0px 20px 50px -12px",
                border: "1px solid #f3f4f6",
              }}
            >
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Complete Your Profile</h2>
                <p className="text-slate-500">Fill in the details below to create your sponsor account.</p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => { e.preventDefault(); router.push("/register-success"); }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company_name" className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Icon icon="lucide:building-2" />
                      </div>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        placeholder="Acme Corporation"
                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[rgba(168,32,26,0.2)] focus:border-[#a8201a] transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Icon icon="lucide:phone" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+971 XX XXX XXXX"
                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[rgba(168,32,26,0.2)] focus:border-[#a8201a] transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="full_name" className="text-sm font-bold text-slate-700 ml-1">Primary Contact Person</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Icon icon="lucide:user" />
                    </div>
                    <input
                      type="text"
                      id="full_name"
                      name="full_name"
                      placeholder="Jane Smith"
                      className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[rgba(168,32,26,0.2)] focus:border-[#a8201a] transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Business Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                      <Icon icon="lucide:mail" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="jane@company.com"
                      className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[rgba(168,32,26,0.2)] focus:border-[#a8201a] transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-bold text-slate-700 ml-1">Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Icon icon="lucide:lock" />
                      </div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[rgba(168,32,26,0.2)] focus:border-[#a8201a] transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="confirm_password" className="text-sm font-bold text-slate-700 ml-1">Confirm Password</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Icon icon="lucide:shield-check" />
                      </div>
                      <input
                        type="password"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="••••••••"
                        className="block w-full pl-11 pr-4 py-4 bg-gray-50 border border-slate-100 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-[rgba(168,32,26,0.2)] focus:border-[#a8201a] transition-all"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="h-4 w-4 mt-0.5 rounded border-slate-300"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-slate-500 leading-relaxed">
                    I agree to the{" "}
                    <a href="#" className="text-[#a8201a] font-bold hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-[#a8201a] font-bold hover:underline">Privacy Policy</a>.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#a8201a] text-white py-5 px-8 text-base font-bold shadow-xl shadow-red-100 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4"
                >
                  Create Sponsor Account
                  <Icon icon="lucide:chevron-right" className="text-xl" />
                </button>
              </form>

              <div className="mt-10 text-center">
                <p className="text-slate-500">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#a8201a] font-bold hover:underline ml-1">Sign in here</Link>
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-slate-100 mt-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <img
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
                alt="FreeDrops.ae"
                className="h-8"
              />
              <span className="text-sm text-slate-400">© 2024 FreeDrops. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#a8201a] transition-colors">Support</a>
              <a
                href="https://wa.me/"
                className="flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <Icon icon="lucide:message-circle" className="text-lg" />
                WhatsApp Support
              </a>
            </div>
          </div>
        </footer>

      </div>
    </AnimatedPage>
  );
}
