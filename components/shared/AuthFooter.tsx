export default function AuthFooter() {
  return (
    <footer className="p-8 flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-slate-500">
      <div className="flex items-center gap-2">
        <span>Need help? Contact support via</span>
        <a
          href="https://wa.me/"
          className="flex items-center gap-1.5 font-semibold text-emerald-600 hover:text-emerald-700 bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm"
        >
          WhatsApp Support
        </a>
      </div>
      <div className="hidden md:block w-1 h-1 bg-slate-300 rounded-full mx-2" />
      <p>© 2024 FreeDrops Advertising LLC</p>
    </footer>
  );
}
