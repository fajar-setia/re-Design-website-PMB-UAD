import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import Kampus from "../../assets/Kampus-4-Universitas-Ahmad-Dahlan.png";
import { getPendaftar } from "../../data/statistik";
import { useState, useEffect } from "react";

/* ============================================================
   TIPE PENDAFTAR (sama dengan statistik.ts)
   ============================================================ */
interface Pendaftar {
  id: string;
  noPendaftaran: string;
  nama: string;
  email: string;
  jalur: string;
  tahunAkademik: string;
  gelombang: string;
  tahap: string;
  prodiPilihan1: string;
  prodiPilihan2: string;
  jurusan: string;
  tanggalDaftar: string;
  daftar: boolean;
  tahap1: boolean;
  tahap2: boolean;
  tahap3: boolean;
}

/* ============================================================
   AMBIL STATUS BERKAS DARI LOCALSTORAGE (dari halaman Upload)
   ============================================================ */
interface BerkasStatus {
  id: string;
  nama: string;
  status: "belum" | "terupload" | "terverifikasi" | "ditolak";
  fileName: string | null;
}

function getBerkasStatus(): BerkasStatus[] {
  const stored = localStorage.getItem("pmb_berkas_upload");
  if (stored) {
    try {
      return JSON.parse(stored) as BerkasStatus[];
    } catch {
      return [];
    }
  }
  return [];
}

function getBerkasSubmitted(): boolean {
  return localStorage.getItem("pmb_berkas_submitted") === "true";
}

