import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";

const SCROLL_DELTA_THRESHOLD = 5;
const SCROLL_TOP_OFFSET = 0;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const topNavRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const accumulatedDelta = useRef(0);
  const isHidden = useRef(false); // track state tanpa re-render

  useEffect(() => {
    const hide = () => {
      if (isHidden.current) return; // sudah hidden, skip
      const el = topNavRef.current;
      if (!el) return;
      el.style.height = "0px";
      el.style.opacity = "0";
      el.style.transform = "translateY(-20px)";
      isHidden.current = true;
    };

    const show = () => {
      if (!isHidden.current) return; // sudah visible, skip
      const el = topNavRef.current;
      if (!el) return;
      el.style.height = "96px";
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
      isHidden.current = false;
    };

    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - lastScrollY.current;
        accumulatedDelta.current += delta;

        if (
          accumulatedDelta.current > SCROLL_DELTA_THRESHOLD &&
          currentScrollY > SCROLL_TOP_OFFSET
        ) {
          hide();
          accumulatedDelta.current = 0;
        } else if (accumulatedDelta.current < -SCROLL_DELTA_THRESHOLD) {
          show();
          accumulatedDelta.current = 0;
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Registration", to: "#" },
    { label: "Admission", to: "#" },
    { label: "Faculty", to: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full">

        {/*
          ── TOP NAV ──
          Pakai scaleY transform (GPU-only, zero layout recalculation)
          bukan max-height (CPU, trigger reflow setiap frame → jitter)
        */}
        <div
            ref={topNavRef}
            style={{
              height: "96px",
              opacity: 1,
              overflow: "hidden",
              transition:
                "height 0.35s ease, opacity 0.35s ease, transform 0.35s ease",
              willChange: "height, opacity, transform",
            }}
            className="bg-blue-900 text-white"
          >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-blue-900 font-bold text-base sm:text-xl shrink-0">
                UAD
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-bold leading-tight">
                  Penerimaan Mahasiswa Baru
                </h1>
                <p className="text-xs sm:text-sm text-blue-200">
                  Universitas Ahmad Dahlan
                </p>
              </div>
            </div>
            <div className="hidden md:flex gap-6 text-sm text-blue-100">
              <a href="#" className="hover:text-white transition-colors">PMB Guide</a>
              <a href="#" className="hover:text-white transition-colors">Scholarship</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* ── BOTTOM NAV ── */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto h-14 sm:h-16 px-6 sm:px-8 flex items-center justify-between">
            <div className="flex items-center gap-8 lg:gap-10">
              <Link to="/" className="text-lg sm:text-xl font-bold text-blue-900 tracking-tight">
                PMB UAD
              </Link>
              <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="px-3 py-1.5 rounded-md hover:text-blue-900 hover:bg-blue-50 transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="hidden md:inline-flex items-center bg-blue-900 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-800 active:scale-95 transition-all duration-150"
              >
                Login
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Buka menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* ── MOBILE BACKDROP ── */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden
          transition-opacity duration-300
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`
          fixed top-0 right-0 z-[70] h-full w-72 bg-white shadow-2xl md:hidden
          flex flex-col transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
              UAD
            </div>
            <span className="font-bold text-blue-900 text-base">PMB UAD</span>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors"
            aria-label="Tutup menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-900 transition-all group"
            >
              {link.label}
              <ChevronRight size={16} className="text-slate-300 group-hover:text-blue-400 transition-colors" />
            </Link>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-slate-100 space-y-3">
          <div className="flex flex-col gap-2 text-sm text-slate-500">
            <a href="#" className="hover:text-blue-900 transition-colors">PMB Guide</a>
            <a href="#" className="hover:text-blue-900 transition-colors">Scholarship</a>
            <a href="#" className="hover:text-blue-900 transition-colors">Contact</a>
          </div>
          <Link
            to="/login"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-blue-900 text-white font-semibold py-3 rounded-xl hover:bg-blue-800 active:scale-95 transition-all"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}