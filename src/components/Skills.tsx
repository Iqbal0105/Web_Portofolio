import { Code2, Cpu, Wrench, Shield } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Bahasa Pemrograman",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      items: [
        { name: "Python", color: "hover:border-yellow-500/40 hover:bg-yellow-500/5 text-yellow-500", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.25.18c.9 0 2 .17 2.45.37 1.34.6 1.37 1.63 1.37 2.8v1.65h-4v.4h4.4c1.23 0 2.23.82 2.43 1.93.2 1.13.2 2.37 0 3.5-.2 1.07-1.12 1.9-2.3 1.9h-1.63v2.24c0 .8-.52 1.76-1.57 2.1a12.6 12.6 0 0 1-5.75.2c-1-.28-1.53-1.12-1.53-2.1v-1.67h4v-.4h-4.4a2.53 2.53 0 0 1-2.43-1.93c-.2-1.13-.2-2.37 0-3.5.2-1.07 1.12-1.9 2.3-1.9h1.63V4.9c0-.8.52-1.76 1.57-2.1A12.6 12.6 0 0 1 14.25.18zM11.5 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm1 17.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
          </svg>
        )},
        { name: "TypeScript", color: "hover:border-blue-500/40 hover:bg-blue-500/5 text-blue-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.125 0h21.75c.621 0 1.125.504 1.125 1.125v21.75c0 .621-.504 1.125-1.125 1.125H1.125C.504 24 0 23.496 0 22.875V1.125C0 .504.504 0 1.125 0zm17.153 16.53a3.528 3.528 0 0 0-1.603-.4c-.958 0-1.724.328-1.724 1.258 0 .848.654 1.116 1.777 1.597 1.745.748 3.09 1.405 3.09 3.324 0 2.215-1.775 3.093-4.088 3.093-2.186 0-3.791-.973-4.493-2.457l1.79-1.092c.493.847 1.226 1.59 2.666 1.59 1.053 0 1.944-.447 1.944-1.397 0-.915-.758-1.257-2.025-1.782-1.733-.71-2.839-1.428-2.839-3.267 0-1.921 1.636-2.923 3.79-2.923 1.91 0 3.084.776 3.766 1.968l-1.77 1.09zM8.88 12.012H13.6v1.944h-2.115v9.845H9.273v-9.845H7.135v-1.944H8.88z" />
          </svg>
        )},
        { name: "JavaScript", color: "hover:border-yellow-400/40 hover:bg-yellow-400/5 text-yellow-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0h24v24H0V0zm22.034 18.268c-.175-1.024-.87-1.854-2.228-2.268-1.127-.373-2.278-.65-2.278-1.314 0-.489.414-.728.986-.728.847 0 1.343.329 1.71 1.024l1.9-.997c-.63-1.277-1.633-1.944-3.238-1.944-2.203 0-3.666 1.236-3.666 3.125 0 2.412 2.378 2.87 3.985 3.398 1.253.397 1.943.796 1.943 1.539 0 .692-.619 1.093-1.493 1.093-.98 0-1.67-.442-2.13-1.272l-1.97 1.13c.787 1.4 2.118 2.057 3.98 2.057 2.502 0 4.053-1.162 4.053-3.14-.002-1.631-.913-2.454-2.903-2.975zm-14.773 1.98c-.144.593-.526.967-1.085.967-.674 0-1.054-.488-1.054-1.603V12.01h-2.31v7.917c0 2.21 1.29 3.17 3.175 3.17 1.838 0 2.81-.97 3.14-2.52l-1.866-.99z" />
          </svg>
        )},
        { name: "PHP", color: "hover:border-violet-500/40 hover:bg-violet-500/5 text-violet-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.4 12c.07-.63.2-1.19.4-1.68.21-.49.5-.89.87-1.19a3.7 3.7 0 0 1 1.4-.73c.59-.15 1.29-.2 2.1-.2 1.35 0 2.36.21 3.03.62.67.42 1 .98 1 1.7 0 .54-.15 1.04-.45 1.5-.3.45-.73.83-1.3 1.12a5.57 5.57 0 0 1-2 .55c-.43.03-.94.05-1.53.05a30.85 30.85 0 0 1-3.11-.12c-.28-.02-.57-.04-.84-.07L5.4 12zm2.08 1.18c.28.02.6.03.95.03.44 0 .81-.01 1.12-.03a2.76 2.76 0 0 0 1.27-.37c.36-.21.6-.52.74-.9.15-.39.22-.84.22-1.36 0-.37-.08-.68-.24-.92-.17-.23-.42-.4-.76-.51a4.23 4.23 0 0 0-1.14-.15c-.27 0-.54 0-.8.02-.27.02-.51.04-.73.06L7.48 13.18zM0 18.96l2.19-8.49c.12-.48.24-.87.36-1.18.12-.3.26-.53.42-.69.16-.16.35-.26.56-.3.21-.05.47-.07.78-.07h1.49l-2.45 9.5H1.47l-1.47 5.7h-2.1zm17.57-8.91c.07-.63.2-1.19.4-1.68.21-.49.5-.89.87-1.19a3.7 3.7 0 0 1 1.4-.73c.59-.15 1.29-.2 2.1-.2 1.35 0 2.36.21 3.03.62.67.42 1 .98 1 1.7 0 .54-.15 1.04-.45 1.5-.3.45-.73.83-1.3 1.12a5.57 5.57 0 0 1-2 .55c-.43.03-.94.05-1.53.05a30.85 30.85 0 0 1-3.11-.12c-.28-.02-.57-.04-.84-.07L17.57 12zm2.08 1.18c.28.02.6.03.95.03.44 0 .81-.01 1.12-.03a2.76 2.76 0 0 0 1.27-.37c.36-.21.6-.52.74-.9.15-.39.22-.84.22-1.36 0-.37-.08-.68-.24-.92-.17-.23-.42-.4-.76-.51a4.23 4.23 0 0 0-1.14-.15c-.27 0-.54 0-.8.02-.27.02-.51.04-.73.06L19.65 13.18z" />
          </svg>
        )},
        { name: "C++", color: "hover:border-blue-600/40 hover:bg-blue-600/5 text-blue-500", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.062 14.156h-2.125V16.28h-1.406V14.156H16.4v-1.406h2.125v-2.125h1.406v2.125h2.125v1.406zm-4.938-5.312h-2.125V10.97h-1.406V8.844H11.4v-1.406h2.125V5.312h1.406V7.44h2.125v1.406zM9.594 4.344c-2.484 0-4.578 1.094-5.64 2.859L6.89 8.78c.515-.718 1.547-1.437 2.704-1.437 1.89 0 3.328 1.28 3.328 3.36 0 2.078-1.438 3.36-3.328 3.36-1.157 0-2.189-.72-2.704-1.438L3.953 14.22c1.063 1.765 3.156 2.859 5.64 2.859 3.594 0 6.64-2.28 6.64-6.375 0-4.094-3.046-6.36-6.64-6.36z" />
          </svg>
        )}
      ]
    },
    {
      title: "Framework / Library",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: "Next.js", color: "hover:border-slate-300/40 hover:bg-slate-300/5 text-slate-100", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12c5.68 0 10.42-3.95 11.66-9.22l-10.41-13.5a1.14 1.14 0 0 0-.15-.17A11.96 11.96 0 0 0 12 0zm0 2.1c.96 0 1.89.14 2.76.4L5.61 14.39C5.22 13.62 5 12.83 5 12c0-3.87 3.13-7 7-7zm7.66 3.65l.07.12v12.33c0 .88-.72 1.6-1.6 1.6H13.6l-5.63-7.51 9.92-12.79a9.88 9.88 0 0 1 1.77 6.25z" />
          </svg>
        )},
        { name: "Laravel", color: "hover:border-rose-600/40 hover:bg-rose-600/5 text-rose-500", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.5 5.5v13l-9.5 5.5-9.5-5.5v-13L12 0l9.5 5.5zM12 2.3L4.5 6.6v8.6l7.5 4.3 7.5-4.3V6.6L12 2.3z" />
          </svg>
        )},
        { name: "Flask", color: "hover:border-slate-400/40 hover:bg-slate-400/5 text-slate-300", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.8 1.9c-.9 0-1.8.4-2.5 1.1-.9-.7-2-1.1-3.2-1.1-2.9 0-5.3 2.4-5.3 5.3 0 1.1.3 2.1.9 3-.4.3-.8.7-1.1 1.2a3.7 3.7 0 0 0-.5 1.9c0 2 1.6 3.7 3.7 3.7h.3c.7.9 1.7 1.4 2.9 1.4 1.2 0 2.3-.5 3-1.4h.3c2 0 3.7-1.6 3.7-3.7 0-.7-.2-1.3-.5-1.9-.3-.5-.7-.9-1.2-1.2.6-.9.9-1.9.9-3 0-2.9-2.3-5.3-5.3-5.3zm-1.8 10.9h-.1c-.6-.7-1.6-1.2-2.7-1.2-1.1 0-2.1.5-2.7 1.2H11c-1 0-1.9-.8-1.9-1.9 0-.4.1-.7.4-1 .3-.3.7-.4 1-.4h1.7c.9 0 1.6-.7 1.6-1.6V6.2h.5c1 0 1.9.8 1.9 1.9 0 1-.8 1.9-1.9 1.9h-.5v.9c0 .9.7 1.6 1.6 1.6h.4c.5 0 .9.2 1.2.5.3.3.4.7.4 1.1 0 1-.8 1.9-1.9 1.9z" />
          </svg>
        )},
        { name: "Node.js", color: "hover:border-green-500/40 hover:bg-green-500/5 text-green-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L2.7 5.4v10.8L12 21.6l9.3-5.4V5.4L12 0zm7.1 14.8l-7.1 4.1-7.1-4.1V6.8l7.1-4.1 7.1 4.1v8zm-7.1-8.5c-.8 0-1.5.3-2.1.8l2.1 3.6 2.1-3.6c-.6-.5-1.3-.8-2.1-.8z" />
          </svg>
        )},
        { name: "Tailwind CSS", color: "hover:border-cyan-400/40 hover:bg-cyan-400/5 text-cyan-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
          </svg>
        )}
      ]
    },
    {
      title: "Hardware & IoT",
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      items: [
        { name: "ESP32 Module", color: "hover:border-emerald-500/40 hover:bg-emerald-500/5 text-emerald-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 12h12" />
            <path d="M14 8v8" />
            <path d="M10 8v8" />
          </svg>
        )},
        { name: "Arduino IDE", color: "hover:border-teal-500/40 hover:bg-teal-500/5 text-teal-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.43 9.4c-1.39 0-2.63.67-3.43 1.7a4.953 4.953 0 0 0-3.43-1.7c-2.76 0-5 2.24-5 5s2.24 5 5 5c1.39 0 2.63-.67 3.43-1.7a4.953 4.953 0 0 0 3.43 1.7c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-5.74 5.92c-.37.52-.92.86-1.56.86-1.05 0-1.9-.85-1.9-1.9s.85-1.9 1.9-1.9c.64 0 1.19.34 1.56.86-.33.45-.52.99-.52 1.58 0 .59.19 1.13.52 1.58zm6.33.86c-1.05 0-1.9-.85-1.9-1.9s.85-1.9 1.9-1.9 1.9.85 1.9 1.9-.85 1.9-1.9 1.9z" />
          </svg>
        )},
        { name: "MQTT Protocol", color: "hover:border-emerald-400/40 hover:bg-emerald-400/5 text-emerald-300", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="4" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <line x1="12" y1="6" x2="12" y2="9" />
            <line x1="7.4" y1="16.6" x2="10.1" y2="13.9" />
            <line x1="16.6" y1="16.6" x2="13.9" y2="13.9" />
          </svg>
        )}
      ]
    },
    {
      title: "Tools & OS",
      icon: <Shield className="w-5 h-5 text-rose-400" />,
      items: [
        { name: "Linux Arch", color: "hover:border-cyan-500/40 hover:bg-cyan-500/5 text-cyan-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L2.4 18.6C3.96 17.64 6 16.8 8.4 16.8c1.32 0 2.52.24 3.6.48.96-.24 2.16-.48 3.6-.48 2.4 0 4.44.84 6 1.8L12 0zm0 9c.72 0 1.2.48 1.2 1.2s-.48 1.2-1.2 1.2-1.2-.48-1.2-1.2.48-1.2 1.2-1.2z" />
          </svg>
        )},
        { name: "Git / GitHub", color: "hover:border-orange-500/40 hover:bg-orange-500/5 text-orange-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.546 10.93L13.07.45a1.503 1.503 0 0 0-2.13 0L8.005 3.385l3.185 3.185a1.503 1.503 0 0 1 2.262 1.85l3.285 3.285a1.503 1.503 0 0 1 1.85 2.262l3.185 3.185a1.503 1.503 0 0 0 2.13-2.13l-3.356-3.356zm-12.062-1.07a1.503 1.503 0 0 1-1.85-2.262L6.449 4.313a1.503 1.503 0 0 0-2.13 2.13l3.285 3.285a1.503 1.503 0 0 1 2.262 1.85l2.128 2.128c-.147.45-.04 1.01.328 1.378a1.504 1.504 0 0 0 2.128-2.128l-2.128-2.128z" />
          </svg>
        )},
        { name: "Docker", color: "hover:border-blue-400/40 hover:bg-blue-400/5 text-blue-400", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.283 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.7 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.7 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.883c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.7 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H3.183c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.7 0h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H.483c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm5.4-2.7h2.119c.102 0 .186-.084.186-.186V6.073c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.7 0h2.119c.102 0 .186-.084.186-.186V6.073c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-5.4 0h2.119c.102 0 .186-.084.186-.186V6.073c0-.102-.084-.186-.186-.186H5.883c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-2.7 0h2.119c.102 0 .186-.084.186-.186V6.073c0-.102-.084-.186-.186-.186H3.183c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm5.4-2.7h2.119c.102 0 .186-.084.186-.186V3.373c0-.102-.084-.186-.186-.186H8.583c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm14.807 4.195c-.347-.644-1.026-1.127-1.746-1.347-1.187-.364-2.483-.242-3.619.339-1.026.525-1.754 1.492-1.924 2.61a5.617 5.617 0 0 0-.085 1.077c.017.585.127 1.161.322 1.703a11.97 11.97 0 0 0 5.432-1.636c1.11-.644 1.958-1.593 2.458-2.72.102-.22.102-.45.017-.67l-.855-.356z" />
          </svg>
        )},
        { name: "VS Code", color: "hover:border-blue-500/40 hover:bg-blue-500/5 text-blue-500", svg: (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.985 17.56a1.427 1.427 0 0 1-.365.748l-2.464 2.228a1.298 1.298 0 0 1-1.688.109l-8.082-5.74-5.328 3.978a1.082 1.082 0 0 1-1.353-.028L1.13 16.2a1.26 1.26 0 0 1-.416-.927v-6.52a1.262 1.262 0 0 1 .416-.927l3.576-2.658a1.084 1.084 0 0 1 1.353-.028l5.328 3.978 8.082-5.74a1.298 1.298 0 0 1 1.688.109l2.464 2.228c.245.215.378.514.365.824v11.02zm-12.7-5.56l-3.328-2.484-3.528 2.484 3.528 2.484 3.328-2.484z" />
          </svg>
        )}
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 border-t border-slate-900/40 relative">
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-400 uppercase font-mono mb-2">Keahlian</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">Teknologi & Tools</p>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-emerald-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-850 flex flex-col justify-start h-full">
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-900/80">
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight">{category.title}</h3>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {category.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border border-slate-900/70 bg-slate-900/35 hover:scale-[1.03] transition-all duration-300 group cursor-default ${item.color}`}
                  >
                    <div className="mb-2 text-slate-400 group-hover:text-inherit group-hover:scale-110 transition-all duration-300">
                      {item.svg}
                    </div>
                    <span className="text-xs font-semibold text-slate-300 group-hover:text-slate-100 tracking-wide font-mono transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
