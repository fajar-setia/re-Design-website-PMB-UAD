export default function Home() {
  return (
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            <div className="w-full max-w-md bg-surface-container-lowest p-10 rounded-xl shadow border border-outline-variant/30">
              
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-primary mb-2">
                  Selamat datang, Dahlan Muda!
                </h1>
                <p className="text-gray-500">
                  Silakan masuk ke akun pendaftaran Anda.
                </p>
              </div>

              <form className="space-y-6">
                <input
                  type="email"
                  placeholder="nama@email.com"
                  className="w-full p-3 border rounded-lg"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full p-3 border rounded-lg"
                />

                <div className="flex justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember Me
                  </label>
                  <a href="#" className="text-blue-600">Forgot?</a>
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-lg">
                  LOGIN
                </button>
              </form>

              <p className="mt-6 text-sm text-center">
                Belum punya akun?{" "}
                <a className="text-yellow-500 font-bold" href="#">
                  DAFTAR
                </a>
              </p>

            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:block relative">
            <div className="relative h-[600px] w-full rounded-xl overflow-hidden shadow-2xl">
              
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnTkuPf_SBX_8IfJ2bhMi2oJoHhNu0yuOZhILucyspy4iCUh_WgNQkI-0BKadGPOI5YdFC73xoOKv_85o2o7bkU7ZOnhZxeVfzJLtC9MJCFYmtN9COPdgKdcmb4kA0OYnoTl-MP2E9OsjpxtqvGK--KL-xKzUwL6PJZd2DjT9t5fJW3u2RLVlGjz_ZPV1BuCHRNIuvN6Bh_Tx1r9h_rw4-WQfdDYLzvCyb1zp4ggaPdBMQEX2MRNksAnM0nDQBPHeto2rymliQ4lKq"
                alt="campus"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <div className="absolute bottom-12 left-12 text-white">
                <h2 className="text-3xl font-bold mb-2">
                  Wujudkan Masa Depan Cemerlang
                </h2>
                <p className="text-white/80 max-w-md">
                  Bergabunglah dengan komunitas akademik terbaik.
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
  );
}