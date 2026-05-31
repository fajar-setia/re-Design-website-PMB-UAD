import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";

type BottomNavbarProps = {
  onOpenMobile: () => void;
};

export default function BottomNavbar({ onOpenMobile }: BottomNavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  type NavItem = {
    label: string;
    to: string;
    options?: {
      label: string;
      to: string;
    }[];
  };
  const navLinks: NavItem[] = [
    {
      label: "Home",
      to: "/Dashboard",
    },
    {
      label: "Pendaftaran",
      to: "/pendaftaran",
    },
    {
      label: "Layanan",
      to: "#",
      options: [
        { label: "Layanan Maba", to: "/layanan-maba" },
        { label: "Layanan MBKM", to: "/layanan-mbkm" },
        { label: "Layanan Alumni", to: "/layanan-alumni" },
      ],
    },
    {
      label: "Upload Berkas",
      to: "/Upload",
    },
    {
      label: "MBKM",
      to: "/mbkm",
    },
    {
      label: "Hasil Seleksi",
      to: "/Result",
    },
  ];

  const location = useLocation();

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/80
        backdrop-blur-xl
        border-b border-slate-200/80
        shadow-sm
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          h-16
          px-4 sm:px-6 lg:px-8
          relative
          flex items-center justify-between
        "
      >
        {/* LEFT */}
        <div className="flex items-center flex-shrink-0 z-10">
          <Link
            to="/dashboard"
            className="
              text-xl font-extrabold
              tracking-tight
              text-blue-800
              whitespace-nowrap
            "
          >
            PMB UAD
          </Link>
        </div>

        {/* CENTER MENU */}
        <div
          className="
            hidden md:flex
            absolute left-1/2 -translate-x-1/2
            items-center justify-center
          "
        >
          <div
            className="
              flex items-center
              gap-0
              p-1
            "
          >
            {navLinks.map((link) => {
              if (link.options) {
                const isOpen = openDropdown === link.label;
                const isLayananActive = link.options.some((item) => location.pathname === item.to);

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`
                      flex items-center gap-2
                      px-2 py-2 md:px-3 lg:px-5
                      rounded-xl
                      text-xs md:text-xs lg:text-sm
                      font-semibold
                      whitespace-nowrap
                      transition-all duration-500

                      ${
                        isLayananActive
                          ? `
                            bg-blue-800
                            text-white
                            shadow-md
                          `
                          : `
                            text-slate-600
                            hover:text-blue-900
                            hover:bg-white
                          `
                      }
                    `}
                    >
                      {link.label}

                      <ChevronDown
                        size={16}
                        className={`
                        transition-transform duration-300 ease-out
                        ${isOpen ? "rotate-180" : ""}
                        ${isLayananActive ? "text-white" : ""}
                      `}
                      />
                    </button>

                    <div
                      className={`
                      absolute left-0 top-full mt-2
                      min-w-[240px]
                      bg-white
                      border border-slate-200
                      rounded-2xl
                      shadow-xl
                      overflow-hidden
                      z-50

                      transition-all duration-300 ease-out origin-top

                      ${
                        isOpen
                          ? `
                            opacity-100
                            visible
                            translate-y-0
                            scale-100
                          `
                          : `
                            opacity-0
                            invisible
                            -translate-y-2
                            scale-95
                          `
                      }
                    `}
                    >
                      {link.options.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          className="
                          block
                          px-4 py-3
                          text-sm
                          text-slate-700

                          hover:bg-slate-50
                          hover:text-blue-800

                          transition-colors
                        "
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isHome =
                link.to === "/" && (location.pathname === "/" || location.pathname === "/register");

              const isUploadBerkasActive =
                link.label === "Upload Berkas" && location.pathname === "/getin";

              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) => `
                  relative
                  min-w-0
                  text-center

                  px-2 py-2 md:px-3 lg:px-5

                  rounded-xl
                  text-xs md:text-xs lg:text-sm
                  font-semibold
                  whitespace-nowrap

                  transition-all duration-200

                  ${
                    isActive || isHome || isUploadBerkasActive
                      ? `
                        bg-blue-800
                        text-white
                        shadow-md
                      `
                      : `
                        text-slate-600
                        hover:text-blue-900
                        hover:bg-white
                      `
                  }
                `}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-end flex-shrink-0 gap-3 z-10">
          {/* MOBILE BUTTON */}
          <button
            onClick={onOpenMobile}
            className="
              md:hidden
              p-2.5
              rounded-xl
              text-slate-700
              hover:bg-slate-100
              active:scale-95
              transition-all
            "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
