"use client";

import { useState } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";

// Lucide-style inline Github SVG
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "iqbalabdulaziz71@gmail.com"; // Replace with user's email

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Iqbal0105", // Replace with user's github
      icon: <GithubIcon className="w-5 h-5 text-slate-300 group-hover:scale-110 transition-transform" />,
      colorClass: "glass-card border-slate-500/10",
      description: "Tinjau repositori, kontribusi kode, serta rekam jejak project saya.",
    },
  ];

  return (
    <footer id="contact" className="pt-20 pb-10 border-t border-slate-900/60 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[20%] right-[30%] w-[250px] h-[250px] bg-rose-500/5 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-400 uppercase font-mono mb-2">Hubungi Saya</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">Mari Mulai Kolaborasi</p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-md mx-auto">
            Apakah Anda mencari pemagang, pengembang freelance, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya!
          </p>
        </div>

        {/* Contact Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
          
          {/* Email Quick-Copy Card */}
          <div className="glass-card p-6 rounded-2xl border border-slate-850 flex flex-col justify-between group h-full">
            <div className="space-y-4">
              <div className="inline-flex p-3 rounded-xl bg-slate-900 border border-slate-850 group-hover:scale-105 transition-transform duration-300">
                <Mail className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">Kirim Email</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                  Kirim pesan secara langsung ke alamat email profesional saya.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {/* Copy Utility */}
              <button
                onClick={handleCopyEmail}
                className={`w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl border font-mono text-xs font-semibold select-all transition-all duration-300 cursor-pointer ${
                  copied
                    ? "bg-emerald-500/10 border-emerald-500 text-emerald-400"
                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <span className="truncate mr-2">{email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 flex-shrink-0" />
                ) : (
                  <Copy className="w-3.5 h-3.5 flex-shrink-0 hover:text-emerald-400 transition-colors" />
                )}
              </button>

              <a
                href={`mailto:${email}`}
                className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-350 hover:to-teal-350 active:scale-[0.98] transition-all hover:shadow-md hover:shadow-emerald-950/20"
              >
                <span>Direct Mail</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Social Links Cards */}
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-card ${link.colorClass} p-6 rounded-2xl border flex flex-col justify-between group h-full`}
            >
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-slate-900 border border-slate-850 group-hover:scale-105 transition-transform duration-300">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-tight">{link.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {link.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-900/40 flex items-center justify-end text-xs font-bold text-slate-400 group-hover:text-emerald-400 transition-colors gap-1">
                <span>Kunjungi {link.name}</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}

        </div>

        {/* Brand Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

        {/* Footer Base Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 font-mono">
          <p>© 2026 Iqbal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with 
            <a 
              href="https://nextjs.org" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Next.js 16
            </a> 
            & 
            <a 
              href="https://tailwindcss.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              Tailwind CSS v4
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
