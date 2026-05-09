import { Link } from "react-router-dom";

export default function RegisterForm() {
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
        {/* HEADER */}

        <div className="mb-8 bg-blue-200/60 p-4 rounded-xl">
          <h1 className="text-xl font-bold text-blue-900 mb-3 text-center">Buat Akun Baru 🚀</h1>

          <p className="text-black text-sm leading-relaxed text-center">
            Daftarkan akun baru untuk memulai proses PMB.
          </p>
        </div>

        {/* FORM */}

        <form className="space-y-5 ">
          <div>
            <label className="block mb-2 text-sm font-medium">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="
              w-full h-12 px-4
              border border-slate-300
              rounded-xl
            "
            />

            <label className="block mb-2 mt-4 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="
              w-full h-12 px-4
              border border-slate-300
              rounded-xl
            "
            />

            <label className="block mb-2 mt-4 text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="
              w-full h-12 px-4
              border border-slate-300
              rounded-xl
            "
            />

            <label className="block mb-2 mt-4 text-sm font-medium">Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="
              w-full h-12 px-4
              border border-slate-300
              rounded-xl
            "
            />

            <button
              className="
              w-full h-12
              bg-blue-900
              text-white
              font-semibold
              rounded-xl
              mxt-6 mt-6
            "
            >
              DAFTAR
            </button>
          </div>
        </form>

        <p className="mt-8 text-sm text-center text-slate-500">
          Sudah punya akun?{" "}
          <Link
            to="/"
            className="
              text-yellow-500
              font-bold
            "
          >
            LOGIN
          </Link>
        </p>
      </div>
    </div>
  );
}
