import { Link, useLocation, useNavigate } from "react-router-dom";
import { X, ChevronRight, Home, FileText, GraduationCap, Users } from "lucide-react";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", to: "/", icon: <Home size={18} /> },
    { label: "Pendaftaran", to: "/pendaftaran", icon: <FileText size={18} /> },
    { label: "Jalur Masuk", to: "/getin", icon: <GraduationCap size={18} /> },
    { label: "Informasi PMB", to: "http://pmb.uad.ac.id/", icon: <Users size={18} /> },
  ];

  return (
    <>
      {/* Backdrop dengan Blur Modern */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer Container */}
      <div
        className={`
          fixed top-0 right-0 z-[70]
          h-full w-[280px] bg-slate-50 flex flex-col shadow-2xl
          transition-transform duration-300 ease-[cubic-bezier(0.32,0.94,0.6,1)]
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header Bagian Atas */}
        <div className="flex justify-between items-center p-5 bg-white border-b border-slate-100 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-900 text-amber-400 p-1.5 rounded-lg shadow-inner">
              {/* Ikon Toga Mini khas PMB */}
              <GraduationCap size={20} />
            </div>
            <div>
              <h2 className="font-extrabold text-blue-900 tracking-tight leading-none text-base">
                PMB UAD
              </h2>
              <span className="text-[10px] text-slate-400 font-medium">Online Admission</span>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Navigasi (Tengah) */}
        <nav className="p-4 space-y-1.5 flex-1 overflow-y-auto bg-white">
          <p className="px-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
            Menu Utama
          </p>
          
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose}
                className={`
                  flex items-center justify-between
                  px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-200 group
                  ${isActive 
                    ? "bg-blue-50 text-blue-900 font-semibold" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? "text-blue-900" : "text-slate-400 group-hover:text-slate-600"}>
                    {link.icon}
                  </span>
                  {link.label}
                </div>

                <ChevronRight 
                  size={14} 
                  className={`transition-transform duration-200 text-slate-400 group-hover:translate-x-0.5 ${isActive ? "text-blue-900" : ""}`} 
                />
              </Link>
            );
          })}
        </nav>

        {/* Bagian Bawah (Footer Drawer / Tombol CTA) */}
        <div className="p-4 bg-slate-50 border-t border-slate-200/60 space-y-2">
          <button 
            onClick={() => {
              onClose();
              navigate("/");
            }}
            className="w-full bg-white border border-slate-200 hover:bg-slate-100 text-blue-900 font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-sm tracking-wide"
          >
            Login
          </button>
          <Link 
            to="/register"
            onClick={() => {
              onClose();
              navigate("/register");
            }}
            className="block w-full text-center bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md shadow-amber-500/10 tracking-wide"
          >
            Daftar Akun
          </Link>
          
          <div className="pt-2 text-center">
            <p className="text-[10px] text-slate-400">© 2026 Universitas Ahmad Dahlan</p>
          </div>
        </div>
      </div>
    </>
  );
}