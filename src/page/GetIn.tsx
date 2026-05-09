export default function GetIn() {
  return (
    <main className="flex-grow flex items-center justify-center py-10 px-4 overflow-hidden">
      <div
        className="
          max-w-7xl
          w-full

          grid
          grid-cols-1
          lg:grid-cols-2

          gap-10
          items-center
        "
      >
        <div className="animate-[slideLeft_.5s_ease]">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Jalur Masuk PMB UAD
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Temukan berbagai jalur masuk yang tersedia untuk bergabung dengan Universitas Ahmad Dahlan. Pilih jalur yang sesuai dengan kebutuhan dan persyaratan Anda.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>  Jalur Reguler: Jalur masuk reguler untuk semua jurusan dengan persyaratan umum.</li>
            <li>  Jalur Prestasi: Jalur masuk khusus untuk calon mahasiswa dengan prestasi akademik atau non-akademik yang menonjol.</li>
            <li>  Jalur Beasiswa: Jalur masuk dengan beasiswa untuk calon mahasiswa yang memenuhi kriteria tertentu.</li>
          </ul>
        </div>

        <div className="animate-[slideRight_.5s_ease]">
          <img
            src="https://source.unsplash.com/featured/?university,students"
            alt="Jalur Masuk"
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}