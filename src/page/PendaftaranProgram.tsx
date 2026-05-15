import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Atom,
  Stethoscope,
  Globe,
  Users,
  School,
  ChevronRight,
  Search,
} from "lucide-react";


export default function PendaftaranProgram() {
  const [searchQuery, setSearchQuery] = useState("");

  const programs = [
    {
      title: "SARJANA & SARJANA TERAPAN",
      desc: "Program Diploma 4 dan Strata 1 untuk lulusan SMA/SMK/MA sederajat.",
      total: "84 Program Studi",
      icon: GraduationCap,
      accent: "bg-blue-500",
      status: "Pendaftaran Dibuka",
      url: "/pil-sarjana",
    },
    {
      title: "MAGISTER",
      desc: "Program Strata 2 untuk pendalaman keahlian spesifik bagi profesional.",
      total: "15 Program Studi",
      icon: BookOpen,
      accent: "bg-slate-700",
      status: "Pendaftaran Dibuka",
      url: "/pil-magister",
    },
    {
      title: "DOKTOR",
      desc: "Jenjang pendidikan tertinggi Strata 3 fokus pada riset lanjutan.",
      total: "3 Program Studi",
      icon: Atom,
      accent: "bg-amber-500",
      status: "Seleksi Berjalan",
      url: "/pil-doktor",
    },
    {
      title: "PROFESI",
      desc: "Pendidikan lanjutan khusus untuk mendapatkan gelar sertifikasi profesi.",
      total: "8 Program Studi",
      icon: Stethoscope,
      accent: "bg-emerald-500",
      status: "Tersedia",
      url: "/pil-profesi",
    },
    {
      title: "INTERNASIONAL",
      desc: "Program kelas internasional dengan kurikulum dan relasi global.",
      total: "6 International Classes",
      icon: Globe,
      accent: "bg-rose-500",
      status: "Pendaftaran Dibuka",
      url: "#",
    },
    {
      title: "PROGRAM MBKM",
      desc: "Program Merdeka Belajar Kampus Merdeka untuk eksplorasi luar kampus.",
      total: "Berbagai Batch",
      icon: Users,
      accent: "bg-cyan-500",
      status: "Aktif",
      url: "/mbkm",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pb-20">
      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Jenjang Program Studi
                </h1>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Berikut ini adalah pilihan <span className="font-bold text-black/80">Jenjang Program Studi</span> yang tersedia dan.
                Silahkan Klik <span className="font-bold text-black/80">Jenjang</span> untuk memilih program studi dan memilih jalur
                yang tersedia.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Cari program studi..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p, i) => {
            const Icon = p.icon;

            return (
              <div
                onClick={p.url ? () => window.location.href = p.url : undefined}
                key={i}
                className="group relative bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden"
              >
                {/* GLASSMORPHISM ACCENT BORDER */}
                <div className={`absolute top-0 left-0 w-full h-1.5 ${p.accent}`} />

                {/* STATUS BADGE */}
                <div className="absolute top-5 right-5">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 border border-slate-200 shadow-sm transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600">
                    {p.status}
                  </span>
                </div>

                {/* ICON */}
                <div
                  className={`w-14 h-14 rounded-2xl ${p.accent} bg-opacity-10 flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}
                >
                  <Icon className={`w-7 h-7 text-slate-800`} />
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-700 transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed mb-6">{p.desc}</p>

                <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Kapasitas
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{p.total}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[-45deg]">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

                {/* SUBTLE BACKGROUND SHAPE */}
                <div
                  className={`absolute -right-6 -bottom-6 w-32 h-32 ${p.accent} opacity-[0.03] rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* FOOTER INFO (Optional - to fill space) */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="bg-blue-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-2xl shadow-blue-900/20">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Butuh bantuan memilih jurusan?</h2>
            <p className="text-blue-100 text-sm opacity-80">
              Konsultasikan minat dan bakatmu dengan tim akademik kami secara gratis.
            </p>
          </div>
          <button className="relative z-10 mt-6 md:mt-0 px-8 py-4 bg-white text-blue-900 font-bold rounded-2xl hover:bg-blue-50 transition-colors shadow-lg">
            Hubungi Konselor
          </button>
          <School className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" />
        </div>
      </section>
    </main>
  );
}
