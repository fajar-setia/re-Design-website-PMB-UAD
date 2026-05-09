export default function Dashboard() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* HEADER */}
      <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">

        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
            PMB Online
          </h1>

          <p className="text-slate-500 text-lg">
            Data Pendaftar Mahasiswa Baru UAD
          </p>
        </div>

        <div
          className="
            flex items-center gap-2
            bg-yellow-400/20
            text-yellow-700
            px-4 py-2
            rounded-full
            w-fit
            font-semibold
          "
        >
          <span>👤</span>
          DATA SAYA
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="lg:col-span-8 space-y-6">

          {/* MAIN CARD */}
          <section
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              p-8
              shadow-sm
            "
          >

            {/* TITLE */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-blue-100
                  flex items-center justify-center
                  text-2xl
                "
              >
                📝
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Data Pendaftaran
                </h2>

                <p className="text-slate-500 text-sm">
                  Lengkapi formulir PMB Anda
                </p>
              </div>
            </div>

            {/* INFO */}
            <div
              className="
                bg-blue-50
                border border-blue-100
                rounded-2xl
                p-6
                mb-8
              "
            >
              <p className="text-slate-700 leading-relaxed mb-4">
                Selamat datang Dahlan Muda 👋
                Silakan lanjut melengkapi formulir pendaftaran
                untuk melanjutkan proses PMB Universitas Ahmad Dahlan.
              </p>

              <div
                className="
                  bg-white
                  rounded-xl
                  border border-blue-100
                  p-4
                  text-sm text-slate-600
                "
              >
                Klik tombol{" "}
                <span className="font-bold text-blue-900">
                  Isi Formulir
                </span>{" "}
                untuk mulai mengisi data pendaftaran Anda.
              </div>
            </div>

            {/* BUTTON */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">

              <button
                className="
                  h-14
                  px-8
                  rounded-2xl

                  bg-blue-900
                  text-white
                  font-bold

                  hover:bg-blue-800
                  active:scale-95

                  transition-all
                "
              >
                ISI FORMULIR
              </button>

              <p className="text-sm text-slate-500">
                *Pastikan semua data sudah benar.
              </p>
            </div>
          </section>

          {/* SMALL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* CARD 1 */}
            <div
              className="
                bg-blue-900
                text-white
                rounded-3xl
                p-6
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-white/10
                  flex items-center justify-center
                  mb-4
                  text-2xl
                "
              >
                ✅
              </div>

              <h3 className="font-bold text-lg mb-2">
                Verifikasi Berkas
              </h3>

              <p className="text-sm text-blue-100 leading-relaxed">
                Proses validasi dokumen membutuhkan
                waktu 2–3 hari kerja.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="
                bg-yellow-400
                text-black
                rounded-3xl
                p-6
              "
            >
              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  bg-black/10
                  flex items-center justify-center
                  mb-4
                  text-2xl
                "
              >
                💬
              </div>

              <h3 className="font-bold text-lg mb-2">
                Butuh Bantuan?
              </h3>

              <p className="text-sm leading-relaxed">
                Hubungi helpdesk PMB untuk bantuan
                teknis maupun informasi pendaftaran.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-4 space-y-6">

          {/* PROGRESS */}
          <div
            className="
              bg-white
              border border-slate-200
              rounded-3xl
              p-6
              shadow-sm
            "
          >
            <h3 className="text-xl font-bold text-blue-900 mb-8">
              Progress Pendaftaran
            </h3>

            <div className="space-y-8">

              {/* STEP */}
              <div className="flex gap-4">

                <div className="flex flex-col items-center">
                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      bg-green-500
                      text-white
                      flex items-center justify-center
                      font-bold
                    "
                  >
                    ✓
                  </div>

                  <div className="w-[2px] h-14 bg-slate-200 mt-2" />
                </div>

                <div>
                  <h4 className="font-bold text-slate-800">
                    Account Created
                  </h4>

                  <p className="text-sm text-slate-500">
                    Akun berhasil dibuat
                  </p>
                </div>
              </div>

              {/* STEP */}
              <div className="flex gap-4">

                <div className="flex flex-col items-center">
                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      bg-blue-900
                      text-white
                      flex items-center justify-center
                      font-bold
                    "
                  >
                    02
                  </div>

                  <div className="w-[2px] h-14 bg-slate-200 mt-2" />
                </div>

                <div>
                  <h4 className="font-bold text-blue-900">
                    Registration Form
                  </h4>

                  <p className="text-sm text-slate-500">
                    Sedang mengisi formulir
                  </p>
                </div>
              </div>

              {/* STEP */}
              <div className="flex gap-4 opacity-50">

                <div className="flex flex-col items-center">
                  <div
                    className="
                      w-10 h-10
                      rounded-full
                      bg-slate-200
                      text-slate-500
                      flex items-center justify-center
                      font-bold
                    "
                  >
                    03
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-500">
                    Upload Berkas
                  </h4>

                  <p className="text-sm text-slate-400">
                    Upload dokumen persyaratan
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* NEWS CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              h-[320px]
              shadow-xl
            "
          >

            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
              alt="Campus"
              className="
                absolute inset-0
                w-full h-full
                object-cover
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/80
                to-black/20
              "
            />

            <div
              className="
                absolute bottom-0
                p-6
                text-white
              "
            >
              <p className="text-sm text-yellow-300 mb-2 font-semibold">
                CAMPUS NEWS
              </p>

              <h3 className="text-2xl font-bold mb-3 leading-tight">
                Why Join Ahmad Dahlan University?
              </h3>

              <button
                className="
                  mt-2
                  text-sm
                  font-semibold
                  hover:underline
                "
              >
                Read More →
              </button>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}