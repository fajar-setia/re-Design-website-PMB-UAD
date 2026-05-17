import { Link, useLocation } from "react-router-dom";
import {
  X,
  ChevronRight,
  Home,
  FileText,
  Upload,
  BriefcaseBusiness,
  Megaphone,
  GraduationCap,
} from "lucide-react";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({
  open,
  onClose,
}: MobileDrawerProps) {
  const location = useLocation();

  const navLinks = [
    {
      label: "Home",
      to: "/dashboard",
      icon: <Home size={18} />,
    },
    {
      label: "Pendaftaran",
      to: "/pendaftaran",
      icon: <FileText size={18} />,
    },
    {
      label: "Upload Berkas",
      to: "/upload",
      icon: <Upload size={18} />,
    },
    {
      label: "MBKM",
      to: "/mbkm",
      icon: <BriefcaseBusiness size={18} />,
    },
    {
      label: "Hasil Seleksi",
      to: "/result",
      icon: <Megaphone size={18} />,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${
            open
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-[70]
          h-full w-[280px]
          bg-slate-50 flex flex-col shadow-2xl
          transition-transform duration-300
          ease-[cubic-bezier(0.32,0.94,0.6,1)]
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-white border-b border-slate-100 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-900 text-amber-400 p-1.5 rounded-lg shadow-inner">
              <GraduationCap size={20} />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-blue-900 tracking-tight leading-none">
                PMB UAD
              </h2>

              <span className="text-[10px] text-slate-400 font-medium">
                Online Admission
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="
              p-1.5 rounded-full
              text-slate-400
              hover:text-slate-600
              hover:bg-slate-100
              transition-colors
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto bg-white p-4 space-y-1.5">
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
                  px-3.5 py-3 rounded-xl
                  text-sm font-medium
                  transition-all duration-200
                  group
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-900 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={
                      isActive
                        ? "text-blue-900"
                        : "text-slate-400 group-hover:text-slate-600"
                    }
                  >
                    {link.icon}
                  </span>

                  {link.label}
                </div>

                <ChevronRight
                  size={14}
                  className={`
                    transition-transform duration-200
                    group-hover:translate-x-0.5
                    ${
                      isActive
                        ? "text-blue-900"
                        : "text-slate-400"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>
        
      </div>
    </>
  );
}