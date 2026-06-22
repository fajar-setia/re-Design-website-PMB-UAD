import { useState, useEffect, useRef } from "react";
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
  SearchX,
  Flame,
  Radio,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

import Kampus from "../assets/Kampus-4-Universitas-Ahmad-Dahlan.png";

const STATUS_STYLE: Record<string, string> = {
  "Pendaftaran Dibuka":
    "bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500",
  "Seleksi Berjalan":
    "bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500",
  Tersedia:
    "bg-blue-50 text-blue-700 border-blue-200 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500",
  Aktif:
    "bg-cyan-50 text-cyan-700 border-cyan-200 group-hover:bg-cyan-500 group-hover:text-white group-hover:border-cyan-500",
};

const ICON_COLOR: Record<string, string> = {
  "bg-blue-500": "text-blue-600",
  "bg-slate-700": "text-slate-600",
  "bg-amber-500": "text-amber-500",
  "bg-emerald-500": "text-emerald-600",
  "bg-rose-500": "text-rose-500",
  "bg-cyan-500": "text-cyan-600",
};

const ICON_BG: Record<string, string> = {
  "bg-blue-500": "bg-blue-50",
  "bg-slate-700": "bg-slate-100",
  "bg-amber-500": "bg-amber-50",
  "bg-emerald-500": "bg-emerald-50",
  "bg-rose-500": "bg-rose-50",
  "bg-cyan-500": "bg-cyan-50",
};

