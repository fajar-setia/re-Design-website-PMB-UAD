import { Link } from "react-router-dom";
import { X, ChevronRight } from "lucide-react";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({
  open,
  onClose,
}: MobileDrawerProps) {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Registration", to: "#" },
    { label: "Admission", to: "#" },
    { label: "Faculty", to: "#" },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-[60] bg-black/40
          transition-opacity duration-300
          md:hidden
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
          h-full w-72 bg-white
          transition-transform duration-300
          md:hidden
          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-blue-900">
            PMB UAD
          </h2>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={onClose}
              className="
                flex items-center justify-between
                px-4 py-3 rounded-lg
                hover:bg-blue-50
              "
            >
              {link.label}

              <ChevronRight size={16} />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}