export default function Dashboard() {
  const navigate = useNavigate();

  /* ── State untuk re-render saat localStorage berubah ── */
  const [pendaftarList, setPendaftarList] = useState<Pendaftar[]>([]);
  const [berkasList, setBerkasList] = useState<BerkasStatus[]>([]);
  const [berkasSubmitted, setBerkasSubmitted] = useState(false);

  /* ── Load data saat mount & listen storage changes ── */
  useEffect(() => {
    const loadData = () => {
      setPendaftarList(getPendaftar());
      setBerkasList(getBerkasStatus());
      setBerkasSubmitted(getBerkasSubmitted());
    };

    loadData();

    // Listen perubahan localStorage dari tab lain (termasuk halaman Upload)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === "statistik_pendaftar" || e.key === "pmb_berkas_upload" || e.key === "pmb_berkas_submitted") {
        loadData();
      }
    };
    window.addEventListener("storage", handleStorage);

    // Poll setiap 1 detik untuk perubahan dari tab yang sama
    const interval = setInterval(loadData, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  /* ── Hitung progress berkas ── */
  const totalBerkas = berkasList.length;
  const berkasTerverifikasi = berkasList.filter((b) => b.status === "terverifikasi").length;
  const berkasDitolak = berkasList.filter((b) => b.status === "ditolak").length;
  const berkasProgress = totalBerkas > 0 ? Math.round((berkasTerverifikasi / totalBerkas) * 100) : 0;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* HEADER */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">PMB Online</h1>
          <p className="text-slate-500 text-lg">Data Pendaftar Mahasiswa Baru UAD</p>
        </div>
        <div className="flex items-center gap-2 bg-yellow-400/20 text-yellow-700 px-4 py-2 rounded-full w-fit font-semibold">
          <span>👤</span>
          DATA SAYA
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">
          {/* MAIN CARD */}
          <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            {/* TITLE */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
                📝
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Data Pendaftaran</h2>
                <p className="text-slate-500 text-sm">Lengkapi formulir PMB Anda</p>
              </div>
            </div>

            {/* INFO */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8">
              <p className="text-slate-700 leading-relaxed mb-4">
                Selamat datang Dahlan Muda 👋 Silakan lanjut melengkapi formulir pendaftaran untuk
                melanjutkan proses PMB Universitas Ahmad Dahlan.
              </p>
              <div className="bg-white rounded-xl border border-blue-100 p-4 text-sm text-slate-600">
                Klik tombol <span className="font-bold text-blue-900">Isi Formulir</span> untuk
                mulai mengisi data pendaftaran Anda.
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={() => navigate("/pendaftaran")}
                className="h-14 px-8 rounded-2xl bg-blue-900 text-white font-bold hover:bg-blue-800 active:scale-95 transition-all"
              >
                ISI FORMULIR
              </button>
              <p className="text-sm text-slate-500">*Pastikan semua data sudah benar.</p>
            </div>
          </section>

          {/* SMALL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* CARD 1: Verifikasi Berkas — UPDATE dengan status berkas */}
            <div className="bg-blue-900 text-white rounded-3xl p-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-2xl">
                ✅
              </div>
              <h3 className="font-bold text-lg mb-2">Verifikasi Berkas</h3>
              <p className="text-sm text-blue-100 leading-relaxed mb-4">
                Proses validasi dokumen membutuhkan waktu 2–3 hari kerja.
              </p>

              {/* ── STATUS BERKAS DARI UPLOAD ── */}
              {berkasList.length > 0 ? (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Progress Verifikasi:</span>
                    <span className="font-bold">{berkasTerverifikasi}/{totalBerkas} terverifikasi</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-green-400 transition-all duration-500"
                      style={{ width: `${berkasProgress}%` }}
                    />
                  </div>
                  {berkasDitolak > 0 && (
                    <p className="text-xs text-red-300 flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" />
                      {berkasDitolak} berkas perlu diperbaiki
                    </p>
                  )}
                  {berkasSubmitted && berkasTerverifikasi === totalBerkas && (
                    <p className="text-xs text-green-300 flex items-center gap-1">
                      ✅ Semua berkas terverifikasi!
                    </p>
                  )}
                  <button
                    onClick={() => navigate("/upload")}
                    className="mt-2 w-full rounded-xl bg-white/10 py-2 text-sm font-semibold hover:bg-white/20 transition"
                  >
                    {berkasSubmitted ? "Lihat Status Berkas →" : "Upload / Perbaiki Berkas →"}
                  </button>
                </div>
              ) : (
                <div className="rounded-xl bg-white/10 p-4 text-center">
                  <p className="text-sm text-blue-200 mb-2">Belum ada berkas diupload</p>
                  <button
                    onClick={() => navigate("/upload")}
                    className="text-sm font-bold text-yellow-300 hover:text-yellow-200 transition"
                  >
                    Upload Berkas Sekarang →
                  </button>
                </div>
              )}
            </div>

            {/* CARD 2 */}
            <div className="bg-yellow-400 text-black rounded-3xl p-6">
              <div className="w-12 h-12 rounded-2xl bg-black/10 flex items-center justify-center mb-4 text-2xl">
                💬
              </div>
              <h3 className="font-bold text-lg mb-2">Butuh Bantuan?</h3>
              <p className="text-sm leading-relaxed">
                Hubungi helpdesk PMB untuk bantuan teknis maupun informasi pendaftaran.
              </p>
            </div>
          </div>

          {/* STATISTIK PENDAFTAR */}
          <section className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl">
                📊
              </div>
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Statistik Pendaftaran</h2>
                <p className="text-slate-500 text-sm">Data pendaftar yang telah mengisi formulir</p>
              </div>
            </div>

            {pendaftarList.length === 0 ? (
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center">
                <p className="text-slate-500">Belum ada data pendaftaran.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendaftarList.map((p) => {
                  const tglDaftar = new Date(p.tanggalDaftar);
                  const tglFormatted = tglDaftar.toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });

                  const steps = [
                    { label: "DAFTAR", selesai: true },
                    { label: "VERIFIKASI", selesai: p.tahap1 },
                    { label: "YUDISIUM", selesai: p.tahap2 },
                    { label: "REGISTRASI", selesai: p.tahap3 },
                  ];
                  const semuaSelesai = steps.every((s) => s.selesai);
                  const firstIncompleteIdx = steps.findIndex((s) => !s.selesai);
                  const completedCount = steps.filter((s) => s.selesai).length;
                  const progressPct = (completedCount / steps.length) * 100;

                  const warnings = [
                    null,
                    {
                      bg: "bg-[#E3F2FD]",
                      border: "border-[#90CAF9]",
                      iconBg: "bg-[#1E88E5]",
                      iconColor: "text-[#0D47A1]",
                      titleColor: "text-[#1565C0]",
                      subtitle: "Dokumen Anda belum diverifikasi.",
                      desc: "Silahkan upload berkas persyaratan yang diperlukan untuk melanjutkan proses seleksi. Pastikan semua dokumen telah lengkap dan sesuai dengan ketentuan yang berlaku.",
                    },
                    {
                      bg: "bg-[#F3E5F5]",
                      border: "border-[#CE93D8]",
                      iconBg: "bg-[#8E24AA]",
                      iconColor: "text-[#4A148C]",
                      titleColor: "text-[#6A1B9A]",
                      subtitle: "Proses yudisium belum dilakukan.",
                      desc: "Silahkan menunggu pengumuman jadwal yudisium atau hubungi bagian akademik untuk informasi lebih lanjut mengenai jadwal dan persyaratan yudisium.",
                    },
                    {
                      bg: "bg-[#E0F2F1]",
                      border: "border-[#80CBC4]",
                      iconBg: "bg-[#00897B]",
                      iconColor: "text-[#004D40]",
                      titleColor: "text-[#00695C]",
                      subtitle: "Registrasi ulang belum dilakukan.",
                      desc: "Silahkan lakukan pembayaran registrasi untuk menyelesaikan proses pendaftaran. Klik tombol Cetak untuk melihat instruksi pembayaran.",
                    },
                  ];
                  const warning = firstIncompleteIdx > 0 ? warnings[firstIncompleteIdx] : null;

                  function circleClass(i: number) {
                    if (steps[i].selesai)
                      return "w-12 h-12 rounded-full bg-[#fdc003] border-4 border-white flex items-center justify-center font-bold text-[#261a00] shadow-md";
                    if (i === firstIncompleteIdx)
                      return "w-12 h-12 rounded-full bg-[#e1e3e4] border-4 border-white flex items-center justify-center font-bold text-[#43474f] ring-4 ring-yellow-200/60";
                    return "w-12 h-12 rounded-full bg-[#e1e3e4] border-4 border-white flex items-center justify-center font-bold text-[#43474f] opacity-40";
                  }

                  return (
                    <div
                      key={p.id}
                      className="rounded-2xl border border-[#c3c6d1] overflow-hidden shadow-sm"
                    >
                      {/* Card Header */}
                      <div className="bg-[#003366] px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <p className="text-sm text-[#799dd6] font-medium">No. Pendaftaran</p>
                          <h2 className="text-2xl font-bold text-white">
                            #{p.noPendaftaran} - {p.jalur || "—"}
                          </h2>
                        </div>
                        <span
                          className={
                            semuaSelesai
                              ? "bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold w-fit"
                              : "bg-[#ffdad6] text-[#93000a] px-4 py-2 rounded-full text-sm font-bold w-fit"
                          }
                        >
                          {semuaSelesai ? "TERVERIFIKASI" : "BELUM DIVERIFIKASI"}
                        </span>
                      </div>

                      {/* Warning per-step */}
                      {warning && (
                        <div className="px-8 pt-8">
                          <div
                            className={`${warning.bg} ${warning.border} rounded-2xl p-6 flex gap-4 items-start border`}
                          >
                            <div
                              className={`w-12 h-12 rounded-xl ${warning.iconBg} flex items-center justify-center shrink-0`}
                            >
                              <AlertTriangle className={`w-6 h-6 ${warning.iconColor}`} />
                            </div>
                            <div className="space-y-2">
                              <h3 className={`text-lg font-bold ${warning.titleColor}`}>
                                PENTING!!
                              </h3>
                              <p className="text-[#ba1a1a] font-semibold">{warning.subtitle}</p>
                              <p className="text-sm text-[#43474f] leading-relaxed">
                                {warning.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Stepper */}
                      <div className="px-8 py-10 border-b border-[#c3c6d1]">
                        <div className="relative flex justify-between max-w-4xl mx-auto">
                          <div className="absolute top-6 left-0 w-full h-[2px] bg-[#c3c6d1]" />
                          <div
                            className="absolute top-6 left-0 h-[2px] bg-[#fdc003] transition-all"
                            style={{ width: `${progressPct}%` }}
                          />
                          {steps.map((step, i) => (
                            <div
                              key={step.label}
                              className="relative z-10 flex flex-col items-center gap-3"
                            >
                              <div className={circleClass(i)}>{i + 1}</div>
                              <div className="text-center">
                                <p
                                  className={
                                    step.selesai
                                      ? "text-sm font-bold text-[#001e40]"
                                      : "text-sm font-bold text-[#43474f]"
                                  }
                                >
                                  {step.label}
                                </p>
                                <p
                                  className={
                                    step.selesai
                                      ? "text-xs text-[#43474f]"
                                      : "text-xs text-[#737780]"
                                  }
                                >
                                  {step.selesai ? tglFormatted : "Belum"}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Detail */}
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-[#001e40]">Detail Pendaftaran</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                          <div className="space-y-4">
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">No. Pendaftaran</span>
                              <span className="text-sm font-bold">{p.noPendaftaran}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Jalur</span>
                              <span className="text-sm font-bold">{p.jalur || "—"}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Nama</span>
                              <span className="text-sm font-bold">{p.nama}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Tahun Akademik</span>
                              <span className="text-sm font-bold">{p.tahunAkademik || "—"}</span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Gelombang</span>
                              <span className="text-sm font-bold">{p.gelombang || "—"}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Tahap</span>
                              <span className="text-sm font-bold">{p.tahap || "—"}</span>
                            </div>
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Program Studi 1</span>
                              <span className="text-sm font-bold text-[#001e40]">
                                {p.prodiPilihan1}
                              </span>
                            </div>
                            <div className="flex justify-between border-b border-[#c3c6d1] pb-3">
                              <span className="text-sm text-[#43474f]">Program Studi 2</span>
                              <span className="text-sm font-bold text-[#001e40]">
                                {p.prodiPilihan2}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ── ACTION BUTTONS ── */}
                      <div className="p-4 flex flex-wrap justify-end gap-2">
                        <button className="px-6 py-3 text-sm rounded-xl border border-[#737780] bg-white hover:bg-gray-100 transition font-semibold">
                          Edit Data
                        </button>

                        <button
                          onClick={() => navigate("/upload")}
                          className={`px-6 py-3 text-sm rounded-xl font-semibold transition ${
                            p.tahap1
                              ? "bg-green-100 text-green-700 border border-green-300 hover:bg-green-200"
                              : "bg-[#fdc003] text-[#261a00] hover:opacity-90"
                          }`}
                        >
                          {p.tahap1 ? "✅ Berkas Terkirim" : "Upload Berkas"}
                        </button>

                        <button className="px-6 py-3 text-sm rounded-xl bg-[#001e40] text-white hover:opacity-90 transition font-semibold">
                          Tahap Selanjutnya
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 space-y-6">
          {/* PROGRESS */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-blue-900 mb-8">Progress Pendaftaran</h3>
            <div className="space-y-8">
              {/* STEP 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div className="w-[2px] h-14 bg-slate-200 mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Account Created</h4>
                  <p className="text-sm text-slate-500">Akun berhasil dibuat</p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold">
                    02
                  </div>
                  <div className="w-[2px] h-14 bg-slate-200 mt-2" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-900">Registration Form</h4>
                  <p className="text-sm text-slate-500">Sedang mengisi formulir</p>
                </div>
              </div>

              {/* STEP 3: Upload Berkas — dinamis berdasarkan tahap1 */}
              {pendaftarList.length > 0 && pendaftarList[pendaftarList.length - 1].tahap1 ? (
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div className="w-[2px] h-14 bg-slate-200 mt-2" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-700">Upload Berkas</h4>
                    <p className="text-sm text-green-600">Berkas telah dikirim</p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-4 opacity-50">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold">
                      03
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-500">Upload Berkas</h4>
                    <p className="text-sm text-slate-400">Upload dokumen persyaratan</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* NEWS CARD */}
          <div className="relative overflow-hidden rounded-3xl h-[320px] shadow-xl">
            <img
              src={Kampus}
              alt="Campus"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="absolute bottom-0 p-6 text-white">
              <p className="text-sm text-yellow-300 mb-2 font-semibold">CAMPUS NEWS</p>
              <h3 className="text-2xl font-bold mb-3 leading-tight">
                Why Join Ahmad Dahlan University?
              </h3>
              <button className="mt-2 text-sm font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}