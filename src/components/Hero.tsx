"use client";

import { useEffect, useState } from "react";
import { Terminal, Cpu, Code2, BrainCircuit, ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Web Developer",
    "IoT & Embedded Systems Engineer",
    "Machine Learning Enthusiast",
    "Problem Solver & Tech Innovator"
  ];

  const TYPING_SPEED = 80;
  const DELETING_SPEED = 40;
  const PAUSE_DURATION = 1500;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = roles[roleIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, DELETING_SPEED);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
      }, TYPING_SPEED);
    }

    // Switch states based on text length
    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Decorative background grid and glowing orbs */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Info */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-xs mb-4 select-none hover:border-emerald-500/30 transition-all duration-300">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Tersedia Untuk Magang / Proyek
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="text-slate-100">Hi, Saya </span>
                <span className="text-gradient-mixed font-extrabold tracking-normal">Iqbal</span>
              </h1>
              
              {/* Dynamic Sub-Headline typing effect */}
              <div className="h-10 sm:h-12 flex items-center mt-3">
                <p className="text-lg sm:text-xl md:text-2xl font-mono text-slate-300 font-semibold flex items-center">
                  <span className="text-emerald-400 mr-2">{">"}</span>
                  <span>{displayText}</span>
                  <span className="w-1.5 h-6 bg-emerald-400 ml-1 animate-pulse border-r-2 border-emerald-400" />
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              Full-Stack Developer & IoT Enthusiast yang senang membangun solusi digital interaktif. 
              Saya menggabungkan kekuatan pengembangan web modern, arsitektur hardware cerdas, dan klasifikasi data berbasis kecerdasan buatan untuk menyelesaikan tantangan nyata.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={(e) => handleScrollTo(e, "projects")}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-xl hover:shadow-lg hover:shadow-emerald-950/20 active:scale-[0.98] transition-all hover:scale-[1.02] cursor-pointer"
              >
                Lihat Proyek
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={(e) => handleScrollTo(e, "contact")}
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-xl active:scale-[0.98] transition-all hover:scale-[1.02] cursor-pointer"
              >
                Hubungi Saya
                <Mail className="w-4 h-4" />
              </button>
            </div>
            
            {/* Minimal Stat Indicators */}
            <div className="flex gap-8 pt-6 border-t border-slate-900/60 max-w-md">
              <div>
                <span className="block text-2xl font-bold text-slate-100">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Repositori Aktif</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-100">3+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Fokus Rumpun</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-slate-100">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-mono">Berorientasi Bukti</span>
              </div>
            </div>
          </div>

          {/* Interactive Visual Coding Panel (Mock IDE) */}
          <div className="lg:col-span-5 relative w-full flex justify-center animate-float">
            <div className="absolute inset-0 bg-emerald-500/10 rounded-3xl blur-2xl opacity-50 translate-x-3 translate-y-3" />
            <div className="w-full max-w-sm glass-card p-5 rounded-2xl border border-slate-800 text-left font-mono text-xs leading-relaxed overflow-hidden">
              
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-900 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-slate-500 text-[10px] flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> iqbal.json
                </span>
              </div>

              {/* Code display */}
              <div className="space-y-2.5 text-slate-300">
                <p className="text-emerald-400">
                  <span className="text-slate-500">const</span> developer = <span className="text-yellow-400">{"{"}</span>
                </p>
                <p className="pl-4">
                  nama: <span className="text-emerald-300">"Iqbal"</span>,
                </p>
                <p className="pl-4">
                  status: <span className="text-emerald-300">"Mahasiswa Informatika"</span>,
                </p>
                <p className="pl-4">
                  fokus: <span className="text-indigo-300">["Web Dev", "IoT", "ML"]</span>,
                </p>
                <p className="pl-4">
                  hardware: <span className="text-slate-400">["ESP32", "Arduino"]</span>,
                </p>
                <p className="pl-4 flex items-center gap-1">
                  motivasi: <span className="text-rose-300">"Slove-Problem-With-Code"</span>,
                </p>
                <p className="pl-4">
                  lokasi: <span className="text-emerald-300">"Indonesia"</span>,
                </p>
                <p className="pl-4">
                  kontakSore: <span className="text-cyan-400">() =&gt;</span> <span className="text-yellow-400">"Let's Build!"</span>
                </p>
                <p className="text-yellow-400">{"};"}</p>
              </div>

              {/* Floating tech badges */}
              <div className="mt-5 pt-3 border-t border-slate-900 flex justify-between items-center text-[10px] text-slate-500">
                <span className="flex items-center gap-1"><Code2 className="w-3 h-3 text-indigo-400" /> Next.js 16</span>
                <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-emerald-400" /> ESP32</span>
                <span className="flex items-center gap-1"><BrainCircuit className="w-3 h-3 text-rose-400" /> CNN</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
