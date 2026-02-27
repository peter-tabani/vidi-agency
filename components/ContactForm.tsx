"use client";

import { useState, useRef } from "react";
import { UploadCloud } from "lucide-react";

export default function ContactForm() {
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up your API / form handler here
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : null);
  }

  return (
    <form
      className="space-y-4 md:space-y-6 relative z-10"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-bold text-gray-300 ml-1">
            Name
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-email" className="text-sm font-bold text-gray-300 ml-1">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="space-y-2">
          <label htmlFor="contact-phone" className="text-sm font-bold text-gray-300 ml-1">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="contact-budget" className="text-sm font-bold text-gray-300 ml-1">
            Budget (Optional)
          </label>
          <select
            id="contact-budget"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all"
          >
            <option value="" className="bg-[#0a0f1e]">Select Range</option>
            <option value="1k-5k" className="bg-[#0a0f1e]">$1k – $5k</option>
            <option value="5k-20k" className="bg-[#0a0f1e]">$5k – $20k</option>
            <option value="20k-50k" className="bg-[#0a0f1e]">$20k – $50k</option>
            <option value="50k+" className="bg-[#0a0f1e]">$50k+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-description" className="text-sm font-bold text-gray-300 ml-1">
          Project Description
        </label>
        <textarea
          id="contact-description"
          rows={4}
          placeholder="Tell us about your project goals, timeline, and any specific features you need..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm md:text-base text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40 transition-all resize-none"
        />
      </div>

      {/* File Upload */}
      <div className="space-y-2">
        <label htmlFor="contact-file" className="text-sm font-bold text-gray-300 ml-1">
          Attachment (Optional)
        </label>
        <label
          htmlFor="contact-file"
          className="border-2 border-dashed border-white/10 rounded-xl p-6 md:p-8 text-center hover:border-blue-500/40 hover:bg-white/5 transition-all cursor-pointer group flex flex-col items-center"
        >
          <UploadCloud
            size={24}
            className="md:size-[32px] text-gray-500 group-hover:text-blue-400 transition-colors mb-2"
          />
          {fileName ? (
            <p className="text-xs md:text-sm text-blue-400 font-semibold truncate max-w-[200px]">
              {fileName}
            </p>
          ) : (
            <>
              <p className="text-xs md:text-sm text-gray-400 font-medium">
                <span className="text-blue-400 font-bold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">PDF, DOCX, or PPT (Max 10MB)</p>
            </>
          )}
          <input
            ref={fileInputRef}
            id="contact-file"
            type="file"
            accept=".pdf,.doc,.docx,.ppt,.pptx"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base md:text-lg hover:opacity-90 shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
      >
        Send Request
      </button>

      <p className="text-center text-xs text-gray-500 mt-4">
        Protected by reCAPTCHA and our{" "}
        <a href="/privacy" className="underline hover:text-gray-300 transition-colors">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}