import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

type BottomNavbarProps = {
  onOpenMobile: () => void;
};

export default function BottomNavbar({
  onOpenMobile,
}: BottomNavbarProps) {
  const navLinks = [
    {
      label: "Home",
      to: "/Dashboard",
    },
    {
      label: "Pendaftaran",
      to: "/pendaftaran",
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
          px-6 sm:px-8
          grid grid-cols-3
          items-center
        "
      >
        {/* LEFT */}
        <div className="flex items-center">
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
            items-center justify-center
          "
        >
          <div
            className="
              flex items-center
              p-1.5
            "
          >
            {navLinks.map((link) => {
              const isHome =
                link.to === "/" &&
                (location.pathname === "/" ||
                  location.pathname === "/register");

              const isUploadBerkasActive =
                link.label === "Upload Berkas" &&
                location.pathname === "/getin";

              return (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/" ? true : false}
                  className={({ isActive }) => `
                    relative
                    min-w-[170px]
                    text-center
                    px-5 py-2.5
                    rounded-xl
                    text-sm font-semibold
                    transition-all
                    duration-200

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
        <div className="flex items-center justify-end gap-3">
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