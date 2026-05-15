import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Major = {
  name: string;
  faculty: string;
  tag: string;
};

type Pathway = {
  name: string;
  period: string;
  schedule: string;
};

const majorsData: Major[] = [
  {
    name: "S2-BIMBINGAN KONSELING",
    faculty: "Fakultas Ekonomi dan Bisnis",
    tag: "Akreditasi A",
  },
  {
    name: "S2-MANAJEMEN",
    faculty: "Fakultas Farmasi",
    tag: "Unggul",
  },
  {
    name: "S2-MANAJEMEN PENDIDIKAN",
    faculty: "Fakultas Teknologi Industri",
    tag: "Akreditasi B",
  },
  {
    name: "S2-PEND BAHASA INGGRIS",
    faculty: "FTI",
    tag: "Baik Sekali",
  },
  {
    name: "S2-PEND GURU VOKASI",
    faculty: "FTI",
    tag: "Unggul",
  },
  {
    name: "S2-PENDIDIKAN MATEMATIKA",
    faculty: "FTI",
    tag: "Unggul",
  },
  {
    name: "S2-SAINS PISIKOLOGI",
    faculty: "FTI",
    tag: "Unggul",
  },
  {
    name: "S2-TEKNIK ELEKTRO",
    faculty: "FTI",
    tag: "Unggul",
  },
];

const pathwayExamples: Pathway[] = [
  {
    name: "MAGESTER",
    period: "2026 Gasal GELOMBANG 1",
    schedule: "23 Februari 2026 - 30 April 2026",
  },
  {
    name: "Beasiswa magister alumni UAD",
    period: "2026 Gasal GELOMBANG 1",
    schedule: "23 Februari 2026 - 30 April 2026",
  },
  {
    name: "Beasiswa magister pegawai AUM",
    period: "2026 Gasal GELOMBANG 2",
    schedule: "04 April 2026 - 26 Juni 2026",
  },
  {
    name: "RPL-S2",
    period: "2026 Gasal GELOMBANG 2",
    schedule: "04 April 2026 - 26 Juni 2026",
  },
];

export default function pilMagister() {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = useNavigate();

  const filteredMajors = majorsData.filter(
    (major) =>
      major.name.toLowerCase().includes(search.toLowerCase()) ||
      major.faculty.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="flex-grow container mx-auto px-4 lg:px-8 py-8">
      {/* TITLE */}
      <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl mb-8 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-center sm:text-left gap-4 border-b border-gray-100 pb-4 mb-4 bg-blue-800 p-4 rounded-xl">
          <h2 className="text-xl md:text-2xl font-extrabold text-white tracking-tight w-full sm:w-auto">
            PROGRAM STUDI (Magister)
          </h2>
          <button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-sm tracking-wide shrink-0">
            DATA SAYA
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-3">
          <h3 className="text-[#003366] font-bold text-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            Selamat Datang, Dahlan Muda!
          </h3>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
            Berikut ini adalah pilihan{" "}
            <span className="font-semibold text-gray-800">
              Program Studi (Magister)
            </span>{" "}
            yang tersedia beserta akreditasinya.
          </p>

          <div className="bg-blue-50/50 border border-blue-100 p-3.5 rounded-xl flex items-start gap-2.5 max-w-3xl">
            <svg
              className="w-5 h-5 text-blue-600 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-xs md:text-sm text-blue-800">
              Silakan klik tombol <strong className="font-bold text-blue-900">"DAFTAR"</strong> pada
              tabel program studi di bawah untuk mulai mengisi formulir pendaftaran.
            </p>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Cari program studi..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:max-w-md border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#003366]"
        />

        <div className="text-xs font-semibold text-gray-500">
          Menampilkan {filteredMajors.length} Program Studi
        </div>
      </div>

      {/* ACCORDION */}
      <div className="space-y-3">
        {filteredMajors.map((major, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={major.name}
              className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
              >
                <span className="text-sm font-bold text-[#003366] uppercase">
                  {major.name}
                </span>

                <div className="flex items-center gap-4">
                  <span className="hidden md:inline-block text-[10px] font-bold py-1 px-2 rounded border border-[#003366]/20 bg-gray-50 text-[#003366]/70 uppercase">
                    {major.tag}
                  </span>

                  <svg
                    className={`h-5 w-5 text-[#003366] transition-transform duration-300 ${
                      isActive ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* CONTENT */}
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isActive ? "max-h-[2000px]" : "max-h-0"
                }`}
              >
                <div className="p-4 md:p-6 bg-gray-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {pathwayExamples.map((path) => (
                      <div
                        key={path.name}
                        className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4"
                      >
                        <div className="flex-grow space-y-3 w-full">
                          <h4 className="text-xs font-bold text-white bg-blue-700 px-3 py-1 rounded inline-block">
                            {path.name}
                          </h4>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                                Periode
                              </p>

                              <p className="text-[11px] text-[#003366] font-bold">
                                {path.period}
                              </p>
                            </div>

                            <div className="space-y-1">
                              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                                Jadwal
                              </p>

                              <p className="text-[11px] text-[#003366] font-bold">
                                {path.schedule}
                              </p>
                            </div>
                          </div>
                        </div>

                        <button 
                          className="w-full md:w-auto bg-blue-700 hover:bg-blue-800 text-white text-[10px] font-bold py-2 px-6 rounded-lg transition-all uppercase whitespace-nowrap"
                          onClick={() => navigate("/form-pendaftaran")}
                        >
                          Daftar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}