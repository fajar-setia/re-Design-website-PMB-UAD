import {
  Home,
  ChevronRight,
  Search,
  ArrowRight,
  FileText,
  User,
  MapPin,
  School,
  Save,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormPendaftaran() {
  const navigate = useNavigate();
  return (
    <main className="max-w-[1280px] mx-auto px-4 md:px-10 py-12 bg-[#f8f9fa] text-[#191c1d]">
      {/* Header Section */}
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
              <span className="text-blue-800 font-semibold">Tahap 1 Biodata</span>
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
        {/* Left Side: Registration Info & Stepper */}
        <aside className="w-full md:w-80 shrink-0">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#c3c6d1] sticky top-24">
            <h3 className="text-2xl font-bold text-blue-800 mb-8">Alur Pendaftaran</h3>

            <div className="relative flex flex-col gap-8">
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[#c3c6d1]" />

              {/* Step 1 */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#fdc003] text-[#261a00] flex items-center justify-center font-bold ring-4 ring-yellow-200">
                  1
                </div>

                <div>
                  <p className="text-xs text-black">Langkah Kedua</p>
                  <p className="font-semibold text-blue-800">Biodata</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 relative z-10 opacity-50">
                <div className="w-8 h-8 rounded-full bg-[#e1e3e4] flex items-center justify-center font-bold text-[#43474f]">
                  2
                </div>

                <div>
                  <p className="text-xs text-[#43474f]">Langkah Kedua</p>
                  <p className="font-semibold">Syarat Jalur</p>
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

        {/* Right Side: Form Container */}
        <section className="lg:col-span-8 flex-1">
          <div className="bg-white p-8 md:p-12 rounded-xl border border-[#c3c6d1] shadow-sm">
            <div className="mb-10 pb-6 border-b border-[#e7e8e9]">
              <div className="flex items-center gap-3 text-[#001e40] mb-2">
                <FileText size={22} />
                <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
                  FORM PENDAFTARAN ONLINE
                </h2>
              </div>
              <p className="text-[#43474f] text-sm md:text-base">
                Jalur BPM - SAINS, SENI &amp; OLAHRAGA GELOMBANG 1 TAHAP 2 TAHUN 2026/2027 SEMESTER
                GASAL
              </p>

              {/* Progress indicator */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 bg-[#e7e8e9] rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "33%" }}></div>
                </div>
                <span className="text-xs font-semibold text-[#43474f] whitespace-nowrap">
                  Langkah 1 dari 3
                </span>
              </div>
            </div>

            {/* Legend */}
            <div className="mb-8 flex items-center gap-2 text-xs text-[#43474f] bg-[#f8f9fa] rounded-lg px-4 py-3 border border-[#e7e8e9]">
              <span className="text-red-500 font-bold text-sm">*</span>
              <span>
                Tanda bintang menandakan kolom yang <strong>wajib diisi</strong>. Pastikan semua
                kolom wajib terisi sebelum melanjutkan.
              </span>
            </div>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              {/* ── Group 1: Pilihan Program Studi ── */}
              <section className="space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-[#e7e8e9]">
                  <div className="w-9 h-9 rounded-lg bg-blue-800/10 flex items-center justify-center flex-shrink-0">
                    <FileText size={17} className="text-blue-800" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#fdc003] rounded-full"></span>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-800">
                        Pilihan Program Studi
                      </h3>
                    </div>
                    <p className="text-xs text-[#43474f] mt-0.5 ml-3">
                      Pilih program studi sesuai minat dan kemampuan Anda.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Program Studi Pilihan 1 <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option disabled selected>
                        PILIH PRODI PILIHAN 1
                      </option>
                      <option>Informatika</option>
                      <option>Sistem Informasi</option>
                      <option>Teknik Industri</option>
                    </select>
                    <p className="text-xs text-[#43474f]/70">
                      Pilihan utama Anda. Prioritas penempatan berdasarkan pilihan ini.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Program Studi Pilihan 2 <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option disabled selected>
                        PILIH PRODI PILIHAN 2
                      </option>
                      <option>Manajemen</option>
                      <option>Akuntansi</option>
                      <option>Psikologi</option>
                    </select>
                    <p className="text-xs text-[#43474f]/70">
                      Pilihan alternatif jika pilihan 1 penuh.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Group 2: Data Diri ── */}
              <section className="space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-[#e7e8e9]">
                  <div className="w-9 h-9 rounded-lg bg-blue-800/10 flex items-center justify-center flex-shrink-0">
                    <User size={17} className="text-blue-800" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#fdc003] rounded-full"></span>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-800">
                        Data Diri Mahasiswa
                      </h3>
                    </div>
                    <p className="text-xs text-[#43474f] mt-0.5 ml-3">
                      Isi sesuai data pada dokumen identitas resmi (KTP / Ijazah).
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Nama Lengkap <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 text-sm md:text-base bg-[#f3f4f5] text-[#43474f] cursor-not-allowed"
                      readOnly
                      type="text"
                      defaultValue="coba"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Data diambil otomatis dari akun Anda. Hubungi panitia jika terdapat kesalahan.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 text-sm md:text-base bg-[#f3f4f5] text-[#43474f] cursor-not-allowed"
                      readOnly
                      type="email"
                      defaultValue="atmin@gmail.com"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Email aktif untuk menerima notifikasi pendaftaran.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Jenis Kelamin <span className="text-red-600">*</span>
                    </label>
                    <div className="flex items-center gap-6 h-12">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          className="text-[#001e40] focus:ring-[#001e40] h-4 w-4"
                          name="jk"
                          type="radio"
                        />
                        <span className="text-sm md:text-base">Laki-laki</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          className="text-[#001e40] focus:ring-[#001e40] h-4 w-4"
                          name="jk"
                          type="radio"
                        />
                        <span className="text-sm md:text-base">Perempuan</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Agama <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option selected>ISLAM</option>
                      <option>Kristen</option>
                      <option>Katolik</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Kewarganegaraan <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option selected>INDONESIA</option>
                      <option>WNA</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Tempat Lahir <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Contoh: Yogyakarta"
                      type="text"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Isikan sesuai yang tertera di Ijazah / Akta Lahir.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Tanggal Lahir <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      type="date"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Isikan sesuai yang tertera di Ijazah / Akta Lahir.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Group 3: Kontak & Alamat ── */}
              <section className="space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-[#e7e8e9]">
                  <div className="w-9 h-9 rounded-lg bg-blue-800/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-blue-800" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#fdc003] rounded-full"></span>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-800">
                        Kontak &amp; Alamat
                      </h3>
                    </div>
                    <p className="text-xs text-[#43474f] mt-0.5 ml-3">
                      Isi sesuai dengan Kartu Keluarga (KK) yang masih berlaku.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Nomor HP Aktif (WA) <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Contoh: 08123456789"
                      type="tel"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Nomor WhatsApp yang aktif dan bisa dihubungi panitia.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Kecamatan <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        className="w-full h-12 pr-10 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                        placeholder="Ketik nama kecamatan..."
                        type="text"
                      />
                      <Search size={16} className="absolute right-3 top-3.5 text-[#43474f]" />
                    </div>
                    <p className="text-xs text-[#43474f]/70">
                      Tulis dan pilih kecamatan sesuai alamat di KK.
                    </p>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Alamat Lengkap <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      className="w-full rounded-lg border border-[#c3c6d1] px-3 py-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      rows={3}
                      placeholder="Contoh: Jl. Kapas No. 9, RT 02/RW 05, Semaki..."
                    ></textarea>
                    <p className="text-xs text-[#43474f]/70">
                      Isi lengkap termasuk RT/RW dan Kelurahan, sesuai data pada Kartu Keluarga.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Nama Ibu Kandung <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Contoh: Siti Aminah"
                      type="text"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Tulis lengkap tanpa gelar, sesuai KK.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Nomor HP Orang Tua <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Contoh: 08198765432"
                      type="tel"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Nomor HP orang tua / wali yang aktif dan bisa dihubungi.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Group 4: Asal Sekolah ── */}
              <section className="space-y-5">
                <div className="flex items-center gap-3 pb-3 border-b border-[#e7e8e9]">
                  <div className="w-9 h-9 rounded-lg bg-blue-800/10 flex items-center justify-center flex-shrink-0">
                    <School size={17} className="text-blue-800" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-5 bg-[#fdc003] rounded-full"></span>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-blue-800">
                        Informasi Asal Sekolah
                      </h3>
                    </div>
                    <p className="text-xs text-[#43474f] mt-0.5 ml-3">
                      Isi data SMA / SMK / MA sesuai Ijazah yang Anda miliki.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Propinsi Asal SMA <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option disabled selected>
                        PILIH PROPINSI ASAL SMA
                      </option>
                    </select>
                    <p className="text-xs text-[#43474f]/70">
                      Pilih propinsi terlebih dahulu untuk memunculkan pilihan kota.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Kabupaten / Kota Asal SMA <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option disabled selected>
                        PILIH KABUPATEN / KOTA SMA
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Asal SMA <span className="text-red-600">*</span>
                    </label>
                    <select className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base">
                      <option disabled selected>
                        PILIH SMA
                      </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d]">SMA Lain-lain</label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Isi jika SMA tidak tersedia di daftar atas"
                      type="text"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Hanya isi jika SMA Anda tidak ada di daftar pilihan.
                    </p>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-[#191c1d]">Alamat SMA</label>
                    <textarea
                      className="w-full rounded-lg border border-[#c3c6d1] px-3 py-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      rows={2}
                      placeholder="Contoh: Jl. Raya Cangkringan No. 1, Sleman, DIY"
                    ></textarea>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Nomor Ijazah SMA <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Contoh: DN-Ma/13 100000000"
                      type="text"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Lihat di halaman depan Ijazah. Jika belum ada, isikan angka 0.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#191c1d] flex gap-1">
                      Tahun Lulus <span className="text-red-600">*</span>
                    </label>
                    <input
                      className="w-full h-12 rounded-lg border border-[#c3c6d1] px-3 focus:border-[#001e40] focus:ring-1 focus:ring-[#001e40] text-sm md:text-base"
                      placeholder="Contoh: 2026"
                      type="number"
                      min="2000"
                      max="2030"
                    />
                    <p className="text-xs text-[#43474f]/70">
                      Tahun kelulusan sesuai yang tertera di Ijazah.
                    </p>
                  </div>
                </div>
              </section>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#e7e8e9]">
                <p className="text-xs text-[#43474f]/70 order-2 sm:order-1">
                  Data Anda tersimpan aman dan hanya digunakan untuk keperluan seleksi.
                </p>
                <div className="flex items-center gap-3 order-1 sm:order-2 w-full sm:w-auto">
                  <button
                    className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-[#c3c6d1] text-[#43474f] hover:bg-[#f3f4f5] transition-all w-full sm:w-auto justify-center"
                    type="button"
                  >
                    <Save size={16} />
                    Simpan Draft
                  </button>
                  <button
                    onClick={() => navigate("/syarat")}
                    className="flex items-center gap-2 px-8 py-3 bg-blue-800 text-white rounded-lg text-sm font-semibold hover:bg-[#003366] transition-all active:scale-95 shadow-md w-full sm:w-auto justify-center"
                    type="submit"
                  >
                    Selanjutnya
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
