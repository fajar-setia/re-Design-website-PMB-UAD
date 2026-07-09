import { GraduationCap, Search, Clock, Users, ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

// 1. Definisikan Interface untuk Type Safety yang jelas
interface BaseProgram {
  title: string;
  tahun: string;
  jalur: string;
  tanggal: string;
  badge: string;
  badgeColor: string;
}

interface SarjanaProgram extends BaseProgram {
  gelombang: string;
}

interface PascaProgram extends BaseProgram {
  tahap: string;
}

export default function GetIn() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("semua");
  
  // Menggunakan 'scrolled' untuk mengubah background atau shadow header/section jika diinginkan
  const [scrolled, setScrolled] = useState(false);
  
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  /* ── Scroll detection untuk efek ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Stats animasi ── */


  const sarjanaPrograms: SarjanaProgram[] = [
    {
      title: "Beasiswa Prodigium Fisika",
      tahun: "2026 Gasal",
      jalur: "Beasiswa Prodigium Fisika",
      gelombang: "GELOMBANG 2",
      tanggal: "22 Apr - 30 Jun 2026",
      badge: "Beasiswa",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      title: "Beasiswa Akademik",
      tahun: "2026 Gasal",
      jalur: "Beasiswa Akademik",
      gelombang: "GELOMBANG 2",
      tanggal: "04 Apr - 26 Jun 2026",
      badge: "Beasiswa",
      badgeColor: "bg-purple-100 text-purple-700",
    },
    {
      title: "PMDK-Rapor",
      tahun: "2026 Gasal",
      jalur: "PMDK-Rapor",
      gelombang: "GELOMBANG 2",
      tanggal: "04 Apr - 26 Jun 2026",
      badge: "Prestasi",
      badgeColor: "bg-amber-100 text-amber-700",
    },
    {
      title: "Beasiswa Dokter",
      tahun: "2026 Gasal",
      jalur: "Beasiswa Kedokteran",
      gelombang: "GELOMBANG 1",
      tanggal: "01 Apr - 15 Mei 2026",
      badge: "Kedokteran",
      badgeColor: "bg-red-100 text-red-700",
    },
  ];

  const pascaPrograms: PascaProgram[] = [
    {
      title: "Magister Manajemen",
      tahun: "2026 Gasal",
      jalur: "Reguler S2",
      tahap: "GANJIL",
      tanggal: "17 Apr - 11 Sep 2026",
      badge: "S2",
      badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Profesi Apoteker",
      tahun: "2026 Gasal",
      jalur: "Internal Alumni",
      tahap: "Tahap 2",
      tanggal: "06 Mei - 20 Mei 2026",
      badge: "Profesi",
      badgeColor: "bg-teal-100 text-teal-700",
    },
    {
      title: "Magister Teknik",
      tahun: "2026 Gasal",
      jalur: "Reguler S2",
      tahap: "GANJIL",
      tanggal: "12 Mei - 11 Sep 2026",
      badge: "S2",
      badgeColor: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Dokter (Spesialis)",
      tahun: "2026 Gasal",
      jalur: "Jalur Khusus",
      tahap: "Tahap 1",
      tanggal: "01 Mei - 30 Jun 2026",
      badge: "Spesialis",
      badgeColor: "bg-rose-100 text-rose-700",
    },
  ];

  // 2. Gunakan Generic <T> pada fungsi filter agar fleksibel untuk tipe data apa saja yang punya properti base
  const filterPrograms = <T extends BaseProgram>(programs: T[]): T[] => {
    if (!searchQuery) return programs;
    return programs.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.jalur.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredSarjana = filterPrograms(sarjanaPrograms);
  const filteredPasca = filterPrograms(pascaPrograms);

  return (
    // 3. Memanfaatkan state `scrolled` di className (misal: menambahkan bayangan/efek transisi saat di-scroll)
    <main className={`min-h-screen bg-slate-50 transition-all duration-300 ${scrolled ? "shadow-inner" : ""}`}>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-blue-800">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-400/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

        {/* Padding vertikal diperkecil: pt-8 pb-12 (lg:pt-12 lg:pb-16) */}
        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-12 lg:pt-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* LEFT: Text Content (space-y dikurangi dari 8 menjadi 5) */}
            <div className="space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs text-blue-100">
                <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
                <span>Penerimaan Mahasiswa Baru 2026</span>
              </div>

              {/* Headline (Ukuran font diperkecil sedikit agar lebih rapat) */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Pilih{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                    Jalur Masuk
                  </span>{" "}
                  Terbaikmu
                </h1>
                <p className="text-base text-blue-100/80 leading-relaxed max-w-lg">
                  Temukan program <span className="text-white font-semibold">Sarjana</span> dan{" "}
                  <span className="text-white font-semibold">Pascasarjana</span> di Universitas
                  Ahmad Dahlan yang sesuai dengan passion dan cita-citamu.
                </p>
              </div>

              {/* Search & Filter (space-y dikurangi dari 4 menjadi 3) */}
              <div className="space-y-3">
                <div className="relative max-w-xl">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari program studi atau jalur masuk..."
                    className="w-full pl-11 pr-5 py-3 bg-white/95 backdrop-blur-sm rounded-xl text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-yellow-400/30 focus:bg-white transition-all shadow-xl shadow-black/10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { id: "semua", label: "Semua Program" },
                    { id: "sarjana", label: "Sarjana" },
                    { id: "pasca", label: "Pascasarjana" },
                    { id: "beasiswa", label: "Beasiswa" },
                  ].map((chip) => (
                    <button
                      key={chip.id}
                      onClick={() => setActiveFilter(chip.id)}
                      className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        activeFilter === chip.id
                          ? "bg-yellow-400 text-[#003366] shadow-md shadow-yellow-400/20"
                          : "bg-white/10 text-blue-100 border border-white/20 hover:bg-white/20"
                      }`}
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    document.getElementById("program-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-bold text-[#003366] shadow-md shadow-yellow-400/25 hover:bg-yellow-300 hover:-translate-y-0.5 transition-all"
                >
                  Lihat Semua Jalur
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all">
                  Panduan Pendaftaran
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* RIGHT: Glassmorphism Cards (Ketinggian elemen diatur ulang & diperkecil) */}
            <div className="relative hidden lg:block h-72">
              {/* Floating Card 1 — Countdown */}
              <div className="absolute top-0 right-4 w-56 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <Clock className="h-4 w-4 text-red-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-blue-200 font-medium">Deadline Terdekat</p>
                    <p className="text-xs font-bold text-white">Gelombang 2</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1.5 text-center">
                  <div className="bg-white/10 rounded-lg py-1">
                    <p className="text-sm font-bold text-white">12</p>
                    <p className="text-[9px] text-blue-200">Hari</p>
                  </div>
                  <div className="bg-white/10 rounded-lg py-1">
                    <p className="text-sm font-bold text-white">08</p>
                    <p className="text-[9px] text-blue-200">Jam</p>
                  </div>
                  <div className="bg-white/10 rounded-lg py-1">
                    <p className="text-sm font-bold text-white">45</p>
                    <p className="text-[9px] text-blue-200">Menit</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 — Stats */}
              <div className="absolute top-20 -left-2 w-48 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <Users className="h-4 w-4 text-green-300" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">1,240</p>
                    <p className="text-[10px] text-blue-200">Pendaftar Aktif</p>
                  </div>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-green-300 rounded-full" />
                </div>
              </div>

              {/* Floating Card 3 — Program */}
              <div className="absolute bottom-2 right-2 w-52 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">42+ Program</p>
                    <p className="text-[10px] text-blue-200">Studi Tersedia</p>
                  </div>
                </div>
                <div className="flex -space-x-1.5">
                  {["bg-blue-400", "bg-purple-400", "bg-pink-400", "bg-green-400"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full ${color} border-2 border-[#003366] flex items-center justify-center text-[8px] font-bold text-white`}
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    )
                  )}
                  <div className="w-6 h-6 rounded-full bg-white/20 border-2 border-[#003366] flex items-center justify-center text-[8px] font-bold text-white">
                    +38
                  </div>
                </div>
              </div>

              {/* Center Decorative Element */}
              <div className="flex items-center justify-center h-full pt-4">
                <div className="relative">
                  <div className="w-36 h-36 rounded-full border-2 border-white/10 animate-spin-slow" />
                  <div className="absolute inset-0 w-36 h-36 rounded-full border-2 border-dashed border-yellow-400/30 animate-spin-reverse" />
                  <div className="absolute inset-6 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400/20 to-blue-400/20 backdrop-blur-sm flex items-center justify-center">
                    <GraduationCap className="h-10 w-10 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
          <svg 
            viewBox="0 0 1440 74" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            className="relative block w-full h-[40px] lg:h-[60px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32 C240,70 480,70 720,32 C960,-6 1200,-6 1440,32 L1440,74 L0,74 Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* PROGRAM SARJANA */}
      <section id="program-section" className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex items-center gap-3 border-l-4 border-blue-800 pl-4">
            <div className="w-10 h-10 rounded-xl bg-blue-800 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900">
                Program Sarjana & Sarjana Terapan
              </h2>
              <p className="text-sm text-slate-600 mt-1">Jalur masuk untuk jenjang S1 dan D4</p>
            </div>
          </div>
          <span className="text-sm text-slate-400 font-medium">{filteredSarjana.length} program tersedia</span>
        </div>

        {filteredSarjana.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Tidak ada program yang cocok dengan pencarian</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredSarjana.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-200"
              >
                <div className="bg-blue-800 p-4 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative flex items-start justify-between">
                    <h3 className="text-sm font-bold pr-8">{item.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-3 p-5 text-xs">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Tahun</span>
                    <span className="font-bold text-slate-700">{item.tahun}</span>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Jalur</span>
                    <span className="text-right font-bold text-slate-700">{item.jalur}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Gelombang</span>
                    {/* TypeScript tahu 'item' di sini adalah SarjanaProgram yang punya properti gelombang */}
                    <span className="font-bold text-[#003366]">{item.gelombang}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-500">Pendaftaran</span>
                    <span className="text-right font-bold text-[#003366]">{item.tanggal}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4">
                  <button className="rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-bold uppercase text-gray-700 transition hover:bg-gray-100 hover:border-gray-300">
                    Info
                  </button>
                  <button
                    className="rounded-xl bg-blue-800 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-blue-600 shadow-md shadow-blue-900/10"
                    onClick={() => {
                      if (!isLoggedIn) {
                        toast.error("Silakan login terlebih dahulu untuk mendaftar");
                        return;
                      }
                      navigate("/form-pendaftaran");
                    }}
                  >
                    Daftar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* PROGRAM PASCASARJANA */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex items-center gap-3 border-l-4 border-yellow-500 pl-4">
            <div className="w-10 h-10 rounded-xl bg-yellow-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wide text-gray-900">
                Program Pascasarjana & Profesi
              </h2>
              <p className="text-sm text-slate-600 mt-1">Jalur masuk untuk jenjang S2, S3, dan Profesi</p>
            </div>
          </div>
          <span className="text-sm text-slate-400 font-medium">{filteredPasca.length} program tersedia</span>
        </div>

        {filteredPasca.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
            <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Tidak ada program yang cocok dengan pencarian</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {filteredPasca.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200"
              >
                <div className="bg-yellow-500 p-4 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative flex items-start justify-between">
                    <h3 className="text-sm font-bold pr-8">{item.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-3 p-5 text-xs">
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Tahun</span>
                    <span className="font-bold text-slate-700">{item.tahun}</span>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Jalur</span>
                    <span className="text-right font-bold text-slate-700">{item.jalur}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-gray-500">Tahap</span>
                    {/* TypeScript tahu 'item' di sini adalah PascaProgram yang punya properti tahap */}
                    <span className="font-bold text-[#b08b00]">{item.tahap}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-gray-500">Pendaftaran</span>
                    <span className="text-right font-bold text-[#b08b00]">{item.tanggal}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4">
                  <button className="rounded-xl border border-gray-200 bg-white py-2.5 text-xs font-bold uppercase text-gray-700 transition hover:bg-gray-100 hover:border-gray-300">
                    Info
                  </button>
                  <button
                    className="rounded-xl bg-yellow-500 py-2.5 text-xs font-bold uppercase text-white transition hover:bg-yellow-600 shadow-md shadow-yellow-900/10"
                    onClick={() => {
                      if (!isLoggedIn) {
                        toast.error("Silakan login terlebih dahulu untuk mendaftar");
                        return;
                      }
                      navigate("/form-pendaftaran");
                    }}
                  >
                    Daftar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* SUPPORT SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-[#003366] to-blue-800 p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                <svg className="h-8 w-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">Butuh Bantuan Memilih?</h4>
                <p className="text-sm text-blue-200 mt-1">
                  Tim Admisi kami siap membantu menjawab pertanyaan Anda seputar program studi.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 font-bold text-white hover:bg-white/20 transition-all hover:-translate-y-0.5">
              Hubungi Support
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}