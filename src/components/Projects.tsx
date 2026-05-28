"use client";

import { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "@/lib/github";
import { Layers, Globe, Cpu, BrainCircuit } from "lucide-react";

interface ProjectsProps {
  initialProjects: Project[];
}

type FilterType = "all" | "web" | "iot" | "ml";

export default function Projects({ initialProjects }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterButtons = [
    { label: "Semua Karya", type: "all" as FilterType, icon: <Layers className="w-4 h-4" /> },
    { label: "Web Dev", type: "web" as FilterType, icon: <Globe className="w-4 h-4" /> },
    { label: "IoT & Hardware", type: "iot" as FilterType, icon: <Cpu className="w-4 h-4" /> },
    { label: "Machine Learning", type: "ml" as FilterType, icon: <BrainCircuit className="w-4 h-4" /> },
  ];

  // Client-side technology tags mapping to define filters
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return initialProjects;

    return initialProjects.filter((project) => {
      const topics = project.topics.map((t) => t.toLowerCase());

      if (activeFilter === "web") {
        return topics.some((topic) =>
          ["web-dev", "nextjs", "react", "tailwind", "laravel", "nodejs", "typescript", "javascript", "php"].includes(topic)
        );
      }

      if (activeFilter === "iot") {
        return topics.some((topic) =>
          ["iot", "esp32", "mqtt", "arduino", "c++", "embedded"].includes(topic)
        );
      }

      if (activeFilter === "ml") {
        return topics.some((topic) =>
          ["machine-learning", "python", "tensorflow", "cnn", "classification", "data-science"].includes(topic)
        );
      }

      return true;
    });
  }, [activeFilter, initialProjects]);

  return (
    <section id="projects" className="py-20 border-t border-slate-900/40 relative">
      {/* Dynamic light visual */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute bottom-[30%] left-[20%] w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[110px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-400 uppercase font-mono mb-2">Portofolio Karya</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">Koleksi Proyek Unggulan</p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 mx-auto mt-4 rounded-full" />
          <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-md mx-auto">
            Proyek nyata yang diintegrasikan langsung dengan **GitHub API** (diperbarui otomatis via ISR). Gunakan filter cepat untuk memilah teknologi.
          </p>
        </div>

        {/* Filter Navigation Menu */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterButtons.map((btn) => (
            <button
              key={btn.type}
              onClick={() => setActiveFilter(btn.type)}
              className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-xl text-xs font-bold font-mono border tracking-wide transition-all duration-300 cursor-pointer ${
                activeFilter === btn.type
                  ? "bg-emerald-500/10 border-emerald-500 text-emerald-400 shadow-md shadow-emerald-950/10"
                  : "bg-slate-900/60 border-slate-850 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-slate-850"
              }`}
            >
              {btn.icon}
              <span>{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid Display */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={project.originalName} className="opacity-0 animate-fade-in" style={{ animation: "fadeIn 0.5s ease-out forwards", animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="glass-card py-16 px-6 text-center rounded-2xl border border-slate-850 max-w-md mx-auto">
            <div className="inline-flex p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 mb-4">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-200 tracking-tight">Tidak Ada Proyek</h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
              Belum ada repositori dengan filter topik kategori **{filterButtons.find(b => b.type === activeFilter)?.label}** di akun GitHub ini.
            </p>
          </div>
        )}
      </div>

      {/* Embedded CSS animation for grids transition */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
