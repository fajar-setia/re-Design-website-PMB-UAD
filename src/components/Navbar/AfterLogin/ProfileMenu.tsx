import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function ProfileMenu() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="relative group">
      {/* AVATAR */}
      <div
        className="
          w-10 h-10
          rounded-full
          bg-white/20
          flex items-center justify-center
          font-bold
          cursor-pointer
        "
      >
        A
      </div>

      {/* DROPDOWN */}
      <div
        className="
          absolute right-0 mt-2
          w-44
          z-70
          bg-white
          shadow-lg
          rounded-lg
          overflow-hidden

          opacity-0 invisible
          group-hover:opacity-100 group-hover:visible
          transition-all
        "
      >
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full text-gray-800 text-left px-4 py-2 hover:bg-gray-200"
        >
          Data Pendaftaran
        </button>

        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}