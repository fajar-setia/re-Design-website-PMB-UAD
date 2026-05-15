import {
  Globe,
  Share2,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
  CircleHelp,
  Shield,
} from "lucide-react";

import LogoUad from "../assets/LogoUAD.png"

export default function Footer() {
  const campuses = [
    "Jln. Kapas 9, Semaki, Yogyakarta",
    "Jln. Pramuka 42, Sidikan, Yogyakarta",
    "Jln. Prof. Dr. Soepomo, S.H., Janturan, Yogyakarta",
    "Jln. Ahmad Yani, Tamanan, Bantul, Yogyakarta",
    "Jln. Ki Ageng Pemanahan 19, Yogyakarta",
    "Jln. Ringroad Selatan, Yogyakarta",
  ];

  const socialMedia = [
    {
      name: "Instagram",
      url : "https://www.instagram.com/@pmb_uad",
    },
    {
      name: "WhatsApp",
      url : "https://linktr.ee/pmb_uad"
    },
    {
      name: "TikTok",
      url : "https://www.tiktok.com/@pmb_uad"
    },
  ];

  return (
    <footer className="bg-blue-800 text-white">

      {/* ── MAIN ── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Brand — 3 col */}
          <div className="md:col-span-3 space-y-4">
            {/* Logo pill */}
            <div className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-xs shrink-0">
                <img src={LogoUad} alt="Logo UAD" />
              </div>
              <span className="font-bold text-white text-sm leading-tight">
                Universitas<br />Ahmad Dahlan
              </span>
            </div>

            <p className="text-blue-200 text-xs leading-relaxed">
              PMB UAD menyediakan layanan informasi dan pendaftaran bagi
              calon mahasiswa baru di semua jenjang pendidikan.
            </p>

            {/* Socials */}
            <div className="flex gap-2 pt-1">
              {[Globe, Share2, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-blue-700 hover:bg-yellow-400 hover:text-blue-900 flex items-center justify-center text-blue-200 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Divider vertical — hidden mobile */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-full w-px bg-blue-700 mx-auto" />
          </div>

          {/* Campuses — 5 col */}
          <div className="md:col-span-5">
            <p className="text-yellow-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Lokasi Kampus
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {campuses.map((campus, i) => (
                <div key={i} className="flex items-start gap-2">
                  <MapPin size={12} className="text-yellow-400 mt-0.5 shrink-0" />
                  <p className="text-blue-200 text-xs leading-relaxed">
                    <span className="text-white font-semibold">Kampus {i + 1}: </span>
                    {campus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider vertical */}
          <div className="hidden md:block md:col-span-1">
            <div className="h-full w-px bg-blue-700 mx-auto" />
          </div>

          {/* Contact — 2 col */}
          <div className="md:col-span-2">
            <p className="text-yellow-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Kontak
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Phone, label: "0800-1-234-56", href: "tel:080012345" },
                { icon: Mail, label: "pmb@uad.ac.id", href: "mailto:pmb@uad.ac.id" },
                { icon: CircleHelp, label: "Admission Info", href: "#" },
                { icon: Shield, label: "Privacy Policy", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2.5 text-blue-200 hover:text-yellow-400 transition-colors group"
                >
                  <Icon size={14} className="shrink-0" />
                  <span className="text-xs">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-blue-700">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-xs">
            © 2026 Universitas Ahmad Dahlan.
          </p>
          <div className="flex gap-5">
            {socialMedia.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="text-blue-300 hover:text-yellow-400 text-xs transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}