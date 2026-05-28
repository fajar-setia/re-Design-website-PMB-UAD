import { useNavigate } from "react-router-dom";
import { ChevronRight, Home, Upload, FileText, Image, Award, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";
import { simpanPendaftar } from "../../../data/statistik";

export default function Tahap3() {
  const navigate = useNavigate();

  function handleSelesai() {
    simpanPendaftar({
      nama: "coba",
      email: "atmin@gmail.com",
      prodiPilihan1: "Informatika",
      prodiPilihan2: "Sistem Informasi",
      jurusan: "SMA - IPA",
    });
    toast.success("Pendaftaran berhasil disimpan!");
    navigate("/dashboard");
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 bg-[#f8f9fa] text-[#191c1d]">
      <div className="mb-12">
        <nav aria-label="Breadcrumb" className="flex text-sm text-[#43474f] mb-4">
          <ol className="flex items-center space-x-2">
            <li>
              <a className="text-slate-600 font-semibold flex items-center gap-1" href="#">
                <Home size={14} />
                Home
              </a>
            </li>
            <li>
              <ChevronRight size={14} />
            </li>
            <li>
              <span className="text-slate-600 font-semibold">Tahap 1 Biodata</span>
            </li>
            <li>
              <ChevronRight size={14} />
            </li>
            <li>
              <span className="text-slate-600 font-semibold">Tahap 2 Syarat Jalur</span>
            </li>
            <li>
              <ChevronRight size={14} />
            </li>
            <li>
              <span className="text-blue-800 font-semibold">Tahap 3 Upload Berkas</span>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-[40px] leading-[48px] font-bold text-blue-800 mb-2">
              Form Pendaftaran Online
            </h1>
            <p className="text-[18px] leading-[28px] text-[#43474f] max-w-2xl">
              Lengkapi biodata diri Anda untuk melanjutkan proses seleksi mahasiswa baru Universitas
              Ahmad Dahlan periode 2026/2027.
            </p>
          </div>
          <div className="bg-[#fdc003]/10 px-4 py-2 rounded-lg border border-[#fdc003]/30">
            <span className="text-sm font-semibold text-[#785900]">ID Pendaftaran: 2026-9941</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c3c6d1] sticky top-24">
            <h3 className="text-2xl font-bold text-blue-800 mb-8">Alur Pendaftaran</h3>

            <div className="relative flex flex-col gap-8">
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#c3c6d1]" />

              {/* Step 1 */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-[#43474f]">Langkah Pertama</p>
                  <p className="font-semibold text-blue-800">Biodata</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center text-sm font-bold">
                  ✓
                </div>

                <div>
                  <p className="text-xs text-[#43474f]">Langkah Kedua</p>
                  <p className="font-semibold text-blue-800">Syarat Jalur</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#fdc003] text-[#261a00] flex items-center justify-center font-bold ring-4 ring-yellow-200">
                  3
                </div>

                <div>
                  <p className="text-xs text-[#001e40]">Langkah Ketiga</p>
                  <p className="font-semibold text-blue-800">Upload Berkas</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-yellow-500 text-white">
              <p className="font-semibold mb-2">Peringatan Penting</p>

              <p className="text-sm text-white/80 leading-relaxed">
                Pastikan file yang diupload sesuai dengan dokumen asli. Format file yang
                diterima: PDF, JPG, PNG dengan ukuran maksimal 2MB per file.
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <div className="bg-white rounded-2xl border border-[#c3c6d1] p-8 shadow-sm">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
                FORM PENDAFTARAN ONLINE
              </h1>

              <p className="mt-2 text-sm uppercase tracking-wider text-[#43474f]">
                Jalur BPM - Sains, Seni & Olahraga | Gelombang 1 Tahap 2 | 2026/2027 Semester Gasal
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 bg-[#e7e8e9] rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
                <span className="text-xs font-semibold text-[#43474f] whitespace-nowrap">
                  Langkah 3 dari 3
                </span>
              </div>
            </div>

            <form className="space-y-12">
              {/* Upload Ijazah */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Dokumen Akademik</h2>
                  <p className="text-sm text-[#43474f] mt-1">
                    Unggah dokumen akademik asli (hasil scan/ foto).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-800/10 flex items-center justify-center">
                        <FileText size={20} className="text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#001e40]">Ijazah / STTB</h3>
                        <p className="text-xs text-[#43474f]">Ijazah SMA/SMK/MA sederajat</p>
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-[#c3c6d1] rounded-xl p-6 text-center hover:border-blue-800 transition cursor-pointer">
                      <Upload size={28} className="mx-auto text-[#43474f] mb-2" />
                      <p className="text-sm font-semibold text-[#43474f]">Klik untuk upload</p>
                      <p className="text-xs text-[#43474f]/60 mt-1">PDF / JPG / PNG (max 2MB)</p>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-800/10 flex items-center justify-center">
                        <FileText size={20} className="text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#001e40]">Nilai Rapor</h3>
                        <p className="text-xs text-[#43474f]">Rapor semester 1-5</p>
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-[#c3c6d1] rounded-xl p-6 text-center hover:border-blue-800 transition cursor-pointer">
                      <Upload size={28} className="mx-auto text-[#43474f] mb-2" />
                      <p className="text-sm font-semibold text-[#43474f]">Klik untuk upload</p>
                      <p className="text-xs text-[#43474f]/60 mt-1">PDF / JPG / PNG (max 2MB)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Upload Dokumen Pendukung */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Dokumen Pendukung</h2>
                  <p className="text-sm text-[#43474f] mt-1">
                    Unggah dokumen pendukung sesuai jalur pendaftaran yang dipilih.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-800/10 flex items-center justify-center">
                        <Image size={20} className="text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#001e40]">Pas Foto</h3>
                        <p className="text-xs text-[#43474f]">Ukuran 4x6 background merah</p>
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-[#c3c6d1] rounded-xl p-6 text-center hover:border-blue-800 transition cursor-pointer">
                      <Upload size={28} className="mx-auto text-[#43474f] mb-2" />
                      <p className="text-sm font-semibold text-[#43474f]">Klik untuk upload</p>
                      <p className="text-xs text-[#43474f]/60 mt-1">JPG / PNG (max 2MB)</p>
                    </div>
                  </div>

                  <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-800/10 flex items-center justify-center">
                        <Award size={20} className="text-blue-800" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#001e40]">Sertifikat Prestasi</h3>
                        <p className="text-xs text-[#43474f]">Jika ada (opsional)</p>
                      </div>
                    </div>
                    <div className="border-2 border-dashed border-[#c3c6d1] rounded-xl p-6 text-center hover:border-blue-800 transition cursor-pointer">
                      <Upload size={28} className="mx-auto text-[#43474f] mb-2" />
                      <p className="text-sm font-semibold text-[#43474f]">Klik untuk upload</p>
                      <p className="text-xs text-[#43474f]/60 mt-1">PDF / JPG / PNG (max 2MB)</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Upload Dokumen Jalur */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Dokumen Jalur Pendaftaran</h2>
                  <p className="text-sm text-[#43474f] mt-1">
                    Unggah dokumen sesuai dengan jalur pendaftaran BPM.
                  </p>
                </div>

                <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-800/10 flex items-center justify-center">
                      <FileText size={20} className="text-blue-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#001e40]">Bukti Pembayaran</h3>
                      <p className="text-xs text-[#43474f]">Bukti transfer biaya pendaftaran</p>
                    </div>
                  </div>
                  <div className="border-2 border-dashed border-[#c3c6d1] rounded-xl p-6 text-center hover:border-blue-800 transition cursor-pointer">
                    <Upload size={28} className="mx-auto text-[#43474f] mb-2" />
                    <p className="text-sm font-semibold text-[#43474f]">Klik untuk upload</p>
                    <p className="text-xs text-[#43474f]/60 mt-1">PDF / JPG / PNG (max 2MB)</p>
                  </div>
                </div>
              </section>

              {/* Summary / Pernyataan */}
              <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle size={22} className="text-blue-800 mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-bold text-[#001e40] mb-2">Pernyataan</h3>
                    <p className="text-sm text-[#43474f] leading-relaxed">
                      Dengan ini saya menyatakan bahwa seluruh data dan dokumen yang saya unggah
                      adalah benar dan sah. Saya bertanggung jawab penuh atas kebenaran informasi
                      yang diberikan. Kesalahan data dapat berakibat pada pembatalan status
                      kelulusan.
                    </p>
                    <label className="flex items-center gap-2 mt-4 cursor-pointer">
                      <input
                        type="checkbox"
                        className="text-[#001e40] focus:ring-[#001e40] h-4 w-4 rounded"
                      />
                      <span className="text-sm font-semibold text-[#001e40]">
                        Saya menyetujui pernyataan di atas
                      </span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-[#c3c6d1]">
                <button
                  onClick={() => navigate("/syarat")}
                  type="button"
                  className="px-8 py-3 rounded-full border border-[#001e40] text-[#001e40] font-bold hover:bg-gray-100 transition"
                >
                  Sebelumnya
                </button>

                <button
                  onClick={handleSelesai}
                  type="button"
                  className="px-10 py-3 rounded-full bg-green-600 text-white font-bold hover:bg-green-700 transition shadow-md active:scale-95 flex items-center gap-2"
                >
                  <CheckCircle size={18} />
                  Selesai
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