export default function PendaftaranProgram() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoggedIn } = useAuth();

  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      heroRef.current.style.opacity = `${1 - progress * 0.6}`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = [
    {
      title: "SARJANA & SARJANA TERAPAN",
      desc: "Program Diploma 4 dan Strata 1 untuk lulusan SMA/SMK/MA sederajat.",
      total: "84 Program Studi",
      icon: GraduationCap,
      accent: "bg-blue-500",
      status: "Pendaftaran Dibuka",
      url: "/pil-sarjana",
      popular: true,
    },
    {
      title: "MAGISTER",
      desc: "Program Strata 2 untuk pendalaman keahlian spesifik bagi profesional.",
      total: "15 Program Studi",
      icon: BookOpen,
      accent: "bg-slate-700",
      status: "Pendaftaran Dibuka",
      url: "/pil-magister",
      popular: false,
    },
    {
      title: "DOKTOR",
      desc: "Jenjang pendidikan tertinggi Strata 3 fokus pada riset lanjutan.",
      total: "3 Program Studi",
      icon: Atom,
      accent: "bg-amber-500",
      status: "Seleksi Berjalan",
      url: "/pil-doktor",
      popular: false,
    },
    {
      title: "PROFESI",
      desc: "Pendidikan lanjutan khusus untuk mendapatkan gelar sertifikasi profesi.",
      total: "8 Program Studi",
      icon: Stethoscope,
      accent: "bg-emerald-500",
      status: "Tersedia",
      url: "/pil-profesi",
      popular: false,
    },
    {
      title: "INTERNASIONAL",
      desc: "Program kelas internasional dengan kurikulum dan relasi global.",
      total: "6 International Classes",
      icon: Globe,
      accent: "bg-rose-500",
      status: "Pendaftaran Dibuka",
      url: "/pil-internasional",
      popular: false,
    },
    {
      title: "PROGRAM MBKM",
      desc: "Program Merdeka Belajar Kampus Merdeka untuk eksplorasi luar kampus.",
      total: "Berbagai Batch",
      icon: Users,
      accent: "bg-cyan-500",
      status: "Aktif",
      url: "/mbkm",
      popular: false,
    },
  ];

  const filtered = programs.filter((p) => {
    if (searchQuery === "") return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.status.toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen bg-[#f0f4fa]">
      {/* ═══════════════════════════════════════
          HERO SECTION — Compact & Rapi
          ═══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative z-0 will-change-transform bg-cover bg-center bg-no-repeat"
        style={{
          transition: "opacity 0.05s linear",
          backgroundImage: `linear-gradient(to bottom, rgba(232, 240, 250, 0.5) 0%, rgba(240, 244, 250, 0.85) 60%, #f0f4fa 100%), url(${Kampus})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* ── KIRI: Headline & Deskripsi ── */}
            <div className="relative pt-4">
              {/* Vertical label */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-2">
                <span
                  className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  PMB · 2025/2026
                </span>
                <div className="w-px h-10 bg-slate-200" />
              </div>

              <h1 className="text-3xl xl:text-[2.6rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-3">
                Satu Pilihan
                <br />
                Hari Ini,{" "}
                <span className="text-blue-900 relative inline-block">
                  Mengubah
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-amber-400 rounded-full" />
                </span>
                <br />
                Seluruh Hidupmu.
              </h1>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-blue-900" />
                <p className="text-sm font-semibold text-slate-500 tracking-wide">
                  Pilih jenjangmu. Tentukan arahmu. Mulai sekarang.
                </p>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-0 max-w-md">
                Kami tahu milih jurusan itu nggak gampang. Tapi kamu nggak harus memutuskan sendiri
                — jelajahi semua jenjang yang tersedia, bandingkan, dan temukan yang paling kamu
                banggakan nanti.
              </p>
            </div>

            {/* ── KANAN: Cards Bertumpuk (Fixed Layout) ── */}
            <div className="relative hidden lg:block h-[330px]">
              {/* Decorative shapes */}
              <div className="absolute right-0 top-0 w-40 h-40 bg-blue-900 rounded-[2rem] opacity-[0.04] rotate-12" />
              <div className="absolute right-8 bottom-4 w-20 h-20 bg-amber-400 rounded-xl opacity-[0.08] -rotate-6" />

              {/* Card 1 — Paling Diminati (atas kanan) */}
              <div className="absolute top-0 right-0 w-64 bg-blue-900 text-white rounded-2xl p-4 shadow-xl shadow-blue-900/20 z-20">
                <div className="flex items-center gap-4 mb-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Paling Diminati
                  </span>
                </div>
                <div className="text-base font-bold mb-1">Sarjana & Sarjana Terapan</div>
                <div className="text-blue-200 text-xs leading-relaxed">
                  84 program studi · Pendaftaran dibuka
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["B", "A", "R", "U"].map((l, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full bg-blue-700 border-2 border-blue-900 flex items-center justify-center text-[10px] font-bold text-blue-200"
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] text-blue-300">+12.000 pendaftar</span>
                </div>
              </div>

              {/* Card 2 — Status Live (tengah kiri) */}
              <div className="absolute top-[120px] left-0 w-56 bg-white border border-slate-100 rounded-2xl p-3.5 shadow-lg shadow-slate-200/50 z-30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="relative">
                    <Radio className="w-4 h-4 text-emerald-500" />
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                    Live · Dibuka
                  </span>
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-0.5">
                  Pendaftaran TA 2025/2026
                </div>
                <div className="text-[11px] text-slate-400">Batas: 31 Agustus 2025</div>
                <div className="mt-2.5 w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "62%" }} />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-slate-400">Kuota terisi</span>
                  <span className="text-[10px] font-semibold text-emerald-600">62%</span>
                </div>
              </div>

              {/* Card 3 — Quote (bawah kanan) */}
              <div className="absolute bottom-0 right-2 w-60 bg-amber-50 border border-amber-100 rounded-2xl p-4 z-10">
                <div className="text-2xl text-amber-300 font-serif leading-none mb-1">"</div>
                <p className="text-sm text-slate-700 font-medium leading-relaxed italic">
                  Pendidikan adalah investasi terbaik yang tidak pernah bisa dicuri dari dirimu.
                </p>
                <div className="mt-2 text-[11px] text-slate-400 font-semibold">— Tim Akademik</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SEARCH BAR — Sticky di atas cards
          ═══════════════════════════════════════ */}
      <section className="sticky top-0 z-40 bg-[#f0f4fa]/90 backdrop-blur-md border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative group flex-1 max-w-xl w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <input
                type="text"
                placeholder="Cari program studi..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-600 transition-all shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <SearchX className="w-4 h-4" />
                </button>
              )}
            </div>
            <p className="text-xs text-slate-400 whitespace-nowrap hidden sm:block">
              💡 Coba: <span className="font-medium text-slate-500">Teknik</span>,{" "}
              <span className="font-medium text-slate-500">Kedokteran</span>,{" "}
              <span className="font-medium text-slate-500">Internasional</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROGRAM GRID
          ═══════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
              <SearchX className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-700 mb-2">Program tidak ditemukan</h3>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              Coba gunakan kata kunci lain.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-5 px-5 py-2 text-sm font-medium text-blue-700 border border-blue-200 rounded-full hover:bg-blue-50 transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => {
              const Icon = p.icon;
              const statusStyle =
                STATUS_STYLE[p.status] ?? "bg-slate-100 text-slate-600 border-slate-200";
              const iconColor = ICON_COLOR[p.accent] ?? "text-slate-700";
              const iconBg = ICON_BG[p.accent] ?? "bg-slate-100";

              return (
                <div
                  onClick={() => {
                    if (!isLoggedIn) {
                      toast.error("Silakan login terlebih dahulu untuk mendaftar");
                      return;
                    }
                    if (p.url) window.location.href = p.url;
                  }}
                  key={i}
                  className="group relative bg-white/70 backdrop-blur-md border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/5 overflow-hidden cursor-pointer"
                >
                  {p.popular && (
                    <div className="absolute top-5 left-7 flex items-center gap-1 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                      <Flame className="w-3 h-3 text-amber-500" />
                      <span className="text-[10px] font-bold text-amber-600">Terpopuler</span>
                    </div>
                  )}

                  <div className={`absolute top-0 left-0 w-full h-1.5 ${p.accent}`} />

                  <div className={`absolute top-5 right-5 ${p.popular ? "hidden" : ""}`}>
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border shadow-sm transition-all duration-200 ${statusStyle}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${p.popular ? "mt-6" : ""}`}
                  >
                    <Icon className={`w-7 h-7 ${iconColor}`} />
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

                  <div
                    className={`absolute -right-6 -bottom-6 w-32 h-32 ${p.accent} opacity-[0.03] rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="max-w-7xl mx-auto px-6 mt-12 pb-12">
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