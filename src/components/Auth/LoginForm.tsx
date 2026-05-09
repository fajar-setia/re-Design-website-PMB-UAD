import { Link, useNavigate } from "react-router-dom";
import { dummyUsers } from "../../data/dummyUsers";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const user = dummyUsers.find((u) => u.email === email && u.password === password);

    if (!user) {
      toast.error("Email atau password salah");
      return;
    }

    // simpan user
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", "true");

    // penting: update global state
    login();

    toast.success(`Selamat datang, ${user.name}!`);

   
    navigate("/dashboard");
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-xl min-h-[600px] bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center">
        <div className="mb-8 bg-blue-200/60 p-4 rounded-xl">
          <h1 className="text-xl font-bold text-blue-900 mb-3 text-center">Selamat Datang 👋</h1>
          <p className="text-black text-sm text-center">
            Silakan masuk untuk melanjutkan proses PMB.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 border 
              border-slate-300
              rounded-xl"
              placeholder="email@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Password</label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 pr-12 border border-slate-300 rounded-xl"
                placeholder="••••••••"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full h-12 bg-blue-900 text-white font-semibold rounded-xl"
          >
            LOGIN
          </button>
        </form>

        <p className="mt-8 text-sm text-center">
          Belum punya akun?{" "}
          <Link to="/register" className="text-yellow-500 font-bold">
            DAFTAR
          </Link>
        </p>
      </div>
    </div>
  );
}
