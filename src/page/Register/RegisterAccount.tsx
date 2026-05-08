import ContentLogin from "../../assets/content/contentLogin.png";

export default function RegisterAccount() {
  return (
    <main className="flex-grow flex items-center justify-center py-10 px-4">
      
      <div
        className="
          max-w-7xl w-full
          grid grid-cols-1 lg:grid-cols-2
          gap-10
          items-center
        "
      >

        {/* LEFT */}
        <div className="w-full flex justify-center">

          <div
            className="
              relative
              w-full
              max-w-xl
              h-[600px]

              rounded-2xl
              overflow-hidden

              shadow-2xl
            "
          >

            <img
              src={ContentLogin}
              alt="Campus"
              className="
                absolute inset-0
                w-full h-full
                object-cover
              "
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/30" /> */}

            {/* Text */}
            {/* <div className="absolute bottom-10 left-10 text-white">
              
              <h2 className="text-3xl font-bold mb-3">
                Wujudkan Masa Depan
              </h2>

              <p className="text-white/80 max-w-sm leading-relaxed">
                Bergabung bersama Universitas Ahmad Dahlan
                dan raih pendidikan terbaik untuk masa depanmu.
              </p>

            </div> */}
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full flex justify-center">
          
          <div
            className="
              w-full
              max-w-xl
              min-h-[600px]

              bg-white
              rounded-2xl
              shadow-xl

              p-10

              flex flex-col
              justify-center
            "
          >

            {/* HEADER */}
            <div className="mb-8 bg-blue-200/60 p-4 rounded-l">
              
              <h1 className="text-xl font-bold text-blue-900 mb-3 text-center">
                Selamat Datang,
                
                Dahlan Muda 👋
              </h1>

              <p className="text-black text-sm leading-relaxed">
                Silakan masuk ke akun pendaftaran Anda
                untuk melanjutkan proses PMB.
              </p>
            </div>

            {/* FORM */}
            <form className="space-y-5">

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="nama@email.com"
                  className="
                    w-full
                    h-12
                    px-4

                    border border-slate-300
                    rounded-xl

                    outline-none

                    focus:ring-2
                    focus:ring-blue-200
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="
                    w-full
                    h-12
                    px-4

                    border border-slate-300
                    rounded-xl

                    outline-none

                    focus:ring-2
                    focus:ring-blue-200
                    focus:border-blue-500
                  "
                />
              </div>

              {/* OPTIONS */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" />
                  Remember Me
                </label>

                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>

              {/* BUTTON */}
              <button
                className="
                  w-full
                  h-12

                  bg-blue-900
                  text-white
                  font-semibold

                  rounded-xl

                  hover:bg-blue-800
                  transition-colors
                "
              >
                LOGIN
              </button>

            </form>

            {/* FOOTER */}
            <p className="mt-8 text-sm text-center text-slate-500">
              Belum punya akun?{" "}

              <a
                href="#"
                className="text-yellow-500 font-bold hover:text-yellow-600"
              >
                DAFTAR
              </a>
            </p>

          </div>
        </div>

        

      </div>
    </main>
  );
}