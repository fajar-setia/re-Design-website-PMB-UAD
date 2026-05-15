import { useState } from "react";
import toast from "react-hot-toast";

export default function MBKM() {
  const [token, setToken] = useState("");

  const handleSubmit = () => {
    if (!token.trim()) {
      toast.error("Token wajib diisi");
      return;
    }

    if (token.length < 10) {
      toast.error("Token minimal 10 digit");
      return;
    }

    toast.success("Token berhasil diverifikasi");
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa]">
      
      {/* CONTENT */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          {/* CARD */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {/* CARD HEADER */}
            <div className="flex items-center gap-4 bg-blue-800 px-8 py-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />

                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <h2 className="text-2xl font-bold uppercase tracking-tight text-white">
                Masukan Token Yang Telah Diberikan Panitia
              </h2>
            </div>

            {/* BODY */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                {/* LABEL */}
                <label
                  htmlFor="token"
                  className="font-semibold text-slate-700 md:w-1/4"
                >
                  Token Akses
                </label>

                {/* INPUT */}
                <div className="space-y-6 md:w-3/4">
                  <div className="relative">
                    <input
                      id="token"
                      type="text"
                      value={token}
                      onChange={(e) => setToken(e.target.value)}
                      placeholder="Masukkan 10 digit token..."
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-300
                        bg-slate-50
                        px-5
                        py-4
                        pr-14
                        text-slate-800
                        outline-none
                        transition-all

                        focus:border-[#003366]
                        focus:bg-white
                        focus:ring-4
                        focus:ring-blue-100
                      "
                    />

                    <svg
                      className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M15 7a2 2 0 012 2m-2-2a2 2 0 00-2-2m2 2h.01M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* BUTTON */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button
                      onClick={handleSubmit}
                      className="
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-2xl
                        bg-cyan-500
                        px-8
                        py-4
                        font-bold
                        text-white
                        shadow-lg
                        shadow-cyan-200/50
                        transition-all

                        hover:brightness-110
                        active:scale-95
                        sm:w-auto
                      "
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>

                      DAFTAR
                    </button>

                    <p className="text-sm italic text-slate-500">
                      Pastikan token sesuai dengan yang tercantum di akun
                      portal Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t border-slate-200 bg-slate-50 px-8 py-5">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 text-[#003366]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>

                <p className="text-sm leading-relaxed text-slate-600">
                  Token MBKM bersifat rahasia. Jangan memberikan token
                  Anda kepada pihak manapun selain melalui portal resmi
                  Universitas Ahmad Dahlan ini.
                </p>
              </div>
            </div>
          </div>

          {/* INFO CARD */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* CARD 1 */}
            <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-800">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18.364 5.636l-1.414 1.414M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div>
                <h4 className="mb-1 font-bold text-blue-800">
                  Butuh Bantuan?
                </h4>

                <p className="text-sm text-slate-600">
                  Hubungi layanan bantuan jika token Anda tidak valid
                  atau hilang.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-800">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 6.253v13m0-13C10.832 5.483 9.246 5 7.5 5S4.168 5.483 3 6.253v13C4.168 18.483 5.754 18 7.5 18s3.332.483 4.5 1.253m0-13C13.168 5.483 14.754 5 16.5 5s3.332.483 4.5 1.253v13C19.832 18.483 18.246 18 16.5 18s-3.332.483-4.5 1.253"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div>
                <h4 className="mb-1 font-bold text-blue-800">
                  Panduan MBKM
                </h4>

                <p className="text-sm text-slate-600">
                  Pelajari alur pendaftaran dan persyaratan program MBKM
                  terbaru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}