export default function PendaftaranProgram() {
  return (
    <div className="max-w-7xl mx-auto p-6 sm:p-8">
      <h1 className="text-2xl font-bold text-blue-900 mb-6">
        Pendaftaran Program
      </h1>

      <p className="text-gray-700 mb-4">
        Halaman ini akan menampilkan informasi tentang program pendaftaran yang tersedia, termasuk jalur masuk, persyaratan, dan jadwal pendaftaran.
      </p>

      <p className="text-gray-700 mb-4">
        Silakan pilih program pendaftaran yang Anda minati untuk melihat detailnya.
      </p>

      {/* Contoh daftar program pendaftaran */}
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Jalur Reguler
          </a>
          : Jalur masuk reguler untuk semua jurusan dengan persyaratan umum.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Jalur Prestasi
          </a>
          : Jalur masuk khusus untuk calon mahasiswa dengan prestasi akademik atau non-akademik yang menonjol.
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Jalur Beasiswa
          </a>
          : Jalur masuk dengan beasiswa untuk calon mahasiswa yang memenuhi kriteria tertentu.
        </li>
      </ul>
    </div>  
  );
}