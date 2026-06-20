import RegisterForm from "../components/Auth/RegisterForm";
import AuthImage from "../components/Auth/AuthImage";
import { useEffect, useRef } from "react";
import { Lock, Building, Award } from "lucide-react";
import Kampus from "../assets/Kampus-4-Universitas-Ahmad-Dahlan.png";

export default function Register() {
  const cardRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current || !heroRef.current) return;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;

      // Card mulai naik saat hero mulai tersembunyi
      const progress = Math.min(scrollY / heroHeight, 1);

      // Scale hero sedikit saat di-scroll (parallax ringan)
      heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      heroRef.current.style.opacity = `${1 - progress * 0.6}`;

      // Card naik dengan efek spring
      cardRef.current.style.transform = `translateY(${-scrollY * 0.15}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f4fa]">
      <div
        ref={heroRef}
        className="relative z-0 text-center px-6 pt-16 pb-40 will-change-transform bg-cover bg-center bg-no-repeat"
        style={{
          transition: "opacity 0.05s linear",
          backgroundImage: `linear-gradient(to bottom, rgba(232, 240, 250, 0.4) 0%, rgba(240, 244, 250, 0.8) 80%, #f0f4fa 100%), url(${Kampus})`,
        }}
      >
        <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 text-xs text-amber-700 font-medium mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Gerbang Pendaftaran Dibuka · TA 2025/2026
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-900 leading-snug mb-4 tracking-tight">
          Kampus Sudah Siap, Kamu
          <br />
          Masih{" "}
          <span className="text-amber-500 underline decoration-wavy decoration-1">
            Nge-Ghosting
          </span>
          ? ✨
        </h1>

        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-10 font-medium">
          Yakin masih mau nunda-nunda? Cuma perlu scroll sedikit lagi buat amankan kursi kuliahmu.
          Prosesnya full online, nggak ribet, dan yang jelas nggak bakal ditolak kayak gebetan! 😎
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 max-w-2xl mx-auto bg-white/60 backdrop-blur-md py-4 px-6 rounded-2xl border border-white/80 shadow-lg">
          <div className="text-center flex-1">
            <div className="text-xl font-bold text-blue-900">12.000+</div>
            <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
              Daftar Tahun Lalu <span className="text-blue-600">(Tahun ini giliranmu!)</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-300" />

          <div className="text-center flex-1">
            <div className="text-xl font-bold text-blue-900">42</div>
            <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
              Jurusan Kece <span className="text-amber-600">(Pusing-pusing deh milihnya)</span>
            </div>
          </div>

          <div className="hidden sm:block w-px h-8 bg-slate-300" />

          <div className="text-center flex-1">
            <div className="text-xl font-bold text-blue-900">97%</div>
            <div className="text-[11px] text-slate-500 mt-0.5 font-medium">
              Mahasiswa Happy{" "}
              <span className="text-slate-400 text-[10px]">(3%-nya lagi skripsi 📑)</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={cardRef} className="relative z-10 -mt-32 px-6 will-change-transform">
        <div className="max-w-7xl mx-auto">
          <main className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-[slideLeft_.5s_ease]">
              <AuthImage />
            </div>
            <div className="animate-[slideRight_.5s_ease]">
              <RegisterForm />
            </div>
          </main>
          {/* Trust bar */}
          <div className="flex justify-center gap-6 mt-16">
            {[
              { icon: <Lock size={13} />, label: "SSL Secured" },
              { icon: <Building size={13} />, label: "Terakreditasi A" },
              { icon: <Award size={13} />, label: "Kampus Terbaik 2024" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="text-blue-900">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
