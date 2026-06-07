import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata = { title: "Registration Successful | FreeDrops" };

export default function RegisterSuccessPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">
        <div className="bg-white login-card p-10 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-center mb-6">
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
              alt="FreeDrops.ae"
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon icon="lucide:check-circle" className="text-green-500 text-3xl" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-3">You're all set!</h1>
          <p className="text-slate-500 mb-8">
            Your sponsor account has been created. Our team will review and approve your account within 24 hours.
          </p>

          <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Icon icon="lucide:check" className="text-green-500 shrink-0" />
              <span className="text-slate-700">Account created successfully</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Icon icon="lucide:clock" className="text-amber-500 shrink-0" />
              <span className="text-slate-700">Pending admin approval</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Icon icon="lucide:mail" className="text-slate-400 shrink-0" />
              <span className="text-slate-500">Confirmation email sent</span>
            </div>
          </div>

          <Link
            href="/login"
            className="w-full py-4 px-6 bg-[#B12B2C] text-white font-bold rounded-xl shadow-lg shadow-red-100 hover:opacity-90 transition-all flex items-center justify-center gap-2"
          >
            Go to Login <Icon icon="lucide:arrow-right" />
          </Link>
        </div>
      </div>
    </main>
  );
}
