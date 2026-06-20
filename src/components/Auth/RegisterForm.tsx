import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";
import { addUser, userExists } from "../../utils/auth";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [showConfPassword, setConfShowPassword] = useState(false);

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error("Semua field harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Password tidak cocok");
      return;
    }

    if (userExists(email)) {
      toast.error("Email sudah terdaftar");
      return;
    }

    const user = { name, email, password };
    addUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    login();

    toast.success(`Akun berhasil dibuat, selamat datang ${name}!`);
    navigate("/dashboard");
  };

  return (
    <div className="w-full flex justify-center">
      <div
        className="
          w-full
          max-w-xl
          bg-white
          rounded-2xl
          shadow-xl
          p-10
          flex flex-col
          justify-center
        "
      >
        <div className="mb-8 bg-blue-200/60 border-l-4 border-blue-900 px-4 py-3 rounded-xl">
          <h1 className="text-base font-semibold text-blue-900 mb-1">Buat Akun Baru 🚀</h1>
          <p className="text-slate-500 text-xs leading-relaxed">
            Selangkah lagi menuju status <strong>"Anak Kuliahan"</strong>! Yuk, isi data dirimu sebentar buat bikin akun. Tenang, prosesnya nggak bakal selama nungguin balesan <em>chat</em> dia kok.
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

        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <div>
            <label className="block mb-2 text-xs font-medium text-slate-600">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
              className="w-full h-11 px-4 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900"
            />

            <label className="block mb-1.5 text-xs font-medium text-slate-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@email.com"
              className="w-full h-11 px-4 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900"
            />

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

            <div>
            <label className="block mb-1.5 text-xs font-medium text-slate-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-11 px-4 pr-12 border border-slate-200 rounded-xl bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/30 focus:border-blue-900"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setConfShowPassword(!showConfPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                {showConfPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          </div>
        </form>

        <p className="mt-8 text-xs text-center text-slate-500">
          Sudah punya akun?{" "}
          <Link to="/" className="text-yellow-500 font-bold">
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
