import {GraduationCap, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

export default function GetIn() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoggedIn } = useAuth();

  const navigate = useNavigate();

  const sarjanaPrograms = [
    {
      title: "Beasiswa Prodigium Fisika",
      tahun: "2026 Gasal",
      jalur: "Beasiswa Prodigium Fisika",
      gelombang: "GELOMBANG 2",
      tanggal: "22 Apr - 30 Jun 2026",
    },
    {
      title: "Beasiswa Akademik",
      tahun: "2026 Gasal",
      jalur: "Beasiswa Akademik",
      gelombang: "GELOMBANG 2",
      tanggal: "04 Apr - 26 Jun 2026",
    },
    {
      title: "PMDK-Rapor",
      tahun: "2026 Gasal",
      jalur: "PMDK-Rapor",
      gelombang: "GELOMBANG 2",
      tanggal: "04 Apr - 26 Jun 2026",
    },
    {
      title: "Beasiswa Dokter",
      tahun: "2026 Gasal",
      jalur: "Beasiswa Kedokteran",
      gelombang: "GELOMBANG 1",
      tanggal: "01 Apr - 15 Mei 2026",
    },
  ];

  const pascaPrograms = [
    {
      title: "Magister Manajemen",
      tahun: "2026 Gasal",
      jalur: "Reguler S2",
      tahap: "GANJIL",
      tanggal: "17 Apr - 11 Sep 2026",
    },
    {
      title: "Profesi Apoteker",
      tahun: "2026 Gasal",
      jalur: "Internal Alumni",
      tahap: "Tahap 2",
      tanggal: "06 Mei - 20 Mei 2026",
    },
    {
      title: "Magister Teknik",
      tahun: "2026 Gasal",
      jalur: "Reguler S2",
      tahap: "GANJIL",
      tanggal: "12 Mei - 11 Sep 2026",
    },
    {
      title: "Dokter (Spesialis)",
      tahun: "2026 Gasal",
      jalur: "Jalur Khusus",
      tahap: "Tahap 1",
      tanggal: "01 Mei - 30 Jun 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* HERO */}
      <section className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Program Penerimaan Mahasiswa Baru
                </h1>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Berikut ini adalah pilihan Jalur Program{" "}
                <span className="text-[#003366] font-bold ">Sarjana</span> dan{" "}
                <span className="text-[#b08b00] font-bold ">PascaSarjana</span> yang sudah
                dibuka. Klik tombol {" "}
                <span className="font-bold text-black/80">INFO</span> untuk melihat detail jalur, atau klik tombol {" "}
                <span className="font-bold text-black/80">DAFTAR</span> untuk
                mengisi formulir pendaftaran.
              </p>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Cari jalur masuk..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SARJANA */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="mb-8 flex items-center gap-3 border-l-4 border-[#003366] pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900">
            Program Sarjana & Sarjana Terapan
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {sarjanaPrograms.map((item, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="bg-[#003366] p-4 text-white">
                <h3 className="text-sm font-bold">{item.title}</h3>
              </div>

              <div className="flex-grow space-y-3 p-5 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Tahun</span>
                  <span className="font-bold">{item.tahun}</span>
                </div>

                <div className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Jalur</span>
                  <span className="text-right font-bold">{item.jalur}</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Gelombang</span>
                  <span className="font-bold">{item.gelombang}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Pendaftaran</span>
                  <span className="text-right font-bold text-[#003366]">{item.tanggal}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4">
                <button className="rounded-lg border border-gray-200 bg-white py-2 text-xs font-bold uppercase text-gray-700 transition hover:bg-gray-100">
                  Info
                </button>

                <button 
                  className="rounded-lg bg-[#003366] py-2 text-xs font-bold uppercase text-white transition hover:opacity-90"
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
      </section>

      {/* PASCASARJANA */}
      <section className="max-w-7xl mx-auto px-6 mt-10">
        <div className="mb-8 flex items-center gap-3 border-l-4 border-[#b08b00] pl-4">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-gray-900">
            Program Pascasarjana & Profesi
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {pascaPrograms.map((item, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="bg-[#b08b00] p-4 text-white">
                <h3 className="text-sm font-bold">{item.title}</h3>
              </div>

              <div className="flex-grow space-y-3 p-5 text-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Tahun</span>
                  <span className="font-bold">{item.tahun}</span>
                </div>

                <div className="flex justify-between gap-3 border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Jalur</span>
                  <span className="text-right font-bold">{item.jalur}</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Tahap</span>
                  <span className="font-bold">{item.tahap}</span>
                </div>

                <div className="flex justify-between gap-3">
                  <span className="text-gray-500">Pendaftaran</span>
                  <span className="text-right font-bold text-[#b08b00]">{item.tanggal}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-4">
                <button className="rounded-lg border border-gray-200 bg-white py-2 text-xs font-bold uppercase text-gray-700 transition hover:bg-gray-100">
                  Info
                </button>

                <button 
                  className="rounded-lg bg-[#b08b00] py-2 text-xs font-bold uppercase text-white transition hover:opacity-90"
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
      </section>

      {/* SUPPORT */}
      <section className="rounded-3xl bg-gray-100 p-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm">
              <svg
                className="h-7 w-7 text-[#b08b00]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900">Butuh Bantuan Memilih?</h4>

              <p className="text-sm text-gray-600">
                Tim Admisi kami siap membantu menjawab pertanyaan Anda seputar program studi.
              </p>
            </div>
          </div>

          <button className="whitespace-nowrap rounded-lg border border-gray-200 bg-white px-8 py-3 font-bold text-gray-800 shadow-sm transition hover:shadow">
            Hubungi Support
          </button>
        </div>
      </section>
    </main>
  );
}
