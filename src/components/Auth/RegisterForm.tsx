import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { addUser, userExists } from "../../utils/auth";

export default function RegisterForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
    <div className="flex items-center justify-center overflow-hidden">
      <div
        className="
          w-full
          max-w-7xl
          bg-white
          rounded-2xl
          shadow-xl
          p-10
          flex flex-col
          justify-center
        "
      >
        <div className="mb-8 bg-blue-200/60 p-4 rounded-xl">
          <h1 className="text-xl font-bold text-blue-900 mb-3 text-center">Buat Akun Baru 🚀</h1>
          <p className="text-black text-sm leading-relaxed text-center">
            Daftarkan akun baru untuk memulai proses PMB.
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
        >
          <div>
            <label className="block mb-2 text-sm font-medium">Nama Lengkap</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Lengkap"
              className="w-full h-12 px-4 border border-slate-300 rounded-xl"
            />

            <label className="block mb-2 mt-4 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full h-12 px-4 border border-slate-300 rounded-xl"
            />

            <label className="block mb-2 mt-4 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full h-12 px-4 border border-slate-300 rounded-xl"
            />

            <label className="block mb-2 mt-4 text-sm font-medium">Konfirmasi Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Konfirmasi Password"
              className="w-full h-12 px-4 border border-slate-300 rounded-xl"
            />

            <button
              type="submit"
              className="w-full h-12 bg-blue-900 text-white font-semibold rounded-xl mt-6"
            >
              DAFTAR
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-center text-slate-500">
          Sudah punya akun?{" "}
          <Link to="/" className="text-yellow-500 font-bold">
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
