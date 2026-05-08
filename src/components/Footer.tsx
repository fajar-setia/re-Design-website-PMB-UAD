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

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto">
      {/* Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16 px-8 max-w-7xl mx-auto text-sm leading-relaxed">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="text-lg font-bold text-blue-900 dark:text-white">
            Universitas Ahmad Dahlan
          </div>

          <p className="text-slate-500 dark:text-slate-400">
            Penerimaan Mahasiswa Baru (PMB) menyediakan layanan informasi
            dan pendaftaran bagi calon mahasiswa baru UAD di semua jenjang
            pendidikan.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <Globe size={20} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <Share2 size={20} />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-blue-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Campus */}
        <div className="col-span-1 md:col-span-2">
          <div className="text-blue-900 dark:text-blue-400 font-bold mb-6 text-sm uppercase tracking-wider">
            Campus 1-6 Locations
          </div>

          <div className="space-y-3">
            {[
              "Jln. Kapas 9, Semaki, Yogyakarta",
              "Jln. Pramuka 42, Sidikan, Yogyakarta",
              "Jln. Prof. Dr. Soepomo, S.H., Janturan, Yogyakarta",
              "Jln. Ahmad Yani, Tamanan, Bantul, Yogyakarta",
              "Jln. Ki Ageng Pemanahan 19, Yogyakarta",
              "Jln. Ringroad Selatan, Yogyakarta",
            ].map((campus, index) => (
              <div
                key={index}
                className="flex items-start space-x-2"
              >
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1 shrink-0"
                />

                <p className="text-slate-500 dark:text-slate-400">
                  <span className="font-bold text-slate-800 dark:text-white">
                    Kampus {index + 1}:
                  </span>{" "}
                  {campus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <div className="text-blue-900 dark:text-blue-400 font-bold mb-6 text-sm uppercase tracking-wider">
            Contact Support
          </div>

          <div className="space-y-3">
            <a
              href="tel:0800123456"
              className="flex items-center space-x-3 text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              <Phone size={18} />
              <span>0800-1-234-56</span>
            </a>

            <a
              href="mailto:pmb@uad.ac.id"
              className="flex items-center space-x-3 text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={18} />
              <span>pmb@uad.ac.id</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              <CircleHelp size={18} />
              <span>Admission Info</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              <Shield size={18} />
              <span>Privacy Policy</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            © 2024 Universitas Ahmad Dahlan. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              Facebook
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              Twitter (X)
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 hover:text-blue-900 dark:hover:text-blue-400 transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}