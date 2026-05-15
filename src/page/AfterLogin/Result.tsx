import { GraduationCap } from "lucide-react";
export default function Result() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* SEARCH CARD */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/40">
          <div className="p-6 md:p-10">
            <div className="mb-8 rounded-2xl bg-blue-800 px-8 py-6">
              <div className="flex items-center gap-4">
                <GraduationCap className="h-12 w-12 flex-shrink-0 text-white bg-white/10 justify-center rounded-2xl px-2 py-2" />

                <div>
                  <h2 className="text-2xl font-extrabold text-white ">Cek Hasil Seleksi</h2>

                  <p className="mt-2 text-sm text-white">
                    Masukkan nomor formulir pendaftaran Anda.
                  </p>
                </div>
              </div>
            </div>

            <form className="flex flex-col items-stretch justify-center gap-4 md:flex-row">
              <div className="relative w-full max-w-xl">
                <svg
                  className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                  />
                </svg>

                <input
                  type="text"
                  placeholder="Masukkan nomor formulir..."
                  className="
                    w-full
                    rounded-2xl
                    border-2
                    border-slate-200
                    bg-slate-50
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    outline-none
                    transition-all

                    focus:border-[#003366]
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#003366]
                  px-8
                  py-4
                  font-bold
                  text-white
                  shadow-lg
                  shadow-blue-900/20
                  transition-all

                  hover:bg-[#00264d]
                  active:scale-95
                "
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>

                <span>LIHAT HASIL</span>
              </button>
            </form>
          </div>
        </section>

        {/* GUIDE */}
        <section className="rounded-3xl border border-slate-200 bg-[#f8f9fa] p-6 md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="rounded-xl bg-[#003366] p-3 text-white">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-extrabold tracking-tight text-[#003366]">
              Cara Lihat Bukti Registrasi
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Masukkan nomor pendaftaran pada kotak pencarian.",
              "Klik tombol LIHAT HASIL untuk melihat status seleksi.",
              "Download bukti registrasi untuk pengambilan jas almamater.",
              "Ikuti seluruh kegiatan pra kuliah sesuai jadwal.",
            ].map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-5
                  shadow-sm
                "
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-100
                    text-sm
                    font-bold
                    text-[#003366]
                  "
                >
                  {index + 1}
                </div>

                <p className="text-sm leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WARNING */}
        <section className="relative overflow-hidden rounded-3xl bg-red-600 text-white shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg,#000 0,#000 10px,transparent 10px,transparent 20px)",
              }}
            />
          </div>

          <div className="relative z-10 p-8 text-center md:p-12">
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-white/20
                px-4
                py-2
                backdrop-blur-sm
              "
            >
              <svg className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 
                  3.486 0l5.58 9.92c.75 1.334-.213 
                  2.98-1.742 2.98H4.42c-1.53 
                  0-2.493-1.646-1.743-2.98l5.58-9.92z"
                />
              </svg>

              <span className="text-xs font-black uppercase tracking-[0.2em]">
                Peringatan Keamanan
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">WASPADA PENIPUAN !!!</h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-red-50">
              Informasi pendaftaran dan pengumuman PMB UAD hanya melalui saluran resmi berikut.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://pmb.uad.ac.id"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  bg-white
                  px-6
                  py-3
                  font-bold
                  text-red-600
                  shadow-lg
                  transition-all

                  hover:bg-red-50
                "
              >
                pmb.uad.ac.id
              </a>

              <a
                href="https://pmb-online.uad.ac.id"
                target="_blank"
                rel="noreferrer"
                className="
                  rounded-xl
                  bg-white
                  px-6
                  py-3
                  font-bold
                  text-red-600
                  shadow-lg
                  transition-all

                  hover:bg-red-50
                "
              >
                pmb-online.uad.ac.id
              </a>
            </div>

            <div className="mt-8 border-t border-white/20 pt-6">
              <p className="text-sm font-bold">HOTLINE RESMI</p>

              <p className="mt-2 text-2xl font-extrabold tracking-widest text-yellow-300">
                0853 8500 1960 | 0856 267 1960
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
