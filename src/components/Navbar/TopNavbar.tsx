// import LogoWebp from "../../assets/LogoUAD.webp";
import LogoPng from "../../assets/LogoUAD.png";
export default function TopNavbar() {
  return (
    <div className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 sm:h-18 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <div className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold">
            <img src={LogoWebp} alt="Logo UAD" />
          </div> */}

          <div className="w-12 h-12 rounded-full bg-white text-blue-900 flex items-center justify-center font-bold">
            <img
              src={LogoPng}
              alt="Logo UAD"
              className="w-full h-full object-contain"
              // width={48}
              // height={48}
              // fetchPriority="high"
            />
          </div>

          <div>
            <h1 className="font-bold text-lg">Penerimaan Mahasiswa Baru</h1>

            <p className="text-sm text-blue-200">Universitas Ahmad Dahlan</p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-sm text-blue-100">
          <a href="#">PMB Guide</a>
          <a href="#">Scholarship</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}
