import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { findUser } from "../../utils/auth";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = findUser(email, password);
    if (!user) {
      toast.error("Email dan password salah");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    login();
    toast.success(`Selamat datang, ${user.name}!`);
    navigate("/dashboard");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center">
        {/* Welcome banner */}
        <div className="mb-6 bg-blue-50 border-l-4 border-blue-900 rounded-xl px-4 py-3">
          <h1 className="text-base font-semibold text-blue-900 mb-1">
            Halo, Calon Mahasiswa Sukses! 👋
          </h1>
          <p className="text-slate-500 text-xs leading-relaxed">
            Silakan login untuk melanjutkan masa depanmu. Ingat, kuota kampus kami terbatas, tidak
            seperti harapan palsu dari si dia yang tanpa batas. Yuk, gerak cepat!
          </p>
        </div>

        {/* informasi gelombang */}
        <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
          <div className="text-center border-r border-slate-200">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
              Gelombang Saat Ini
            </span>
            <span className="text-xs font-bold text-blue-900">Gelombang II (Reguler)</span>
          </div>
          <div className="text-center">
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
              Penutupan Sesi
            </span>
            <span className="text-xs font-bold text-amber-600">30 Juni 2026</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-1.5 text-xs font-medium text-slate-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-11 px-4 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900"
              placeholder="email@email.com"
            />
          </div>

          <div>
            <label className="block mb-1.5 text-xs font-medium text-slate-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 pr-12 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <button
              type="button"
              className="text-xs text-amber-500 hover:text-amber-600 font-medium"
            >
              Lupa password?
            </button>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full h-11 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm rounded-xl transition-colors"
          >
            MASUK
          </button>
        </form>

        <p className="mt-5 text-xs text-center text-slate-500">
          Belum punya akun?{" "}
          <Link to="/register" className="text-amber-500 font-bold hover:text-amber-600">
            DAFTAR SEKARANG
          </Link>
        </p>
      </div>
    </div>
  );
}
