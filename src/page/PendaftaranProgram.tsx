import {
  GraduationCap,
  BookOpen,
  Atom,
  Stethoscope,
  Globe,
  Users,
  School,
  Briefcase,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  MessageSquare,
 
} from "lucide-react";

export default function PendaftaranProgram() {
  const programs = [
    {
      title: "SARJANA & SARJANA TERAPAN",
      desc: "Program Diploma 4 dan Strata 1 untuk lulusan SMA/SMK/MA sederajat.",
      total: "84 Program Studi",
      icon: GraduationCap,
      bg: "bg-blue-900",
      text: "text-white",
      sub: "text-blue-100",
      bigIcon: School,
    },
    {
      title: "MAGISTER",
      desc: "Program Strata 2 untuk pendalaman keahlian spesifik.",
      total: "15 Program Studi",
      icon: BookOpen,
      bg: "bg-slate-800",
      text: "text-white",
      sub: "text-slate-300",
      bigIcon: BookOpen,
    },
    {
      title: "DOKTOR",
      desc: "Jenjang pendidikan tertinggi Strata 3 untuk riset lanjutan.",
      total: "3 Program Studi",
      icon: Atom,
      bg: "bg-yellow-500",
      text: "text-white",
      sub: "text-yellow-100",
      bigIcon: Atom,
    },
    {
      title: "PROFESI",
      desc: "Pendidikan lanjutan untuk mendapatkan gelar profesi.",
      total: "Daftar Sekarang",
      icon: Stethoscope,
      bg: "bg-emerald-300",
      text: "text-white",
      sub: "text-white",
      bigIcon: Briefcase,
      border: true,
    },
    {
      title: "INTERNASIONAL",
      desc: "Program kelas internasional dengan kurikulum global.",
      total: "International Classes",
      icon: Globe,
      bg: "bg-rose-500",
      text: "text-white",
      sub: "text-white",
      bigIcon: Globe,
      border: true,
    },
    {
      title: "PROGRAM MBKM",
      desc: "Merdeka Belajar Kampus Merdeka.",
      total: "Explorasi MBKM",
      icon: Users,
      bg: "bg-cyan-500",
      text: "text-white",
      sub: "text-white",
      bigIcon: Users,
      border: true,
    },
  ];

  const stats = [
    { number: "15.000+", label: "Mahasiswa Aktif", icon: Users },
    { number: "84", label: "Program Studi", icon: School },
    { number: "98%", label: "Alumni Bekerja", icon: Briefcase },
    { number: "50+", label: "Kerjasama Internasional", icon: Globe },
  ];

  const timeline = [
    {
      step: "1",
      title: "Daftar Online",
      desc: "Isi formulir pendaftaran melalui portal PMB.",
      icon: CheckCircle,
    },
    {
      step: "2",
      title: "Ujian Masuk",
      desc: "Ikuti ujian seleksi atau UTBK.",
      icon: HelpCircle,
    },
    {
      step: "3",
      title: "Pengumuman",
      desc: "Cek hasil seleksi.",
      icon: MessageSquare,
    },
    {
      step: "4",
      title: "Daftar Ulang",
      desc: "Registrasi ulang.",
      icon: CheckCircle,
    },
  ];

  const faqs = [
    {
      q: "Apa saja jalur masuk?",
      a: "PMDK, UTBK, dan Ujian Tulis.",
    },
    {
      q: "Biaya pendaftaran?",
      a: "Tergantung jalur masuk.",
    },
    {
      q: "Ada beasiswa?",
      a: "Ada KIP-K dan beasiswa prestasi.",
    },
    {
      q: "Kapan dibuka?",
      a: "Januari - Juli.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen pt-10 pb-10 ">

      {/* HERO */}
      <section className="max-w-5xl mx-auto  px-6 py-6 grid lg:grid-cols-1 items-center bg-white shadow-xl shadow-black/10 rounded-3xl">

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
                <GraduationCap className="w-6 h-6 text-blue-900" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Jenjang Program Studi
                </h2>
              </div>
            </div>

            <div
              className="
                bg-blue-50
                border border-blue-100
                rounded-2xl
                p-6
                mb-8
              "
            >
              <p className="text-slate-700 leading-relaxed mb-4 font-bold text-lg">
                Selamat datang Dahlan Muda 👋
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
                Berikut ini adalah pilihan{" "}
                <span className="font-bold text-blue-900">
                  Jenjang Program Studi
                </span>{" "}
                yang tersedia dan.{" "}
                <br />
                <span className="font-bold text-blue-900">
                  Program Studi
                </span>{" "}
                yang ditawarkan di Universitas Ahmad Dahlan.
              </div>
            </div>

      </section>

      {/* PROGRAM */}
      <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {programs.map((p, i) => {
          const Icon = p.icon;
          const BigIcon = p.bigIcon;

          return (
            <div key={i} className={`p-8 rounded-3xl relative overflow-hidden ${p.bg}`}>
              
              <Icon className={`w-10 h-10 mb-4 ${p.text}`} />

              <h3 className={`text-xl font-bold ${p.text}`}>
                {p.title}
              </h3>

              <p className={`text-sm mt-2 ${p.sub}`}>
                {p.desc}
              </p>

              <div className="mt-6 flex justify-between items-center">
                <span className={`text-sm ${p.sub}`}>
                  {p.total}
                </span>
                <ChevronRight className={`w-5 h-5 ${p.text}`} />
              </div>

              <BigIcon className={`absolute -right-10 -bottom-10 w-40 h-40 opacity-10 ${p.text}`} />

            </div>
          );
        })}
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;

          return (
            <div key={i} className="bg-white p-6 rounded-2xl text-center">
              <Icon className="w-8 h-8 mx-auto text-blue-900 mb-2" />
              <h3 className="text-2xl font-bold">{s.number}</h3>
              <p className="text-sm text-slate-500">{s.label}</p>
            </div>
          );
        })}
      </section>

      {/* TIMELINE */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-6">
        {timeline.map((t, i) => {
          const Icon = t.icon;

          return (
            <div key={i} className="bg-white p-6 rounded-2xl text-center">
              <Icon className="w-8 h-8 mx-auto text-blue-900 mb-2" />
              <h3 className="font-bold">{t.title}</h3>
              <p className="text-sm text-slate-500">{t.desc}</p>
            </div>
          );
        })}
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="bg-white p-4 rounded-xl">
            <summary className="font-semibold cursor-pointer">
              {f.q}
            </summary>
            <p className="mt-2 text-slate-600">{f.a}</p>
          </details>
        ))}
      </section>

    </main>
  );
}