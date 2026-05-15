import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f8f9fa] px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* CARD */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(0,51,102,0.05)]">
          {/* CARD HEADER */}
          <div className="flex items-center gap-4 bg-blue-800 p-6">
            <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
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

            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                DATA PENDAFTARAN
              </h2>

              <p className="text-sm text-blue-100">
                Universitas Ahmad Dahlan
              </p>
            </div>
          </div>

          {/* EMPTY STATE */}
          <div className="flex flex-col items-center px-6 py-16 text-center md:px-20">
            {/* ICON */}
            <div className="relative mb-8">
              <div className="absolute inset-0 scale-150 rounded-full bg-blue-50 blur-2xl opacity-60" />

              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-slate-100 bg-white shadow-sm">
                <svg
                  className="h-12 w-12 text-slate-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>

                <div className="absolute -bottom-1 -right-1 rounded-full border-4 border-white bg-yellow-400 p-1.5">
                  <svg
                    className="h-4 w-4 text-[#6c5000]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* TEXT */}
            <div className="mx-auto mb-10 max-w-xl">
              <h3 className="mb-3 text-3xl font-bold text-[#003366]">
                Belum ada data pendaftaran
              </h3>

              <p className="leading-relaxed text-slate-600">
                Silakan mengisi formulir pendaftaran terlebih dahulu untuk
                memulai perjalanan akademik Anda di Universitas Ahmad Dahlan.
                Pastikan data yang Anda masukkan sudah benar.
              </p>
            </div>

            {/* BUTTON */}
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <button
                onClick={() => navigate("/getin")}
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-yellow-400
                  px-10
                  py-4
                  font-bold
                  text-[#003366]
                  shadow-lg
                  shadow-yellow-200/50
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-yellow-300
                "
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>

                ISI FORMULIR SEKARANG
              </button>

              <button
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-8
                  py-4
                  font-bold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-[#003366]
                  hover:text-[#003366]
                "
              >
                <svg
                  className="h-5 w-5"
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

                Panduan Pendaftaran
              </button>
            </div>
          </div>

          {/* FOOT INFO */}
          <div className="border-t border-slate-100 bg-slate-50 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 text-slate-500">
                <svg
                  className="h-5 w-5"
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

                <span className="text-sm font-medium">
                  Butuh bantuan? Hubungi WhatsApp Admission kami.
                </span>
              </div>

              <div className="flex items-center gap-2 font-bold text-[#003366]">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>

                0811-2345-6789
              </div>
            </div>
          </div>
        </section>

        {/* STEP */}

      </div>
    </main>
  );
}