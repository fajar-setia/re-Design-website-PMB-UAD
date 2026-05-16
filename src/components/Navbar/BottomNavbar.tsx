import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

type BottomNavbarProps = {
  onOpenMobile: () => void;
};

export default function BottomNavbar({ onOpenMobile }: BottomNavbarProps) {
  const navLinks = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Pendaftaran",
      to: "/pendaftaran",
    },
    {
      label: "Jalur Masuk",
      to: "/GetIn",
    },
    {
      label: "Informasi PMB",
      to: "http://pmb.uad.ac.id/",
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
          flex justify-between md:grid md:grid-cols-3
          items-center
          gap-2
        "
      >
        {/* LEFT */}
        <div className="flex items-center min-w-0">
          <Link
            to="/"
            className="
              text-lg sm:text-xl font-extrabold
              tracking-tight
              text-blue-800
              whitespace-nowrap
              truncate
            "
          >
            PMB UAD
          </Link>
        </div>

        {/* CENTER MENU */}
        <div
          className="
            hidden md:flex
            items-center justify-center
          "
        >
          <div
            className="
              flex items-center
              gap-0 md:gap-0.5 lg:gap-1
              p-1
            "
          >
            {navLinks.map((link) => {
              const isHome =
                link.to === "/" && (location.pathname === "/" || location.pathname === "/register");

              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/" ? true : false}
                  className={({ isActive }) => `
                    relative
                    min-w-0
                    text-center
                    px-2 py-2 md:px-2.5 lg:px-4
                    rounded-xl
                    text-xs md:text-xs lg:text-sm font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-200

                    ${
                      isActive || isHome
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
        <div className="flex items-center justify-end gap-1 lg:gap-2 flex-shrink-0">
          {/* LOGIN */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => `
              hidden md:inline-flex
              items-center justify-center
              h-9 px-2.5 lg:px-4
              rounded-xl
              text-xs lg:text-sm font-semibold
              transition-all duration-200

              ${
                isActive && location.pathname !== "/register"
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
            Login
          </NavLink>

          {/* REGISTER */}
          <NavLink
            to="/register"
            className={({ isActive }) => `
              hidden md:inline-flex
              items-center justify-center
              h-9 px-2.5 lg:px-4
              rounded-xl
              text-xs lg:text-sm font-semibold
              transition-all duration-200

              ${
                isActive
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
            Daftar
          </NavLink>

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
              touch-manipulation
            "
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}