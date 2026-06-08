"use client";

import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function UploadAssetModal() {
  const [open, setOpen] = useState(false);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [logoName, setLogoName] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function close() {
    setOpen(false);
  }

  function handleFile(file: File | undefined) {
    if (!file) return;
    setLogoName(file.name);
    const reader = new FileReader();
    reader.onload = () => setLogoPreview(reader.result as string);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire up to upload/persist backend
    close();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-[#D63839] hover:opacity-90 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-red-200"
      >
        <Icon icon="lucide:upload" />Upload Asset
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={close}
        >
          <div
            className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Upload Asset</h2>
                <p className="text-xs text-slate-400 mt-0.5">Upload your logo or any label designs you have (optional)</p>
              </div>
              <button
                type="button"
                onClick={close}
                className="text-slate-400 hover:text-slate-700 transition-colors"
                aria-label="Close"
              >
                <Icon icon="lucide:x" className="text-xl" />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Logo upload */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest">Logo</label>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-slate-200 rounded-2xl p-6 flex flex-col items-center gap-3 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  {logoPreview ? (
                    <>
                      <img src={logoPreview} alt="Logo preview" className="h-20 w-20 object-contain rounded-xl" />
                      <p className="text-xs font-semibold text-slate-600 truncate max-w-full">{logoName}</p>
                      <span className="text-xs text-[#D63839] font-bold">Change logo</span>
                    </>
                  ) : (
                    <>
                      <Icon icon="lucide:image-plus" className="text-3xl text-slate-400" />
                      <div className="text-center">
                        <p className="text-sm font-bold text-slate-700">Click to upload logo</p>
                        <p className="text-xs text-slate-400 mt-1">PNG, JPG, SVG (Max 50MB)</p>
                      </div>
                    </>
                  )}
                </button>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <label htmlFor="asset-title" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">Title</label>
                <input
                  id="asset-title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Main Banner"
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="asset-description" className="block text-xs font-bold text-slate-700 uppercase tracking-widest">Description</label>
                <textarea
                  id="asset-description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe this asset..."
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all resize-none"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end gap-4 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="font-bold text-slate-600 hover:text-slate-900 text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#D63839] hover:opacity-90 text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-red-200"
                >
                  <Icon icon="lucide:upload" />
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
