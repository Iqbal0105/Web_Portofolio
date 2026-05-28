import { Layout, Cpu, BrainCircuit, CheckCircle2 } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Web Development",
      subtitle: "Full-Stack Web Dev",
      description: "Membangun sistem web interaktif berkinerja tinggi, responsif, dan ramah SEO menggunakan framework modern seperti Next.js dan REST/GraphQL API.",
      icon: <Layout className="w-8 h-8 text-indigo-400" />,
      features: ["Arsitektur Next.js App Router", "State Management & Server Actions", "Integrasi Database & API Restful"],
      colorClass: "glass-card-indigo",
      borderGlow: "rgba(99, 102, 241, 0.2)",
    },
    {
      title: "Internet of Things",
      subtitle: "IoT & Embedded Systems",
      description: "Merancang sirkuit mikrokontroler, pembacaan berbagai sensor fisik, dan transmisi data telemetri real-time menggunakan modul ESP32/Arduino.",
      icon: <Cpu className="w-8 h-8 text-emerald-400" />,
      features: ["Firmware C/C++ (Arduino/ESP-IDF)", "Komunikasi Protokol MQTT & HTTP", "Sensor Kelembaban, Suhu & Aktuator"],
      colorClass: "glass-card",
      borderGlow: "rgba(16, 185, 129, 0.2)",
    },
    {
      title: "Machine Learning",
      subtitle: "AI & Data Classification",
      description: "Melatih model deep learning dan machine learning untuk klasifikasi data gambar atau angka, kemudian menyebarkannya dalam bentuk web service ringkas.",
      icon: <BrainCircuit className="w-8 h-8 text-rose-400" />,
      features: ["Model CNN (Penyakit Tanaman/Gambar)", "Pre-processing Data & Model Tuning", "Deployment Flask / FastAPI API"],
      colorClass: "glass-card-rose",
      borderGlow: "rgba(244, 63, 94, 0.2)",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-900/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-semibold tracking-widest text-emerald-400 uppercase font-mono mb-2">Tentang Saya</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">Latar Belakang & Fokus</p>
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
          <div className="md:col-span-6 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              Halo! Saya adalah **mahasiswa aktif Teknik Informatika** yang memiliki antusiasme mendalam di persimpangan dunia perangkat lunak dan perangkat keras. Bagi saya, teknologi bukan sekadar sekumpulan baris kode, melainkan sebuah instrumen kuat untuk menghadirkan solusi otomatis atas permasalahan nyata yang kita hadapi sehari-hari.
            </p>
            <p>
              Saya memfokuskan pembelajaran pada **Full-Stack Web Development, Internet of Things (IoT), dan Machine Learning**. Saya percaya bahwa integrasi ketiga bidang ini—di mana sensor menangkap data fisik (IoT), kecerdasan buatan menganalisis data tersebut (ML), dan dashboard web menyajikannya secara interaktif (Web Dev)—merupakan masa depan industri digital yang sangat revolusioner.
            </p>
          </div>
          <div className="md:col-span-6 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p>
              Dalam setiap proyek yang saya bangun, saya selalu menerapkan **pendekatan berbasis problem-solving**. Saya senang merancang kode yang bersih (clean code), arsitektur yang terstruktur, serta berorientasi pada kemudahan performa dan ramah pengguna (UX).
            </p>
            <p>
              Saat ini, saya sedang aktif mencari kesempatan **magang industri** untuk belajar dari para praktisi ahli, berkontribusi langsung pada tim profesional, serta membuktikan keahlian teknis saya secara nyata di dunia kerja.
            </p>
          </div>
        </div>

        {/* Focus Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`glass-card ${card.colorClass} p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group h-full`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="inline-flex p-3 rounded-xl bg-slate-900 border border-slate-850 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest font-mono mb-1">{card.subtitle}</h3>
                  <h4 className="text-xl font-bold text-slate-100 tracking-tight">{card.title}</h4>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bullet Features */}
              <ul className="mt-6 pt-5 border-t border-slate-900/60 space-y-2">
                {card.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
