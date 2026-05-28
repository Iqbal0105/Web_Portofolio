"use client";

import { useState } from "react";
import { ExternalLink, Star, Code } from "lucide-react";
import { Project } from "@/lib/github";

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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  // Define mapping of topics to custom tag colors
  const getTagColor = (topic: string) => {
    const t = topic.toLowerCase();
    if (["nextjs", "react", "tailwind", "web-dev", "typescript", "javascript"].includes(t)) {
      return "bg-indigo-950/40 text-indigo-300 border-indigo-500/20";
    }
    if (["iot", "esp32", "mqtt", "arduino", "c++"].includes(t)) {
      return "bg-emerald-950/40 text-emerald-300 border-emerald-500/20";
    }
    if (["machine-learning", "python", "tensorflow", "cnn", "flask"].includes(t)) {
      return "bg-rose-950/40 text-rose-300 border-rose-500/20";
    }
    return "bg-slate-900/60 text-slate-400 border-slate-800";
  };

  return (
    <div className="glass-card group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-850 h-full">
      {/* Cover Image Area */}
      <div className="relative w-full aspect-video bg-slate-950/80 overflow-hidden border-b border-slate-900 flex items-center justify-center select-none">
        
        {/* Star Counter badge overlay */}
        {project.stargazers_count > 0 && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/90 backdrop-blur border border-amber-500/20 text-amber-400 font-mono text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{project.stargazers_count}</span>
          </div>
        )}

        {/* Dynamic Image / Fallback Loading */}
        {!imgError ? (
          <img
            src={`/projects/${project.originalName}.jpg`}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Premium Fallback Code SVG */
          <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-950 to-slate-900 text-left font-mono">
            {/* Background design elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-4 left-4 text-[10px] leading-tight text-emerald-400">
                01001001 01010001 01000010 01000001 01001100
              </div>
              <div className="absolute bottom-4 right-4 text-[10px] leading-tight text-indigo-400">
                {`{ status: "SUCCESS", load: true }`}
              </div>
            </div>
            
            <div className="flex items-center gap-2 mb-2 p-2 rounded-xl bg-slate-900 border border-slate-850 group-hover:border-emerald-500/20 transition-colors">
              <Code className="w-6 h-6 text-emerald-400 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">{project.originalName}</span>
            <span className="text-slate-400 text-xs mt-1.5 text-center font-sans max-w-[80%] line-clamp-1 italic">
              Ilustrasi Kode Fallback
            </span>
          </div>
        )}
      </div>

      {/* Info Card Content */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          {/* Title */}
          <h3 className="text-lg font-bold text-slate-100 tracking-tight leading-snug group-hover:text-emerald-400 transition-colors">
            {project.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Badges Stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.topics
              .filter((topic) => topic !== "portfolio" && topic !== "featured")
              .slice(0, 4) // Show up to 4 tags to keep layout neat
              .map((topic) => (
                <span
                  key={topic}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold font-mono border tracking-wider uppercase transition-colors duration-300 ${getTagColor(
                    topic
                  )}`}
                >
                  {topic}
                </span>
              ))}
          </div>
        </div>

        {/* Interactive Action Buttons */}
        <div className="flex items-center gap-3 pt-5 mt-5 border-t border-slate-900/60">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-lg active:scale-[0.98] transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            GitHub
          </a>

          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-350 hover:to-teal-350 rounded-lg active:scale-[0.98] transition-all hover:shadow-md hover:shadow-emerald-950/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
