import { useNavigate } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function SyaratJalur() {
  const navigate = useNavigate();
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
              <span className="text-blue-800 font-semibold">Tahap 2 Syarat Jalur</span>
            </li>
            <li>
              <ChevronRight size={14} />
            </li>
            <li>
              <span className="text-slate-600 font-semibold">Tahap 3 Upload Berkas</span>
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
                <div className="w-8 h-8 rounded-full bg-[#fdc003] text-[#261a00] flex items-center justify-center font-bold ring-4 ring-yellow-200">
                  2
                </div>

                <div>
                  <p className="text-xs text-[#001e40]">Langkah Kedua</p>
                  <p className="font-semibold text-blue-800">Syarat Jalur</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 relative z-10 opacity-50">
                <div className="w-8 h-8 rounded-full bg-[#e1e3e4] flex items-center justify-center font-bold text-[#43474f]">
                  3
                </div>

                <div>
                  <p className="text-xs text-[#43474f]">Langkah Ketiga</p>
                  <p className="font-semibold">Upload Berkas</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 rounded-xl bg-yellow-500 text-white">
              <p className="font-semibold mb-2">Peringatan Penting</p>

              <p className="text-sm text-white/80 leading-relaxed">
                Pastikan nilai yang diinput sesuai dengan rapor asli. Kesalahan input dapat
                membatalkan status kelulusan seleksi berkas.
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
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "66%" }}></div>
                </div>
                <span className="text-xs font-semibold text-[#43474f] whitespace-nowrap">
                  Langkah 2 dari 3
                </span>
              </div>
            </div>

            <form className="space-y-12">
              {/* Jurusan */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Jurusan SMA</h2>
                </div>

                <div className="max-w-md">
                  <label className="block mb-2 text-sm font-semibold text-[#43474f]">
                    Pilih Jurusan Sekolah Menengah
                  </label>

                  <select className="w-full h-12 px-4 rounded-xl border border-[#c3c6d1] focus:outline-none focus:ring-2 focus:ring-[#001e40]">
                    <option>Pilih Jurusan</option>
                    <option>SMA - IPA</option>
                    <option>SMA - IPS</option>
                    <option>SMK</option>
                    <option>MA</option>
                  </select>
                </div>
              </section>

              {/* Nilai */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Nilai Mata Pelajaran</h2>

                  <p className="text-sm text-[#43474f] mt-1">
                    Inputkan nilai kognitif semester 1 & 2 kelas XI
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Card */}
                  <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-[#001e40] mb-5">Umum</h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-medium">Matematika</span>

                        <input
                          type="number"
                          placeholder="Smt 1"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />

                        <input
                          type="number"
                          placeholder="Smt 2"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-medium">Bahasa Inggris</span>

                        <input
                          type="number"
                          placeholder="Smt 1"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />

                        <input
                          type="number"
                          placeholder="Smt 2"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-medium">Bhs Indonesia</span>

                        <input
                          type="number"
                          placeholder="Smt 1"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />

                        <input
                          type="number"
                          placeholder="Smt 2"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-[#f8f9fa] border border-[#c3c6d1] rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-[#001e40] mb-5">Saintek</h3>

                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-medium">Biologi</span>

                        <input
                          type="number"
                          placeholder="Smt 1"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />

                        <input
                          type="number"
                          placeholder="Smt 2"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-medium">Kimia</span>

                        <input
                          type="number"
                          placeholder="Smt 1"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />

                        <input
                          type="number"
                          placeholder="Smt 2"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4 items-center">
                        <span className="font-medium">Fisika</span>

                        <input
                          type="number"
                          placeholder="Smt 1"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />

                        <input
                          type="number"
                          placeholder="Smt 2"
                          className="border border-[#c3c6d1] rounded-lg px-3 py-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Prestasi */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Prestasi</h2>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#c3c6d1]">
                  <table className="w-full border-collapse">
                    <thead className="bg-[#e7e8e9]">
                      <tr>
                        <th className="p-4 text-left">Bidang</th>
                        <th className="p-4 text-left">Nama Kejuaraan</th>
                        <th className="p-4 text-left">Tingkat</th>
                        <th className="p-4 text-left">Prestasi</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-[#c3c6d1]">
                        <td className="p-4 font-semibold">Sains</td>

                        <td className="p-4">
                          <input
                            type="text"
                            placeholder="OSN Matematika"
                            className="w-full border border-[#c3c6d1] rounded-lg px-3 py-2"
                          />
                        </td>

                        <td className="p-4">
                          <select className="w-full border border-[#c3c6d1] rounded-lg px-3 py-2">
                            <option>KABUPATEN</option>
                            <option>PROVINSI</option>
                            <option>NASIONAL</option>
                            <option>INTERNASIONAL</option>
                          </select>
                        </td>

                        <td className="p-4">
                          <input
                            type="text"
                            placeholder="Juara 1"
                            className="w-full border border-[#c3c6d1] rounded-lg px-3 py-2"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Rekomendasi */}
              <section>
                <div className="border-l-4 border-[#001e40] pl-4 mb-6">
                  <h2 className="text-2xl font-bold text-[#001e40]">Pemberi Rekomendasi</h2>
                </div>

                <input
                  type="text"
                  placeholder="SMA Negeri 1 Yogyakarta - 081234567890"
                  className="w-full h-12 px-4 rounded-xl border border-[#c3c6d1] focus:outline-none focus:ring-2 focus:ring-[#001e40]"
                />
              </section>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 border-t border-[#c3c6d1]">
                <button
                  onClick={() => navigate("/form-pendaftaran")}
                  type="button"
                  className="px-8 py-3 rounded-full border border-[#001e40] text-[#001e40] font-bold hover:bg-gray-100 transition"
                >
                  Sebelumnya
                </button>

                <button
                  onClick={() => navigate("/upload-berkas")}
                  type="button"
                  className="px-8 py-3 rounded-full bg-[#001e40] text-white font-bold hover:opacity-90 transition"
                >
                  Selanjutnya
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
