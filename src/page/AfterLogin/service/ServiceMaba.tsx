export default function ServiceMaba() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 sm:px-10 py-10">

      {/* Header */}
      <section className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold text-[#003366] tracking-tight flex items-center gap-2">
            📋 Dashboard Layanan Test PBI
          </h1>
          <p className="text-sm text-slate-500 mt-1 max-w-xl leading-relaxed">
            Selamat datang, <span className="font-semibold text-[#003366]">Fajar!</span> 👋
            Yuk pantau perkembangan pendaftaran Test PBI kamu di sini.
            Pastikan semua dokumen sudah lengkap agar proses penjadwalan berjalan lancar. 🚀
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
              ⏳ Sedang Diproses
            </span>
            <span className="text-xs text-slate-400">Estimasi konfirmasi: 1–3 hari kerja</span>
          </div>
        </div>
        <button
          className="
            self-start
            flex items-center gap-2
            px-4 py-2
            rounded-lg
            border border-slate-300
            text-sm font-semibold text-slate-600
            hover:bg-slate-50
            transition-colors
            whitespace-nowrap
          "
        >
          ← Kembali
        </button>
      </section>

      {/* Stepper */}
      <section className="mb-10">
        <div className="relative flex items-start justify-between max-w-2xl mx-auto">
          {/* Track */}
          <div className="absolute top-7 left-0 w-full h-[2px] bg-slate-200" />
          <div className="absolute top-7 left-0 w-1/2 h-[2px] bg-yellow-400" />

          {/* Step 1 */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center text-lg font-bold shadow-sm">
              ✓
            </div>
            <p className="text-xs font-bold text-yellow-600">REGISTRASI</p>
            <p className="text-xs text-slate-400 italic">Selesai</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-14 h-14 rounded-full bg-white border-4 border-yellow-400 flex items-center justify-center text-lg font-bold shadow-sm">
              2
            </div>
            <p className="text-xs font-bold text-[#003366]">PENJADWALAN</p>
            <p className="text-xs text-slate-400 italic">Menunggu</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-2 z-10">
            <div className="w-14 h-14 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center text-lg font-bold text-slate-300 shadow-sm">
              3
            </div>
            <p className="text-xs font-bold text-slate-400">HASIL TEST</p>
            <p className="text-xs text-slate-400 italic">Belum Ada</p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Sidebar */}
        <aside className="space-y-5">

          {/* Identitas */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-[#003366] px-5 py-3 text-white text-sm font-bold tracking-wide">
              Identitas Mahasiswa
            </div>
            <div className="p-5 space-y-4">
              <Field label="Nama Lengkap" value="FAJAR SETIA PAMBUDI" />
              <Field label="Nomor Induk (NIM)" value="2200018346" />
              <Field label="Email" value="yahya.kiddrock@yahoo.com" />
              <hr className="border-slate-100" />
              <Field label="Program Studi" value="INFORMATIKA" />
              <Field label="Fakultas" value="Teknologi Industri" />
              <Field label="Angkatan / Semester" value="2022 – Gasal" />
            </div>
          </div>

          {/* Bantuan */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
            <h3 className="font-bold text-yellow-800 mb-1">Butuh Bantuan?</h3>
            <p className="text-sm text-yellow-700 mb-4 leading-relaxed">
              Jika Anda mengalami kendala dalam proses penjadwalan, tim support kami siap membantu.
            </p>
            <button className="text-sm font-semibold text-[#003366] hover:underline transition-all">
              Hubungi Hotline →
            </button>
          </div>
        </aside>

        {/* Content */}
        <section className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden h-full">

            {/* Card Header */}
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
              <h2 className="font-bold text-[#003366] text-sm">Detail Pelaksanaan Test PBI</h2>
              <span className="px-3 py-1 rounded-full bg-yellow-400 text-xs font-bold text-yellow-900 tracking-wide">
                DALAM ANTRIAN
              </span>
            </div>

            {/* Card Body */}
            <div className="flex flex-col items-center justify-center text-center px-8 py-16 min-h-[420px]">
              <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center text-4xl mb-6">
                ⏳
              </div>
              <h3 className="text-xl font-extrabold text-[#003366] mb-2 tracking-tight">
                Belum Dijadwalkan
              </h3>
              <p className="text-slate-600 mb-1">
                Data penjadwalan Anda masih dalam antrian sistem.
              </p>
              <p className="text-sm text-slate-400 max-w-md leading-relaxed">
                Mohon bersabar — verifikasi dokumen dan pengalokasian slot ruangan sedang diproses oleh tim kami.
              </p>

              <div className="flex flex-wrap gap-3 mt-8 justify-center">
                <button
                  className="
                    px-6 py-2.5
                    bg-[#003366]
                    text-white
                    rounded-lg
                    text-sm font-semibold
                    hover:bg-[#002244]
                    transition-colors
                  "
                >
                  Refresh Status
                </button>
                <button
                  className="
                    px-6 py-2.5
                    bg-slate-100
                    text-slate-700
                    rounded-lg
                    text-sm font-semibold
                    hover:bg-slate-200
                    transition-colors
                  "
                >
                  Panduan Test
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

type FieldProps = {
  label: string;
  value: string;
};

function Field({ label, value }: FieldProps) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-[#003366]">{value}</p>
    </div>
  );
}